import React from "react";
import { RiEmotionUnhappyLine } from 'react-icons/ri';
import "./styles.css";

const Bag = () => {
  return (
    <div className="bag-container">
      <header className="bag-header">
        <h3 className="bagheader-name">Bag</h3>
        <h3 className="bag-count">0</h3>
      </header>
      <section className="emptycart">
        <RiEmotionUnhappyLine className="emptycart-icon"/>
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
