import React, { useState } from 'react';
import { ShoppingBag, Moon, Sun, User, Menu as MenuIcon, X, MapPin, Phone } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  setIsUserModalOpen: (open: boolean) => void;
  setIsOrderModalOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  setIsCartOpen,
  darkMode,
  setDarkMode,
  setIsUserModalOpen,
  setIsOrderModalOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 backdrop-blur-md bg-[#f0b90b]/90 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Zone: Circular Burger Stamp & Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus-visible:outline-none">
            <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-[#f0b90b] shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                {/* Burger icon */}
                <path d="M12 2C6.48 2 2 5.58 2 10c0 1.1.28 2.14.77 3.06C2.28 13.56 2 14.25 2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2 0-.75-.28-1.44-.77-1.94.49-.92.77-1.96.77-3.06 0-4.42-4.48-8-10-8zm-8 8c0-3.31 3.58-6 8-6s8 2.69 8 6H4zm1 9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1H5v1zm-1-3h16c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-black leading-none flex items-center">
                <span className="text-black font-extrabold mr-0.5">!</span>Tasty burguer
              </span>
              <span className="text-[10px] font-semibold text-black/70 tracking-widest uppercase">
                Smash & Grill • Azua
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-black/85 hover:text-black hover:underline underline-offset-8 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Theme Toggle, Usuario, Cart) */}
          <div className="flex items-center gap-3">
            {/* Dark mode button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-black/10 hover:bg-black/20 text-black transition-colors"
              aria-label="Toggle dark mode"
              title="Cambiar tema"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Usuario button */}
            <button
              onClick={() => setIsUserModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-black font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:shadow"
            >
              <User className="w-4 h-4 text-black" />
              <span>Usuario</span>
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-black hover:bg-neutral-800 text-[#f0b90b] font-bold text-xs uppercase tracking-wider shadow-md transition-transform hover:scale-105"
              aria-label="Ver carrito"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Carrito</span>
              {totalItems > 0 && (
                <span className="ml-1 bg-[#f0b90b] text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-black/10 text-black"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f0b90b] border-t border-black/10 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-black text-black hover:translate-x-2 transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-black/15 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsUserModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-bold text-sm shadow"
            >
              <User className="w-4 h-4" />
              <span>Mi Cuenta / Usuario</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsOrderModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-[#f0b90b] font-bold text-sm shadow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Hacer Pedido Directo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
