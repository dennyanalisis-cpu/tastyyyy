import React, { useState } from 'react';
import { Camera, Heart, Users, Sparkles } from 'lucide-react';

export const FamilyMarquee: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const gallery = [
    {
      id: 1,
      caption: 'Los pequeños disfrutando su Tasty favorita en familia',
      tag: 'Clientes Felices',
      image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      caption: 'Nuestros parrilleros preparando los patties con amor y técnica smash',
      tag: 'Equipo de Cocina',
      image: '/src/assets/images/burger_team_crew_1790350319802.jpg',
    },
    {
      id: 3,
      caption: 'Nuestro icónico neón iluminando las noches de Azua',
      tag: 'Vibra Nocturna',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      caption: 'El gran equipo completo que hace posible cada mordida inolvidable',
      tag: 'Familia Tasty',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-16 relative bg-[#f0b90b] overflow-hidden">
      
      {/* Repeating Marquee Tape Banner */}
      <div className="bg-black py-4 -rotate-1 shadow-2xl relative z-20 overflow-hidden mb-12">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 text-[#f0b90b] font-display text-xl sm:text-2xl font-black uppercase tracking-widest">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                <span>• FAMILIA TASTY BURGUER</span>
                <span>• SABOR ARTESANAL</span>
                <span>• AZUA, RD</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtitle / Header */}
        <div className="text-center mb-10">
          <span className="font-handwriting text-2xl sm:text-3xl text-neutral-900 font-bold bg-white/70 px-6 py-2 rounded-full border border-black/10 inline-block shadow-sm">
            Momentos reales, sonrisas reales en cada visita
          </span>
        </div>

        {/* Polaroid / Photo Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Retro Cartoon Burger Mascot Sticker Overlay on the Left */}
          <div className="hidden sm:block absolute -top-10 -left-6 z-30 pointer-events-none animate-float">
            <div className="bg-white p-2 rounded-2xl border-2 border-black shadow-2xl rotate-[-8deg] flex flex-col items-center">
              <span className="text-4xl">🍔</span>
              <span className="font-display text-[9px] font-black uppercase tracking-wider text-black mt-1">
                !Tasty Crew
              </span>
            </div>
          </div>

          {/* Retro Cartoon Sticker on the Right */}
          <div className="hidden sm:block absolute -bottom-8 -right-4 z-30 pointer-events-none animate-float">
            <div className="bg-white p-2 rounded-2xl border-2 border-black shadow-2xl rotate-[12deg] flex flex-col items-center">
              <span className="text-4xl">🍟</span>
              <span className="font-display text-[9px] font-black uppercase tracking-wider text-black mt-1">
                Crispy Fries
              </span>
            </div>
          </div>

          {gallery.map((photo, index) => {
            const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
            const rot = rotations[index % rotations.length];

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.image)}
                className={`group bg-white p-3 pb-5 rounded-2xl border-2 border-black/15 shadow-xl hover:shadow-2xl transition-all duration-300 hover:rotate-0 hover:-translate-y-2 cursor-pointer ${rot}`}
              >
                {/* Photo frame */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-100 mb-3 border border-neutral-200">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {photo.tag}
                  </div>
                </div>

                {/* Caption handwritten style */}
                <p className="font-handwriting text-sm text-neutral-800 font-bold leading-tight px-1">
                  {photo.caption}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="max-w-2xl w-full bg-white p-4 rounded-3xl border-4 border-[#f0b90b] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <img
              src={selectedPhoto}
              alt="Foto ampliada"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-xs font-bold text-neutral-500 mt-2">
              Haz clic en cualquier lugar para cerrar
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
