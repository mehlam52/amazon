import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB420684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123450"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={640}
            image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="123451"
            title="Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)"
            price={349}
            image="https://m.media-amazon.com/images/I/71edjA10hZL._SY355_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123452"
            title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)"
            price={14990}
            image="https://m.media-amazon.com/images/I/71uKCdULRgL._SX355_.jpg"
            rating={4}
          />
          <Product
            id="123453"
            title="Amazon Brand - Symbol Men's Regular Polo Shirt"
            price={329}
            image="https://m.media-amazon.com/images/I/71dyS4vBXVL._UY550_.jpg"
            rating={3}
          />
          <Product
            id="123454"
            title="Amazon Brand - Solimo Lunaria Fabric 4 Seater L Shape Sofa (Grey & Blue)"
            price={17999}
            image="https://images-eu.ssl-images-amazon.com/images/I/41ohhMUbcuL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123455"
            title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)"
            price={22990}
            image="https://images-eu.ssl-images-amazon.com/images/I/41iwrjcLtYL._SX342_SY445_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
