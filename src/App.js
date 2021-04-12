import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Head from "./components/Header";
import ProductDescription from "./components/productdescription/components/ProductDescription";
import Home from "./components/home/components/Home";
import Footer from "./components/Footer";
import Bag from "./components/home/components/Bag";


function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/bag" component={Bag}/>
        <Route exact path = "/productdescription" component={ProductDescription}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
