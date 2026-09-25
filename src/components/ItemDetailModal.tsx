import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, notes?: string) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [specialNote, setSpecialNote] = useState('');

  const extras = [
    { name: 'Extra Queso Cheddar Fundido', price: 60 },
    { name: 'Tocineta Crujiente Adicional', price: 80 },
    { name: 'Salsa Tártara Tasty Extra', price: 40 },
    { name: 'Pepinillos Dulces Extra', price: 30 },
  ];

  const toggleExtra = (extraName: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraName) ? prev.filter((e) => e !== extraName) : [...prev, extraName]
    );
  };

  const extraCost = selectedExtras.reduce((sum, name) => {
    const found = extras.find((e) => e.name === name);
    return sum + (found ? found.price : 0);
  }, 0);

  const unitTotal = item.price + extraCost;
  const lineTotal = unitTotal * quantity;

  const handleAdd = () => {
    const fullNotes = [
      ...selectedExtras,
      specialNote ? `Nota: ${specialNote}` : '',
    ]
      .filter(Boolean)
      .join(', ');

    onAddToCart(item, quantity, fullNotes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-xs" />

      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-black z-10 my-8">
        {/* Top Image */}
        <div className="relative h-64 w-full bg-neutral-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-4 bg-black text-[#f0b90b] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            {item.category} • {item.weight}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-display text-2xl font-black text-black uppercase">
                {item.name}
              </h3>
              <p className="text-xs font-semibold text-neutral-500 mt-0.5">
                Ingredientes frescos preparados al momento
              </p>
            </div>
            <span className="font-display text-2xl font-black text-amber-500">
              RD${unitTotal}
            </span>
          </div>

          <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
            {item.description}
          </p>

          {/* Extras / Customization */}
          <div className="mt-5 pt-4 border-t border-neutral-100">
            <h4 className="text-xs font-extrabold text-black uppercase tracking-wider mb-2.5">
              Personaliza tu orden (+Extras)
            </h4>
            <div className="space-y-2">
              {extras.map((extra) => {
                const isSelected = selectedExtras.includes(extra.name);
                return (
                  <label
                    key={extra.name}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
                      isSelected
                        ? 'border-black bg-amber-50 text-black'
                        : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleExtra(extra.name)}
                        className="rounded-sm text-black focus:ring-0"
                      />
                      <span>{extra.name}</span>
                    </div>
                    <span className="text-amber-600 font-extrabold">+RD${extra.price}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Note */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Instrucciones (ej: sin mayonesa, cebolla bien cocida...)"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
            {/* Quantity Stepper */}
            <div className="flex items-center gap-3 bg-neutral-100 px-3 py-1.5 rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-sm hover:bg-neutral-200"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-display font-black text-sm text-black w-4 text-center tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-sm hover:bg-neutral-200"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              className="flex-1 py-3.5 bg-black hover:bg-neutral-800 text-[#f0b90b] font-display font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Agregar • RD${lineTotal}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
