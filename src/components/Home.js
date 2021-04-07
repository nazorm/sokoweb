import React from "react";
import "../App.css";
import { Input } from "antd";
import ElectronicsPage from "./ElectronicsPage";
const { Search } = Input;


const Home=() =>{
    const onSearch=()=>{
        alert("here")
    }
  return (
    <div className="home-container">
      <Search placeholder="Search for products" onSearch={onSearch} enterButton />
      <ElectronicsPage/>
    </div>
  );
}

export default Home;
