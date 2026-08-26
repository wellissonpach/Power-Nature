import React from 'react';
import { motion } from 'motion/react';
import { audienceData } from '../config/product';
import { Footprints, Bike, Dumbbell, HeartPulse, Sparkles, Sprout } from 'lucide-react';

export const Audience: React.FC = () => {
  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-[#ff3e78]" />;
      case 'Bike':
        return <Bike className="w-5 h-5 text-[#ff3e78]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#ff3e78]" />;
      case 'Vegan':
        return <Sprout className="w-5 h-5 text-[#ff3e78]" />;
      case 'HeartPulse':
      default:
        return <HeartPulse className="w-5 h-5 text-[#ff3e78]" />;
    }
  };

  return (
    <section id="para-quem" className="py-20 md:py-28 bg-[#0a0505] relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8b1a3e]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              PARA SUA JORNADA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Para quem é o Power Nature?
          </h2>
          <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed font-light">
            Desenvolvido para quem busca consistência diária, alimentação consciente e uma rotina ativa sem abrir mão da naturalidade.
          </p>
        </div>

        {/* 5 Cards Bento Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden border border-[#ffffff15] hover:border-[#8b1a3e] transition-all duration-300 bg-[#14070a] flex flex-col justify-end min-h-[320px] shadow-lg ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                id={`audience-card-${item.id}`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-[#0a0505]/75 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-2xl bg-[#1a080c]/90 backdrop-blur-md border border-[#8b1a3e] flex items-center justify-center mb-4 shadow-md">
                    {getAudienceIcon(item.iconName)}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide mb-2 group-hover:text-[#ff3e78] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#f5f5f0a0] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
