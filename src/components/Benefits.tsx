import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Leaf, Flame, Nut, ArrowRight } from 'lucide-react';
import { benefitsData } from '../config/product';

interface BenefitsProps {
  onLearnMore?: (id: string) => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onLearnMore }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#ff3e78]" />;
      case 'Nut':
        return <Nut className="w-5 h-5 text-[#ff3e78]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#ff3e78]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#ff3e78]" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#0e0708] relative overflow-hidden border-t border-white/5">
      {/* Subtle radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b1a3e]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              COMPOSIÇÃO CONSCIENTE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            O que existe dentro dessa fórmula?
          </h2>
          <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed font-light">
            Uma combinação precisa de raízes, sementes nativas e proteínas vegetais projetada para oferecer nutrientes em seu estado mais autêntico.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#14070a] border border-[#ffffff15] hover:border-[#8b1a3e] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(139,26,62,0.2)]"
              id={`benefit-card-${item.id}`}
            >
              {/* Card Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14070a] via-black/40 to-transparent" />
                
                {/* Tag Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-[#ff3e78] tracking-wider uppercase">
                  {item.tag}
                </div>

                {/* Icon Circle */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-[#1a080c]/90 backdrop-blur-md border border-[#8b1a3e]/50 flex items-center justify-center shadow-md">
                  {getIcon(item.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#f5f5f0] tracking-wide mb-1 group-hover:text-[#ff3e78] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#ff3e78] font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-[#f5f5f0a0] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#f5f5f060] font-medium">
                  <span>Nutrição Botânica</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3e78]" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
