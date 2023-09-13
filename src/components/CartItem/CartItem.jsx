import PropTypes from "prop-types";
import "./CartItem.css";

const CartItem = ({ bottle }) => {
    const { img, name, price } = bottle;
  return (
    <div>
      <div className="item">
        <img src={img} alt="" />
        <div>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button className="btn-remove">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  bottle: PropTypes.object.isRequired,
};
