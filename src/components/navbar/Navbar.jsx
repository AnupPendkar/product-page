import "./navbar.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../redux/Context";

function Navbar() {
  const menu = useRef();
  const cartView = useRef();
  const [openMenu, setOpenMenu] = useState(0);
  const { TotQuan, addQuan } = useContext(Context);
  useEffect(() => {
    if (openMenu === 1) {
      menu.current.style.left = "0";
    } else {
      menu.current.style.left = "-50%";
    }
  }, [openMenu]);

  return (
    <div className="navbar">
      <div className="mb-navbar">
        <img
          className="menu"
          src="images/icon-menu.svg"
          alt="menu"
          onClick={() => setOpenMenu(1)}
        />
        <img className="logo" src="images/logo.svg" alt="logo" />
        <div className="cart-container">
          <img
            className="cart-logo"
            src="images/icon-cart.svg"
            alt="cart"
            onClick={() =>
              cartView.current.style.display === "none"
                ? (cartView.current.style.display = "flex")
                : (cartView.current.style.display = "none")
            }
          />
          {TotQuan > 0 && <div className="dot"></div>}
        </div>
        <img className="avatar" src="images/image-avatar.png" alt="avatar" />
        <div ref={menu} className="open-menu">
          <img
            src="images/icon-close.svg"
            alt="close"
            onClick={() => setOpenMenu(0)}
          />
          <a className="link">Collections</a>
          <a className="link">Men</a>
          <a className="link">Woman</a>
          <a className="link">About</a>
          <a className="contact link">Contact</a>
        </div>
      </div>
      <div className="dt-navbar">
        <img className="logo" src="images/logo.svg" alt="logo" />
        <a className="collection link">Collections</a>
        <a className="link">Men</a>
        <a className="link">Woman</a>
        <a className="link">About</a>
        <a className="link">Contact</a>
        <img
          className="cart-logo"
          src="images/icon-cart.svg"
          alt="cart"
          onClick={() =>
            cartView.current.style.display === "none"
              ? (cartView.current.style.display = "flex")
              : (cartView.current.style.display = "none")
          }
        />
        <img src="images/image-avatar.png" alt="avatar" />
      </div>
      <div ref={cartView} className="cart-view">
        <p className="title">Cart</p>
        <div className="prod-cont">
          {TotQuan > 0 ? (
            <>
              <img src="images/image-product-1.jpg" alt="product image" />
              <div className="prod-desc">
                <p className="prod-name">
                  Autumn Limited Edition new and cool.
                </p>
                <p className="prod-price">
                  $125.00 x {TotQuan}
                  <span className="total">${TotQuan * 125}</span>
                </p>
              </div>
              <img
                src="images/icon-delete.svg"
                alt="delete"
                className="delete-icon"
                onClick={() => addQuan(0)}
              />
            </>
          ) : (
            <p className="prod-name">Nothing to show...</p>
          )}
        </div>
        <button className="cart-btn btn">Checkout</button>
      </div>
    </div>
  );
}

export default Navbar;
