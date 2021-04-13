import React, { useEffect, useState } from "react";
import ElectronicsCard from "./ElectronicsCard";
import products from "../../Products"
import "./styles.css";

const ElectronicsPage = () => {
  const [electronicProduct, setElectronicProduct] = useState([]);

useEffect(()=>{
    setElectronicProduct(products)
},[])
  return (
    <div className="electronics-container">
      <header className="categorypage-header">
        <h3 className="categorypage-name">Electronics</h3>
        <h3 className="categoryproduct-count">12</h3>
      </header> 
      <p className="product-discout"> -20%</p>
      <ElectronicsCard
      product = {electronicProduct}
      />
    </div>
  );
};

export default ElectronicsPage;
