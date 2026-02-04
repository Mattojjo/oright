import { useState, useEffect } from 'react';
import { banners } from './constants';

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
    <div className="rounded-xl text-center p-0 mx-8 my-24 mt-24 overflow-hidden relative">
      <style>{`
        @keyframes slideFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
      <div className={`transition-transform duration-[600ms] ease-in-out ${isTransitioning ? '-translate-x-full' : 'translate-x-0 animate-[slideFromRight_0.6s_ease-in-out]'}`}>
        {banners[currentIndex]}
      </div>
    </div>
  );
};