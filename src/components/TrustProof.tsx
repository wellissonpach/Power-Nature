import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, MessageSquare, Award, CheckCircle } from 'lucide-react';

export const TrustProof: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0a0505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-4">
            <Award className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              COMPROMISSO & CONFIANÇA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Qualidade em cada detalhe
          </h2>
          <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed font-light">
            Nosso compromisso é entregar nutrição pura e transparente para atletas e pessoas ativas em todo o país.
          </p>
        </div>

        {/* 3 Trust Pillar Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-[#14070a] border border-[#ffffff15] flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-1 text-[#ff3e78] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff3e78]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Ingredientes Selecionados
              </h3>
              <p className="text-xs sm:text-sm text-[#f5f5f0a0] leading-relaxed font-light">
                Rigoroso critério de seleção para a raiz de beterraba e castanhas de baru de produtores parceiros.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#ff3e78]">
              <CheckCircle className="w-4 h-4" />
              <span>Rastreabilidade Botânica</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#14070a] border border-[#ffffff15] flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-1 text-[#ff3e78] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff3e78]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Fórmula 100% Plant-Based
              </h3>
              <p className="text-xs sm:text-sm text-[#f5f5f0a0] leading-relaxed font-light">
                Totalmente livre de lactose, derivados lácteos ou insumos sintéticos para garantir leveza no consumo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#ff3e78]">
              <CheckCircle className="w-4 h-4" />
              <span>Zero Insumos Animais</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#14070a] border border-[#ffffff15] flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-1 text-[#ff3e78] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff3e78]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Envio Seguro & Rastreado
              </h3>
              <p className="text-xs sm:text-sm text-[#f5f5f0a0] leading-relaxed font-light">
                Embalagens reforçadas que protegem a integridade do pote do nosso centro de distribuição até a sua casa.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#ff3e78]">
              <CheckCircle className="w-4 h-4" />
              <span>Logística Nacional</span>
            </div>
          </div>

        </div>

        {/* Prepared Reviews Placeholder Box as required by PRD Section 21 & 34 */}
        <div className="p-8 rounded-3xl bg-[#14070a] border border-dashed border-[#8b1a3e]/50 text-center max-w-2xl mx-auto shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-[#1a080c] border border-[#8b1a3e] flex items-center justify-center text-[#ff3e78] mx-auto mb-4">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white mb-1">
            Espaço de Avaliações Verificadas
          </h4>
          <p className="text-xs text-[#f5f5f0a0] leading-relaxed max-w-lg mx-auto font-light">
            Área estruturada para a exibição de depoimentos e fotos de clientes verificados após a realização de seus primeiros pedidos.
          </p>
          <div className="mt-4 inline-flex items-center gap-1 text-[11px] text-[#ff3e78] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparência total nas avaliações dos consumidores</span>
          </div>
        </div>

      </div>
    </section>
  );
};
