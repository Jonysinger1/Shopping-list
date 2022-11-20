import React from "react";
import { Route } from "react-router-dom";
const Card = ({ item}) => {
    // const{name,price,img,title}=item;
    
    return (
        <div className="cards">
            <div className="details">
                {/* <p>{title}</p> */}
                <p>{item.name}</p>
                <p>Price: {item.price}$</p>
                <p><button onClick={(<Route path="/home/"/>)}>More Information</button></p>
            </div>  
            <div className="image_box">
                <img src={item.img} alt="" />
            </div>

        </div>
    );   

};
export default Card;