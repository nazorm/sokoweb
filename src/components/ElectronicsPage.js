import React, { useEffect, useState } from "react";
import ElectronicsCard from "./ElectronicsCard";
import products from "./Products"

const ElectronicsPage = () => {
  const [electronicProduct, setElectronicProduct] = useState([]);

useEffect(()=>{
    setElectronicProduct(products)
},[])
  return (
    <div className="electronics-container">
      <header className="electronics-header">
        <h3 className="electronics-name">Electronics</h3>
        <h3 className="electronics-count">12</h3>
      </header>
      <ElectronicsCard
      product = {electronicProduct}
      />
    </div>
  );
};

export default ElectronicsPage;
