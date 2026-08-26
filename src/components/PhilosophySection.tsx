import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a0505] via-[#14070a] to-[#0a0505] relative overflow-hidden border-t border-white/5">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#8b1a3e]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              UMA NOVA PERSPECTIVA
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-6">
            Menos artificial.{' '}
            <span className="text-[#ff3e78]">
              Mais natural.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed font-light">
            Acreditamos que a preparação para o treino não precisa de excessos químicos ou listas intermináveis de ingredientes sintéticos. O poder da terra oferece exatamente o que o corpo precisa para se manter ativo.
          </p>
        </div>

        {/* Comparison Table / Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Traditional Supplements Card */}
          <div className="p-8 rounded-3xl bg-[#ffffff03] border border-[#ffffff15] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#ffffff15]">
                <span className="text-xs uppercase tracking-widest text-[#f5f5f060] font-bold">
                  Fórmulas Tradicionais
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50">
                  Mercado Comum
                </span>
              </div>

              <ul className="space-y-4 text-sm text-[#f5f5f0a0]">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0 mt-0.5">
                    •
                  </span>
                  <span>Corantes e aromas artificiais adicionados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0 mt-0.5">
                    •
                  </span>
                  <span>Excesso de ingredientes de difícil pronúncia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0 mt-0.5">
                    •
                  </span>
                  <span>Geralmente baseados em derivados de origem sintética</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-white/40 italic">
              Proposta convencional de suplementação
            </div>
          </div>

          {/* Power Nature Concept Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1a080c] via-[#14070a] to-[#0a0505] border border-[#8b1a3e] shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b1a3e]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#8b1a3e]/30">
                <span className="text-xs uppercase tracking-widest text-[#ff3e78] font-bold">
                  Power Nature
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#8b1a3e]/20 border border-[#8b1a3e] text-[#ff3e78] font-bold">
                  Nutrição Botânica
                </span>
              </div>

              <ul className="space-y-4 text-sm text-[#f5f5f0]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5 border border-[#8b1a3e]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">Beterraba em pó e castanha de baru selecionadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5 border border-[#8b1a3e]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">100% de origem vegetal com proteína limpa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5 border border-[#8b1a3e]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">Minerais e cor naturalmente provenientes da terra</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#8b1a3e]/30 text-xs text-[#ff3e78] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simplicidade, pureza e respeito à sua rotina</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
