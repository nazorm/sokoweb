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
          <h3 className="target">Target</h3>
          <p>Charm Towers,Plot 12 Nkrumah Rd, Kampala, Ug</p>
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
    </div>
  );
}

export default App;
