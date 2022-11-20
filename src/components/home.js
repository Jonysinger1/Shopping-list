import React, { useState } from "react";
import Card from "./card";
import products from "../data";
import "../styles/home.css";
import Navbar from "./navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
    <section>
      
      {products.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </section>
    </div>
  );
};
export default Home;
