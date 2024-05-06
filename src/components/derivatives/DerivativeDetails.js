// import React from "react";
// import "../../styles/derivative/TempDerivative.css";

// function DerivativeDetails() {
//   return (
//     <div className="col-11 mx-auto">
//       <div
//         className="derivative-details-title my-auto"
//         style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}
//       >
//         {" "}
//         <span className="derivativeTitleBox">Basic Information</span>
//       </div>
//       <div
//         className="my-3 accordion accordion-box-border"
//         id="accordionExample"
//       >
//         <div className="accordion-item mb-3 accordion-box-border">
//           <h2 className="accordion-header" id="headingOne">
//             <button
//               className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               1. What is a weather derivative contract?
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingOne"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <li className="accordion-list-item">
//                 Weather derivatives are financial contracts that allow
//                 individuals or businesses to hedge against the risk of financial
//                 loss due to adverse weather conditions. The buyer pays a premium
//                 to the seller, who agrees to make a payout if certain weather
//                 conditions occur.
//               </li>
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item mb-3 accordion-box-border">
//           <h2 className="accordion-header" id="headingTwo">
//             <button
//               className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="true"
//               aria-controls="collapseTwo"
//             >
//               2. What is HDD and CDD?
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingTwo"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <li className="accordion-list-item">
//                 <b>HDD (Heating Degree Day)</b>
//                 <div>
//                   A heating degree day (HDD) is a measurement designed to
//                   quantify the demand for energy needed to heat a building. It
//                   is the number of degrees that a day's average temperature is
//                   below 65° Fahrenheit (18° Celsius), which is the temperature
//                   below which buildings need to be heated. The price of weather
//                   derivatives traded in the winter is based on an index made up
//                   of monthly HDD values.
//                 </div>
//               </li>
//               <li className="accordion-list-item">
//                 <b>CDD (Cooling Degree Day)</b>
//                 <div>
//                   A cooling degree day (CDD) is a measurement designed to
//                   quantify the demand for energy needed to cool buildings. It is
//                   the number of degrees that a day's average temperature is
//                   above 65° Fahrenheit (18° Celsius).
//                 </div>
//               </li>
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item mb-3 accordion-box-border">
//           <h2 className="accordion-header" id="headingThree">
//             <button
//               className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//             >
//               3. How are HDD/CDD calculated?
//             </button>
//           </h2>
//           <div
//             id="collapseThree"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingThree"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <li className="accordion-list-item">
//                 <b>HDD (Heating Degree Day)</b>
//                 <div>
//                   Subtract the average of a day's high and low temperatures from
//                   65. For example, if the day's average temperature is 50° F,
//                   its HDD is 15. If that day's average is above 65, the result
//                   is set to zero. If every day in a 30-day month had an average
//                   temperature of 50° F, the month's HDD value would be 450 (15 x
//                   30)
//                 </div>
//               </li>
//               <li className="accordion-list-item">
//                 <b>CDD (Cooling Degree Day)</b>
//                 <div>
//                   Subtract 65 from the average of a day's high and low
//                   temperatures. For example, if the day's average temperature is
//                   75° F, its CDD is 10. If that day's average is below 65, the
//                   result is set to zero. Meanwhile, if every day in a 30-day
//                   month had an average temperature of 75° F, the month's CDD
//                   value would be 300 (10 x 30).
//                 </div>
//               </li>
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item mb-3 accordion-box-border">
//           <h2 className="accordion-header" id="headingFour">
//             <button
//               className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseFour"
//               aria-expanded="false"
//               aria-controls="collapseFour"
//             >
//               4. What is the strike value?
//             </button>
//           </h2>
//           <div
//             id="collapseFour"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingFour"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <li className="accordion-list-item">
//                 A strike value is a reference level in a weather derivative
//                 contract that is used to determine the payout. A higher strike
//                 price will make the contract more expensive, but it will also
//                 protect you from more losses if the weather is unexpectedly
//                 warm. A lower strike price will make the contract cheaper, but
//                 you will also be exposed to more losses if the weather is
//                 unexpectedly cold.
//               </li>
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item mb-3 accordion-box-border">
//           <h2 className="accordion-header" id="headingFour">
//             <button
//               className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseFive"
//               aria-expanded="false"
//               aria-controls="collapseFive"
//             >
//               5. How to get test USDC and USDC allowance?
//             </button>
//           </h2>
//           <div
//             id="collapseFive"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingFive"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <li className="accordion-list-item">
//                 You can get the test USDC from{" "}
//                 <a href="https://faucet.circle.com/" target="_blank">
//                   here
//                 </a>
//                 .
//               </li>
//               <li className="accordion-list-item">
//                 After getting USDCs, you can click on the buy button. Firstly, you need to approve the USDC then only you
//                 can buy the contract.
//               </li>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DerivativeDetails;

// import "../../styles/derivative/TempDerivative.css";
// import React, { useEffect, useRef, useState } from 'react';

// const DerivativeDetails = () => {
//   const cardsRef = useRef([]);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleScroll = () => {
//       cardsRef.current.forEach((card, index) => {
//         const cardTop = card.getBoundingClientRect().top;
//         const cardHeight = card.offsetHeight;
//         const isInViewport = cardTop < window.innerHeight && cardTop + cardHeight > 0;

//         if (isInViewport) {
//           const viewportHeight = window.innerHeight;
//           const scrollPercentage = Math.min(Math.max((viewportHeight - cardTop) / viewportHeight, 0), 1);
//           const scaleFactor = 1 - (scrollPercentage * 0.2);
//           card.style.transform = `scale(${scaleFactor})`;
//         } else {
//           card.style.transform = 'scale(1)';
//         }
//       });
//     };

//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//    <>
//     <div className="body" >
//     <div className="c-cards-list left-gradient">
//       {/* <div className="bubble" />
//               <div className="small-bubble"/> */}
//       <div className="w-cards-list" style={{ '--cursor-x': `${cursorPosition.x}px`, '--cursor-y': `${cursorPosition.y}px` }}>
//         <div className="c-card w-card card-1" ref={(el) => (cardsRef.current[0] = el)}>
//           <div className="card-content">
//             <h1>01</h1>
//             <h6>What is a weather derivative contract?</h6>
//             <div className="line"></div>
//             <p>Weather derivatives are financial contracts that allow individuals or businesses to hedge against the risk of financial loss due to adverse weather conditions. The buyer pays a premium to the seller, who agrees to make a payout if certain weather conditions occur.

//             </p>
//           </div>
//         </div>
//         <div className="c-card w-card card-2" ref={(el) => (cardsRef.current[1] = el)}>
//           <div className="card-content">
//           <h1>02</h1>
//             <h6>What is HDD and CDD?</h6>
//             <div></div>
//             <p><b >HDD (Heating Degree Day) : </b><br/> A heating degree day (HDD) is a measurement designed to quantify the demand for energy needed to heat a building. It is the number of degrees that a day's average temperature is below 65° Fahrenheit (18° Celsius), which is the temperature below which buildings need to be heated. The price of weather derivatives traded in the winter is based on an index made up of monthly HDD values.<br/><br/><b>CDD (Cooling Degree Day) :</b><br/> A cooling degree day (CDD) is a measurement designed to quantify the demand for energy needed to cool buildings. It is the number of degrees that a day's average temperature is above 65° Fahrenheit (18° Celsius).

//               </p>
//           </div>
//         </div>
//         <div className="c-card w-card card-3" ref={(el) => (cardsRef.current[2] = el)}>
//           <div className="card-content">
//           <h1>03</h1>
//             <h6>How are HDD/CDD calculated?</h6>
//             <div></div>
//             <p><b >HDD (Heating Degree Day) : </b><br/>Subtract the average of a day's high and low temperatures from 65. For example, if the day's average temperature is 50° F, its HDD is 15. If that day's average is above 65, the result is set to zero. If every day in a 30-day month had an average temperature of 50° F, the month's HDD value would be 450 (15 x 30).<br/><br/><b>CDD (Cooling Degree Day) :</b><br/> Subtract 65 from the average of a day's high and low temperatures. For example, if the day's average temperature is 75° F, its CDD is 10. If that day's average is below 65, the result is set to zero. Meanwhile, if every day in a 30-day month had an average temperature of 75° F, the month's CDD value would be 300 (10 x 30).

//             </p>
//           </div>
//         </div>
//         <div className="c-card w-card card-4" ref={(el) => (cardsRef.current[3] = el)}>
//           <div className="card-content">
//           <h1>04</h1>
//             <h6>What is the strike value?</h6>
//             <div></div>
//             <p>A strike value is a reference level in a weather derivative contract that is used to determine the payout. A higher strike price will make the contract more expensive, but it will also protect you from more losses if the weather is unexpectedly warm. A lower strike price will make the contract cheaper, but you will also be exposed to more losses if the weather is unexpectedly cold.

//             </p>
//           </div>
//         </div>
//         <div className="c-card w-card card-5" ref={(el) => (cardsRef.current[4] = el)}>
//           <div className="card-content">
//           <h1>05</h1>
//             <h6>How to get test USDC and USDC allowance?</h6>
//             <div></div>
//             <p>You can get the test USDC from <a href="https://faucet.circle.com/" target="_blank"> here </a> After getting USDCs, you can click on the buy button. Firstly, you need to approve the USDC then only you can buy the contract.

//               </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default DerivativeDetails;

// import React, { useState, useEffect, useRef } from "react";
// import "../../styles/derivative/TempDerivative.css";
// import { AccordionData } from "./data";
// import Navbar from "../navbar/Navbar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { Mousewheel, Pagination, EffectFade } from "swiper/modules";

// export default function DerivativeDetails() {
//   const swiperRef = useRef(null);
//   const [prevScrollTop, setPrevScrollTop] = useState(0);

//   useEffect(() => {
//     const swiper = swiperRef.current?.swiper;

//     if (swiper) {
//       swiper.mousewheel.invert = false; // Disable invert for vertical scrolling
//       swiper.mousewheel.eventsTarget = swiper.$el; // Set events target to the Swiper container
//       swiper.mousewheel.releaseOnEdges = true;

//       swiper.on("mousewheel", handleMouseWheel);
//     }

//     return () => {
//       if (swiper) {
//         swiper.off("mousewheel", handleMouseWheel);
//       }
//     };
//   }, []);

//   const handleMouseWheel = (event) => {
//     const swiper = swiperRef.current?.swiper;
//     console.log("Swiper", swiper);
//     if (swiper) {
//       const currentScrollTop = event.scrollingY;
//       console.log("Current Scroll Top", currentScrollTop);
//       const delta = currentScrollTop > prevScrollTop ? 1 : -1;

//       swiper.slideTo(swiper.activeIndex + delta);
//       setPrevScrollTop(currentScrollTop);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="e-titleCont">
//         <h1 className="e-title">Basic Information</h1>
//       </div>
//       <div className="e-container">
//         <Swiper
//           direction={"vertical"}
//           slidesPerView={1}
//           spaceBetween={30}
//           // mousewheel={true}

//           // mousewheel={{ sensitivity: 4.5 }}
//           mousewheel={{ sensitivity: 1 }}
//           // onMousewheel={debouncedHandleMouseWheel}

//           pagination={{
//             clickable: true,
//           }}
//           // modules={[Pagination]}
//           modules={[Pagination, Mousewheel]}
//           className="mySwiper"
//           ref={swiperRef}
//           effect="fade"
//           fadeEffect={{
//             crossFade: true,
//             duration: 500, // Animation duration in milliseconds
//             easing: "ease-in-out",
//           }}

//           // ref={swiperRef}
//         >
//           {AccordionData.map((data, index) => (
//             <>
//               <SwiperSlide>
//                 <div className="e-slideContainer">
//                   <h1 className={`que-${index + 1}`}>{data.que}</h1>
//                   <div />
//                   <p className={`ans-${index + 1}`}>{data.ans}</p>
//                 </div>
//               </SwiperSlide>
//               <div className="grad4" />
//             </>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// }




import React, { useState, useEffect, useRef } from "react";
import "../../styles/derivative/TempDerivative.css";
import { AccordionData } from "./data";
// import Navbar from "../navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function DerivativeDetails() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    {/* <Navbar/> */}
    <div className="e-titleCont">
         <h1 className="e-title">Basic Information</h1>
       </div>

       <div className="e-container">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {AccordionData.map((data)=>(
          <SwiperSlide>
                 <div className="e-slideContainer">
                   <h1 className="e-que">{data.que}</h1>
                  
                   <p className="e-ans">{data.ans}</p>
                 </div>
               </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>

    </>
  );
}
