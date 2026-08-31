import React from 'react';

export const ProductBannerShowcase: React.FC = () => {
  return (
    <section 
      id="destaque-visual-power-nature"
      aria-label="Power Nature - A Força da Natureza"
      className="w-full relative overflow-hidden bg-[#050203] border-t border-b border-[#2d0e19]/40"
    >
      <picture className="w-full block">
        <source type="image/webp" srcSet="/image-3.webp" />
        <img
          src="/image-3.webp"
          alt="Power Nature - A Força da Natureza para Acompanhar sua Rotina"
          className="w-full h-auto object-cover object-center block"
          loading="lazy"
          decoding="async"
          width={1536}
          height={1024}
        />
      </picture>
    </section>
  );
};
