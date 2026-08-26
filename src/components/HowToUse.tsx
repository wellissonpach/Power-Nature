import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, GlassWater, Dumbbell, AlertCircle, CheckCircle2 } from 'lucide-react';
import { productConfig } from '../config/product';

export const HowToUse: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Dosar 2 Scoops",
      description: "Utilize o dosador para adicionar 2 medidas rasas (aproximadamente 10g) em seu copo ou coqueteleira.",
      icon: Utensils,
      highlight: "Dose diária sugerida"
    },
    {
      stepNumber: "02",
      title: "Misturar e Homogeneizar",
      description: "Adicione de 150ml a 200ml de água fresca ou gelada, água de coco ou sua bebida vegetal favorita.",
      icon: GlassWater,
      highlight: "Dissolução rápida"
    },
    {
      stepNumber: "03",
      title: "Consumir no seu Momento",
      description: "Ingerir antes do início do treino para acompanhar sua prática, ou logo após a finalização da atividade.",
      icon: Dumbbell,
      highlight: "Antes ou depois"
    }
  ];

  return (
    <section id="como-usar" className="py-20 md:py-28 bg-[#0c0507] relative overflow-hidden border-t border-white/5">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#8b1a3e]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              MODO DE USO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Como incluir na sua rotina?
          </h2>
          <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed font-light">
            Prático, versátil e fácil de dissolver para fazer parte do seu ritual esportivo diário.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stepNumber}
                className="relative p-8 rounded-3xl bg-[#14070a] border border-[#ffffff15] hover:border-[#8b1a3e] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_10px_30px_rgba(139,26,62,0.2)]"
              >
                {/* Step indicator header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-[#ff3e78]/80 font-mono">
                      {item.stepNumber}
                    </span>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#8b1a3e]/20 border border-[#8b1a3e] text-[#ff3e78] uppercase tracking-wider font-bold">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#1a080c] border border-[#8b1a3e]/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#ff3e78] transition-all shadow-inner">
                    <Icon className="w-6 h-6 text-[#ff3e78]" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#ff3e78] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#f5f5f0a0] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#f5f5f060]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3e78]" />
                  <span>Passo {index + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Label Guidance Banner */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#14070a] border border-[#8b1a3e]/40 flex items-start gap-4 shadow-md">
          <div className="w-8 h-8 rounded-xl bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5 border border-[#8b1a3e]">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div className="text-xs text-[#f5f5f0a0] leading-relaxed">
            <span className="font-semibold text-white block mb-1">
              Orientações Oficiais da Embalagem:
            </span>
            <p className="italic text-[#f5f5f0]">
              "{productConfig.suggestedUse}"
            </p>
            <p className="text-[#f5f5f060] mt-1 text-[11px]">
              {productConfig.storageInfo}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
