import React,{useEffect, useState, useRef} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/home/DerivativeAutoCarousel.css";
import Slider from "react-slick";
import { slides } from "./data";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const DerivativeAutoCarousel = () => {
  
  return (
    <>
    <div className='workTitleContainer'>
    <h1 className='workTitle'>How ClimaShield Work?</h1>
  </div>
    <div className="carousel">
      <AutoRotatingCarousel
        slides={slides.map((slide, index) => (
          <div key={index}>
            <div className="main-container">
              <div className="number-container">
                <div className="number">{index + 1}</div>
              </div>
            </div>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
        />
    </div>
    </>
  );
};

export default DerivativeAutoCarousel;

const NextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <span className="arrow-icon" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <span className="arrow-icon" />
  </div>
);

export const AutoRotatingCarousel = ({ slides }) => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    let slider = sliderRef.current;
    let autoPlayInterval;

    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
        slider.slickNext();
      }, 1000);
    };

    const stopAutoPlay = () => {
      clearInterval(autoPlayInterval);
    };

    if (autoPlay && !isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [autoPlay, isHovered]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    // slidesToScroll:1,
    pauseOnHover: true,
    autoplay:true,
    autoplaySpeed:0,
    cssEase:'linear',
    nextArrow: <NextArrow />,
    prevArrow:<PrevArrow />,
  };

  return (
    <div
      className="slick-list-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {slides}
      </Slider>
    </div>
  );
};



// export const AutoRotatingCarousel = ({ slides }) => {

//   const [autoPlay, setAutoPlay] = useState(true);

//   const [isHovered, setIsHovered] = useState(false);
//   const sliderRef = useRef(null);


// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-next-arrow`}
//       style={{ ...style, display: "block" }}
//       // onClick={onClick}
//       onClick={() => {
//         setAutoPlay(false);
//         onClick();
//         setTimeout(() => {
//           setAutoPlay(true);
//         }, 3000);}}
//     />
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (

    
//     <div
//       className={`${className} custom-prev-arrow`}
//       style={{ ...style, display: "block" }}
//       // onClick={onClick}
//       onClick={() => {
//         setAutoPlay(false);
//         onClick();
//         setTimeout(() => {
//           setAutoPlay(true);
//         }, 3000);}}
//     />
  
//   );
// };


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     // autoplay: true,
//     autoplay: !isHovered && autoPlay,
//     autoplaySpeed: 900,
//     pauseOnHover: isHovered,
//     pauseOnFocus: true,


//     nextArrow:<NextArrow/>,
//     prevArrow: <PrevArrow />,
    
    
//   };

//   return <Slider {...settings}>{slides}</Slider>;
// };


