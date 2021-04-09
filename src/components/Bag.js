import React from "react";
import sadFace from "./assets/sad-face.svg";

const Bag = () => {
  return (
    <div className="bag-container">
      <header className="bag-header">
        <h3 className="bagheader-name">Bag</h3>
        <h3 className="bag-count">0</h3>
      </header>
      <section className="emptycart">
        <img
          src={sadFace}
          className="emptycart-icon"
          alt="emptycart-icon"
          height="100px"
        />
        <p className="emptycart-text">
          It's empty here
          <br />
          <span className="start-shopping">
            Start Shopping to add items to your bag
          </span>
        </p>
      </section>
    </div>
  );
};

export default Bag;
