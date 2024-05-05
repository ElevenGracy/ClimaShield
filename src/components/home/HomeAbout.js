// import React, { useRef, useState , useEffect} from 'react';
// import '../../styles/home/HomeAbout.css';
// import {cards} from './data'

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
// const intervalRef = useRef(null);

// const [isHovered, setIsHovered] = useState(false);
  
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
//   };

//   const visibleCards = [
//     cards[currentIndex],
//     cards[(currentIndex + 1) % cards.length],
//     cards[(currentIndex + 2) % cards.length],
//   ];


//   useEffect(() => {
//     if (isPlaying && !isHovered) {
//       intervalRef.current = setInterval(goToNext, 2700); // Adjust the interval duration as needed
//     } else {
//       clearInterval(intervalRef.current);
//     }
  
//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying,isHovered]);


//   return (
//   <>
//   <div className='aboutContainer'>
//     <h1 className='about'>About ClimaShield</h1>
//   </div>
//     <div className="slider">
//       <button className="arrow"  onClick={goToPrevious}>
//         &lt;
//       </button>
//       <div className="card-container">
//         {visibleCards.map((card, index) => (
//           <div key={index} className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

//            {/* <div
//           key={index}
//           className={`card ${index === 1 ? 'activee' : ''}`}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         > */}
          
//             <img src={card.img} alt="Weather Platform" className="card-image" loading="lazy"/>
//             <p className="card-description">{card.description}</p>
            
//           </div>
//         ))}
//       </div>
//       <button className="arrow" onClick={goToNext}>
//         &gt;
//       </button>
//     </div>
//     {/* <div>
//         <button onClick={() => setIsPlaying(!isPlaying)}>
//           {isPlaying ? 'Stop' : 'Start'}
//         </button>
//       </div> */}
//   </>
//   );
// };

// export default Slider;

import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import about1 from '../../assets/homeAbout/about1.webp'
import about2 from '../../assets/homeAbout/about2.webp'
import about3 from '../../assets/homeAbout/about3.webp'
import about4 from '../../assets/homeAbout/about4.webp'
import "../../styles/home/HomeAbout.css"

const Slider=()=>{
  useEffect(() => {
    AOS.init({
      duration:800,
      easing:"ease-in",
      delay:50,
      mirror:true,
    });
  }, []);

  return(
    <>
       <div className='aboutContainer'>
     <h1 className='about'>About ClimaShield</h1>
   </div>
      <div data-aos="fade-up" className="a-abouts a-about1">
        <div className="a-img a-img1" data-aos="fade-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
          <img src={about1} alt="about1" width={250} height={250} className="a-im"/>
        </div>
        <div className="a-paragraph a-paragraph1" data-aos="fade-left"> 
          <p>ClimaShield offers a state-of-the-art weather derivatives trading platform, empowering users to hedge effectively against weather-related financial risks, minimizing exposure to unpredictable elements.</p>
        </div>
      </div>

      <div data-aos="fade-up" className="a-abouts a-about2">
        <div className="a-grad"></div>
        <div className="a-paragraph a-paragraph2" data-aos="fade-right"> 
          <p>Our platform facilitates the creation and listing of hedging contracts, simplifying the purchasing process for users who pay the specified premium. Funds from buyers are securely stored, mitigating risk and ensuring peace of mind.</p>
        </div>
        <div className="a-img a-img2" data-aos="fade-left">
          <img src={about2} alt="about2" width={250} height={250} className="a-im"/>
        </div>
      </div>

      <div data-aos="fade-up" className="a-abouts a-about3">
        <div className="a-img a-img3" data-aos="fade-right">
          <img src={about3} alt="about3" width={250} height={250} className="a-im"/>
        </div>
        <div className="a-paragraph a-paragraph3" data-aos="fade-left">
          <p>Through advanced technology, ClimaShield continuously monitors relevant weather data to assess contract conditions, enabling precise risk management tailored to each user's needs.</p>
        </div>
      </div>

      <div data-aos="fade-up" className="a-abouts a-about4">
        <div className="a-grad2"></div>
        <div className="a-paragraph a-paragraph4" data-aos="fade-right">
          <p>Upon meeting predetermined conditions, ClimaShield automatically calculates and distributes payouts to buyers, providing a transparent and secure method to hedge against the unpredictability of weather, safeguarding your investments.</p>
        </div>
        <div className="a-img a-img4" data-aos="fade-left">
          <img src={about4} alt="about4" width={250} height={250} className="a-im"/>
        </div>
      </div>
      
    </>
  )
}
export default Slider;
