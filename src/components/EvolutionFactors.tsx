import React from 'react';

const mechanismsList = [
  {
    title: "AUMENTO DA RESISTÊNCIA",
    description: "Permite treinar com maior intensidade e por mais tempo"
  },
  {
    title: "AUMENTO DA FORÇA",
    description: "Mais força para seu treino e rotina, aumento de carga e intensidade no treino."
  },
  {
    title: "RECUPERAÇÃO MUSCULAR",
    description: "Melhor desempenho nos treinos e maior síntese proteica."
  },
  {
    title: "AUMENTO DE LIBIDO",
    description: "Melhora a disposição e desempenho sexual. O óxido nítrico presente na beterraba, funciona como vasodilatador e o zinco presente na castanha de baru melhora a saúde dos vasos, além de promover o aumento de testosterona."
  },
  {
    title: "VASODILATAÇÃO",
    description: "Auxilia na vasodilatação, melhorando a circulação sanguínea, dilatação e pump muscular e também da ereção."
  },
  {
    title: "ENTREGA DE NUTRIENTES",
    description: "Rápida entrega de nutrientes as células e melhor absorção dos nutrientes, tendo assim uma melhor nutrição no tecido muscular e ósseo."
  },
  {
    title: "IMUNIDADE",
    description: "Possui vitamina C e zinco que mantêm as células fortes."
  }
];

export const EvolutionFactors: React.FC = () => {
  return (
    <section 
      id="fatores-evolucao" 
      className="py-16 sm:py-24 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título 1 */}
        <h2 className="font-serif-hero text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase text-center mb-6 sm:mb-8 font-normal">
          FATORES DETERMINANTES PARA EVOLUÇÃO
        </h2>

        {/* Parágrafo Principal */}
        <p className="text-sm sm:text-base md:text-lg text-[#d4cbd0] font-light leading-relaxed text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          O Power Nature atua em todos os fatores determinantes para a evolução corporal física e de performance, por isso sua eficácia é tão grande e sua eficiência em acelerar os resultados é extremamente diferenciada de qualquer outra fórmula existente no mercado, funcionando para qualquer pessoa, em qualquer situação, que busca ter alta performance em todas áreas da vida e o mais importante, saúde
        </p>

        {/* Título 2 */}
        <h3 className="font-serif-hero text-xl sm:text-2xl md:text-3xl text-white tracking-tight uppercase text-center mb-10 sm:mb-12 font-normal">
          COMO O POWER NATURE ATUA?
        </h3>

        {/* Lista Minimalista de Atuação */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {mechanismsList.map((item, index) => (
            <div 
              key={index}
              className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8 hover:bg-white/[0.02] transition-colors px-2 sm:px-4 rounded-lg"
            >
              <h4 className="text-sm sm:text-base font-bold text-[#ff3e78] tracking-wider uppercase shrink-0 sm:w-1/3">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-[#e5dde1] font-light leading-relaxed sm:w-2/3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
