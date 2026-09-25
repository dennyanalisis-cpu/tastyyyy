import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Flame, Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

interface ServicesShowcaseProps {
  burgers: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ burgers, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentBurger = burgers[currentIndex] || burgers[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? burgers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === burgers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="servicios" className="py-20 relative overflow-hidden bg-[#f0b90b]">
      
      {/* Background Giant Stencil Typography: HAMBURGUESA HAMBURGUESA */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden opacity-25">
        <div className="font-display text-7xl sm:text-9xl md:text-[140px] font-black tracking-tighter text-black whitespace-nowrap leading-none">
          HAMBURGUESA
        </div>
        <div 
          className="font-display text-7xl sm:text-9xl md:text-[140px] font-black tracking-tighter text-transparent whitespace-nowrap leading-none"
          style={{ WebkitTextStroke: '2px black' }}
        >
          HAMBURGUESA
        </div>
        <div className="font-display text-7xl sm:text-9xl md:text-[140px] font-black tracking-tighter text-black/40 whitespace-nowrap leading-none">
          HAMBURGUESA
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label: SERVICIOS */}
        <div className="mb-4">
          <span className="font-display text-2xl sm:text-3xl font-black uppercase tracking-widest text-black bg-black/10 px-4 py-1.5 rounded-full inline-block">
            SERVICIOS
          </span>
        </div>

        {/* Center Showcase Stage */}
        <div className="relative flex flex-col items-center justify-center my-6">
          
          {/* Main Giant Burger Presentation with Chili on Left & Navigation Arrows */}
          <div className="relative w-full max-w-2xl flex items-center justify-center">
            
            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:-left-6 md:-left-12 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-white text-black shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-2 border-black"
              aria-label="Anterior hamburguesa"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>

            {/* Left Decorative Chili Pepper Sticker */}
            <div className="absolute -left-2 sm:left-4 bottom-12 z-20 pointer-events-none animate-float">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl filter drop-shadow-lg transform -rotate-12">
                🌶️
              </div>
              <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider block text-center">
                Spicy Sabor
              </span>
            </div>

            {/* Central Giant Burger Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-black bg-white group">
              <img
                src={currentBurger.image}
                alt={currentBurger.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => onAddToCart(currentBurger)}
                  className="px-6 py-2.5 rounded-full bg-[#f0b90b] text-black font-display font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Agregar • RD${currentBurger.price}</span>
                </button>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 sm:-right-6 md:-right-12 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-white text-black shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-2 border-black"
              aria-label="Siguiente hamburguesa"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>

          </div>

          {/* Burger Info Pill */}
          <div className="mt-6 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-black tracking-tight">
              {currentBurger.name}
            </h3>
            <div className="flex items-center justify-center gap-3 mt-1 text-sm font-black text-neutral-800">
              <span className="bg-black text-[#f0b90b] px-3 py-0.5 rounded-full text-xs">
                RD${currentBurger.price}
              </span>
              <span>•</span>
              <span className="text-black/80">{currentBurger.weight}</span>
            </div>
          </div>

          {/* Bottom Cursive Quote Card (matching the screenshot badge) */}
          <div className="mt-8 max-w-xl mx-auto bg-white/90 backdrop-blur-md px-8 py-5 rounded-full border-2 border-black shadow-xl text-center relative">
            <span className="text-xl sm:text-2xl text-black font-serif absolute -top-3 left-6 bg-[#f0b90b] px-2 rounded-full border border-black leading-none">
              “
            </span>
            <p className="font-handwriting text-lg sm:text-2xl text-neutral-900 leading-snug font-bold">
              Una variedad de hamburguesas preparadas con ingredientes frescos, carne jugosa y combinaciones llenas de sabor.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
