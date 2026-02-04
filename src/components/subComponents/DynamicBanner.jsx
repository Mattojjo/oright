import { useState, useEffect } from 'react';
import { banners } from './constants';
import './DynamicBanner.css';

const SLIDE_DURATION = 500;
const BANNER_INTERVAL = 10000;

export const DynamicBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        setIsTransitioning(false);
      }, SLIDE_DURATION);
    }, BANNER_INTERVAL);

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