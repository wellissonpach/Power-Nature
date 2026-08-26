import React from 'react';
import { brandPillarsData } from '../data/brand';
import { Leaf, ShieldCheck, Sparkles, HeartPulse } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  ShieldCheck,
  Sparkles,
  HeartPulse
};

export const BrandPillars: React.FC = () => {
  return (
    <section 
      id="pilares-marca" 
      className="py-20 sm:py-28 bg-[#0a0505] relative overflow-hidden border-t border-[#2d0e19]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#c02652] font-semibold block mb-3">
            DA ORIGEM AO PRODUTO
          </span>
          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            NOSSA VISÃO SOBRE PRODUTOS NATURAIS
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#b5adb0] font-light leading-relaxed">
            Mais do que fornecer suplementos, desenvolvemos formulações funcionais a partir de quatro pilares de rigor e respeito à botânica.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandPillarsData.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || Leaf;

            return (
              <div 
                key={pillar.number}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#13060a] to-[#0d0407] border border-[#2d0e19] hover:border-[#801438]/70 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-serif-hero text-[#c02652] font-bold">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1f0912] border border-[#801438]/50 flex items-center justify-center text-[#ff3e78] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#e02b5e] font-serif-hero italic mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs text-[#b5adb0] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c02652]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8588]">
                    Padrão Raiz Vital
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
