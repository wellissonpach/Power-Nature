import React from 'react';
import { Flame, Activity, Zap, Sprout, Dumbbell, Leaf, Sparkles, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface BenefitCardData {
  desire: string;
  title: string;
  ingredient: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  image?: string;
}

const benefitsList: BenefitCardData[] = [
  {
    desire: "Quero render mais no treino",
    title: "MAIS RESISTÊNCIA",
    ingredient: "Beterraba / Nitratos Naturais",
    description: "Os nitratos naturais presentes na beterraba em pó auxiliam na eficiência do fluxo e aproveitamento de oxigênio celular, permitindo sustentar o ritmo por mais tempo.",
    badge: "Eficiência Botânica",
    icon: Flame,
    image: "/resistencia.webp"
  },
  {
    desire: "Sinto que meu treino pesa rápido",
    title: "MENOR ESFORÇO PERCEBIDO",
    ingredient: "Beterraba / Eficiência no Exercício",
    description: "Ajuda a otimizar o custo energético de cada repetição ou passada, reduzindo a sensação precoce de desgaste físico e mantendo a constância.",
    badge: "Energia Fluida",
    icon: Activity,
    image: "/menor-esforco.webp"
  },
  {
    desire: "Quero melhorar minha performance",
    title: "PERFORMANCE EM MOVIMENTO",
    ingredient: "Beterraba / Desempenho Ativo",
    description: "Uma matriz vegetal pura desenhada para acompanhar treinos dinâmicos, corridas, ciclismo e força com vitalidade sustentada, sem picos artificiais.",
    badge: "Performance Limpa",
    icon: Zap,
    image: "/performance-em-movimento.webp"
  },
  {
    desire: "Quero uma alimentação mais nutritiva",
    title: "NUTRIÇÃO VEGETAL",
    ingredient: "Baru + Proteína Vegetal",
    description: "Densidade nutricional de verdade: união do perfil lipídico benéfico e minerais da castanha de baru com nutrientes de base vegetal para nutrir seu corpo.",
    badge: "Superalimento Cerrado",
    icon: Sprout,
    image: "/nutricao-vegetal1.webp"
  },
  {
    desire: "Quero consumir mais proteína vegetal",
    title: "PROTEÍNA DE ORIGEM VEGETAL",
    ingredient: "Baru + Proteína Vegetal Isolada",
    description: "Aporte proteico 100% plant-based com alta digestibilidade, livre de derivados lácteos e lactose, ideal para recuperação e complementação diária.",
    badge: "100% Plant-Based",
    icon: Dumbbell,
    image: "/proteina-vegetal.webp"
  },
  {
    desire: "Quero uma alternativa natural",
    title: "INGREDIENTES NATURAIS",
    ingredient: "Beterraba + Baru Selecionados",
    description: "Nutrição funcional feita a partir de plantas reais da nossa biodiversidade. Zero corantes sintéticos, conservantes artificiais ou aditivos desnecessários.",
    badge: "Zero Sintéticos",
    icon: Leaf,
    image: "/ingredientes-naturais.webp"
  }
];

interface VitalBenefitsProps {
  onExploreProduct?: () => void;
}

export const VitalBenefits: React.FC<VitalBenefitsProps> = ({ onExploreProduct }) => {
  return (
    <section 
      id="beneficios-raiz-vital" 
      className="py-24 sm:py-32 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-radial from-[#801438]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18060d] border border-[#801438]/60 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#ff3e78] font-bold mb-4 shadow-[0_0_15px_rgba(128,20,56,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BENEFÍCIOS DA NUTRIÇÃO FUNCIONAL</span>
          </div>

          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            POR QUE USAR OS PRODUTOS DA <br className="hidden sm:inline" />
            <span className="text-[#c02652] italic font-serif-hero">RAIZ VITAL?</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#b5adb0] font-light leading-relaxed">
            Identifique o seu objetivo atual e descubra como a botânica funcional atua diretamente na sua rotina.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-gradient-to-b from-[#16060c] via-[#100408] to-[#0a0305] border border-[#3a1020] hover:border-[#801438] p-6 sm:p-8 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  {/* Bloco Exclusivo e Iluminado com Espaço para Imagem */}
                  <div className="mb-6 rounded-2xl bg-[#1d0710] border border-[#801438]/80 p-4 shadow-[0_0_25px_rgba(128,20,56,0.25)] relative overflow-hidden group-hover:border-[#c02652] transition-colors">
                    
                    {/* Espaço para Imagem */}
                    <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-3.5 relative bg-[#120409] border border-white/10 flex items-center justify-center">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.desire} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white/40 p-4 text-center bg-gradient-to-b from-white/[0.03] to-transparent">
                          <ImageIcon className="w-6 h-6 mb-1.5 text-[#ff3e78]/60" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#a39c9f]/70">
                            Espaço para Imagem
                          </span>
                        </div>
                      )}
                      
                      {/* Número do Card */}
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-[#ff3e78] font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-base sm:text-lg font-serif-hero text-white font-medium leading-snug tracking-wide italic">
                      "{item.desire}"
                    </p>
                  </div>

                  {/* Resposta Raiz Vital & Benefício */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#1f0810] border border-[#801438]/70 flex items-center justify-center text-[#ff3e78] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(128,20,56,0.35)] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#a39c9f] block leading-none mb-1">
                        SOLUÇÃO FUNCIONAL:
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wider uppercase leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Como Apresentar (Matriz / Ingrediente) */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#801438]/25 border border-[#801438]/50 text-[11px] font-mono text-[#ff6b95] uppercase tracking-wider mb-4 w-full">
                    <ChevronRight className="w-3.5 h-3.5 text-[#ff3e78] shrink-0" />
                    <span className="font-semibold">{item.ingredient}</span>
                  </div>

                  {/* Descrição dos Benefícios */}
                  <p className="text-xs sm:text-[13px] text-[#c4bcc0] leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8588]">
                    {item.badge}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#ff3e78] group-hover:scale-150 transition-transform shadow-[0_0_8px_#ff3e78]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
