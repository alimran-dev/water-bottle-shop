import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = ({ cart, handleRemoveCart }) => {

    return (
        <div>
            <h3>Cart: {cart?.length || "0"}</h3>
            <div className="cart-container">
                {
                    cart.map((bottle,index) => <CartItem key={index} bottle={bottle} handleRemoveCart={handleRemoveCart} index={index}></CartItem>)
                }
            </div>
        </div>

  );
};

export default Cart;

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired,
}