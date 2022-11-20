import React, { useState } from "react";
import Card from "./card";
import products from "../data";
import "../styles/home.css";
import { Route } from "react-router-dom";

const Home = () => {
  return (
    <section>
      {products.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </section>
  );
};
export default Home;
