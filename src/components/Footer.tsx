import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t-4 border-[#f0b90b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f0b90b] flex items-center justify-center text-black font-black text-lg">
                !T
              </div>
              <span className="font-display text-2xl font-black text-[#f0b90b] tracking-tight">
                !Tasty burguer
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-medium leading-relaxed">
              Sabor que se disfruta hasta la última mordida. Las mejores hamburguesas smash artesanales de Azua, preparadas con ingredientes frescos y carne 100% Angus.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-[#f0b90b] hover:text-black text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-[#f0b90b] hover:text-black text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/18295550199"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-black text-[#f0b90b] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros & Familia
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Nuestras Especialidades
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menú Completo
                </a>
              </li>
              <li>
                <a href="#contactos" className="hover:text-white transition-colors">
                  Haz tu Pedido / Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Horarios */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-black text-[#f0b90b] uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#f0b90b]" />
              <span>Horarios de Atención</span>
            </h4>
            <div className="text-xs text-neutral-400 space-y-1.5 font-medium">
              <div className="flex justify-between py-1 border-b border-neutral-900">
                <span>Martes - Jueves:</span>
                <span className="text-white font-bold">6:00 PM - 11:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-900">
                <span>Viernes - Sábado:</span>
                <span className="text-[#f0b90b] font-bold">6:00 PM - 1:00 AM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-900">
                <span>Domingo:</span>
                <span className="text-white font-bold">5:30 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between py-1 text-neutral-500">
                <span>Lunes:</span>
                <span className="text-red-400 font-bold">Cerrado (Descanso)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Ubicación & Contacto */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-black text-[#f0b90b] uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f0b90b]" />
              <span>Ubicación</span>
            </h4>
            <p className="text-xs text-neutral-300 font-medium leading-relaxed">
              F74C+95G, C. Enriquillo, <br />
              Azua 71000, República Dominicana
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#f0b90b]" />
                <span className="text-white font-bold">(829) 555-0199</span>
              </p>
              <p className="text-[11px] text-neutral-500">
                Delivery disponible en todo Azua centro y zonas aledañas.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 !Tasty Burguer. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Hecho con dedicación y sabor artesanal</span>
            <span>🍔</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
