import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, ShoppingBag, ShieldCheck, Flame, Plus, Truck } from 'lucide-react';
import { productConfig } from '../config/product';
import { trackEvent } from '../utils/analytics';

interface FeaturedProductProps {
  onExploreProduct?: () => void;
  onBuyClick?: () => void;
  onOpenNutrition?: () => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = () => {
  const [includeOrderBump, setIncludeOrderBump] = useState<boolean>(false);

  const bump = productConfig.orderBump;
  const basePrice = productConfig.price;
  const bumpPrice = bump ? bump.price : 0;
  const totalPrice = includeOrderBump ? basePrice + bumpPrice : basePrice;

  const handleToggleBump = () => {
    const nextState = !includeOrderBump;
    setIncludeOrderBump(nextState);
    trackEvent('toggle_order_bump', { active: nextState });
  };

  const handleExecuteBuy = () => {
    const targetUrl = includeOrderBump && bump?.checkoutUrlWithBump 
      ? bump.checkoutUrlWithBump 
      : productConfig.checkoutUrl;

    trackEvent('click_buy_cta', {
      product: productConfig.fullName,
      includeOrderBump,
      totalPrice
    });

    if (targetUrl && targetUrl !== '#') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="destaque-produto" 
      className="py-20 sm:py-28 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#801438]/15 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 mb-3 shadow-[0_0_15px_rgba(128,20,56,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              OFERTA EXCLUSIVA DE LANÇAMENTO
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase font-bold">
            ADQUIRA SEU POWER NATURE
          </h2>
        </div>

        {/* Feature Hero Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#18060d] via-[#100408] to-[#070204] border border-[#801438]/80 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[340px] aspect-[4/5] sm:aspect-square flex items-center justify-center rounded-2xl overflow-hidden border border-[#801438]/50 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                <img
                  src="/video-mobile-lastframe.webp"
                  alt="Power Nature Beterraba e Baru"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-[#a39c9f]">
                <ShieldCheck className="w-4 h-4 text-[#ff3e78]" />
                <span>Produto oficial desenvolvido por <strong>Raiz Vital</strong></span>
              </div>
            </div>

            {/* Content & Order Bump Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#801438]/30 text-[#ff6b95] text-[10px] font-mono uppercase tracking-widest mb-2">
                {productConfig.category} • 1 POTE ({productConfig.weight})
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-white font-normal mb-1">
                Power Nature Beterraba e Baru
              </h3>

              <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed mb-4">
                O Power Nature é um suplemento alimentar formulado com beterraba em pó desidratada, castanha de baru do Cerrado e proteína vegetal isolada. Entrega nutrição limpa sem corantes artificiais.
              </p>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 mb-5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 w-full">
                <div>
                  <span className="text-xs text-[#a39c9f] block font-light">Valor unitário:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {productConfig.priceFormatted}
                    </span>
                    {productConfig.originalPriceFormatted && (
                      <span className="text-xs sm:text-sm text-[#a39c9f] line-through">
                        {productConfig.originalPriceFormatted}
                      </span>
                    )}
                  </div>
                </div>
                <span className="ml-auto px-2.5 py-1 rounded-full bg-[#801438]/60 text-[10px] font-bold text-[#ff6b95] uppercase tracking-wider">
                  300g • Rende 30 doses
                </span>
              </div>

              {/* Order Bump Box (Adicionar outro produto com link alternativo no checkout) */}
              {bump && (
                <div 
                  onClick={handleToggleBump}
                  className={`w-full p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer mb-6 relative overflow-hidden group ${
                    includeOrderBump
                      ? 'bg-gradient-to-r from-[#2a0817]/95 via-[#1e0510]/95 to-[#16040c]/90 border-[#ff3e78] shadow-[0_0_25px_rgba(255,62,120,0.25)] ring-1 ring-[#ff3e78]'
                      : 'bg-white/[0.02] border-dashed border-[#801438]/70 hover:border-[#ff3e78] hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center sm:items-start gap-3 sm:gap-3.5 relative z-10">
                    <div className="pt-0.5">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                        includeOrderBump
                          ? 'border-[#ff3e78] bg-[#ff3e78] text-white shadow-[0_0_10px_rgba(255,62,120,0.6)]'
                          : 'border-white/40 bg-black/40'
                      }`}>
                        {includeOrderBump && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* Mini Image */}
                    {bump.image && (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black/50 border border-[#801438]/50 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                        <img 
                          src={bump.image} 
                          alt={bump.name} 
                          className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-[#ff3e78] text-[#070204] text-[9px] font-extrabold uppercase tracking-widest shrink-0">
                            {bump.badge || 'OFERTA COMPLEMENTAR'}
                          </span>
                          <Flame className="w-3.5 h-3.5 text-[#ff3e78] shrink-0" />
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#801438]/50 border border-[#ff3e78]/30 text-[10px] sm:text-xs text-[#ff6b95] font-bold shrink-0">
                          + R$ {bump.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {bump.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#cfc7cb] mt-1 font-light leading-snug">
                        {bump.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button with Dynamic Link & Price */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
                <button
                  onClick={handleExecuteBuy}
                  className="w-full py-4.5 px-8 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_8px_30px_rgba(128,20,56,0.7)] hover:shadow-[0_12px_45px_rgba(153,25,68,0.9)] active:scale-98 cursor-pointer flex items-center justify-center gap-3 group text-center"
                  id="product-orderbump-buy-btn"
                >
                  <ShoppingBag className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>
                    {includeOrderBump
                      ? `COMPRAR COM OFERTA ESPECIAL • R$ ${totalPrice.toFixed(2).replace('.', ',')}`
                      : `COMPRAR POWER NATURE • R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Guarantee text */}
              <div className="mt-3.5 flex items-center justify-center sm:justify-start gap-4 text-[11px] text-[#a39c9f] w-full">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#ff3e78]" /> Envio para todo o Brasil
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ff3e78]" /> Compra 100% Segura no Mercado Livre
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
