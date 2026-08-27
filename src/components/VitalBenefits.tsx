import React, { useRef, useState, useEffect } from 'react';
import { 
  Dumbbell, 
  TrendingUp, 
  ShieldCheck, 
  Flame, 
  Heart, 
  Zap, 
  Activity, 
  Sparkles, 
  Target, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ImageIcon
} from 'lucide-react';

interface AudiencePoint {
  id: number;
  text: string;
  icon: React.ElementType;
}

const audiencePoints: AudiencePoint[] = [
  {
    id: 1,
    text: "Tem dificuldade no treino e não consegue ter resultados melhores",
    icon: Dumbbell
  },
  {
    id: 2,
    text: "Está estagnado na performance e quer evoluir ou ter mais resultados",
    icon: TrendingUp
  },
  {
    id: 3,
    text: "Não quer mais rasgar dinheiro com suplementos ou produtos milagrosos",
    icon: ShieldCheck
  },
  {
    id: 4,
    text: "Quer chamar atenção com o efeito vasodilatador",
    icon: Flame
  },
  {
    id: 5,
    text: "Quer ser mais atraente e confiante para se relacionar ou para melhorar a relação com o parceiro(a) (sexualmente falando também)",
    icon: Heart
  },
  {
    id: 6,
    text: "Metabolismo ruim e falta de disposição",
    icon: Zap
  },
  {
    id: 7,
    text: "Quer definir e secar o corpo sem prejudicar a saúde",
    icon: Activity
  },
  {
    id: 8,
    text: "Quer ter mais performance nos treinos e nas horas íntimas",
    icon: Sparkles
  },
  {
    id: 9,
    text: "Não quer mais procrastinar e quer transformar os treinos e o corpo",
    icon: Target
  },
  {
    id: 10,
    text: "Iniciou na academia e quer resultados",
    icon: CheckCircle2
  }
];

// ==========================================
// CONFIGURAÇÃO DAS IMAGENS DO CARROSSEL
// (Substitua as URLs e títulos conforme desejar)
// ==========================================
export interface CarouselImageItem {
  id: number;
  src: string;
  alt: string;
  title?: string;
  tag?: string;
}

export const defaultCarouselImages: CarouselImageItem[] = [
  {
    id: 1,
    src: '/resistencia.webp',
    alt: 'Performance & Treino',
    title: 'Energia & Resistência',
    tag: 'Treino Intenso'
  },
  {
    id: 2,
    src: '/performance-em-movimento.webp',
    alt: 'Performance em Movimento',
    title: 'Foco & Movimento',
    tag: 'Alta Performance'
  },
  {
    id: 3,
    src: '/nutricao-vegetal1.webp',
    alt: 'Nutrição Funcional',
    title: 'Nutrição Botânica',
    tag: 'Fórmula Exclusiva'
  },
  {
    id: 4,
    src: '/menor-esforco.webp',
    alt: 'Menor Esforço Percebido',
    title: 'Vigor & Potência',
    tag: 'Disposição Real'
  },
  {
    id: 5,
    src: '/proteina-vegetal.webp',
    alt: 'Recuperação & Força',
    title: 'Definição & Hipertrofia',
    tag: 'Resultados'
  },
  {
    id: 6,
    src: '/ingredientes-naturais.webp',
    alt: 'Ingredientes Naturais',
    title: 'Bioativos Selecionados',
    tag: 'Origem Pura'
  }
];

interface VitalBenefitsProps {
  onExploreProduct?: () => void;
  customImages?: CarouselImageItem[];
}

export const VitalBenefits: React.FC<VitalBenefitsProps> = ({ 
  customImages = defaultCarouselImages 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll loop suave
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const cardWidth = 220;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = 220;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(index % customImages.length);
  };

  const scrollPrev = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="beneficios-raiz-vital" 
      className="py-20 sm:py-28 bg-[#070204] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-radial from-[#801438]/15 via-transparent to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#c02652]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
            POWER NATURE <br className="hidden sm:inline" />
            <span className="text-[#c02652] italic font-serif-hero">É PARA QUEM?</span>
          </h2>
        </div>

        {/* 10 Points Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-14 sm:mb-16">
          {audiencePoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#16060c]/90 via-[#100408]/90 to-[#0a0305]/95 border border-[#3a1020] hover:border-[#801438] p-5 sm:p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-4 sm:gap-5 group hover:-translate-y-0.5 relative overflow-hidden"
              >
                {/* Lateral Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#1f0810] border border-[#801438]/70 flex items-center justify-center text-[#ff3e78] group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(128,20,56,0.3)] shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-[#f5f3f0] font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* CARROSSEL DE IMAGENS COMPACTO */}
        {/* ======================================================== */}
        <div 
          className="relative pt-2 sm:pt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controles de Navegação Compactos */}
          <div className="flex items-center justify-end mb-4 px-1">
            <div className="flex items-center gap-1.5">
              <button
                onClick={scrollPrev}
                aria-label="Imagem anterior"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18060d] border border-[#801438]/60 hover:border-[#ff3e78] text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Próxima imagem"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18060d] border border-[#801438]/60 hover:border-[#ff3e78] text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Fade Gradients laterais */}
          <div className="absolute left-0 top-12 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-[#070204] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-12 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-[#070204] to-transparent z-10 pointer-events-none" />

          {/* Container Deslizável (Scroll Horizontal / Swipe) */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-3 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {customImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="min-w-[170px] sm:min-w-[210px] max-w-[210px] h-[220px] sm:h-[260px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#18060d] to-[#0a0305] border border-[#801438]/50 hover:border-[#ff3e78] transition-all duration-300 relative overflow-hidden group snap-start shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex flex-col justify-end shrink-0"
              >
                {/* Imagem de Fundo com Zoom no Hover */}
                {image.src ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.85] group-hover:brightness-95"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-white/40 p-3 text-center bg-[#120409]">
                    <ImageIcon className="w-8 h-8 mb-1.5 text-[#ff3e78]/60" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#a39c9f]">
                      Espaço para imagem
                    </span>
                  </div>
                )}

                {/* Sombra / Gradiente para legibilidade dos textos */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070204] via-[#070204]/40 to-transparent pointer-events-none" />

                {/* Overlay de Informações */}
                <div className="relative z-10 p-3 sm:p-4">
                  {image.tag && (
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#801438]/80 border border-[#ff3e78]/40 text-[9px] font-mono uppercase tracking-widest text-white font-bold mb-1 backdrop-blur-sm shadow-md">
                      {image.tag}
                    </span>
                  )}
                  {image.title && (
                    <h3 className="text-xs sm:text-sm font-serif-hero text-white font-medium leading-snug drop-shadow-md line-clamp-1">
                      {image.title}
                    </h3>
                  )}
                </div>

                {/* Indicador de Número no Canto Superior */}
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#ff3e78] font-bold z-10">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Indicadores / Dots de Paginação */}
          <div className="flex justify-center items-center gap-1.5 mt-3 sm:mt-4">
            {customImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    container.scrollTo({ left: idx * 220, behavior: 'smooth' });
                  }
                }}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-5 bg-[#ff3e78] shadow-[0_0_8px_#ff3e78]' 
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
