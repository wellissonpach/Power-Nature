import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { brandConfig } from '../data/brand';

interface HeaderProps {
  onNavigate?: (route: string) => void;
  currentRoute?: string;
  onExploreProducts?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNavigate,
  currentRoute = '/',
  onExploreProducts
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentRoute !== '/' && onNavigate) {
      onNavigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerExploreProducts = () => {
    trackEvent('header_explore_products', { source: 'header_cta' });
    if (onExploreProducts) {
      onExploreProducts();
    } else {
      const el = document.getElementById('produtos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between border ${
          isScrolled
            ? 'bg-[#0d0407]/90 backdrop-blur-md border-[#3a1020] shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'bg-[#110508]/75 backdrop-blur-sm border-[#2d0e19] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Brand Official Identity (Raiz Vital) */}
        <a
          href="/"
          onClick={handleHomeClick}
          className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer"
          id="brand-logo"
        >
          <img
            src="/NEW LOGO.png"
            alt="Raiz Vital Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-full shadow-[0_0_12px_rgba(224,43,94,0.35)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.18em] text-[#f5f5f0] uppercase leading-none">
              {brandConfig.name}
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#c02652] font-sans font-semibold mt-0.5">
              Produtos Naturais
            </span>
          </div>
        </a>

        {/* CTA Action */}
        <div className="flex items-center">
          <button
            onClick={triggerExploreProducts}
            className="text-[#c02652] hover:text-[#e02b5e] text-xs sm:text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer flex items-center gap-1.5 sm:gap-2 group py-1 px-2.5 sm:px-3 rounded-full hover:bg-white/5"
            id="header-cta-btn"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c02652] group-hover:scale-110 transition-transform" />
            <span>PRODUTOS</span>
          </button>
        </div>
      </div>
    </header>
  );
};
