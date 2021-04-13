import React from "react";
import "../App.css";
import protection from "./assets/protection.svg";
import fastDelivery from "./assets/fast-delivery.svg";
import customerService from "./assets/customer-service.svg";
import chatIcon from "./assets/chat-icon.svg";

const Footer = () => {
  return (
    <div>
      <section className="features">
        <div className="feature">
          <img
            src={fastDelivery}
            className="feature-image"
            alt="feature-image"
          />
          <p className="feature-text">Fast Delivery</p>
        </div>
        <div className="feature">
          <img src={protection} className="feature-image" alt="feature-image" />
          <p className="feature-text">Buyer Protection</p>
        </div>
        <div className="feature">
          <img
            src={customerService}
            className="feature-image"
            alt="feature-image"
          />
          <p className="feature-text">Customer Support</p>
        </div>
      </section>
      <footer className="footer">
        <p className="store-details">STORE DETAILS</p>
        <h3 className="footer-target">Target</h3>
        <p className="footer-address">
          Cham Towers, Plot 12 Nkrumah Rd, Kampala, Ug
        </p>
        <button className="chat-btn">
          <img src={chatIcon} className="chat-icon" alt="chat" />
          Chat with us
        </button>
      </footer>
    </div>
  );
};
export default Footer;
