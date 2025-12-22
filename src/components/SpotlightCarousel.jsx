import React from 'react';
import CarCard from './CarCard';
import './SpotlightCarousel.css';

const SpotlightCarousel = ({ cars }) => {
    return (
        <div className="spotlight-carousel-container">
            <div className="spotlight-header">
                <h2>Car Spotlight of the Month</h2>
                <p>Featured Selection</p>
            </div>
            <div className="carousel-track">
                {cars.map((car) => (
                    <div key={car.id} className="carousel-item">
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpotlightCarousel;
