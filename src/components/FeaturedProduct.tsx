import React from 'react';
import { ArrowRight, Sparkles, Check, ShoppingBag, ShieldCheck } from 'lucide-react';
import { productConfig } from '../config/product';
import { trackEvent } from '../utils/analytics';

interface FeaturedProductProps {
  onExploreProduct?: () => void;
  onBuyClick?: () => void;
  onOpenNutrition?: () => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  onExploreProduct,
  onBuyClick,
  onOpenNutrition
}) => {
  return (
    <section 
      id="destaque-produto" 
      className="py-24 sm:py-32 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#801438]/15 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#ff3e78] font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LINHA EM EVIDÊNCIA</span>
          </div>

          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            EM DESTAQUE
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#b5adb0] font-light leading-relaxed">
            Conheça um dos produtos que representam a proposta da Raiz Vital.
          </p>
        </div>

        {/* Feature Hero Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#18060d] via-[#100408] to-[#070204] border border-[#801438]/80 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                <img
                  src="/imagem-hero.webp"
                  alt="Power Nature Pré-Treino Beterraba e Baru"
                  className="w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-[#a39c9f]">
                <ShieldCheck className="w-4 h-4 text-[#ff3e78]" />
                <span>Produto oficial desenvolvido por <strong>Raiz Vital</strong></span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#801438]/30 text-[#ff6b95] text-[10px] font-mono uppercase tracking-widest mb-3">
                {productConfig.category} • {productConfig.weight}
              </div>

              <h3 className="font-serif-hero text-3xl sm:text-4xl text-white font-normal mb-2">
                Power Nature
              </h3>

              <p className="text-base sm:text-lg text-[#e02b5e] italic font-serif-hero mb-4">
                {productConfig.fullName}
              </p>

              <p className="text-sm text-[#c4bcc0] font-light leading-relaxed mb-6">
                O Power Nature, é um suplemento alimentar desenvolvido com beterraba em pó desidratada, castanha de baru do Cerrado e proteína vegetal isolada. Entrega nutrição limpa sem corantes artificiais
              </p>

              {/* Highlights check list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                {productConfig.highlights.slice(0, 4).map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#e8dfe3]">
                    <div className="w-4 h-4 rounded-full bg-[#801438]/50 flex items-center justify-center text-[#ff3e78] shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
                <button
                  onClick={onBuyClick}
                  className="px-8 py-4 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_8px_25px_rgba(128,20,56,0.6)] flex items-center justify-center gap-2 text-center cursor-pointer group"
                >
                  <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>COMPRAR AGORA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {onOpenNutrition && (
                  <button
                    onClick={onOpenNutrition}
                    className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Tabela Nutricional
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
