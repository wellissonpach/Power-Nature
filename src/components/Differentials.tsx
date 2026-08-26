import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sprout, MapPin, Zap, Sparkles } from 'lucide-react';
import { differentialsData } from '../config/product';

export const Differentials: React.FC = () => {
  const getDiffIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#ff3e78]" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#ff3e78]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#ff3e78]" />;
      case 'Zap':
      default:
        return <Zap className="w-6 h-6 text-[#ff3e78]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0c0507] relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b1a3e]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              PILARES DA MARCA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Por que escolher a Power Nature?
          </h2>
          <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed font-light">
            Transparência e respeito à sua saúde em cada detalhe de nossa formulação botânica.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentialsData.map((diff, index) => (
            <div
              key={diff.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#14070a] border border-[#ffffff15] hover:border-[#8b1a3e] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_10px_30px_rgba(139,26,62,0.2)]"
              id={`differential-item-${diff.id}`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1a080c] border border-[#8b1a3e]/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#ff3e78] transition-all shadow-inner">
                  {getDiffIcon(diff.icon)}
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide mb-3 group-hover:text-[#ff3e78] transition-colors">
                  {diff.title}
                </h3>

                <p className="text-sm text-[#f5f5f0a0] leading-relaxed font-light">
                  {diff.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#f5f5f060]">
                <span>Pilar 0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
