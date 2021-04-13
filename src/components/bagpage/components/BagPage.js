import React from "react";
import { Link } from "react-router-dom";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import "./styles.css";

const BagPage = () => {
  return (
    <section className="bagpage-section">
      <span className="line"></span>
      <div className="bagpage-container">
        <RiEmotionUnhappyLine className="bagpage-sadface" />
        <p className="bagpage-text">It's empty here</p>
        <p className="bagpage-startshopping">Start to add to your bag</p>
        <button className="bagpage-btn">
          <Link to="/">Back to homepage</Link>
        </button>
      </div>
    </section>
  );
};

export default BagPage;
