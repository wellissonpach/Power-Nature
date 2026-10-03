import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Sparkles, 
  Leaf, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';
import { CapsuleProduct } from '../types';
import { capsuleProducts } from '../data/capsules';
import { trackEvent } from '../utils/analytics';

interface CapsuleProductPageProps {
  product: CapsuleProduct;
  onBack: () => void;
  onSelectProduct: (product: CapsuleProduct) => void;
}

export const CapsuleProductPage: React.FC<CapsuleProductPageProps> = ({
  product,
  onBack,
  onSelectProduct
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${product.name} em Cápsulas 500mg | Raiz Vital`;
    trackEvent('view_capsule_product_page', { 
      product_id: product.id, 
      product_name: product.name 
    });
  }, [product]);

  const handleBuyOnMercadoLivre = () => {
    trackEvent('click_mercado_livre_buy', {
      product_id: product.id,
      product_name: product.name,
      price: product.price
    });
    window.open(product.mercadoLivreUrl, '_blank', 'noopener,noreferrer');
  };

  const otherProducts = capsuleProducts.filter(p => p.id !== product.id);

  return (
    <div className="min-h-screen bg-[#070204] text-[#f5f5f0] selection:bg-[#801438] selection:text-white pt-24 sm:pt-28 pb-20">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial from-[#801438]/18 via-[#801438]/05 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-radial from-[#e02b5e]/10 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation / Breadcrumb Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#801438]/20 border border-white/10 hover:border-[#ff3e78]/40 text-xs sm:text-sm font-medium text-[#c4bcc0] hover:text-white transition-all cursor-pointer group shadow-sm"
            id="back-to-catalog-btn"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#ff3e78]" />
            <span>Voltar para Todos os Produtos</span>
          </button>

          {/* Breadcrumb path */}
          <div className="flex items-center gap-1.5 text-xs text-[#8e8588] font-mono">
            <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer">
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#554a4f]" />
            <span className="text-[#a39c9f]">Produtos em Cápsulas</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#554a4f]" />
            <span className="text-[#ff3e78] font-semibold">{product.name}</span>
          </div>
        </div>

        {/* Main Product Presentation Showcase */}
        <div className="rounded-3xl bg-gradient-to-br from-[#16060d] via-[#0e0407] to-[#070204] border border-[#801438]/70 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.85)] mb-14 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Visual Container (Product Image) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center rounded-3xl p-6 bg-gradient-to-b from-white/[0.04] to-black/60 border border-[#801438]/40 shadow-[inset_0_0_40px_rgba(128,20,56,0.15)] group">
                
                {/* Glow ring */}
                <div className="absolute inset-4 bg-radial from-[#ff3e78]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                
                <img
                  src={product.image}
                  alt={product.fullName}
                  className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />

                {/* Badge overlay on top of image */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#801438]/60 text-[10px] font-mono uppercase tracking-wider text-[#ff6b95]">
                  <Sparkles className="w-3 h-3 text-[#ff3e78]" />
                  <span>{product.spec}</span>
                </div>
              </div>

              {/* Guarantees strip */}
              <div className="mt-5 w-full max-w-[380px] flex items-center justify-center gap-4 text-[11px] text-[#b5adb0] bg-white/[0.02] border border-white/5 rounded-2xl py-2.5 px-4">
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#ff3e78]" />
                  <span>100% Puro</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-[#ff3e78]" />
                  <span>Zero Glúten</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ff3e78]" />
                  <span>Raiz Vital</span>
                </div>
              </div>
            </div>

            {/* Info & Purchase Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#801438]/40 border border-[#ff3e78]/40 text-[#ff6b95] text-[10px] sm:text-xs font-mono uppercase tracking-wider font-bold">
                  {product.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-[#a39c9f] uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Title & Headline */}
              <h1 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase font-bold leading-tight mb-2">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-[#ff6b95] italic font-serif-hero mb-4">
                {product.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Price & Mercado Livre Promo Box */}
              <div className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#200713]/90 via-[#16040c]/90 to-[#0e0307]/90 border border-[#801438]/80 mb-6 relative overflow-hidden">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#a39c9f] block mb-1">
                      Preço Promocional de Lançamento:
                    </span>
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {product.priceFormatted}
                      </span>
                      {product.originalPriceFormatted && (
                        <span className="text-sm text-[#8e8588] line-through">
                          {product.originalPriceFormatted}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#22c55e] font-medium mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Disponível à pronta entrega
                    </span>
                  </div>

                  {/* Mercado Livre Official Store Flag */}
                  <div className="flex flex-col items-start sm:items-end">
                    <span className="px-2.5 py-1 rounded-md bg-[#ffe600] text-[#2d3277] text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <span>Vendido no Mercado Livre</span>
                    </span>
                    <span className="text-[10px] text-[#a39c9f] mt-1">
                      Loja Oficial • Pagamento Seguro
                    </span>
                  </div>
                </div>
              </div>

              {/* Main CTA Button: Comprar no Mercado Livre */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-6">
                <button
                  onClick={handleBuyOnMercadoLivre}
                  className="w-full sm:flex-1 py-4 sm:py-4.5 px-8 rounded-full bg-[#801438] hover:bg-[#a61746] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_8px_30px_rgba(128,20,56,0.7)] hover:shadow-[0_12px_45px_rgba(166,23,70,0.9)] active:scale-98 cursor-pointer flex items-center justify-center gap-3 group text-center"
                  id="buy-mercadolivre-cta-btn"
                >
                  <ShoppingBag className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>COMPRAR NO MERCADO LIVRE</span>
                  <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Trust Details & Security */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-xs text-[#a39c9f] pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff3e78] shrink-0" />
                  <span>Compra 100% Protegida pelo Mercado Livre</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#ff3e78] shrink-0" />
                  <span>Envio Rápido para Todo o Brasil</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Benefits Section */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#ff3e78] font-bold block mb-2">
              POTÊNCIA BOTÂNICA CONCENTRADA
            </span>
            <h2 className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase">
              PRINCIPAIS BENEFÍCIOS DO {product.name.toUpperCase()}
            </h2>
            <p className="text-xs sm:text-sm text-[#b5adb0] mt-2">
              Conheça os mecanismos fisiológicos e as vantagens de incluir este ativo puro na sua rotina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {product.benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#12050b]/80 border border-[#801438]/50 hover:border-[#ff3e78]/60 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#801438]/30 border border-[#ff3e78]/40 flex items-center justify-center shrink-0 text-[#ff6b95] group-hover:scale-110 transition-transform">
                    <Flame className="w-5 h-5 text-[#ff3e78]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 flex items-center gap-2">
                      <span>{benefit.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specification & Usage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Como Consumir */}
          <div className="p-6 rounded-2xl bg-[#0e0407] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff3e78] mb-3 font-semibold">
                <Clock className="w-4 h-4" />
                <span>SUGESTÃO DE USO</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Como Tomar</h4>
              <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed">
                {product.suggestedUse}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#8e8588]">
              Dica: Beba no mínimo 1 copo cheio de água com cada dose.
            </div>
          </div>

          {/* Card 2: Composição & Ingredientes */}
          <div className="p-6 rounded-2xl bg-[#0e0407] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff3e78] mb-3 font-semibold">
                <Leaf className="w-4 h-4" />
                <span>INGREDIENTES & PUREZA</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Composição</h4>
              <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed mb-3">
                {product.ingredientsText}
              </p>
              <div className="text-[11px] text-[#ff6b95] font-mono">
                {product.allergenWarning}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#8e8588]">
              {product.storageInfo}
            </div>
          </div>

          {/* Card 3: CTA Box rápido */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a050f] via-[#12040a] to-[#070204] border border-[#801438]/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff3e78] mb-3 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>COMPRA OFICIAL</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Garanta seu Frasco</h4>
              <p className="text-xs sm:text-sm text-[#c4bcc0] font-light leading-relaxed mb-4">
                Receba o produto original com lacre de fábrica e entrega rápida pelo Mercado Livre.
              </p>
              <div className="text-2xl font-bold text-white mb-4">
                {product.priceFormatted}
              </div>
            </div>
            <button
              onClick={handleBuyOnMercadoLivre}
              className="w-full py-3.5 px-4 rounded-xl bg-[#801438] hover:bg-[#9e1845] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Comprar Agora</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Other Capsule Products Carousel / Grid */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#ff3e78] font-bold block mb-1">
                COMPLEMENTE SUA ROTINA
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-tight uppercase">
                OUTROS PRODUTOS EM CÁPSULAS DA LINHA
              </h3>
            </div>
            <button
              onClick={onBack}
              className="text-xs font-mono text-[#ff6b95] hover:text-white uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <span>Ver todos os 6 produtos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {otherProducts.slice(0, 5).map((other) => (
              <div
                key={other.id}
                onClick={() => onSelectProduct(other)}
                className="group p-4 rounded-2xl bg-[#12050b]/70 hover:bg-[#18060e] border border-white/10 hover:border-[#ff3e78]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-square rounded-xl bg-black/40 p-3 mb-3 flex items-center justify-center overflow-hidden border border-white/5">
                    <img 
                      src={other.image} 
                      alt={other.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#ff3e78] block mb-1">
                    {other.dosage} • 60 CÁPS
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff6b95] transition-colors line-clamp-1 mb-1">
                    {other.name}
                  </h4>
                  <p className="text-[11px] text-[#a39c9f] line-clamp-2 mb-3 font-light">
                    {other.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{other.priceFormatted}</span>
                  <span className="text-[10px] text-[#ff3e78] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center">
                    Ver <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
