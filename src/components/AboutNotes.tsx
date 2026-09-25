import React from 'react';

export const AboutNotes: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 relative overflow-hidden bg-[#f0b90b]">
      
      {/* Decorative background watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="font-display text-[160px] font-black uppercase text-black tracking-widest whitespace-nowrap">
          TASTY FAMILY
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Circular Stamp on right */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
              Conoce más sobre <br />
              <span className="underline decoration-black decoration-wavy decoration-2">
                nosotros y nuestra familia
              </span>
            </h2>
          </div>

          {/* Stamp Badge: "calidad servicio delicias Tasty Burguer" */}
          <div className="relative pointer-events-none">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-dashed border-black/80 flex items-center justify-center p-1 animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="aboutStampPath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
                <text className="text-[10px] font-black uppercase tracking-[0.24em] fill-black">
                  <textPath href="#aboutStampPath" startOffset="0%">
                    CALIDAD • SERVICIO • DELICIAS • TASTY BURGUER •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-black text-[#f0b90b] flex items-center justify-center text-xs font-black">
                ★
              </div>
            </div>
          </div>
        </div>

        {/* 3 Tilted Sticky Note Paper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          {/* Card 1: -3 deg tilt */}
          <div className="relative group transition-transform duration-300 hover:rotate-0 hover:-translate-y-2">
            {/* Masking tape on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-200/90 backdrop-blur-sm border border-amber-300/60 shadow-xs rotate-[-2deg] z-20"></div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-black/10 min-h-[220px] flex flex-col justify-between transform -rotate-2 group-hover:rotate-0 transition-transform">
              <p className="text-xl font-bold text-neutral-800 leading-snug">
                En <span className="font-extrabold text-black">Tasty Burger</span> nos apasiona crear hamburguesas.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-[#f0b90b] text-black font-display font-black text-lg flex items-center justify-center shadow-inner">
                  1
                </div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Pasión
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 1 deg tilt */}
          <div className="relative group transition-transform duration-300 hover:rotate-0 hover:-translate-y-2">
            {/* Masking tape on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-200/90 backdrop-blur-sm border border-amber-300/60 shadow-xs rotate-[1deg] z-20"></div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-black/10 min-h-[220px] flex flex-col justify-between transform rotate-1 group-hover:rotate-0 transition-transform">
              <p className="text-xl font-bold text-neutral-800 leading-snug">
                Llenas de sabor, utilizando <span className="font-extrabold text-black">ingredientes seleccionados</span> de primera calidad.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-[#f0b90b] text-black font-display font-black text-lg flex items-center justify-center shadow-inner">
                  2
                </div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Calidad
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: 3 deg tilt */}
          <div className="relative group transition-transform duration-300 hover:rotate-0 hover:-translate-y-2">
            {/* Masking tape on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-200/90 backdrop-blur-sm border border-amber-300/60 shadow-xs rotate-[3deg] z-20"></div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-black/10 min-h-[220px] flex flex-col justify-between transform rotate-3 group-hover:rotate-0 transition-transform">
              <p className="text-xl font-bold text-neutral-800 leading-snug">
                Nacimos con una idea sencilla: ofrecer <span className="font-extrabold text-black">comida rápida deliciosa</span>, fresca y preparada con dedicación.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-[#f0b90b] text-black font-display font-black text-lg flex items-center justify-center shadow-inner">
                  3
                </div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Dedicación
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
