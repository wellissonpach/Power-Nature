import React from 'react';

const effectPhases = [
  {
    icon: "🚀",
    title: "Efeitos imediatos (De 2 a 3 horas após o consumo)",
    intro: "Os benefícios voltados para o rendimento físico e a vasodilatação não exigem dias de consumo acumulado. Eles são agudos:",
    bullets: [
      {
        label: "Melhora no treino",
        text: "O pico de óxido nítrico no sangue ocorre entre 2 e 3 horas após a ingestão."
      },
      {
        label: "Resultados visíveis",
        text: "Você sentirá menor fadiga muscular, maior resistência para completar as séries e um efeito de \"pump\" (músculos mais cheios devido ao maior fluxo sanguíneo) logo no primeiro treino."
      }
    ]
  },
  {
    icon: "📈",
    title: "Efeitos de médio prazo (De 1 a 2 semanas)",
    intro: "Com o consumo diário e consistente, o corpo estabiliza os níveis de nitrato e os benefícios sistêmicos começam a se consolidar:",
    bullets: [
      {
        label: "Pressão arterial",
        text: "Estudos mostram que uma semana de consumo diário já é suficiente para observar uma redução sustentada na pressão arterial em pessoas com pré-hipertensão ou hipertensão leve."
      },
      {
        label: "Eficiência mitocondrial",
        text: "Suas células musculares passam a gastar menos oxigênio para produzir a mesma quantidade de energia, melhorando o fôlego nas atividades do dia a dia."
      }
    ]
  },
  {
    icon: "🧠",
    title: "Efeitos de longo prazo (A partir de 1 mês)",
    intro: "Os reflexos na composição corporal e na saúde geral aparecem de forma indireta com a constância:",
    bullets: [
      {
        label: "Recuperação e Hipertrofia",
        text: "Ao treinar mais intensamente todos os dias e se recuperar mais rápido, os resultados estéticos (ganho de massa magra e definição) começam a ficar mais visíveis a partir de 30 a 45 dias."
      },
      {
        label: "Saúde cerebral",
        text: "A melhora contínua no fluxo sanguíneo favorece a oxigenação do córtex cerebral, otimizando a memória e o foco cognitivo."
      }
    ]
  }
];

export const EffectPhases: React.FC = () => {
  return (
    <section 
      id="fases-efeitos" 
      className="py-16 sm:py-24 bg-[#0a0505] relative overflow-hidden border-t border-[#2d0e19]/50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título Principal */}
        <h2 className="font-serif-hero text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase text-center mb-12 sm:mb-16 font-normal">
          FASES DE EFEITOS COM O USO DO POWER NATURE
        </h2>

        {/* 3 Fases em Linha / Cards Suaves */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {effectPhases.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#110508]/70 border border-[#2d0e19] hover:border-[#801438]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho da Fase */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl">{phase.icon}</span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {phase.title}
                  </h3>
                </div>

                {/* Texto Introdutório */}
                <p className="text-xs sm:text-sm text-[#cfc7cb] font-light leading-relaxed mb-4">
                  {phase.intro}
                </p>

                {/* Lista de Efeitos */}
                <div className="space-y-3 pt-3 border-t border-white/5">
                  {phase.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="text-xs sm:text-[13px] leading-relaxed text-[#b5adb0]">
                      <strong className="text-white font-semibold block sm:inline">
                        {bullet.label}:{' '}
                      </strong>
                      <span className="font-light text-[#cfc7cb]">
                        {bullet.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const BrandPillars = EffectPhases;
