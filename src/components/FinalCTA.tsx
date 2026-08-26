import React from 'react';
import { ShoppingBag, Sparkles, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { productConfig } from '../config/product';

interface FinalCTAProps {
  onBuyClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBuyClick }) => {
  const handleBuy = () => {
    trackEvent('click_buy', { source: 'final_cta_section' });
    if (onBuyClick) {
      onBuyClick();
    } else if (productConfig.checkoutUrl && productConfig.checkoutUrl !== '#') {
      window.open(productConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a0505] relative overflow-hidden border-t border-white/5">
      {/* Dramatic ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[#801438]/20 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#18060d] via-[#100408] to-[#070204] border border-[#801438]/60 p-8 sm:p-14 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
          
          {/* Subtle line accents */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff3e78] to-transparent" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#ff3e78]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: CTA Headline & Copy */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#801438]/20 border border-[#801438]/60 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
                <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
                  TRANSFORME SUA PREPARAÇÃO
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-hero text-white mb-4 leading-tight">
                Sua rotina merece uma{' '}
                <span className="text-[#ff3e78] italic font-serif-hero">
                  nova perspectiva.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#b5adb0] font-light leading-relaxed mb-8 max-w-xl">
                Experimente o <strong className="text-white font-semibold">Power Nature Beterraba e Baru</strong> da Raiz Vital e sinta a união entre a botânica brasileira e o seu compromisso com a performance.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleBuy}
                  className="px-8 py-4 rounded-full bg-[#801438] hover:bg-[#991944] text-sm sm:text-base font-bold uppercase tracking-widest text-white shadow-[0_8px_30px_rgba(128,20,56,0.6)] hover:shadow-[0_12px_40px_rgba(153,25,68,0.8)] transition-all transform active:scale-95 cursor-pointer flex items-center justify-center gap-3 group"
                  id="final-section-buy-btn"
                >
                  <ShoppingBag className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>COMPRAR AGORA</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#a39c9f]">
                  <ShieldCheck className="w-4 h-4 text-[#ff3e78]" />
                  <span>Produto Original Raiz Vital</span>
                </div>
              </div>
            </div>

            {/* Right Column: Foto real oficial do produto */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
                <img
                  src="/imagem-hero.webp"
                  alt="Power Nature Beterraba e Baru"
                  className="w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
