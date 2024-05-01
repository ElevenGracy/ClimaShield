import React from "react";
import "../../styles/home/Home.css";
import { Chart } from "chart.js";
import HomeAbout from "./HomeAbout";
import earth from "../../assets/earthImg.svg";
import { works } from "./data";
import Button from "./button";
// import WorkFlow from './workFlow'
// import Navbar from '../navbar/Navbar.js'
import { Link } from 'react-router-dom'; 


import DerivativeAutoCarousel from "./derivativeAutoCarousel";

function HomePage() {
  return (
    
    <>
    {/* <Navbar/> */}
      <div className="homeContainer">
        <div className="details">
          <h1 className="heading">ClimaShield</h1>
          <h5 className="subHeading">
            Weather-Proof Your Finances, <br /><span></span>Hedge with Confidence
          </h5>

          <Link to="/derivatives">

          <Button />
          </Link>

        </div>
        <div className="imgContainer">
          <img src={earth} width={480} height={480} className="imgEarth"></img>

          {/* for gradient */}
          <div className="grad1"></div>
          <div className="grad2"></div>
          {/* <div className="grad3"></div> */}
        </div>
      </div>

      <div className="cardsContainer">
        {works.map((work,index)=>(
          <div className="cards">
            {/* for icon */}
            <div className="icon">
              <img src={work.icon} height={50} width={50}/>
            </div>
            {/* for text */}
            <div className="textContainer">
              <h1 className="title">{work.title}</h1>
              <p className="description">{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      <HomeAbout />
      {/* <HomeAboutttt/> */}
      <DerivativeAutoCarousel/>
      {/* <WorkFlow/> */}
      </>
  );
}

export default HomePage;
