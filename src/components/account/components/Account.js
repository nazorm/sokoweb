import React from "react";
import { FaBorderAll } from "react-icons/fa";
import { GrLocation, GrTarget } from "react-icons/gr";
import { BsFilter } from "react-icons/bs";
import homeIcon from "../../assets/home-icon.svg";
import "./styles.css";

const Account = () => {
  return (
    <section className="account-section">
      <div className="account-header">
        <h3 className="account-number">+91-8080021387</h3>
        <button className="logout-btn">Log Out</button>
      </div>
      <span className="line"></span>
      <section className="account-info">
        <nav className="order-nav">
          <ul>
            <li>
              <FaBorderAll className="account-icon" />
              <span>My Order</span>
            </li>
            <li>
              <GrLocation className="account-icon" />
              <span>My Addresses</span>
            </li>
          </ul>
        </nav>
        <div className="all-orders">
          <div className="allorders-heading">
            <h3>Showing all orders</h3>
            <button className="filter-btn">
              <BsFilter className="account-icon" />
              <span>Filters</span>
            </button>
          </div>
          <div className="orders">
            <div className="order-card">
              <div className="order">
                <GrTarget className="ordercard-icon" />
                <h4 className="order-name">Target</h4>
              </div>
              <div className="order-details">
                <p className="order-no">
                  Order #1233341
                  <br />
                  <span className="no-of-items">3 items </span>
                </p>
                <p className="order-price">
                  UGX 12,700
                  <br />
                  <span className="order-date">25/02/2021, 01:55PM</span>
                </p>
              </div>
              <div className="status">
                <div className="shippedstatus-signifier"></div>
                <p className="order-shipped">Shipped</p>
              </div>
            </div>
            <div className="order-card">
              <div className="order">
                <div className="account-home">
                  <img
                    src={homeIcon}
                    alt="accounthome-icon"
                    className="accounthome-icon"
                  />
                </div>
                <h4 className="order-name">Abhi's Juke Store</h4>
              </div>
              <div className="order-details">
                <p className="order-no">
                  Order #1213396
                  <br />
                  <span className="no-of-items">1 item </span>
                </p>
                <p className="order-price">
                  UGX 5,400
                  <br />
                  <span className="order-date">26/02/2021, 01:55PM</span>
                </p>
              </div>
              <div className="status">
                <div className="deliveredstatus-signifier"></div>
                <p className="order-delivered">Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Account;
