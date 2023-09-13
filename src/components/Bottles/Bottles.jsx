import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLs } from "../../utilities/addToLs";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  console.log(bottles);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    let localCart = [];
    if (bottles.length) {
      const localId = JSON.parse(localStorage.getItem("cart"));
      if (localId) {
        for (const id of localId) {
          const bottle = bottles.find(bottle => bottle.id == id);
          localCart.push(bottle);
        }
      }
    }
    setCart(localCart);
  }, [bottles]);

  console.log(cart)

  const handleAddCart = (bottle) => {
    addToLs(bottle);
    setCart([...cart,bottle])
  };
  return (
    <>
      <Cart cart={cart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddCart={handleAddCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
