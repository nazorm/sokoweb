import { Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App";
import shoppingIcon from "./assets/cart.svg";
import homeIcon from "./assets/home-icon.svg";
import whiteCart from "./assets/white-cart.svg";
import userIcon from "./assets/user-icon.svg";

const Head = () => {
  const [bagClicked, setBagClicked] = useState(false);
  const [accountClicked, setAccountClicked] = useState(false);
  const handleBagClicked = () => {
    if (bagClicked) {
      setBagClicked(false);
    } else {
      setBagClicked(true);
      setAccountClicked(false);
    }
  };
  const handleAccountClicked = () => {
    if (accountClicked) {
      setAccountClicked(false);
    } else {
      setAccountClicked(true);
      setBagClicked(false);
    }
  };
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
            <div
              className={bagClicked ? "bag-clicked" : "bag-unclicked"}
              onClick={handleBagClicked}
            >
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
            </div>
            <div
              className={
                accountClicked ? "account-clicked" : "account-unclicked"
              }
              onClick={handleAccountClicked}
            >
              <Link to="/account">
                <li className="intronav-item">
                  <img src={userIcon} alt="nav-icon" className="nav-usericon" />
                  Account
                </li>
              </Link>
            </div>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Head;
