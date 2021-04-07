import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import shoppingIcon from "./components/assets/cart.svg";
import homeIcon from "./components/assets/home-icon.svg";
import userIcon from "./components/assets/user-icon.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="sokohead-text">
          Store made with{" "}
          <span className="sokohead-span">
            S
            <img
              src={shoppingIcon}
              className="sokohead-cart"
              alt="sokohead-cart"
            />
            KO
          </span>
        </p>
      </header>
      <section className="head-nav">
        <div className="intro1">
          <img src={homeIcon} alt="introhome-icon" className="introhome-icon" />
          <h3 className="head-target">Target</h3>
          <p className="head-address">Charm Towers,Plot 12 Nkrumah Rd, Kampala, Ug</p>
        </div>
        <nav className="intro-nav">
          <ul>
            <li className="nav-item">
              <img
                src={shoppingIcon}
                alt="nav-icon"
                className="nav-shoppingicon"
              />
              Bag
            </li>
            <li className="nav-item">
              <img src={userIcon} alt="nav-icon" className="nav-usericon" />
              Account
            </li>
          </ul>
        </nav>
      </section>
      <Home />
      <section className="features">
        <div className="feature">
          <img src="" className="feature-image" alt="feature-image" />
          <p className="feature-text">Fast Delivery</p>
        </div>
        <div className="feature">
          <img src="" className="feature-image" alt="feature-image" />
          <p className="feature-text">Buyer Protection</p>
        </div>
        <div className="feature">
          <img src="" className="feature-image" alt="feature-image" />
          <p className="feature-text">Customer Support</p>
        </div>
      </section>
      <footer className="footer">
        <p className="store-details">STORE DETAILS</p>
      <h3 className="footer-target">Target</h3>
          <p className="footer-address">Charm Towers,Plot 12 Nkrumah Rd, Kampala, Ug</p>
          <button>
          <img src="" className="footerwhatsapp-icon" alt="whatsapp-icon" />
          Chat with us
          </button>
      </footer>
    </div>
  );
}

export default App;
