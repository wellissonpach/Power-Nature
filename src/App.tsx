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
import { ProductPage } from './components/ProductPage';
import { productConfig } from './config/product';
import { productsList, getProductBySlug } from './data/products';
import { ProductPack, ProductItem } from './types';
import { trackEvent } from './utils/analytics';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPackForCheckout, setSelectedPackForCheckout] = useState<ProductPack>(productConfig.packs[1]);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync route with browser history (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track page view & scroll depth
  useEffect(() => {
    const pageTitle = currentRoute.includes('power-nature')
      ? 'Power Nature Pré-Treino | Raiz Vital'
      : 'Raiz Vital | Produtos Naturais e Nutrição Funcional';
      
    document.title = pageTitle;
    trackEvent('page_view', { page_title: pageTitle, path: currentRoute });

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
  }, [currentRoute]);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', route);
    }
  };

  const scrollToOffer = () => {
    const offerElement = document.getElementById('produto');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectBuy = () => {
    trackEvent('click_buy', { source: 'direct_buy_action' });
    if (productConfig.checkoutUrl && productConfig.checkoutUrl !== '#') {
      window.open(productConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      scrollToOffer();
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

  const handleSelectProduct = (product: ProductItem) => {
    if (product.status === 'active') {
      navigateTo(product.href);
    }
  };

  // Determine if we are viewing a dedicated product page
  const isProductRoute = currentRoute.startsWith('/produtos/');
  const productSlug = isProductRoute ? currentRoute.replace('/produtos/', '') : '';
  const currentProduct = productSlug ? getProductBySlug(productSlug) : undefined;

  return (
    <div className="min-h-screen bg-[#0a0505] text-[#f5f5f0] relative overflow-x-hidden font-sans selection:bg-[#8b1a3e] selection:text-white">
      
      {/* 1. Official Sticky Header (Raiz Vital) */}
      <Header 
        onNavigate={navigateTo}
        currentRoute={currentRoute}
        onExploreProducts={() => {
          if (currentRoute !== '/') {
            navigateTo('/');
            setTimeout(() => {
              const el = document.getElementById('produtos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            const el = document.getElementById('produtos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Route Switcher: Dedicated Product Page vs Main Brand Portal */}
      {isProductRoute && currentProduct ? (
        <main>
          <ProductPage 
            product={currentProduct}
            onBackToHome={() => navigateTo('/')}
            onBuyPack={handleDirectBuy}
            onOpenNutrition={() => setIsNutritionOpen(true)}
          />
        </main>
      ) : (
        <main>
          {/* 2. Hero Section (Preservada visualmente como destaque do Power Nature) */}
          <Hero 
            onBuyClick={handleHeroBuyClick} 
            onExploreClick={handleExploreClick} 
          />

          {/* 3. Nova Seção: Nossos Produtos (Catálogo de portfólio escalável) */}
          <ProductCatalog 
            onSelectProduct={handleSelectProduct}
            onQuickBuy={() => scrollToOffer()}
          />

          {/* 4. Nova Seção: Benefícios dos Produtos Raiz Vital (Respostas para dores e desejos do público) */}
          <VitalBenefits 
            onExploreProduct={() => scrollToOffer()}
          />

          {/* 5. Nova Seção: Nossa Essência (Nascemos da Natureza) */}
          <BrandEssence />

          {/* 5. Nova Seção: Da Origem ao Produto (4 Pilares institucionais) */}
          <BrandPillars />

          {/* 6. Nova Seção: Ingredientes da Nossa Essência (Acervo Botânico) */}
          <IngredientsCatalog />

          {/* 7. Para Quem É (Público & Momentos de Consumo) */}
          <Audience />

          {/* 8. Nova Seção: Por Que Raiz Vital? (Diferenciais da Marca) */}
          <BrandWhyUs />

          {/* 9. Nova Seção: Produto em Destaque (Power Nature) */}
          <FeaturedProduct 
            onBuyClick={handleDirectBuy}
            onOpenNutrition={() => setIsNutritionOpen(true)}
          />

          {/* 10. Como Consumir / Ritual */}
          <HowToUse />

          {/* 11. Confiança & Avaliações */}
          <TrustProof />

          {/* 12. FAQ */}
          <FAQ />

          {/* 13. Instagram (@araizvital) */}
          <InstagramSection />

          {/* 14. CTA Final */}
          <FinalCTA onBuyClick={handleDirectBuy} />
        </main>
      )}

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
