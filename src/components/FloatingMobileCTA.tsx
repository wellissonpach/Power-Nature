import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { productConfig } from '../config/product';
import { trackEvent } from '../utils/analytics';

interface FloatingMobileCTAProps {
  onBuyClick: () => void;
}

export const FloatingMobileCTA: React.FC<FloatingMobileCTAProps> = ({ onBuyClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 250);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    trackEvent('click_buy', { source: 'floating_mobile_bar' });
    onBuyClick();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0a0505]/95 backdrop-blur-lg border-t border-[#8b1a3e] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] sm:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#ff3e78] leading-none">
            POWER NATURE • 300g
          </span>
          <span className="text-sm font-bold text-white mt-0.5 leading-none">
            {productConfig.priceFormatted}
          </span>
        </div>

        <button
          onClick={handleClick}
          className="flex-1 py-3 px-4 rounded-full bg-white hover:bg-[#f5f5f0] text-xs font-bold uppercase tracking-wider text-[#0a0505] shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer"
          id="mobile-floating-buy-btn"
        >
          <ShoppingBag className="w-4 h-4 text-[#8b1a3e]" />
          <span>COMPRAR AGORA</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#8b1a3e]" />
        </button>
      </div>
    </div>
  );
};
