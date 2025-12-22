import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import './CatalogPage.css';

const CatalogPage = () => {
    const { category } = useParams();

    const filteredCars = useMemo(() => {
        if (!category || category === 'all') {
            return cars;
        }
        return cars.filter(car => car.category.toLowerCase() === category.toLowerCase());
    }, [category]);

    const displayTitle = category ? `${category}s` : 'All Models';

    return (
        <div className="catalog-page">
            <header className="catalog-header">
                <h1>{displayTitle}</h1>
                <p>{filteredCars.length} vehicles found</p>
            </header>

            <div className="car-grid">
                {filteredCars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>

            {filteredCars.length === 0 && (
                <div className="no-results">
                    <p>No cars found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default CatalogPage;
