import React from "react"
import ElectronicsPage from "./ElectronicsPage"

const ElectronicsCard=(props)=>{
    const electronicProduct = props.product.map((item)=>{
        return(
            <div key={item.id}>
                <img src={item.img} className="product-image" alt="product" height="100px"/>
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
                <p className="old-price">{item.oldprice? item.oldprice : ""}</p>
            </div>
        )
    })
    return(
        <div>
{electronicProduct}
        </div>
    )
}



export default ElectronicsCard