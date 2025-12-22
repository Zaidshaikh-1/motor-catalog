import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import './BookingPage.css';

const BookingPage = () => {
    const { carId } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === parseInt(carId));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: ''
    });

    if (!car) {
        return <div className="booking-page error">Car not found</div>;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking Request Sent for ${car.name}!\nWe will contact you at ${formData.email}.`);
        navigate('/');
    };

    return (
        <div className="booking-page">
            <div className="booking-container">
                <div className="booking-info">
                    <h1>Book a Test Ride</h1>
                    <div className="selected-car">
                        <img src={car.image} alt={car.name} />
                        <div className="car-details">
                            <h2>{car.name}</h2>
                            <p>{car.price}</p>
                            <p className="description">{car.description}</p>
                        </div>
                    </div>
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Preferred Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="submit-btn">Confirm Booking</button>
                </form>
            </div>
        </div>
    );
};

export default BookingPage;
