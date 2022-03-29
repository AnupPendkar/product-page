import "./adjustQuantity.css";
import { useState, useContext } from "react";
import { Context } from "../../redux/Context";

function AdjustQuantity() {
  const [quan, setQuan] = useState(0);
  const { addQuan } = useContext(Context);

  const addToCart = () => {
    addQuan(quan);
  };

  return (
    <div className="bottom-container">
      <div className="adjust-quantity">
        <img
          src="images/icon-minus.svg"
          alt="subtract"
          className="sub"
          onClick={() => quan > 0 && setQuan(quan - 1)}
        />
        <p className="quantity">{quan}</p>
        <img
          src="images/icon-plus.svg"
          alt="add"
          className="add"
          onClick={() => setQuan(quan + 1)}
        />
      </div>
      <div className="btn-container">
        <button className="add-to-cart btn" onClick={() => addToCart()}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default AdjustQuantity;
