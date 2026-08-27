import React from 'react';
import { Award, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface TrustProofProps {
  onBuyClick?: () => void;
}

export const TrustProof: React.FC<TrustProofProps> = ({ onBuyClick }) => {
  const handleCtaClick = () => {
    trackEvent('click_buy', { source: 'satisfacao_garantida_section' });
    if (onBuyClick) {
      onBuyClick();
    } else {
      const el = document.getElementById('destaque-produto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="garantia" 
      className="py-16 sm:py-24 lg:py-28 bg-[#0a0505] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-radial from-[#801438]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e]">
            <Award className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#ff3e78] uppercase">
              COMPROMISSO & CONFIANÇA
            </span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase text-center mb-10 sm:mb-14 font-bold">
          SATISFAÇÃO GARANTIDA
        </h2>

        {/* Guarantee Box Layout */}
        <div className="rounded-3xl bg-gradient-to-br from-[#16060c]/90 via-[#100408]/95 to-[#0a0305] border border-[#801438]/60 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-[#801438]/50 shadow-[0_10px_35px_rgba(128,20,56,0.3)] group">
                <img
                  src="/satisfação garantida.jpg"
                  alt="Selo Satisfação Garantida"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              <p className="text-base sm:text-lg lg:text-xl text-[#f5f3f0] font-light leading-relaxed mb-6">
                Confiamos tanto no nosso produto que se você não tiver o resultado que espera no tempo de <strong>(60 dias)</strong>, você pode pedir seu dinheiro de volta.
              </p>

              {/* Callout Risco Zero */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1d0710]/90 border border-[#ff3e78]/40 mb-8 w-full shadow-inner">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff3e78] leading-relaxed flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#ff3e78]" />
                  <span>SEM RISCO PARA VOCÊ! VOCÊ TERÁ RESULTADOS DE UMA VEZ POR TODAS! RISCO ZERO!</span>
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-xs sm:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_8px_30px_rgba(128,20,56,0.6)] hover:shadow-[0_12px_40px_rgba(153,25,68,0.8)] active:scale-98 cursor-pointer group"
                id="satisfacao-garantida-cta"
              >
                <Sparkles className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
                <span>QUERO POWER NATURE AGORA</span>
                <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
