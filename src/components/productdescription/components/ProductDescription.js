import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import whiteChair from "../../assets/white-chair.jpg";

const ProductDescription = () => {
  return (
    <section className="productdescription-container">
      <div className="productdescription-header">
        <IoIosArrowBack />
        <p className="productdescription-headertext">Furniture</p>
      </div>
      <span className="line"></span>
      <section className="product-display">
        <div className="product">
          <div className="product-container">
            <img src={whiteChair} className="product" alt="product" />
          </div>
          <div className="pointers">
            <div className="pointer"></div>
            <div className="pointer"></div>
            <div className="pointer"></div>
            <div className="pointer"></div>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">
            Norbury Scandinavian Wood Leg Ottoman
          </h3>
          <p className="product-information">
            Sold as a piece, Wooden upholstered ottoman lends a laid back appeal
            to your indoor space. comes with soft padding for extra comfort and
            support. Solid wooden and metal frame ensure durable, long-lasting
            use. Great as a footrest or extra seat when entertaining guests
          </p>
          <div className="product-price">
            <div className="price">
              <p className="new-productprice">
                UGX 118,400{" "}
                <span className="old-productprice">UGX 148,000</span>
              </p>
              <button className="incrementproduct-btn">
                <span className="decrement">-</span>1
                <span className="increment">+</span>
              </button>
            </div>
            <p className="discount">-20%</p>
          </div>
          <button className="addtobag-btn">Add to Bag</button>
          <button className="buynow-btn">Buy Now</button>
        </div>
      </section>
    </section>
  );
};

export default ProductDescription;
