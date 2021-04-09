import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import shoppingIcon from "./components/assets/cart.svg";
import homeIcon from "./components/assets/home-icon.svg";
import whiteCart from "./components/assets/white-cart.svg";
import userIcon from "./components/assets/user-icon.svg";
import protection from "./components/assets/protection.svg";
import fastDelivery from "./components/assets/fast-delivery.svg";
import customerService from "./components/assets/customer-service.svg";
import chatIcon from "./components/assets/chat-icon.svg";

function App() {
  return (
    <div className="App">
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
              Cham Towers,Plot 12 Nkrumah Rd, Kampala, Ug
            </span>
          </p>
        </div>
        <nav className="headintro-nav">
          <ul className="intro-nav">
            <li className="intronav-item">
              <img
                src={shoppingIcon}
                alt="nav-icon"
                className="nav-shoppingicon"
              />
              Bag
            </li>
            <li className="intronav-item">
              <img src={userIcon} alt="nav-icon" className="nav-usericon" />
              Account
            </li>
          </ul>
        </nav>
      </section>
      <span className="line"></span>
      <Home />
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
          Cham Towers,Plot 12 Nkrumah Rd, Kampala, Ug
        </p>
        <button className="chat-btn">
          <img src={chatIcon} className="chat-icon" alt="chat" />
          Chat with us
        </button>
      </footer>
    </div>
  );
}

export default App;
