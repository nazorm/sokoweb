import React from "react";
import arrow from "../assets/right-arrow.svg"
import "./styles.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <ul className="categories-ul">
        <li className="category">Electronics(12)</li>
        <li className="category">Face Masks(3)</li>
        <li className="category">Fresh Food(8)</li>
        <li className="category">Grocery(6)</li>
        <li className="category">Home(24)</li>
        <li className="category">Kids(9)</li>
      </ul>
      <div className="category-cta">
      <p className="all-categories">View all categories</p>
      <img src={arrow} alt="arrow" className="arrow"/>
      </div>
     
    </div>
  );
};

export default Categories;
