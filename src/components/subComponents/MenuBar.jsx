import { useState } from 'react';

export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#FFF8E7] shadow-[0_2px_8px_rgba(93,78,55,0.1)] z-[1000] border-b border-[#E8DCC8]">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold text-[#333] cursor-pointer transition-opacity duration-300 hover:opacity-70">oRight</div>
        <button className="flex flex-col gap-[5px] bg-none border-none cursor-pointer p-[5px] transition-opacity duration-300 hover:opacity-70" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="w-[25px] h-[3px] bg-[#333] rounded-sm"></span>
          <span className="w-[25px] h-[3px] bg-[#333] rounded-sm"></span>
          <span className="w-[25px] h-[3px] bg-[#333] rounded-sm"></span>
        </button>
      </div>
      {isOpen && (
        <nav className="flex flex-col px-8 py-4 bg-[#f9f9f9] border-t border-[#e0e0e0]">
          <a href="#appointment" className="py-3 text-[#333] no-underline text-lg border-b border-[#e0e0e0] transition-colors duration-300 hover:text-[#007bff]">Appointment</a>
          <a href="#about" className="py-3 text-[#333] no-underline text-lg border-b border-[#e0e0e0] transition-colors duration-300 hover:text-[#007bff]">About</a>
          <a href="#careers" className="py-3 text-[#333] no-underline text-lg border-b border-[#e0e0e0] transition-colors duration-300 hover:text-[#007bff]">Careers</a>
          <a href="#contact" className="py-3 text-[#333] no-underline text-lg border-b-0 transition-colors duration-300 hover:text-[#007bff]">Contact</a>
        </nav>
      )}
    </div>
  );
};
