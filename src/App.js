import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Head from "./components/Header";
import ProductDescription from "./components/productdescription/components/ProductDescription";
import Home from "./components/home/components/Home";
import BagPage from "./components/bagpage/components/BagPage";
import Account from "./components/account/components/Account";


function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/bag" component={BagPage}/>
        <Route exact path = "/productdescription" component={ProductDescription}/>
        <Route exact path = "/account" component={Account}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
