import React from "react";
import "../App.css";
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
  );
};

export default Home;
