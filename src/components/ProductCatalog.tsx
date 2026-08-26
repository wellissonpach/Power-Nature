import React from 'react';
import { ArrowRight, Sparkles, Leaf, Shield, CheckCircle2, Clock, ShoppingBag } from 'lucide-react';
import { productsList } from '../data/products';
import { ProductItem } from '../types';

interface ProductCatalogProps {
  onQuickBuy?: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ 
  onQuickBuy 
}) => {
  return (
    <section 
      id="produtos" 
      className="py-20 sm:py-28 bg-[#0a0505] relative overflow-hidden border-t border-[#2d0e19]/40"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#801438]/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#ff3e78] font-bold mb-4 shadow-[0_0_15px_rgba(128,20,56,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFÓLIO DE NUTRIÇÃO FUNCIONAL</span>
          </div>

          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-[#f5f5f0] tracking-tight">
            NOSSOS PRODUTOS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#b5adb0] font-light leading-relaxed">
            Conheça soluções desenvolvidas a partir de ingredientes naturais para diferentes momentos da sua rotina.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {productsList.map((product) => {
            const isActive = product.status === 'active';

            return (
              <div
                key={product.id}
                className={`${
                  isActive 
                    ? 'lg:col-span-12 xl:col-span-12 bg-gradient-to-br from-[#16060d] via-[#0e0407] to-[#0a0305] border-[#801438]/70 shadow-[0_15px_40px_rgba(0,0,0,0.6)]' 
                    : 'lg:col-span-6 bg-[#0e0407]/60 border-[#ffffff10] opacity-90'
                } rounded-3xl border p-7 sm:p-10 transition-all duration-300 relative flex flex-col justify-between`}
              >
                {/* Active Flagship Product (Power Nature) */}
                {isActive ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual Container */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#801438]/20 border border-[#801438]/40 text-[10px] uppercase font-mono tracking-widest text-[#ff3e78]">
                        <Shield className="w-3 h-3" />
                        <span>Fórmula Exclusiva Raiz Vital</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-0.5 rounded-full bg-[#ff3e78]/20 text-[#ff6b95] text-[10px] font-mono uppercase tracking-widest font-bold">
                          {product.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[#8e8588]">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="font-serif-hero text-2xl sm:text-3xl text-white font-normal mb-1">
                        {product.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[#e02b5e] italic font-serif-hero mb-4">
                        {product.headline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#c4bcc0] leading-relaxed mb-6 font-light">
                        {product.shortDescription}
                      </p>

                      {/* Ingredients chips */}
                      <div className="mb-6 w-full">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8588] block mb-2.5">
                          Ingredientes Chave:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {product.keyIngredients.map((ing, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#f5f5f0] flex items-center gap-1.5"
                            >
                              <Leaf className="w-3 h-3 text-[#c02652]" />
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Benefit concept */}
                      <div className="mb-8 p-3.5 rounded-xl bg-[#1f0912]/60 border border-[#801438]/40 text-xs text-[#e8dfe3] flex items-start gap-2.5 w-full">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3e78] shrink-0 mt-0.5" />
                        <span><strong>Conceito & Benefício:</strong> {product.mainBenefit}</span>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                        <button
                          onClick={() => {
                            if (onQuickBuy) onQuickBuy(product);
                          }}
                          className="px-8 py-4 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_6px_25px_rgba(128,20,56,0.5)] flex items-center justify-center gap-2 cursor-pointer group/btn"
                        >
                          <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          <span>COMPRAR AGORA</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>

                    </div>

                  </div>
                ) : (
                  /* Future Upcoming Products Concept Card */
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e8588]">
                          {product.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-[#a39c9f] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#ff3e78]" />
                          {product.badge}
                        </span>
                      </div>

                      <h3 className="font-serif-hero text-xl sm:text-2xl text-white font-normal mb-1">
                        {product.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#ff6b95] italic font-serif-hero mb-3">
                        {product.headline}
                      </p>

                      <p className="text-xs text-[#a39c9f] leading-relaxed mb-5 font-light">
                        {product.shortDescription}
                      </p>

                      {/* Key ingredients pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {product.keyIngredients.map((ing, idx) => (
                          <span 
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-white/5 text-[10px] text-[#cfc7cb] border border-white/5"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8588]">
                        {product.mainBenefit}
                      </span>
                      <span className="text-[11px] font-medium text-[#c02652] tracking-wider">
                        Em desenvolvimento
                      </span>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
