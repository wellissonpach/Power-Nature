import React from 'react';

interface ProductJarVisualProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadges?: boolean;
  className?: string;
}

export const ProductJarVisual: React.FC<ProductJarVisualProps> = ({
  className = ''
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
        <img
          src="/imagem-hero.webp"
          alt="Power Nature Beterraba e Baru"
          className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          loading="lazy"
        />
      </div>
    </div>
  );
};
