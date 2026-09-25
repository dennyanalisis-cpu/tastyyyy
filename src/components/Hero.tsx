import React, { useState } from 'react';
import { ArrowRight, Star, Sparkles, ChevronRight, Instagram, Facebook, Heart } from 'lucide-react';
import { MenuItem } from '../types';

interface HeroProps {
  onOrderClick: () => void;
  onHeroMeClick: () => void;
  featuredBurgers: MenuItem[];
  onSelectBurger: (burger: MenuItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOrderClick,
  onHeroMeClick,
  featuredBurgers,
  onSelectBurger,
}) => {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  return (
    <section id="hero" className="relative pt-6 pb-20 md:py-16 overflow-hidden">
      
      {/* Floating Left Social Bar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 bg-black/10 backdrop-blur-sm p-2 rounded-full border border-black/10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-black/80 hover:bg-black text-[#f0b90b] flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          title="Síguenos en Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-black/80 hover:bg-black text-[#f0b90b] flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          title="Síguenos en Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-black/80 hover:bg-black text-[#f0b90b] flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          title="Síguenos en TikTok"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .594.045.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.83 4.46V10.7a8.28 8.28 0 0 0 5.76 2.21v-3.45a4.85 4.85 0 0 1-2.92-.77z" />
          </svg>
        </a>
        <a
          href="https://wa.me/18295550199"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          title="WhatsApp Tasty Burguer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Label & Circular Seal Badge */}
        <div className="text-center relative max-w-4xl mx-auto mb-6">
          
          {/* Calidad Sabor Paladar Rotating Stamp */}
          <div className="absolute -top-3 right-4 md:right-16 z-20 pointer-events-none">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed border-black/80 flex items-center justify-center p-1 animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-black uppercase tracking-[0.25em] fill-black">
                  <textPath href="#circlePath" startOffset="0%">
                    ★ CALIDAD ★ SABOR ★ PALADAR
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-black bg-black text-[#f0b90b] px-2 py-0.5 rounded-full uppercase">
                100%
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-black tracking-tight leading-[0.95] drop-shadow-sm">
            !Tasty burguer
          </h1>
          <p className="mt-3 text-base sm:text-xl font-bold text-black/85 max-w-2xl mx-auto">
            Sabor que se disfruta hasta la última mordida
          </p>
        </div>

        {/* 3-Column Hero Grid: Left Proof & CTAs | Center Hero Photo | Right Quote & Mini Previews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          
          {/* Left Column: CTAs + Social Proof */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6 order-2 lg:order-1">
            
            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <button
                onClick={onOrderClick}
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-[#f0b90b] font-display font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Ordenar</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onHeroMeClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black border-2 border-black font-display font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>!Hero me</span>
              </button>
            </div>

            {/* Social Proof Box: Avatars + 350 Reviews */}
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-black/10 shadow-sm w-full max-w-xs">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#f0b90b] object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Cliente 1"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#f0b90b] object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Cliente 2"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#f0b90b] object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Cliente 3"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#f0b90b] object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                    alt="Cliente 4"
                  />
                </div>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
              </div>
              <div className="mt-2 text-left">
                <p className="font-extrabold text-sm text-black">
                  350+ Reviews & Clientes
                </p>
                <p className="text-xs text-neutral-600 font-medium">
                  Más de 1,000 clientes satisfechos en Azua
                </p>
              </div>
            </div>

          </div>

          {/* Center Column: Hero Photo (Woman eating delicious smash burger) */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer decorative glow / halo */}
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all pointer-events-none"></div>

              {/* Circular Cutout / Image Container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-8 border-white shadow-2xl bg-amber-400">
                <img
                  src="/src/assets/images/hero_girl_burger_1790350276453.jpg"
                  alt="Chica disfrutando una hamburguesa Tasty Burguer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Sticker on photo */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm text-[#f0b90b] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f0b90b] animate-ping"></span>
                  Carne 100% Angus Fresca
                </div>
              </div>

              {/* Decorative chili floating sticker */}
              <div className="absolute -top-2 -left-3 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg rotate-[-12deg]">
                🔥 Sabor Brutal
              </div>
            </div>
          </div>

          {/* Right Column: Quote Card & Mini Burger Slider */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-6 order-3">
            
            {/* Quote Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-black/10 shadow-lg text-left max-w-xs relative">
              <span className="text-4xl text-black/20 font-serif leading-none absolute top-3 left-4">“</span>
              <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-relaxed pt-2">
                Disfruta el sabor que estabas buscando, preparado con ingredientes de calidad, mucho sabor y ese toque especial que convierte cada comida en una experiencia inolvidable.
              </p>
              <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-bold text-neutral-600">
                <span>Chef & Fundadores</span>
                <span className="text-black font-extrabold">Tasty Burguer</span>
              </div>
            </div>

            {/* Mini Burger Thumbnails Preview */}
            <div className="w-full max-w-xs">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-black/70 mb-2 text-center lg:text-right">
                Especialidades de la Casa
              </p>
              <div className="grid grid-cols-3 gap-2">
                {featuredBurgers.slice(0, 3).map((burger, idx) => (
                  <button
                    key={burger.id}
                    onClick={() => {
                      setActiveThumbIndex(idx);
                      onSelectBurger(burger);
                    }}
                    className={`relative p-1.5 rounded-2xl bg-white border-2 transition-all duration-200 text-left ${
                      activeThumbIndex === idx
                        ? 'border-black shadow-md scale-105'
                        : 'border-transparent hover:border-black/30'
                    }`}
                  >
                    <div className="w-full h-16 rounded-xl overflow-hidden bg-neutral-100 mb-1">
                      <img
                        src={burger.image}
                        alt={burger.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-[9px] font-black text-black truncate text-center">
                      RD${burger.price}
                    </p>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
