import React from 'react';
// import Slider from '../components/slider/Slider'
import Homejs from "./home";
import "./Home.css";
// import "../components/Global.css"
// import Slider from '../components/Slider';


const Home = () =>  {
  return (
  <>
    <Homejs />
        <div>
        <section className="product">
        <h2 className="product-category"> Records </h2>
        {/* <button className="pre-btn">
          <img src="./imgs/arrow.png" alt="Left Arrow" />
        </button>
        <button className="nxt-btn">
          <img src="./imgs/arrow.png" alt="Right Arrow" />
        </button> */}
        <div className="product-container">
          <div className="product-card">
            <div className="product-image">
              <img
                src="./imgs/img1.jpg"
                className="product-cover"
                alt="Asus PC"
              />
              <button className="card-btn"> </button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">The Best Products<Products></Products></h2>
              <span className="price"></span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./imgs/img2.jpg"
                className="product-cover"
                alt="CLX PC"
              />
              <button className="card-btn"></button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">To start your music career</h2>
              <span className="price"></span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./imgs/img3.jpg"
                className="product-cover"
                alt="iBuyPower Y60 PC"
              />
              <button className="card-btn"></button>
            </div>
          </div> 
          <div className="product-card">
            <div className="product-image">
              <img
                src="./imgs/img3.jpg"
                className="product-cover"
                alt="iBuyPower Y60 PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
          </div> 
          <div className="product-card">
            <div className="product-image">
              <img
                src="./imgs/img3.jpg"
                className="product-cover"
                alt="iBuyPower Y60 PC"
              />
              <button className="card-btn"></button>
            </div>
          </div> 
          <div className="product-card">
            <div className="product-image">
              <img
                src="./imgs/img3.jpg"
                className="product-cover"
                alt="iBuyPower Y60 PC"
              />
              <button className="card-btn"></button>
            </div>
          </div> 
        </div>
      </section>

        {/* < Slider /> */}
       {/* <Slider /> */}
        </div>
    </>
  )
}
export default Home;