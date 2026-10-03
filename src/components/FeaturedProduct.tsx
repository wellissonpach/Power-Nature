import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShoppingBag, 
  ShieldCheck, 
  Leaf, 
  ExternalLink, 
  Info,
  CheckCircle2,
  Award
} from 'lucide-react';
import { capsuleProducts } from '../data/capsules';
import { CapsuleProduct } from '../types';
import { trackEvent } from '../utils/analytics';

interface FeaturedProductProps {
  onSelectProduct?: (product: CapsuleProduct) => void;
  onExploreProduct?: () => void;
  onBuyClick?: () => void;
  onOpenNutrition?: () => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  onSelectProduct
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'curcuma' | 'energia' | 'digestao'>('all');

  const filteredProducts = capsuleProducts.filter(p => {
    if (selectedFilter === 'curcuma') return p.slug.includes('curcuma');
    if (selectedFilter === 'energia') return p.slug === 'beterraba' || p.slug === 'gengibre';
    if (selectedFilter === 'digestao') return p.slug === 'berinjela' || p.slug.includes('haridra') || p.slug === 'gengibre';
    return true;
  });

  const handleCardClick = (product: CapsuleProduct) => {
    trackEvent('click_capsule_card', {
      product_id: product.id,
      product_name: product.name
    });
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

  const handleBuyMercadoLivreDirect = (e: React.MouseEvent, product: CapsuleProduct) => {
    e.stopPropagation();
    trackEvent('click_capsule_card_ml_direct', {
      product_id: product.id,
      product_name: product.name,
      price: product.price
    });
    window.open(product.mercadoLivreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="destaque-produto" 
      className="py-20 sm:py-28 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#801438]/15 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-radial from-[#e02b5e]/08 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 mb-3 shadow-[0_0_15px_rgba(128,20,56,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              LANÇAMENTOS OFICIAIS RAIZ VITAL
            </span>
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase font-bold leading-tight">
            CONHEÇA NOSSOS PRODUTOS EM CAPSULAS
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#c4bcc0] font-light leading-relaxed max-w-2xl mx-auto">
            Fórmulas botânicas concentradas com a pureza e a força dos ativos naturais em doses práticas de 500mg. 
            Clique no produto para abrir as informações detalhadas e garantir o seu com segurança oficial pelo Mercado Livre.
          </p>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#801438] text-white shadow-[0_0_15px_rgba(128,20,56,0.5)] border border-[#ff3e78]/50'
                  : 'bg-white/5 text-[#a39c9f] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Todos ({capsuleProducts.length})
            </button>
            <button
              onClick={() => setSelectedFilter('curcuma')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'curcuma'
                  ? 'bg-[#801438] text-white shadow-[0_0_15px_rgba(128,20,56,0.5)] border border-[#ff3e78]/50'
                  : 'bg-white/5 text-[#a39c9f] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Linha Cúrcuma
            </button>
            <button
              onClick={() => setSelectedFilter('energia')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'energia'
                  ? 'bg-[#801438] text-white shadow-[0_0_15px_rgba(128,20,56,0.5)] border border-[#ff3e78]/50'
                  : 'bg-white/5 text-[#a39c9f] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Energia & Termogênico
            </button>
            <button
              onClick={() => setSelectedFilter('digestao')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'digestao'
                  ? 'bg-[#801438] text-white shadow-[0_0_15px_rgba(128,20,56,0.5)] border border-[#ff3e78]/50'
                  : 'bg-white/5 text-[#a39c9f] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Digestão & Equilíbrio
            </button>
          </div>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleCardClick(product)}
              className="group rounded-3xl bg-gradient-to-b from-[#18060d]/90 via-[#100408]/90 to-[#090205]/95 border border-[#801438]/50 hover:border-[#ff3e78]/80 p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(128,20,56,0.35)] transition-all duration-400 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              id={`card-${product.slug}`}
            >
              {/* Subtle card top glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3e78] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Card Header Tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#801438]/40 border border-[#ff3e78]/30 text-[#ff6b95] text-[10px] font-mono uppercase tracking-wider font-semibold">
                    {product.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[#a39c9f] uppercase tracking-wider">
                    {product.dosage} • 60 CÁPS
                  </span>
                </div>

                {/* Product Image Frame */}
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-b from-white/[0.03] to-black/50 border border-white/5 p-4 mb-5 flex items-center justify-center relative overflow-hidden group-hover:border-[#801438]/50 transition-colors">
                  <div className="absolute inset-0 bg-radial from-[#ff3e78]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img
                    src={product.image}
                    alt={product.fullName}
                    className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Quick Click Hint Tag */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#801438]/70 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <Info className="w-3 h-3 text-[#ff3e78]" />
                    <span>Clique para ver detalhes</span>
                  </div>
                </div>

                {/* Product Title & Subtitle */}
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-tight uppercase group-hover:text-[#ff6b95] transition-colors mb-1.5">
                  {product.name}
                </h3>

                <p className="text-xs text-[#ff6b95] italic font-serif-hero mb-3">
                  {product.subtitle}
                </p>

                <p className="text-xs text-[#c4bcc0] font-light leading-relaxed line-clamp-3 mb-5">
                  {product.shortDescription}
                </p>

                {/* Key Benefits Mini Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.keyIngredients.slice(0, 2).map((ing, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[10px] text-[#cfc7cb] flex items-center gap-1"
                    >
                      <Leaf className="w-2.5 h-2.5 text-[#ff3e78]" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Actions Bottom Section */}
              <div className="pt-4 border-t border-white/10 mt-2">
                <div className="flex items-baseline justify-between mb-3.5">
                  <div>
                    <span className="text-[10px] font-mono text-[#8e8588] block">Valor:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {product.priceFormatted}
                      </span>
                      {product.originalPriceFormatted && (
                        <span className="text-xs text-[#8e8588] line-through">
                          {product.originalPriceFormatted}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-[#ffe600]/10 border border-[#ffe600]/30 text-[#ffe600] text-[9px] font-mono font-bold uppercase tracking-wider">
                    Mercado Livre
                  </span>
                </div>

                {/* Two Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleCardClick(product)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Ver Informações</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff3e78] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={(e) => handleBuyMercadoLivreDirect(e, product)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#801438] hover:bg-[#a61746] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(128,20,56,0.5)] hover:shadow-[0_6px_20px_rgba(166,23,70,0.7)] flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Comprar no Mercado Livre</span>
                    <ExternalLink className="w-3 h-3 text-white/80" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Notice on Mercado Livre PDV */}
        <div className="mt-14 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#18060d] via-[#100408] to-[#18060d] border border-[#801438]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#801438]/30 border border-[#ff3e78]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#ff3e78]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Venda Segura & Envio Rápido pelo Mercado Livre
              </h4>
              <p className="text-xs text-[#a39c9f] mt-0.5">
                Enquanto preparamos nosso próprio checkout/PDV, você compra com garantia total de entrega e proteção ao comprador.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff6b95] bg-black/40 px-3.5 py-2 rounded-full border border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>Todos os produtos à pronta entrega</span>
          </div>
        </div>

      </div>
    </section>
  );
};
