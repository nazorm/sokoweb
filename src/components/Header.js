import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import "../App";
import shoppingIcon from "./assets/cart.svg";
import homeIcon from "./assets/home-icon.svg";
import whiteCart from "./assets/white-cart.svg";
import userIcon from "./assets/user-icon.svg";

const Head = () => {
  return (
    <div>
      <header className="header">
        <p className="sokohead-text">
          Store made with{" "}
          <span className="sokohead-span">
            S
            <img
              src={whiteCart}
              className="sokohead-cart"
              alt="sokohead-cart"
            />
            KO
          </span>
        </p>
      </header>
      <section className="head-nav">
        <div className="intro1">
          <div className="intro-home">
            <img
              src={homeIcon}
              alt="introhome-icon"
              className="introhome-icon"
            />
          </div>

          <p className="head-target">
            Target
            <br />
            <span className="head-address">
              Cham Towers, Plot 12 Nkrumah Rd, Kampala, Ug
            </span>
          </p>
        </div>
        <nav className="headintro-nav">
          <ul className="intro-nav">
            <Link to="/bag">
              <li className="intronav-item">
                <img
                  src={shoppingIcon}
                  alt="nav-icon"
                  className="nav-shoppingicon"
                />
                Bag
              </li>
            </Link>
            <li className="intronav-item">
              <img src={userIcon} alt="nav-icon" className="nav-usericon" />
              Account
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Head;
