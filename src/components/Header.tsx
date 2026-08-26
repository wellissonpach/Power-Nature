import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavAction = (targetId: string, routeTarget: string = '/') => {
    setMobileMenuOpen(false);

    if (currentRoute !== routeTarget && onNavigate) {
      onNavigate(routeTarget);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
      handleNavAction('produtos');
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
            src="/logo.png"
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium text-[#b5adb0]">
          <button
            onClick={() => handleNavAction('hero-section', '/')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-link-inicio"
          >
            Início
          </button>
          <button
            onClick={() => handleNavAction('produtos', '/')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-link-produtos"
          >
            Produtos
          </button>
          <button
            onClick={() => handleNavAction('beneficios-raiz-vital', '/')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-link-beneficios"
          >
            Benefícios
          </button>
          <button
            onClick={() => handleNavAction('nossa-essencia', '/')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-link-essencia"
          >
            Nossa Essência
          </button>
          <button
            onClick={() => handleNavAction('ingredientes-marca', '/')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-link-ingredientes"
          >
            Ingredientes
          </button>
          <button
            onClick={() => handleNavAction('para-quem', '/')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-link-para-quem"
          >
            Para Quem
          </button>
          <button
            onClick={() => handleNavAction('faq', '/')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-link-faq"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center">
          <button
            onClick={triggerExploreProducts}
            className="text-[#c02652] hover:text-[#e02b5e] text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer flex items-center gap-2 group py-1"
            id="header-cta-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c02652] group-hover:scale-110 transition-transform" />
            <span>NOSSOS PRODUTOS</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={triggerExploreProducts}
            className="text-[#c02652] text-[11px] font-bold uppercase tracking-wider px-2 py-1 flex items-center gap-1.5"
            id="header-mobile-buy-btn"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Produtos</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#f5f5f0] hover:bg-white/10 transition-colors"
            aria-label="Abrir Menu"
            id="hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0407]/95 backdrop-blur-xl border border-white/10 mx-3 mt-2 rounded-2xl px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200 pointer-events-auto">
          <div className="flex flex-col gap-3.5 text-xs font-medium uppercase tracking-wider text-[#f5f5f0c0]">
            <button
              onClick={() => handleNavAction('hero-section', '/')}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Início
            </button>
            <button
              onClick={() => handleNavAction('produtos', '/')}
              className="text-left py-2 hover:text-white border-b border-white/5 text-[#e02b5e] font-bold"
            >
              Catálogo de Produtos
            </button>
            <button
              onClick={() => handleNavAction('beneficios-raiz-vital', '/')}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Benefícios & Objetivos
            </button>
            <button
              onClick={() => handleNavAction('nossa-essencia', '/')}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Nossa Essência
            </button>
            <button
              onClick={() => handleNavAction('ingredientes-marca', '/')}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Ingredientes Botânicos
            </button>
            <button
              onClick={() => handleNavAction('para-quem', '/')}
              className="text-left py-2 hover:text-white border-b border-white/5"
            >
              Para Quem É
            </button>
            <button
              onClick={() => handleNavAction('faq', '/')}
              className="text-left py-2 hover:text-white"
            >
              Perguntas Frequentes
            </button>
            
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerExploreProducts();
                }}
                className="w-full py-3.5 rounded-full bg-[#8b1a3e] hover:bg-[#a6214c] text-xs font-bold uppercase tracking-widest text-white shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Conheça Nossos Produtos
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
