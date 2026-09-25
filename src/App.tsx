/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutNotes } from './components/AboutNotes';
import { ServicesShowcase } from './components/ServicesShowcase';
import { MenuSection } from './components/MenuSection';
import { FamilyMarquee } from './components/FamilyMarquee';
import { ReviewsSection } from './components/ReviewsSection';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { UserModal } from './components/UserModal';
import { HeroMeModal } from './components/HeroMeModal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { MENU_ITEMS, REVIEWS_DATA } from './data/menuData';
import { CartItem, MenuItem } from './types';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      item: MENU_ITEMS[0], // Start with 1 La Tasty Mash as shown in the screenshot active counter
      quantity: 1,
    },
  ]);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isHeroMeModalOpen, setIsHeroMeModalOpen] = useState(false);
  const [detailItem, setDetailItem] = useState<MenuItem | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (item: MenuItem, quantity: number = 1, notes?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (notes) updated[existingIndex].notes = notes;
        return updated;
      } else {
        return [...prev, { item, quantity, notes }];
      }
    });

    showToast(`¡${item.name} (${quantity}) agregado al carrito! 🍔`);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((c) => (c.item.id === id ? { ...c, quantity: newQty } : c))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
    showToast('Producto eliminado del carrito');
  };

  const handleOrderSuccess = () => {
    // Keep cart or clear upon confirmation
    setCart([]);
  };

  const featuredBurgers = MENU_ITEMS.filter((i) => i.category === 'Hamburguesas');

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#121212] text-white' : 'bg-[#f0b90b] text-neutral-900'} transition-colors duration-300`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 flex items-center gap-2 bg-black text-[#f0b90b] px-4 py-2.5 rounded-full shadow-2xl border-2 border-[#f0b90b] text-xs font-black uppercase tracking-wider animate-in fade-in slide-in-from-top-4 duration-200">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Navbar */}
      <Navbar
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setIsUserModalOpen={setIsUserModalOpen}
        setIsOrderModalOpen={setIsOrderModalOpen}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOrderClick={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onHeroMeClick={() => setIsHeroMeModalOpen(true)}
          featuredBurgers={featuredBurgers}
          onSelectBurger={(burger) => setDetailItem(burger)}
        />

        {/* 3 Paper Sticky Notes Section: Conoce más sobre nosotros y nuestra familia */}
        <AboutNotes />

        {/* Servicios: Giant Smash Burger Showcase with background typography */}
        <ServicesShowcase
          burgers={featuredBurgers}
          onAddToCart={(item) => handleAddToCart(item, 1)}
        />

        {/* Nuestro Menu: Tabbed category grid with cards and quantity steppers */}
        <MenuSection
          items={MENU_ITEMS}
          onAddToCart={(item, qty) => handleAddToCart(item, qty)}
          onOpenDetails={(item) => setDetailItem(item)}
        />

        {/* Familia Tasty Burguer: Marquee ribbon & Polaroid Photo Collage */}
        <FamilyMarquee />

        {/* Customer Reviews: Denny Sanchez testimonial card with social likes */}
        <ReviewsSection reviews={REVIEWS_DATA} />

        {/* Crea tu pedido: Smartphone mockup & Order / WhatsApp builder */}
        <OrderSection onOrderClick={() => setIsOrderModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsOrderModalOpen(true);
        }}
      />

      {/* WhatsApp Checkout / Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cart={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* User Profile Modal */}
      <UserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />

      {/* Hero Me Surprise Modal */}
      <HeroMeModal
        isOpen={isHeroMeModalOpen}
        onClose={() => setIsHeroMeModalOpen(false)}
        items={MENU_ITEMS}
        onAddToCart={handleAddToCart}
      />

      {/* Item Details & Customization Modal */}
      <ItemDetailModal
        item={detailItem}
        onClose={() => setDetailItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Bottom Quick Cart Button on Mobile if items exist */}
      {cart.length > 0 && !isCartOpen && (
        <div className="fixed bottom-6 right-6 md:hidden z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-black text-[#f0b90b] px-5 py-3.5 rounded-full shadow-2xl border-2 border-[#f0b90b] font-display font-black text-xs uppercase tracking-wider active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Ver Carrito ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
          </button>
        </div>
      )}

    </div>
  );
}
