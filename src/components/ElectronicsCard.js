import React from "react"

const ElectronicsCard=(props)=>{
    const electronicProduct = props.product.map((item)=>{
        return(
            <div key={item.id} className="product-card">
                <img src={item.img} className="product-image" alt="product" height="80px"/>
                <div className="product-info">
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
                <p className="old-price">{item.oldprice? item.oldprice : ""}</p>
                </div>
                
                <button className="add-btn">+ Add</button>
            </div>
        )
    })
    return(
        <div className="product-container">
{electronicProduct}
        </div>
    )
}



export default ElectronicsCard