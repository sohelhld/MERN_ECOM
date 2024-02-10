import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = ({ images }) => {
  const carouselStyles = {
    maxWidth: "800px",
    margin: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const imageStyles = {
    height: "300px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  };

  return (
    <Carousel
      showArrows={true}
      showStatus={true}
      showIndicators={true}
      showThumbs={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      stopOnHover={true}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={false}
      style={carouselStyles}
    >
      {images?.map((item, index) => (
        <div key={index}>
          <img
            style={imageStyles}
            src={item}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;
