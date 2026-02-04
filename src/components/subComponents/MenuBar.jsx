import { useState } from 'react';

export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(6,182,212,0.1)] z-[1000] border-b-2 border-cyan-100">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent cursor-pointer transition-opacity duration-300 hover:opacity-70">oRight</div>
        <button className="flex flex-col gap-[5px] bg-none border-none cursor-pointer p-[5px] transition-opacity duration-300 hover:opacity-70" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="w-[25px] h-[3px] bg-gradient-to-r from-cyan-600 to-purple-600 rounded-sm"></span>
          <span className="w-[25px] h-[3px] bg-gradient-to-r from-cyan-600 to-purple-600 rounded-sm"></span>
          <span className="w-[25px] h-[3px] bg-gradient-to-r from-cyan-600 to-purple-600 rounded-sm"></span>
        </button>
      </div>
      {isOpen && (
        <nav className="flex flex-col px-8 py-4 bg-white/95 backdrop-blur-sm border-t border-cyan-100">
          <a href="#appointment" className="py-3 text-slate-700 no-underline text-lg border-b border-cyan-100 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:translate-x-1">Appointment</a>
          <a href="#about" className="py-3 text-slate-700 no-underline text-lg border-b border-cyan-100 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:translate-x-1">About</a>
          <a href="#careers" className="py-3 text-slate-700 no-underline text-lg border-b border-cyan-100 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:translate-x-1">Careers</a>
          <a href="#contact" className="py-3 text-slate-700 no-underline text-lg border-b-0 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:translate-x-1">Contact</a>
        </nav>
      )}
    </div>
  );
};
