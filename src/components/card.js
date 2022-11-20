import React from "react";
import { Link } from "react-router-dom";
const Card = ({ item}) => {
    // const{name,price,img,title}=item;
    
    return (
        <div className="cards">
            <div className="details">
                
                <p>{item.name}</p>
                <p>Price: {item.price}$</p>
                <Link to={`/${item.id}`}><button>Details</button></Link>
                
                
                
            </div>  
            <div className="image_box">
                <img src={item.img} alt="" />
            </div>

        </div>
    );   

};
export default Card;