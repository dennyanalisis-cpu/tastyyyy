import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 800 || subtotal === 0 ? 0 : 100;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 bg-[#f0b90b] border-b border-black/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-black text-[#f0b90b] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-black">
                  Tu Carrito
                </h3>
                <p className="text-xs font-semibold text-black/70">
                  {cart.length} {cart.length === 1 ? 'producto' : 'productos'} seleccionados
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 text-black transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#f0b90b]/20 flex items-center justify-center text-4xl mb-4">
                  🍔
                </div>
                <h4 className="font-display text-lg font-black text-black">
                  Tu carrito está vacío
                </h4>
                <p className="text-xs text-neutral-500 max-w-xs mt-1">
                  Agrega tu hamburguesa o combo favorito de Tasty Burguer para comenzar tu orden.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-black text-[#f0b90b] font-display font-black text-xs uppercase tracking-wider rounded-full shadow hover:bg-neutral-800 transition-colors"
                >
                  Ver Menú
                </button>
              </div>
            ) : (
              cart.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-200 shrink-0 border border-neutral-300">
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Title & Price */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-display text-sm font-black text-black truncate uppercase">
                      {cartItem.item.name}
                    </h5>
                    <p className="text-xs font-black text-amber-600">
                      RD${cartItem.item.price}
                    </p>

                    {/* Stepper */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                        className="w-6 h-6 rounded-md bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-black tabular-nums w-4 text-center">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                        className="w-6 h-6 rounded-md bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button & Line Total */}
                  <div className="flex flex-col items-end justify-between self-stretch">
                    <button
                      onClick={() => onRemoveItem(cartItem.item.id)}
                      className="text-neutral-400 hover:text-red-500 p-1 transition-colors"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <span className="font-display text-xs font-black text-black tabular-nums">
                      RD${cartItem.item.price * cartItem.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer / Checkout Calculation */}
          {cart.length > 0 && (
            <div className="p-6 bg-neutral-50 border-t border-neutral-200 space-y-3">
              <div className="space-y-1.5 text-xs font-semibold text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-black font-bold tabular-nums">RD${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery en Azua</span>
                  <span className="text-black font-bold tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 font-extrabold">GRATIS</span>
                    ) : (
                      `RD$${deliveryFee}`
                    )}
                  </span>
                </div>
                {subtotal < 800 && (
                  <p className="text-[10px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    💡 Agrega RD${800 - subtotal} más para envío gratis en Azua.
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-neutral-200 flex justify-between items-center">
                <span className="font-display text-base font-black text-black uppercase">
                  Total
                </span>
                <span className="font-display text-2xl font-black text-black tabular-nums">
                  RD${total}
                </span>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-4 bg-black hover:bg-neutral-800 text-[#f0b90b] font-display font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Completar Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
