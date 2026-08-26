import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, Droplets } from 'lucide-react';

export const BeetrootSection: React.FC = () => {
  return (
    <section id="ingredientes" className="py-20 md:py-28 bg-[#0a0505] relative overflow-hidden border-t border-white/5">
      {/* Background glow in dark beetroot crimson */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8b1a3e]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Macro Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#8b1a3e]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#14070a] group">
              <img
                src="https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?q=80&w=1200&auto=format&fit=crop"
                alt="Beterraba fresca e desidratada selecionada"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#14070a]/90 backdrop-blur-md border border-[#8b1a3e]/40">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff3e78] block">
                      SELEÇÃO BOTÂNICA
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Raiz Desidratada em Baixa Temperatura
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-white border border-[#8b1a3e]">
                    <Droplets className="w-4 h-4 text-[#ff3e78]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Border Frame Corner */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#8b1a3e] rounded-tl-xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] w-fit mb-4">
              <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
                O PODER DA RAIZ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-6 leading-tight">
              A força da beterraba,{' '}
              <span className="text-[#ff3e78]">
                em sua rotina.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed mb-6 font-light">
              A beterraba é uma das raízes mais celebradas na nutrição esportiva e funcional mundial. 
              Ao ser desidratada e incorporada em pó fino, ela preserva seus pigmentos naturais, sua cor intensa e os compostos vegetais característicos da planta fresca.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15]">
                <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Pigmentos e Nutrientes Preservados</h4>
                  <p className="text-xs text-[#f5f5f0a0] mt-0.5">
                    Processo de desidratação cuidadoso que valoriza os componentes naturais da raiz inteira.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15]">
                <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sabor Natural e Fácil Dissolução</h4>
                  <p className="text-xs text-[#f5f5f0a0] mt-0.5">
                    Combina perfeitamente com água gelada, sucos cítricos ou shakes antes do treino.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15]">
                <div className="w-5 h-5 rounded-full bg-[#8b1a3e]/40 flex items-center justify-center text-[#ff3e78] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sem Corantes Artificiais</h4>
                  <p className="text-xs text-[#f5f5f0a0] mt-0.5">
                    A tonalidade vibrante do produto vem 100% da beterraba natural selecionada.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
