import React from 'react';
import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <div className="card-image-wrapper">
                <img src={car.image} alt={car.name} className="card-image" />
                <div className="card-overlay">
                    <span className="car-category">{car.category}</span>
                </div>
            </div>
            <div className="card-content">
                <h3 className="car-title">{car.name}</h3>
                <p className="car-price">{car.price}</p>
                <div className="card-actions">
                    <Link to={`/booking/${car.id}`} className="btn btn-primary">
                        Book Test Ride
                    </Link>
                    <a href={car.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
