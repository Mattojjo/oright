import { useState, useEffect } from 'react';
import { banners } from './constants';

const BANNER_INTERVAL = 8000;

export const DynamicBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, BANNER_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-8 my-24 mt-24 overflow-hidden relative rounded-3xl shadow-2xl">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div 
            key={index} 
            className="min-w-full flex-shrink-0 bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center relative overflow-hidden"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.overlayGradient}`}></div>
            <div className="relative bg-white/95 backdrop-blur-sm px-12 py-14 rounded-3xl max-w-[800px] mx-8 shadow-2xl border-2 border-white/50">
              <h1 className={`text-center m-0 mb-4 bg-gradient-to-r ${banner.textGradient} bg-clip-text text-transparent text-6xl font-black tracking-tight`}>
                {banner.title}
              </h1>
              <p className="text-center m-0 text-xl text-slate-600 font-medium leading-relaxed">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};