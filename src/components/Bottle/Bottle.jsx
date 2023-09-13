import PropTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle,handleAddCart }) => {
  const { img, name, price, seller } = bottle;

  return (
    <div className="bottle">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>Brand: {seller}</h4>
      <p>Price: {price}</p>
      <button onClick={() => handleAddCart(bottle)} className="btn">
        Add to Cart
      </button>
    </div>
  );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddCart: PropTypes.func,
};
export default Bottle;