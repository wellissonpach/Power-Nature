import React from 'react';
import { ingredientsCatalogData } from '../data/ingredients';
import { MapPin, Sparkles, Sprout } from 'lucide-react';

export const IngredientsCatalog: React.FC = () => {
  return (
    <section 
      id="ingredientes-marca" 
      className="py-24 sm:py-32 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#ff3e78] font-bold mb-4 shadow-[0_0_15px_rgba(128,20,56,0.2)]">
            <Sprout className="w-3.5 h-3.5" />
            <span>BOTÂNICA & BIODIVERSIDADE</span>
          </div>

          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            INGREDIENTES QUE FAZEM PARTE DA NOSSA ESSÊNCIA
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#b5adb0] font-light leading-relaxed">
            Conheça as matrizes vegetais selecionadas que dão vida às fórmulas da Raiz Vital, unindo a força da terra à ciência dos alimentos funcionais.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 sm:gap-10">
          {ingredientsCatalogData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#110508]/80 border border-[#2d0e19] hover:border-[#801438]/70 overflow-hidden transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="w-full h-56 sm:h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110508] via-transparent to-black/30" />
                  
                  {/* Badge */}
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#0a0505]/80 backdrop-blur-md border border-[#801438]/50 text-[10px] uppercase tracking-wider text-[#ff3e78] font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#c02652] uppercase tracking-widest mb-1.5">
                    <MapPin className="w-3 h-3" />
                    <span>{item.origin}</span>
                  </div>

                  <h3 className="font-serif-hero text-xl text-white mb-1 group-hover:text-[#ff3e78] transition-colors">
                    {item.name}
                  </h3>

                  {item.scientificOrType && (
                    <p className="text-[11px] text-[#8e8588] italic mb-3">
                      {item.scientificOrType}
                    </p>
                  )}

                  <p className="text-xs text-[#b5adb0] leading-relaxed font-light mb-4 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Benefícios */}
              <div className="px-6 pb-6 pt-3.5 border-t border-white/5 bg-[#16060c]/50">
                <span className="text-[10px] font-mono text-[#ff3e78] uppercase tracking-[0.2em] block mb-2 font-bold">
                  BENEFÍCIOS:
                </span>
                {item.benefits && item.benefits.length > 0 ? (
                  <ul className="space-y-1.5 text-[11px] text-[#e8dfe3]">
                    {item.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 leading-snug">
                        <span className="text-[#ff3e78] font-bold shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11px] text-[#e8dfe3] font-normal leading-snug">
                    {item.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
