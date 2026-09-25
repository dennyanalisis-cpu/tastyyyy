import React, { useState } from 'react';
import { X, User, Phone, MapPin, Award, Clock, Heart } from 'lucide-react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('Denny Sanchez');
  const [phone, setPhone] = useState('(829) 555-0199');
  const [address, setAddress] = useState('Calle Enriquillo #45, Azua');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-[#f0b90b] z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#f0b90b] text-black font-display font-black text-2xl flex items-center justify-center mx-auto mb-3 shadow-md border-2 border-black">
            DS
          </div>
          <h3 className="font-display text-2xl font-black text-black">
            Perfil de Usuario
          </h3>
          <p className="text-xs text-neutral-500 font-semibold">
            Tasty VIP Member • Azua
          </p>
        </div>

        {/* Loyalty Reward Progress */}
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl mb-5">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-1.5">
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4 text-amber-600" />
              Tarjeta de Fidelidad
            </span>
            <span>3 / 5 Burgers</span>
          </div>
          <div className="w-full bg-amber-200 h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#f0b90b] h-full w-[60%] rounded-full border border-black/20"></div>
          </div>
          <p className="text-[11px] text-amber-800 font-medium mt-2">
            ¡Te faltan solo 2 hamburguesas para ganar una gratis!
          </p>
        </div>

        {/* Saved User Data */}
        <form onSubmit={handleSave} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Nombre de Cliente
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-neutral-300 font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Teléfono
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-neutral-300 font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Dirección de Entrega
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-neutral-300 font-semibold"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black hover:bg-neutral-800 text-[#f0b90b] font-display font-black text-xs uppercase tracking-wider rounded-xl shadow transition-colors"
          >
            {isSaved ? '✓ ¡Datos Guardados!' : 'Guardar Datos'}
          </button>
        </form>

      </div>
    </div>
  );
};
