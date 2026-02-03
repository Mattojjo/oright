import { useState, useEffect } from 'react';
import { banners } from './constants';
import './DynamicBanner.css';

export const DynamicBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
                setIsTransitioning(false);
            }, 500);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dynamic-banner">
            <div className={`banner-container ${isTransitioning ? 'slide-out' : 'slide-in'}`}>
                {banners[currentIndex]}
            </div>
        </div>
    );
};