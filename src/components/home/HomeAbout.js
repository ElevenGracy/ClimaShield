import React, { useRef, useState , useEffect} from 'react';
import '../../styles/home/HomeAbout.css';
import WeatherPlatformImage from '../../assets/homeAbout/stockChart.jpg'; // Import the image file
import {cards} from './data'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
const intervalRef = useRef(null);

const [isHovered, setIsHovered] = useState(false);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleCards = [
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
    cards[(currentIndex + 2) % cards.length],
  ];


  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(goToNext, 1500); // Adjust the interval duration as needed
    } else {
      clearInterval(intervalRef.current);
    }
  
    return () => clearInterval(intervalRef.current);
  }, [isPlaying,isHovered]);


  return (
  <>
  <div className='aboutContainer'>
    <h1 className='about'>About ClimaShield</h1>
  </div>
    <div className="slider">
      <button className="arrow"  onClick={goToPrevious}>
        &lt;
      </button>
      <div className="card-container">
        {visibleCards.map((card, index) => (
          <div key={index} className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

           {/* <div
          key={index}
          className={`card ${index === 1 ? 'activee' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        > */}
          
            <img src={card.img} alt="Weather Platform" className="card-image" />
            <p className="card-description">{card.description}</p>
            
          </div>
        ))}
      </div>
      <button className="arrow" onClick={goToNext}>
        &gt;
      </button>
    </div>
    {/* <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div> */}
  </>
  );
};

export default Slider;

