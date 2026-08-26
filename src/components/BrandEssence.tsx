import React from 'react';
import { Leaf, Sun, Sprout, Heart, Shield, Compass } from 'lucide-react';
import { brandConfig } from '../data/brand';

export const BrandEssence: React.FC = () => {
  const essenceValues = [
    {
      icon: Leaf,
      title: "Naturalidade",
      text: "Ingredientes botânicos de origem vegetal, sem excessos de aditivos artificiais ou corantes."
    },
    {
      icon: Compass,
      title: "Origem Brasileira",
      text: "Valorização da biodiversidade nacional, como a nobreza e autenticidade da castanha de baru."
    },
    {
      icon: Shield,
      title: "Pureza & Qualidade",
      text: "Seleção criteriosa de matérias-primas para garantir nutrição limpa e de alta absorção."
    },
    {
      icon: Heart,
      title: "Equilíbrio Real",
      text: "Fórmulas criadas para se integrarem com fluidez à rotina diária de treino e bem-estar."
    }
  ];

  return (
    <section 
      id="nossa-essencia" 
      className="py-24 sm:py-32 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      {/* Background graphic elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#801438]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c02652]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Narrative Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#ff3e78] font-bold mb-4">
              <Sprout className="w-3.5 h-3.5" />
              <span>NOSSA ESSÊNCIA INSTITUCIONAL</span>
            </div>

            <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-[#f5f5f0] tracking-tight leading-[1.15] mb-6">
              NASCEMOS DA <br />
              <span className="text-[#c02652] italic font-serif-hero">NATUREZA</span>
            </h2>

            <p className="text-base sm:text-lg text-[#e8dfe3] font-light leading-relaxed mb-6">
              {brandConfig.essenceText}
            </p>

            <p className="text-xs sm:text-sm text-[#a39c9f] font-light leading-relaxed mb-8">
              Acreditamos que a verdadeira performance nasce do respeito ao corpo e à nutrição funcional. 
              Por isso, cada formulação desenvolvida pela Raiz Vital parte de matérias-primas botânicas de verdade, 
              oferecendo suporte constante para quem busca mais disposição, clareza e bem-estar em sua jornada.
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <img
                src="/logo.png"
                alt="Raiz Vital"
                className="w-12 h-12 object-contain rounded-full shadow-[0_0_15px_rgba(224,43,94,0.3)]"
              />
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-widest text-white uppercase">
                  {brandConfig.name}
                </span>
                <span className="text-xs text-[#c02652] font-medium">
                  {brandConfig.tagline}
                </span>
              </div>
            </div>
          </div>

          {/* Right Values Pillar Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {essenceValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#110508]/80 border border-[#2d0e19] hover:border-[#801438]/60 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1f0912] border border-[#801438]/50 flex items-center justify-center text-[#ff3e78] mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide mb-2">
                      {val.title}
                    </h3>

                    <p className="text-xs text-[#b5adb0] leading-relaxed font-light">
                      {val.text}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-[#801438] mt-4 font-bold">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
