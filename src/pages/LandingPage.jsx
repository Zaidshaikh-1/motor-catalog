import React, { useMemo } from 'react';
import SpotlightCarousel from '../components/SpotlightCarousel';
import { cars } from '../data/cars';
import './LandingPage.css';

const LandingPage = () => {
    // Select 4 random cars strictly for "spotlight of the month" as requested
    // Logic: Shuffle and pick 4, or just pick first 4 for now.
    // User asked "4 cars one car from each category" (implies 3 categories) + 1 more?
    // Let's pick 1 Sedan, 1 Coupe, 1 SUV, and 1 Random.

    const spotlightCars = useMemo(() => {
        const sedans = cars.filter(c => c.category === 'sedan');
        const coupes = cars.filter(c => c.category === 'coupe');
        const suvs = cars.filter(c => c.category === 'suv');

        // Fallback if data is missing, but we have mock data
        const selected = [
            sedans[0],
            coupes[0],
            suvs[0],
            cars.find(c => c !== sedans[0] && c !== coupes[0] && c !== suvs[0]) // Random 4th distinct car
        ].filter(Boolean); // remove undefined if any

        return selected;
    }, []);

    return (
        <div className="landing-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Experience the Future of Driving</h1>
                    <p className="hero-description">
                        Welcome to MZmotors, where innovation meets elegance.
                        Explore our curated collection of high-performance vehicles designed for the discerning driver.
                        Whether you seek the comfort of a sedan, the thrill of a coupe, or the dominance of an SUV,
                        we have the perfect ride waiting for you.
                    </p>
                </div>
            </section>

            <SpotlightCarousel cars={spotlightCars} />
        </div>
    );
};

export default LandingPage;
