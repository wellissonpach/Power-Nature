import React from 'react';
import { 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  ArrowRight,
  Leaf,
  Lock
} from 'lucide-react';
import { productConfig } from '../config/product';
import { trackEvent } from '../utils/analytics';

interface ProductOfferProps {
  onBuy?: () => void;
  onOpenNutrition: () => void;
}

export const ProductOffer: React.FC<ProductOfferProps> = ({ onBuy, onOpenNutrition }) => {
  const handleBuyClick = () => {
    trackEvent('click_buy', {
      source: 'product_offer_section'
    });
    
    if (onBuy) {
      onBuy();
    } else if (productConfig.checkoutUrl && productConfig.checkoutUrl !== '#') {
      window.open(productConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="produto" className="py-20 md:py-28 bg-[#0a0505] relative overflow-hidden border-t border-white/5">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#801438]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#801438]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 mb-4 shadow-[0_0_15px_rgba(128,20,56,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              PRODUTO OFICIAL RAIZ VITAL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-hero text-white mb-4">
            Adquira o seu Power Nature
          </h2>
          <p className="text-base sm:text-lg text-[#b5adb0] leading-relaxed font-light">
            Nutrição funcional autêntica à base de beterraba, castanha de baru e proteína vegetal para elevar a sua rotina.
          </p>
        </div>

        {/* Main Product Showcase Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#18060d] via-[#100408] to-[#070204] border border-[#801438]/70 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column: Foto real do produto */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
                <img
                  src="/imagem-hero.webp"
                  alt="Power Nature Beterraba e Baru"
                  className="w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <span className="mt-4 px-3.5 py-1 rounded-full bg-[#801438]/30 border border-[#801438]/60 text-[10px] sm:text-xs uppercase tracking-widest text-[#ff6b95] font-semibold">
                Conteúdo Líquido: 300g
              </span>
            </div>

            {/* Content & Direct Purchase Action Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#801438]/20 text-[#ff6b95] text-[10px] font-mono uppercase tracking-widest mb-3">
                {productConfig.category}
              </div>

              <h3 className="font-serif-hero text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-2">
                {productConfig.fullName}
              </h3>

              <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed mb-6">
                Fórmula limpa e pura desenvolvida pela <strong>Raiz Vital</strong>. Combina a potência botânica da beterraba desidratada, a nobreza da castanha de baru do Cerrado e proteínas de origem vegetal para acompanhar sua disposição antes e depois das atividades.
              </p>

              {/* Highlights key points */}
              <div className="space-y-2.5 mb-8 w-full">
                {productConfig.highlights.slice(0, 4).map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#e8dfe3]">
                    <div className="w-4 h-4 rounded-full bg-[#801438]/50 flex items-center justify-center text-[#ff3e78] shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full mb-6">
                <button
                  onClick={handleBuyClick}
                  className="w-full sm:w-auto flex-1 py-4 px-8 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_8px_30px_rgba(128,20,56,0.6)] hover:shadow-[0_12px_40px_rgba(153,25,68,0.8)] active:scale-98 cursor-pointer flex items-center justify-center gap-3 group"
                  id="product-offer-buy-btn"
                >
                  <ShoppingBag className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>COMPRAR AGORA</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenNutrition}
                  className="px-5 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-[#ff3e78]" />
                  <span>Tabela Nutricional</span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#a39c9f] pt-4 border-t border-white/10 w-full">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ff3e78]" />
                  <span>Produto Original Raiz Vital</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#ff3e78]" />
                  <span>Ambiente de Compra Seguro</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
