import React, { useState } from 'react';
import './Carousel.css';
export function Carousel() {
    return (
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'MG1.jpeg',
    'MG2.jpeg',
    'MG3.jpeg',
  ];

  function previousImage() {
    setCurrentIndex(currentIndex - 1);
  }

  function nextImage() {
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="carousel">
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default Carousel;