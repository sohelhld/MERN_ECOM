import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = ({ images }) => {


    return (
        <Carousel>
            {images?.map((item, index) => (
                <div key={index}>
                    <img src={item} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default DemoCarousel;
