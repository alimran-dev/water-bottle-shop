import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLs } from "../../utilities/addToLs";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
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


  const handleAddCart = (bottle) => {
    addToLs(bottle);
    setCart([...cart, bottle])
  };
  const handleRemoveCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    const lsCart = JSON.parse(localStorage.getItem('cart'));
    lsCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(lsCart));
  }
  return (
    <>
      <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
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
