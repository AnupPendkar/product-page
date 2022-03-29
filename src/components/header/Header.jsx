import "./header.css";
import AdjustQuantity from "../adjustQuantity/AdjustQuantity";
import HeaderImg from "../headerImg/HeaderImg";

function Header() {
  return (
    <div className="header">
      <HeaderImg />
      <div className="info-container">
        <p className="upper-title">SNEAKER COMPANY</p>
        <h1 className="title">Fall Limited Edition Sneakers</h1>
        <p className="desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price-container">
          <div className="values">
            <h1 className="discounted-price">$125.00</h1>
            <div className="discount">
              <p className="total-discount">50%</p>
            </div>
          </div>
          <p className="original-price">$250.00</p>
        </div>
        <AdjustQuantity />
      </div>
    </div>
  );
}

export default Header;
