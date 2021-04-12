import React from "react";
import "./styles.css";
import { Input } from "antd";
import ElectronicsPage from "./ElectronicsPage";
import Categories from "./Categories";
import Bag from "./Bag";
const { Search } = Input;

const Home = () => {
  const onSearch = () => {
    alert("here");
  };
  return (
    <section>
       <span className="line"></span>
    <div className="home-container">
      <Search
        className="search-bar"
        placeholder="Search for products"
        onSearch={onSearch}
        enterButton
      />
      <Categories />
      <ElectronicsPage />
      <Bag />
    </div>
    </section>
  );
};

export default Home;
