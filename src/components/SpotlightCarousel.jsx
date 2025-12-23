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
                {/* Duplicate list for seamless infinite scroll */}
                {[...cars, ...cars].map((car, index) => (
                    <div key={`${car.id}-${index}`} className="carousel-item">
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpotlightCarousel;
