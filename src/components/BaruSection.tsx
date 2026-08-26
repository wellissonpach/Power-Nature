import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Check, Trees, Compass } from 'lucide-react';

export const BaruSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0c0507] relative overflow-hidden border-t border-white/5">
      {/* Background glow in warm obsidian/crimson */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8b1a3e]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Brazilian Identity */}
          <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] w-fit mb-4">
              <Compass className="w-3.5 h-3.5 text-[#ff3e78]" />
              <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
                BIODIVERSIDADE NACIONAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-6 leading-tight">
              Do Cerrado brasileiro{' '}
              <span className="text-[#ff3e78]">
                para sua rotina.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed mb-6 font-light">
              A castanha de baru é um dos tesouros botânicos mais valiosos do Cerrado brasileiro. 
              Tradicionalmente colhida em árvores nativas, ela combina um sabor amendoado sofisticado com alta densidade de nutrientes vegetais e lipídios benéficos.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15]">
                <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5 border border-[#8b1a3e]">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Castanha Micronizada Nobre</h4>
                  <p className="text-xs text-[#f5f5f0a0] mt-0.5">
                    Moída finamente para se integrar com homogeneidade perfeita ao pó do suplemento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15]">
                <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5 border border-[#8b1a3e]">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Riqueza em Nutrientes do Cerrado</h4>
                  <p className="text-xs text-[#f5f5f0a0] mt-0.5">
                    Fonte vegetal de lipídios nobres e antioxidantes provenientes do solo do bioma brasileiro.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15]">
                <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5 border border-[#8b1a3e]">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Valorização da Flora Nativa</h4>
                  <p className="text-xs text-[#f5f5f0a0] mt-0.5">
                    Incentivo ao uso consciente e sustentável dos recursos botânicos do Brasil.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#f5f5f060] font-mono">
              <MapPin className="w-4 h-4 text-[#ff3e78]" />
              <span>Origem: Bioma Cerrado, Brasil</span>
            </div>

          </div>

          {/* Right Column: Macro Visual of Baru Nuts & Terroir */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-[#8b1a3e]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#14070a] group">
              <img
                src="/castanha-de-baru.webp"
                alt="Castanhas torradas do Cerrado brasileiro"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0507] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#14070a]/90 backdrop-blur-md border border-[#8b1a3e]/40">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff3e78] block">
                      SUPERALIMENTO DO CERRADO
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Sabor Terroso & Perfil Nutricional Único
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-white border border-[#8b1a3e]">
                    <Trees className="w-4 h-4 text-[#ff3e78]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Border Frame Corner */}
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#8b1a3e] rounded-br-xl pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
