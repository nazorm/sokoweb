import React from "react";

const Bag = () => {
  return (
    <div>
      <header className="bag-header">
        <h3 className="bagheader-name">Bag</h3>
        <h3 className="bag-count">0</h3>
      </header>
      <section className="emptycart">
        <img src="" className="emptycart-icon" alt="emptycart-icon" />
        <p className="emptycart-text">
          It's empty here
          <span className="start-shopping">
            Start Shopping to add items to your bag
          </span>
        </p>
      </section>
    </div>
  );
};

export default Bag;
