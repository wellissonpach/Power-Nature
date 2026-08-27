import React from 'react';
import { Sparkles, Zap, Heart, Flame } from 'lucide-react';

interface PerformanceTechSectionProps {
  onExplore?: () => void;
}

export const PerformanceTechSection: React.FC<PerformanceTechSectionProps> = () => {
  return (
    <section
      id="inovacao-performance"
      className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#070204] via-[#0d0407] to-[#070204] relative overflow-hidden border-t border-[#2d0e19]/60"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] bg-radial from-[#801438]/20 via-[#400a1c]/10 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#801438]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#c02652]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Identification Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18060d]/90 border border-[#801438]/70 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#ff3e78] font-bold backdrop-blur-md shadow-[0_0_20px_rgba(128,20,56,0.35)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78] animate-pulse" />
            <span>EXCLUSIVIDADE & BIOTECNOLOGIA</span>
          </div>
        </div>

        {/* Main Statement Box - Glassmorphic Editorial Card */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-b from-[#19060f]/80 via-[#100307]/90 to-[#0c0205]/95 border border-[#801438]/40 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md text-center">
          
          <h2 className="font-serif-hero text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] leading-[1.08] sm:leading-[1.12] lg:leading-[1.14] text-[#f5f3f0] uppercase tracking-wide font-normal drop-shadow-md">
            NOVIDADE NO BRASIL, UMA INOVAÇÃO QUE UNE{' '}
            <span className="text-[#e02b5e] font-serif-hero italic">
              FÓRMULAS NATURAIS
            </span>{' '}
            COM A CAPACIDADE DE ELEVAR SEU CORPO À{' '}
            <span className="text-white font-medium">
              MÁXIMA PERFORMANCE FÍSICA
            </span>
            ,{' '}
            <span className="text-[#ff3e78] font-serif-hero italic">
              ÍNTIMA
            </span>{' '}
            E AUXÍLIO NA{' '}
            <span className="text-[#e02b5e] font-medium">
              HIPERTROFIA MUSCULAR
            </span>
          </h2>

          {/* 3 Core Impact Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#801438]/30">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#801438]/40 transition-colors text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#801438]/20 border border-[#801438]/50 flex items-center justify-center mb-4 text-[#ff3e78] shadow-[0_0_20px_rgba(255,62,120,0.2)]">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[22px] font-bold uppercase tracking-wider text-white mb-2.5">
                Performance Física
              </h3>
              <p className="text-sm sm:text-base text-[#cfc7cb] leading-relaxed font-normal">
                Estímulo sustentado de energia, redução de fadiga e resistência prolongada.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#801438]/40 transition-colors text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#801438]/20 border border-[#801438]/50 flex items-center justify-center mb-4 text-[#ff3e78] shadow-[0_0_20px_rgba(255,62,120,0.2)]">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[22px] font-bold uppercase tracking-wider text-white mb-2.5">
                Vitalidade Íntima
              </h3>
              <p className="text-sm sm:text-base text-[#cfc7cb] leading-relaxed font-normal">
                Otimização da circulação, vigor natural e suporte à disposição diária.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#801438]/40 transition-colors text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#801438]/20 border border-[#801438]/50 flex items-center justify-center mb-4 text-[#ff3e78] shadow-[0_0_20px_rgba(255,62,120,0.2)]">
                <Flame className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[22px] font-bold uppercase tracking-wider text-white mb-2.5">
                Hipertrofia Muscular
              </h3>
              <p className="text-sm sm:text-base text-[#cfc7cb] leading-relaxed font-normal">
                Aporte de nutrientes funcionais para síntese muscular e rápida recuperação.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
