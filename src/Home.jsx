import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://img.freepik.com/free-vector/online-shopping-banner-template_23-2148795109.jpg?t=st=1739451946~exp=1739455546~hmac=1a624357606f6d888e52ff45ff57361af90e3c4296655f3fcac3409baa772c94&w=2000"
          alt="Banner"
        />

        <div className="home_row">
          <Product
            id="101"
            title="Apple MacBook Air M2 (13.6-inch, 256GB SSD, 8GB RAM)"
            price={1099.99}
            rating={5}
            image="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1739448622~exp=1739452222~hmac=fcd902058f8bb20773bf33f9c227a541a567bed4de9529fe1071e1c6fd1ade95&w=2000"
          />
          <Product
            id="102"
            title="Sony WH-1000XM5 Wireless Noise Cancelling Headphones"
            price={348.99}
            rating={4}
            image="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1739448622~exp=1739452222~hmac=fcd902058f8bb20773bf33f9c227a541a567bed4de9529fe1071e1c6fd1ade95&w=2000"
          />
        </div>

        <div className="home_row">
          <Product
            id="103"
            title="Samsung Galaxy Tab S8 Ultra (14.6-inch, 512GB, Wi-Fi)"
            price={1199.99}
            rating={5}
            image="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1739448622~exp=1739452222~hmac=fcd902058f8bb20773bf33f9c227a541a567bed4de9529fe1071e1c6fd1ade95&w=2000"
          />
          <Product
            id="104"
            title="Logitech MX Master 3S Wireless Performance Mouse"
            price={99.99}
            rating={4}
            image="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1739448622~exp=1739452222~hmac=fcd902058f8bb20773bf33f9c227a541a567bed4de9529fe1071e1c6fd1ade95&w=2000"
          />
          <Product
            id="105"
            title="Razer BlackWidow V4 Pro Mechanical Gaming Keyboard"
            price={179.99}
            rating={5}
            image="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1739448622~exp=1739452222~hmac=fcd902058f8bb20773bf33f9c227a541a567bed4de9529fe1071e1c6fd1ade95&w=2000"
          />
        </div>

        <div className="home_row">
          <Product
            id="106"
            title="LG UltraGear 34-inch Curved Gaming Monitor (165Hz, 1ms)"
            price={599.99}
            rating={5}
            image="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1739448622~exp=1739452222~hmac=fcd902058f8bb20773bf33f9c227a541a567bed4de9529fe1071e1c6fd1ade95&w=2000"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
