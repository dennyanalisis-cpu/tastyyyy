import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

interface HeroMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const HeroMeModal: React.FC<HeroMeModalProps> = ({
  isOpen,
  onClose,
  items,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const [selectedBurger, setSelectedBurger] = useState<MenuItem>(() => {
    const burgers = items.filter((i) => i.category === 'Hamburguesas');
    return burgers[Math.floor(Math.random() * burgers.length)] || items[0];
  });
  const [isSpinning, setIsSpinning] = useState(false);

  const handleShuffle = () => {
    setIsSpinning(true);
    const burgers = items.filter((i) => i.category === 'Hamburguesas');
    setTimeout(() => {
      const random = burgers[Math.floor(Math.random() * burgers.length)];
      setSelectedBurger(random);
      setIsSpinning(false);
    }, 400);
  };

  const handleAddAndClose = () => {
    onAddToCart(selectedBurger, 1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-xs" />

      <div className="relative bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border-4 border-black z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-black text-[#f0b90b] flex items-center justify-center mx-auto mb-3 shadow">
          <Sparkles className="w-6 h-6 fill-[#f0b90b]" />
        </div>

        <h3 className="font-display text-2xl font-black text-black uppercase">
          !Hero Me Pick
        </h3>
        <p className="text-xs text-neutral-600 font-medium mb-4">
          ¿Indeciso? Deja que el Chef de Tasty elija por ti hoy.
        </p>

        {/* Selected Burger Card */}
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 mb-4">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-black mb-3 shadow-md">
            <img
              src={selectedBurger.image}
              alt={selectedBurger.name}
              className={`w-full h-full object-cover transition-transform ${isSpinning ? 'rotate-180 scale-90' : 'rotate-0 scale-100'}`}
              referrerPolicy="no-referrer"
            />
          </div>
          <h4 className="font-display text-lg font-black text-black uppercase">
            {selectedBurger.name}
          </h4>
          <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
            {selectedBurger.description}
          </p>
          <p className="font-display text-xl font-black text-amber-500 mt-2">
            RD${selectedBurger.price}
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleAddAndClose}
            className="w-full py-3.5 bg-black hover:bg-neutral-800 text-[#f0b90b] font-display font-black text-xs uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>¡Quiero Esta Hamburguesa!</span>
          </button>

          <button
            onClick={handleShuffle}
            disabled={isSpinning}
            className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>Elegir Otra Sorpresa</span>
          </button>
        </div>

      </div>
    </div>
  );
};
