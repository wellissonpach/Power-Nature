import React from 'react';
import { brandDifferentials } from '../data/brand';
import { Sprout, MapPin, ShieldCheck, Zap } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  MapPin,
  ShieldCheck,
  Zap
};

export const BrandWhyUs: React.FC = () => {
  return (
    <section 
      id="por-que-raiz-vital" 
      className="py-20 sm:py-28 bg-[#0a0505] relative overflow-hidden border-t border-[#2d0e19]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#c02652] font-semibold block mb-3">
            DIFERENCIAIS INSTITUCIONAIS
          </span>
          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            POR QUE ESCOLHER A POWER NATURE?
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandDifferentials.map((diff) => {
            const Icon = iconMap[diff.icon] || Sprout;

            return (
              <div
                key={diff.id}
                className="p-7 rounded-3xl bg-[#110508]/90 border border-[#2d0e19] hover:border-[#801438]/70 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1d0810] border border-[#801438]/50 flex items-center justify-center text-[#ff3e78] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-2.5">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-[#b5adb0] leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#801438]">
                    Raiz Vital Purity
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
