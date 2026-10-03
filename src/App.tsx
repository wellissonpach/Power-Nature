/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PerformanceTechSection } from './components/PerformanceTechSection';
import { VitalBenefits } from './components/VitalBenefits';
import { EvolutionFactors } from './components/EvolutionFactors';
import { ProductBannerShowcase } from './components/ProductBannerShowcase';
import { BrandPillars } from './components/BrandPillars';
import { IngredientsCatalog } from './components/IngredientsCatalog';
import { Audience } from './components/Audience';
import { FeaturedProduct } from './components/FeaturedProduct';
import { CapsuleProductPage } from './components/CapsuleProductPage';
import { TrustProof } from './components/TrustProof';
import { FAQ } from './components/FAQ';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { NutritionModal } from './components/NutritionModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModals } from './components/LegalModals';
import { productConfig } from './config/product';
import { ProductPack, CapsuleProduct } from './types';
import { capsuleProducts, getCapsuleProductBySlug } from './data/capsules';
import { trackEvent } from './utils/analytics';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedCapsuleProduct, setSelectedCapsuleProduct] = useState<CapsuleProduct | null>(null);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPackForCheckout, setSelectedPackForCheckout] = useState<ProductPack>(productConfig.packs[1]);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync with URL Hash (#produto-slug)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('produto-')) {
        const slug = hash.replace('produto-', '');
        const found = getCapsuleProductBySlug(slug);
        if (found) {
          setSelectedCapsuleProduct(found);
        }
      } else if (!hash) {
        setSelectedCapsuleProduct(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Track page view & scroll depth
  useEffect(() => {
    const pageTitle = selectedCapsuleProduct 
      ? `${selectedCapsuleProduct.name} em Cápsulas | Raiz Vital`
      : 'Raiz Vital | Produtos Naturais e Nutrição Funcional';
    document.title = pageTitle;
    trackEvent('page_view', { page_title: pageTitle, path: selectedCapsuleProduct ? `/produtos/${selectedCapsuleProduct.slug}` : '/' });

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
  }, [selectedCapsuleProduct]);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
  };

  const handleSelectCapsuleProduct = (product: CapsuleProduct) => {
    setSelectedCapsuleProduct(product);
    window.location.hash = `produto-${product.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedCapsuleProduct(null);
    if (window.location.hash) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    setTimeout(() => {
      const el = document.getElementById('destaque-produto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
    if (selectedCapsuleProduct) {
      setSelectedCapsuleProduct(null);
      if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
    setTimeout(() => {
      const el = document.getElementById('destaque-produto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0a0505] text-[#f5f5f0] relative overflow-x-hidden font-sans selection:bg-[#8b1a3e] selection:text-white">
      
      {/* Header Fixo Global */}
      <Header 
        onNavigate={(route) => {
          if (selectedCapsuleProduct) {
            handleBackToHome();
          } else {
            navigateTo(route);
          }
        }}
        currentRoute={selectedCapsuleProduct ? `/produtos/${selectedCapsuleProduct.slug}` : currentRoute}
        onExploreProducts={handleExploreClick}
      />

      {selectedCapsuleProduct ? (
        <CapsuleProductPage 
          product={selectedCapsuleProduct}
          onBack={handleBackToHome}
          onSelectProduct={handleSelectCapsuleProduct}
        />
      ) : (
        <main>
          {/* 1. Hero Section (Destaque do Power Nature) */}
          <Hero 
            onBuyClick={handleHeroBuyClick} 
            onExploreClick={handleExploreClick} 
          />

          {/* 2. Inovação & Tecnologia de Performance */}
          <PerformanceTechSection />

          {/* 3. Benefícios dos Produtos Raiz Vital */}
          <VitalBenefits 
            onExploreProduct={() => {
              const el = document.getElementById('destaque-produto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 4. Fatores Determinantes para Evolução & Como Atua */}
          <EvolutionFactors />

          {/* 5. Destaque Visual Power Nature (Banner Imagem) */}
          <ProductBannerShowcase />

          {/* 6. Fases de Efeitos com o Uso do Power Nature */}
          <BrandPillars />

          {/* 7. Ingredientes da Nossa Essência (Acervo Botânico) */}
          <IngredientsCatalog />

          {/* 8. Para Quem É (Público & Momentos de Consumo) */}
          <Audience />

          {/* 9. Satisfação Garantida & Confiança */}
          <TrustProof onBuyClick={handleDirectBuy} />

          {/* 10. Seção: CONHEÇA NOSSOS PRODUTOS EM CÁPSULAS */}
          <FeaturedProduct 
            onSelectProduct={handleSelectCapsuleProduct}
            onBuyClick={handleDirectBuy}
            onOpenNutrition={() => setIsNutritionOpen(true)}
          />

          {/* 13. FAQ */}
          <FAQ />

          {/* 14. Instagram (@araizvital) */}
          <InstagramSection />
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

      {/* Botão Flutuante Oficial do WhatsApp */}
      <WhatsAppButton phoneNumber="556198638990" />

    </div>
  );
}
