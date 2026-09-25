import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Clock, ShoppingBag, ArrowRight } from 'lucide-react';

interface OrderSectionProps {
  onOrderClick: () => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ onOrderClick }) => {
  return (
    <section id="contactos" className="py-20 relative bg-[#f0b90b] overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left: Realistic Smartphone Mockup */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 h-[480px] bg-black rounded-[42px] p-3 shadow-2xl border-4 border-neutral-900 ring-4 ring-black/20">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full z-30"></div>

              {/* Screen Content */}
              <div className="w-full h-full bg-[#fafafa] rounded-[34px] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-4 text-neutral-900 relative">
                
                {/* Top Status Bar & App Header */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-neutral-400 mb-2 px-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <div className="w-4 h-2 bg-neutral-800 rounded-xs"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[#f0b90b] text-[10px] font-black">
                        !T
                      </div>
                      <span className="font-display text-xs font-black text-black">Tasty App</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      Abierto Ahora
                    </span>
                  </div>

                  {/* Visual Cloud / Burger Graphic Banner */}
                  <div className="mt-3 bg-gradient-to-br from-amber-400 to-[#f0b90b] rounded-2xl p-4 text-center shadow-inner relative overflow-hidden">
                    <div className="absolute top-1 right-2 text-2xl opacity-40">☁️</div>
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md my-1">
                      <img
                        src="/src/assets/images/gourmet_smash_burger_1790350288433.jpg"
                        alt="Burger"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="font-display text-xs font-black text-black uppercase mt-1">
                      Tasty Smash 2x1
                    </p>
                    <p className="text-[9px] font-bold text-neutral-900">
                      Viernes de Azua
                    </p>
                  </div>

                  {/* Mini Menu Selection Preview */}
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white shadow-xs border border-neutral-100">
                      <span className="text-[11px] font-bold text-neutral-800">🍔 La Tasty Mash</span>
                      <span className="text-[11px] font-black text-amber-600">RD$450</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white shadow-xs border border-neutral-100">
                      <span className="text-[11px] font-bold text-neutral-800">🍟 Papas Loaded</span>
                      <span className="text-[11px] font-black text-amber-600">RD$350</span>
                    </div>
                  </div>
                </div>

                {/* Bottom App Order Button */}
                <button
                  onClick={onOrderClick}
                  className="w-full py-2.5 bg-black text-[#f0b90b] font-display font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Confirmar Pedido</span>
                </button>

              </div>
            </div>
          </div>

          {/* Right: Section Info & Order CTA */}
          <div className="md:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Main Title */}
            <div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-black tracking-tight leading-none">
                Crea tu <br />
                <span className="text-black">pedido</span>
              </h2>
            </div>

            {/* Quote Bubble Card (faithful to screenshot) */}
            <div className="bg-black text-white p-6 sm:p-7 rounded-3xl shadow-xl max-w-lg relative border-2 border-black">
              <span className="text-3xl text-[#f0b90b] font-serif absolute -top-3 left-6">“</span>
              <p className="font-display text-lg sm:text-xl font-bold text-[#f0b90b] mb-1">
                ¿Tienes hambre?
              </p>
              <p className="text-sm sm:text-base font-medium text-neutral-200 leading-relaxed">
                Elige tu hamburguesa favorita, arma tu combo y recibe tu pedido donde estés.
              </p>
            </div>

            {/* Address & Social Buttons (from screenshot: F74C+95G, C. Enriquillo, Azua 71000) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-neutral-900 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-black/10">
                <MapPin className="w-5 h-5 text-black shrink-0" />
                <div className="text-xs font-bold leading-tight">
                  <p className="text-black font-extrabold">F74C+95G, C. Enriquillo</p>
                  <p className="text-neutral-700">Azua 71000, República Dominicana</p>
                </div>
              </div>

              {/* Social Link buttons */}
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white hover:bg-neutral-100 text-black flex items-center justify-center border border-black/20 shadow-sm transition-transform hover:scale-105"
                  title="Instagram Tasty Burguer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/18295550199?text=Hola%20Tasty%20Burguer!%20Quiero%20hacer%20un%20pedido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
                  title="Hacer pedido por WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Big Black CTA Button: Ordenar */}
            <div className="pt-2">
              <button
                onClick={onOrderClick}
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-black hover:bg-neutral-900 text-[#f0b90b] font-display font-black text-lg uppercase tracking-wider shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-black/30"
              >
                <span>Ordenar Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
