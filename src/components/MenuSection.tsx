import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart, Check, Heart, Info } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuSectionProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onOpenDetails: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  onAddToCart,
  onOpenDetails,
}) => {
  const categories: Array<'Hamburguesas' | 'Combos' | 'Bebidas' | 'HotDogs' | 'Papas'> = [
    'Hamburguesas',
    'Combos',
    'Bebidas',
    'HotDogs',
    'Papas',
  ];

  const [activeCategory, setActiveCategory] = useState<'Hamburguesas' | 'Combos' | 'Bebidas' | 'HotDogs' | 'Papas'>('Hamburguesas');
  
  // Local quantity counters for each item card
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});

  const filteredItems = items.filter((item) => item.category === activeCategory);

  const getItemQuantity = (id: string) => quantities[id] || 1;

  const handleIncrement = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleAdd = (item: MenuItem) => {
    const qty = getItemQuantity(item.id);
    onAddToCart(item, qty);

    // Brief checkmark animation feedback
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 relative bg-[#f0b90b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight uppercase">
            NUESTRO MENU
          </h2>
          <p className="mt-2 text-base sm:text-lg font-bold text-neutral-800">
            Disfruta nuestras variedades, tenemos de todo
          </p>
        </div>

        {/* Category Filter Tabs (Single-line interactive segmented control) */}
        <div className="flex items-center justify-center overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="inline-flex p-1.5 bg-black/15 backdrop-blur-md rounded-full gap-1 border border-black/10">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-display font-black text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-[#f0b90b] shadow-lg scale-105'
                      : 'text-black hover:bg-black/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid: 3x2 on desktop as shown in screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const qty = getItemQuantity(item.id);
            const isAdded = addedAnimation[item.id];

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-6 shadow-xl border-2 border-black/5 hover:border-black/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image & Badge */}
                <div>
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-5 border border-neutral-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {item.isPopular && (
                      <span className="absolute top-3 left-3 bg-black text-[#f0b90b] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        ★ Favorito
                      </span>
                    )}

                    <button
                      onClick={() => onOpenDetails(item)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow"
                      title="Ver detalles"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Info */}
                  <div className="text-center">
                    <h3 className="font-display text-xl font-black text-black tracking-tight uppercase group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-bold text-neutral-400 mt-0.5 uppercase tracking-widest">
                      {item.weight}
                    </p>
                    <p className="text-xs text-neutral-600 font-medium mt-2 line-clamp-2 px-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Price & Quantity / Add Row */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col items-center">
                  
                  {/* Price in Dominican Pesos */}
                  <div className="mb-3">
                    <span className="font-display text-2xl font-black text-amber-500 tracking-tight">
                      RD${item.price}
                    </span>
                  </div>

                  {/* Interactive Quantity Stepper & Cart Button (matching screenshot pill) */}
                  <div className="flex items-center gap-2 bg-black text-[#f0b90b] px-3 py-1.5 rounded-full shadow-md w-full max-w-[200px] justify-between">
                    
                    {/* Decrement */}
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors active:scale-90"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>

                    {/* Quantity Display */}
                    <span className="font-display font-black text-sm text-[#f0b90b] w-6 text-center tabular-nums">
                      {qty}
                    </span>

                    {/* Increment */}
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors active:scale-90"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>

                    {/* Add to Cart button */}
                    <button
                      onClick={() => handleAdd(item)}
                      className="ml-1 w-8 h-8 rounded-full bg-[#f0b90b] hover:bg-amber-400 text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
                      title="Agregar al carrito"
                      aria-label="Agregar al carrito"
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 stroke-[3] text-black" />
                      ) : (
                        <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </button>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
