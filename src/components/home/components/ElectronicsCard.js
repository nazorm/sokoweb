import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ElectronicsCard = (props) => {
  const electronicProduct = props.product.map((item) => {
    return (
      <Link to="/productdescription" key={item.id} className="product-card">
        <div className="productimage-container">
        <img
          src={item.img}
          className="product-image"
          alt="product"
          height="80px"
        />
         </div>
        <div className="product-info">
          <p className="product-name">{item.name}</p>
          <p className="product-price">{item.price}</p>
          <p className="old-price">{item.oldprice ? item.oldprice : ""}</p>
        </div>

        <button className="add-btn">+ Add</button>
      </Link>
    );
  });
  return <div className="product-container">{electronicProduct}</div>;
};

export default ElectronicsCard;
