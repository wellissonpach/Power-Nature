import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData, productConfig } from '../config/product';
import { trackEvent } from '../utils/analytics';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent('faq_open', { questionIndex: index, question: faqData[index].question });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0c0507] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#8b1a3e]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#ff3e78]" />
            <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
              TIRE SUAS DÚVIDAS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-[#f5f5f0a0] leading-relaxed font-light">
            Informações claras e diretas sobre nossa formulação, modo de uso e processo de entrega.
          </p>
        </div>

        {/* Accordion Items List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14070a] border-[#8b1a3e] shadow-[0_0_20px_rgba(139,26,62,0.2)]'
                    : 'bg-[#14070a]/70 border-[#ffffff15] hover:border-white/20'
                }`}
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#ff3e78] text-[#0a0505]' : 'bg-white/5 text-white/70'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#f5f5f0a0] leading-relaxed font-light border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact reassurance box */}
        <div className="mt-12 text-center text-xs text-[#f5f5f060]">
          <span>Ainda tem dúvidas? Fale conosco através do nosso Instagram oficial </span>
          <a
            href={productConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff3e78] font-medium underline underline-offset-4 hover:text-white transition-colors"
          >
            {productConfig.instagramHandle}
          </a>
        </div>

      </div>
    </section>
  );
};
