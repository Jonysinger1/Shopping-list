import React from "react";
import Card from "./card";
import products from "../data";
import { Link } from "react-router-dom";
import "../styles/product.css";
const Product = ({ item}) => {
    //take the id from the url
    const id = window.location.pathname.split("/")[1];
    return (
        
       <section>
            {products.map((item) => {
                if (item.id == id) {
                    return (
                        <div className="product">
                        <div className="pdetails">
                            <p>{item.name}</p>
                            <p>Price: {item.price}$</p>
                            <p>{item.title}</p>
                            <p>{item.store}</p>
                            <Link to={`/`}><button>Back</button></Link>

                            
                            
                        </div>  
                        <div className="pimg">
                            <img src={item.img2} alt="" />
                        </div>
            
                    </div>
                    );
                }
            })}
        </section>
                

        
    );   

};
export default Product;