import "./headerImg.css";
import { useRef, useState } from "react";

function HeaderImg() {
  const img = useRef();
  const [slide, setSlide] = useState(0);

  const accessThumbnail = (e) => {
    const id = e.target.id;
    const ele = document.getElementById(id);
    const cont = Array.from(document.querySelectorAll(".thumbnail"));
    img.current.src = `images/image-product-${id}.jpg`;
    cont.map((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    ele.classList.add("active");
  };

  const moveSlide = (dir) => {
    if (dir === "left") {
      slide < 1 ? setSlide(3) : setSlide(slide - 1);
    } else {
      slide > 2 ? setSlide(0) : setSlide(slide + 1);
    }
  };

  return (
    <div className="header-img-container">
      <div className="dt-slider">
        <img
          ref={img}
          className="main-img"
          src="images/image-product-1.jpg"
          alt="product image"
        />
      </div>
      <div
        className="mb-slider"
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        <img
          className="main-img"
          src="images/image-product-1.jpg"
          alt="product image"
        />
        <img
          className="main-img"
          src="images/image-product-2.jpg"
          alt="product image"
        />
        <img
          className="main-img"
          src="images/image-product-3.jpg"
          alt="product image"
        />
        <img
          className="main-img"
          src="images/image-product-4.jpg"
          alt="product image"
        />
      </div>
      <div className="arrow-container pre" onClick={() => moveSlide("left")}>
        <img
          className="previous-icon icon"
          src="images/icon-previous.svg"
          alt="previous icon"
        />
      </div>
      <div className="arrow-container next" onClick={() => moveSlide("right")}>
        <img
          className="next-icon icon"
          src="images/icon-next.svg"
          alt="next icon"
        />
      </div>
      <div className="theme-container">
        <img
          id="1"
          src="images/image-product-1-thumbnail.jpg"
          alt="product image 1"
          className="thumbnail active"
          onClick={(e) => accessThumbnail(e)}
        />
        <img
          id="2"
          src="images/image-product-2-thumbnail.jpg"
          alt="product image 2"
          className="thumbnail"
          onClick={(e) => accessThumbnail(e)}
        />
        <img
          id="3"
          src="images/image-product-3-thumbnail.jpg"
          alt="product image 3"
          className="thumbnail"
          onClick={(e) => accessThumbnail(e)}
        />
        <img
          id="4"
          src="images/image-product-4-thumbnail.jpg"
          alt="product image 4"
          className="thumbnail"
          onClick={(e) => accessThumbnail(e)}
        />
      </div>
    </div>
  );
}

export default HeaderImg;
