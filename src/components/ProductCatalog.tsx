import React from 'react';
import { ArrowRight, Sparkles, Leaf, Shield, CheckCircle2, Clock } from 'lucide-react';
import { productsList } from '../data/products';
import { ProductItem } from '../types';
import { trackEvent } from '../utils/analytics';

interface ProductCatalogProps {
  onSelectProduct?: (product: ProductItem) => void;
  onQuickBuy?: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ 
  onSelectProduct,
  onQuickBuy 
}) => {
  const handleProductClick = (product: ProductItem) => {
    trackEvent('view_product_catalog', { product_id: product.id });
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

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
                } rounded-3xl border p-6 sm:p-8 lg:p-10 transition-all duration-300 relative group flex flex-col justify-between`}
              >
                {/* Active Featured Product Banner (Power Nature) */}
                {isActive ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual Media Column */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                      <div className="absolute inset-0 bg-radial from-[#c02652]/20 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Badge */}
                      <span className="mt-4 px-3.5 py-1 rounded-full bg-[#801438]/40 border border-[#801438] text-[10px] sm:text-xs uppercase tracking-widest text-[#ff6b95] font-semibold">
                        {product.badge}
                      </span>
                    </div>

                    {/* Information & Action Column */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#c02652] font-semibold">
                          {product.category}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-[10px] sm:text-xs text-[#a39c9f]">
                          {product.weight}
                        </span>
                      </div>

                      <h3 className="font-serif-hero text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-1">
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
                          onClick={() => handleProductClick(product)}
                          className="px-6 py-3.5 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(128,20,56,0.4)] flex items-center justify-center gap-2 cursor-pointer group/btn"
                        >
                          <span>VER DETALHES DO PRODUTO</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        <button
                          onClick={() => {
                            if (onQuickBuy) onQuickBuy(product);
                          }}
                          className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center text-center cursor-pointer"
                        >
                          Comprar Agora
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
                          <Clock className="w-2.5 h-2.5 text-[#c02652]" />
                          {product.badge}
                        </span>
                      </div>

                      <div className="w-full h-40 rounded-2xl overflow-hidden mb-6 relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-500" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0407] via-transparent to-transparent" />
                      </div>

                      <h4 className="font-serif-hero text-xl text-white mb-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#c02652] italic font-serif-hero mb-3">
                        {product.headline}
                      </p>
                      <p className="text-xs text-[#a39c9f] font-light leading-relaxed mb-4">
                        {product.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.keyIngredients.map((ing, i) => (
                          <span key={i} className="px-2.5 py-0.5 rounded-md bg-white/5 text-[10px] text-[#a39c9f]">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-[#8e8588] italic">Em fase de pesquisa e formulação botânica</span>
                      <span className="text-[11px] text-[#c02652] font-semibold">Em breve</span>
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
