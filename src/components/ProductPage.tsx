import React, { useEffect } from 'react';
import { ProductItem, ProductPack } from '../types';
import { Benefits } from './Benefits';
import { BeetrootSection } from './BeetrootSection';
import { BaruSection } from './BaruSection';
import { Audience } from './Audience';
import { HowToUse } from './HowToUse';
import { TrustProof } from './TrustProof';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { ArrowLeft, ShoppingBag, Sparkles, CheckCircle2, Leaf, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { productConfig } from '../config/product';

interface ProductPageProps {
  product: ProductItem;
  onBackToHome: () => void;
  onBuyPack?: (pack?: ProductPack) => void;
  onOpenNutrition: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onBackToHome,
  onBuyPack,
  onOpenNutrition
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    trackEvent('view_product_detail_page', { product_id: product.id, product_name: product.name });
  }, [product]);

  const scrollToOffer = () => {
    const el = document.getElementById('produto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectBuy = () => {
    trackEvent('click_buy', { source: 'product_page_hero' });
    if (productConfig.checkoutUrl && productConfig.checkoutUrl !== '#') {
      window.open(productConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      scrollToOffer();
    }
  };

  return (
    <div className="pt-24 sm:pt-28 min-h-screen bg-[#0a0505] text-[#f5f5f0]">
      
      {/* Product Specific Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        
        {/* Back navigation */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a39c9f] hover:text-white transition-colors mb-8 cursor-pointer py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Início • Raiz Vital</span>
        </button>

        {/* Product Showcase Hero Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#18060d] via-[#100408] to-[#070204] border border-[#801438]/70 p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#a39c9f]">
                <ShieldCheck className="w-4 h-4 text-[#ff3e78]" />
                <span>Linha oficial <strong>Raiz Vital</strong></span>
              </div>
            </div>

            {/* Presentation Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#801438]/30 border border-[#801438]/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff6b95] mb-3">
                <Sparkles className="w-3 h-3" />
                <span>{product.category}</span>
              </div>

              <h1 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white font-normal mb-2">
                {product.name}
              </h1>

              <p className="text-base sm:text-xl text-[#e02b5e] italic font-serif-hero mb-4">
                {product.headline}
              </p>

              <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Highlights & Ingredients */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.keyIngredients.map((ing, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white flex items-center gap-1.5">
                    <Leaf className="w-3 h-3 text-[#c02652]" />
                    {ing}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
                <button
                  onClick={handleDirectBuy}
                  className="px-8 py-4 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_8px_25px_rgba(128,20,56,0.6)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>COMPRAR AGORA</span>
                </button>

                <button
                  onClick={onOpenNutrition}
                  className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Ver Tabela Nutricional
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Product Specific Sections */}
      <Benefits onLearnMore={onOpenNutrition} />
      <BeetrootSection />
      <BaruSection />
      <Audience />
      <HowToUse />
      <TrustProof />
      <FAQ />
      <FinalCTA onBuyClick={handleDirectBuy} />

    </div>
  );
};
