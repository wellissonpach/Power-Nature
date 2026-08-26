/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { VitalBenefits } from './components/VitalBenefits';
import { BrandEssence } from './components/BrandEssence';
import { BrandPillars } from './components/BrandPillars';
import { IngredientsCatalog } from './components/IngredientsCatalog';
import { Audience } from './components/Audience';
import { BrandWhyUs } from './components/BrandWhyUs';
import { FeaturedProduct } from './components/FeaturedProduct';
import { HowToUse } from './components/HowToUse';
import { TrustProof } from './components/TrustProof';
import { FAQ } from './components/FAQ';
import { InstagramSection } from './components/InstagramSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { NutritionModal } from './components/NutritionModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModals } from './components/LegalModals';
import { productConfig } from './config/product';
import { ProductPack } from './types';
import { trackEvent } from './utils/analytics';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPackForCheckout, setSelectedPackForCheckout] = useState<ProductPack>(productConfig.packs[1]);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Track page view & scroll depth
  useEffect(() => {
    const pageTitle = 'Raiz Vital | Produtos Naturais e Nutrição Funcional';
    document.title = pageTitle;
    trackEvent('page_view', { page_title: pageTitle, path: '/' });

    let fired50 = false;
    let fired90 = false;
    let ticking = false;

    const handleScrollTracking = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollHeight > 0) {
            const scrollPercent = (window.scrollY / scrollHeight) * 100;
            if (scrollPercent >= 50 && !fired50) {
              fired50 = true;
              trackEvent('scroll_50', { depth: 50 });
            }
            if (scrollPercent >= 90 && !fired90) {
              fired90 = true;
              trackEvent('scroll_90', { depth: 90 });
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollTracking, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
  };

  const handleDirectBuy = () => {
    trackEvent('click_buy', { source: 'direct_buy_action' });
    if (productConfig.checkoutUrl && productConfig.checkoutUrl !== '#') {
      window.open(productConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      const el = document.getElementById('destaque-produto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroBuyClick = () => {
    handleDirectBuy();
  };

  const handleExploreClick = () => {
    const el = document.getElementById('produtos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0505] text-[#f5f5f0] relative overflow-x-hidden font-sans selection:bg-[#8b1a3e] selection:text-white">
      
      {/* 1. Official Sticky Header (Raiz Vital) */}
      <Header 
        onNavigate={navigateTo}
        currentRoute={currentRoute}
        onExploreProducts={() => {
          const el = document.getElementById('produtos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main>
        {/* 2. Hero Section (Preservada visualmente como destaque do Power Nature) */}
        <Hero 
          onBuyClick={handleHeroBuyClick} 
          onExploreClick={handleExploreClick} 
        />

        {/* 3. Nova Seção: Nossos Produtos (Catálogo de portfólio escalável) */}
        <ProductCatalog 
          onQuickBuy={() => handleDirectBuy()}
        />

        {/* 4. Nova Seção: Benefícios dos Produtos Raiz Vital (Respostas para dores e desejos do público) */}
        <VitalBenefits 
          onExploreProduct={() => {
            const el = document.getElementById('destaque-produto');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Nova Seção: Nossa Essência (Nascemos da Natureza) */}
        <BrandEssence />

        {/* 6. Nova Seção: Da Origem ao Produto (4 Pilares institucionais) */}
        <BrandPillars />

        {/* 7. Nova Seção: Ingredientes da Nossa Essência (Acervo Botânico) */}
        <IngredientsCatalog />

        {/* 8. Para Quem É (Público & Momentos de Consumo) */}
        <Audience />

        {/* 9. Nova Seção: Por Que Raiz Vital? (Diferenciais da Marca) */}
        <BrandWhyUs />

        {/* 10. Nova Seção: Produto em Destaque (Power Nature) */}
        <FeaturedProduct 
          onBuyClick={handleDirectBuy}
          onOpenNutrition={() => setIsNutritionOpen(true)}
        />

        {/* 11. Como Consumir / Ritual */}
        <HowToUse />

        {/* 12. Confiança & Avaliações */}
        <TrustProof />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. Instagram (@araizvital) */}
        <InstagramSection />

        {/* 15. CTA Final */}
        <FinalCTA onBuyClick={handleDirectBuy} />
      </main>

      {/* 16. Rodapé Oficial Raiz Vital */}
      <Footer 
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenNutrition={() => setIsNutritionOpen(true)}
        onNavigate={navigateTo}
      />

      {/* Modais Globais */}
      <NutritionModal 
        isOpen={isNutritionOpen} 
        onClose={() => setIsNutritionOpen(false)} 
      />

      <CheckoutModal 
        isOpen={checkoutModalOpen} 
        onClose={() => setCheckoutModalOpen(false)} 
        pack={selectedPackForCheckout} 
      />

      <LegalModals 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />

    </div>
  );
}
