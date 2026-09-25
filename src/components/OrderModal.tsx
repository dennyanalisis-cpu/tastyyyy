import React, { useState } from 'react';
import { X, CheckCircle, Send, MapPin, Phone, User, ShoppingBag, Clock } from 'lucide-react';
import { CartItem } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderSuccess: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'transfer'>('cash');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal >= 800 || subtotal === 0 ? 0 : 100) : 0;
  const total = subtotal + deliveryFee;

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || (orderType === 'delivery' && !address)) {
      return;
    }

    const newOrderId = `TB-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(newOrderId);
    setIsSubmitted(true);

    // Format WhatsApp Message
    const itemsList = cart
      .map((c) => `• ${c.quantity}x ${c.item.name} (RD$${c.item.price * c.quantity})`)
      .join('%0A');

    const message = `🍔 *¡PEDIDO TASTY BURGUER!* (%23${newOrderId})%0A%0A` +
      `👤 *Cliente:* ${encodeURIComponent(customerName)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(customerPhone)}%0A` +
      `📍 *Modalidad:* ${orderType === 'delivery' ? 'Delivery a Domicilio' : 'Recoger en el Local'}%0A` +
      (orderType === 'delivery' ? `🏠 *Dirección:* ${encodeURIComponent(address)} (Azua)%0A` : '') +
      (notes ? `📝 *Notas:* ${encodeURIComponent(notes)}%0A` : '') +
      `💳 *Pago:* ${paymentMethod === 'cash' ? 'Efectivo contra entrega' : 'Transferencia Bancaria'}%0A%0A` +
      `📋 *Detalle:*%0A${itemsList}%0A%0A` +
      `💰 *Subtotal:* RD$${subtotal}%0A` +
      `🛵 *Delivery:* ${deliveryFee === 0 ? 'GRATIS' : `RD$${deliveryFee}`}%0A` +
      `🔥 *TOTAL:* RD$${total}`;

    const whatsappUrl = `https://wa.me/18295550199?text=${message}`;

    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-xs" />

      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-[#f0b90b] my-8 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#f0b90b] text-black font-display font-black text-xl flex items-center justify-center mx-auto mb-2 shadow-md">
                !T
              </div>
              <h3 className="font-display text-2xl font-black text-black uppercase">
                Finalizar tu Pedido
              </h3>
              <p className="text-xs text-neutral-600 font-medium">
                Completa tus datos y enviaremos tu pedido directo a cocina por WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSendOrder} className="space-y-4">
              
              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    orderType === 'delivery'
                      ? 'bg-black text-[#f0b90b] shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  🛵 Delivery (Azua)
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    orderType === 'pickup'
                      ? 'bg-black text-[#f0b90b] shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  🏪 Recoger en Local
                </button>
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Denny Sanchez"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Customer Phone */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Teléfono / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="Ej. (829) 555-0199"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Delivery Address (if delivery) */}
              {orderType === 'delivery' && (
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Dirección en Azua *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Calle, No. de casa, Sector o punto de referencia"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Instrucciones o cambios especiales
                </label>
                <input
                  type="text"
                  placeholder="Ej. Sin cebolla, extra salsa, refresco bien frío"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Método de Pago
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-bold ${
                      paymentMethod === 'cash'
                        ? 'border-black bg-amber-50 text-black'
                        : 'border-neutral-200 text-neutral-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cash'}
                      onChange={() => setPaymentMethod('cash')}
                      className="text-black focus:ring-0"
                    />
                    <span>💵 Efectivo</span>
                  </label>
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-bold ${
                      paymentMethod === 'transfer'
                        ? 'border-black bg-amber-50 text-black'
                        : 'border-neutral-200 text-neutral-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'transfer'}
                      onChange={() => setPaymentMethod('transfer')}
                      className="text-black focus:ring-0"
                    />
                    <span>📲 Transferencia</span>
                  </label>
                </div>
              </div>

              {/* Order Summary Pill */}
              <div className="bg-[#f0b90b]/15 p-3.5 rounded-2xl border border-[#f0b90b] flex justify-between items-center text-xs font-bold">
                <div>
                  <p className="text-black font-extrabold uppercase">Total de la Orden</p>
                  <p className="text-[11px] text-neutral-600">
                    {cart.reduce((sum, c) => sum + c.quantity, 0)} productos {deliveryFee === 0 ? '• Envío Gratis' : '+ RD$100 Delivery'}
                  </p>
                </div>
                <span className="font-display text-xl font-black text-black">
                  RD${total}
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-black hover:bg-neutral-900 text-[#f0b90b] font-display font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Orden por WhatsApp</span>
              </button>

            </form>
          </div>
        ) : (
          /* Order Confirmed Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl font-black text-black uppercase">
              ¡Pedido Enviado a Cocina!
            </h3>

            <p className="text-xs text-neutral-600 max-w-xs mx-auto">
              Tu orden <span className="font-bold text-black font-mono">#{orderId}</span> ha sido enviada al WhatsApp oficial de Tasty Burguer Azua.
            </p>

            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-left text-xs space-y-2">
              <div className="flex justify-between font-bold">
                <span>Tiempo estimado:</span>
                <span className="text-amber-600">20 - 35 minutos ⏱️</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total a pagar:</span>
                <span className="text-black">RD${total} ({paymentMethod === 'cash' ? 'Efectivo' : 'Transferencia'})</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 bg-black text-[#f0b90b] font-display font-black text-xs uppercase tracking-wider rounded-full shadow hover:bg-neutral-800 transition-colors"
            >
              Listo, Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
