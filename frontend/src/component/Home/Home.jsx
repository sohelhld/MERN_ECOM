import React, { useEffect } from 'react'
import Product from "./Product.js";
import './Home.css';
import { FaMouse } from "react-icons/fa";
import MetaData from '../layout/MetaData.js';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../actions/productAction.js';


const product={
    name:"Blue Tshirt",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"₹3000",
    _id:"rock"
}

function Home() {

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(getProduct());
  },[dispatch])
  return (
    <>
    <MetaData title= "OneStop"/>
    <div className="banner">
    <p>Welcome to OneStop</p>
    <h1>FIND AMAZING PRODUCTS BELOW</h1>

    <a href="#container">
      <button>
        Scroll <FaMouse />
      </button>
    </a>
  </div>

  <h2 className="homeHeading">Featured Products</h2>

  <div className="container" id="container">
  <Product product={product} />
  <Product product={product} />
  <Product product={product} />
  <Product product={product} />
  <Product product={product} />
  <Product product={product} />
  </div>
    </>
  )
}

export default Home