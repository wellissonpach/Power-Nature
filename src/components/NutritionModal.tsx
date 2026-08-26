import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, FileText } from 'lucide-react';
import { productConfig } from '../config/product';

interface NutritionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NutritionModal: React.FC<NutritionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#14070a] border border-[#8b1a3e] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#1a080c] border border-[#8b1a3e] flex items-center justify-center text-[#ff3e78]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Informações Nutricionais & Rótulo
              </h3>
              <p className="text-xs text-[#f5f5f0a0]">
                {productConfig.fullName} • Peso Líquido: 300g
              </p>
            </div>
          </div>

          {/* Nutrition Table Box */}
          <div className="rounded-2xl border border-[#ffffff15] bg-black/40 overflow-hidden mb-6">
            <div className="p-3.5 bg-[#1a080c] border-b border-white/10 text-xs font-semibold text-[#ff3e78] flex justify-between">
              <span>Porção de 10g (2 scoops dosadores)</span>
              <span>Porções por embalagem: ~30</span>
            </div>

            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-white/10 text-[#f5f5f060] font-mono uppercase text-[10px]">
                  <th className="p-3">Nutriente</th>
                  <th className="p-3 text-right">Qtd. por Porção</th>
                  <th className="p-3 text-right">% VD (*)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {productConfig.nutritionTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="p-3 font-medium text-white">{row.nutrient}</td>
                    <td className="p-3 text-right text-[#f5f5f0a0]">{row.amountPerServing}</td>
                    <td className="p-3 text-right text-[#ff3e78] font-semibold">{row.dailyValuePercent}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-3 text-[10px] text-[#f5f5f060] border-t border-white/5 italic">
              * % Valores Diários com base em uma dieta de 2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.
            </div>
          </div>

          {/* Ingredients & Allergens Box */}
          <div className="space-y-4 text-xs text-[#f5f5f0a0]">
            <div className="p-4 rounded-2xl bg-[#ffffff03] border border-[#ffffff15]">
              <span className="font-bold text-white block mb-1 uppercase tracking-wider text-[11px]">
                Ingredientes:
              </span>
              <p className="leading-relaxed font-light">
                {productConfig.ingredientsText}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a080c] border border-[#8b1a3e]/60 text-[#f5f5f0]">
              <div className="flex items-center gap-2 font-bold mb-1 text-[11px] text-[#ff3e78]">
                <ShieldAlert className="w-4 h-4" />
                <span>ADVERTÊNCIAS & ALERGÊNICOS:</span>
              </div>
              <p className="leading-relaxed">
                {productConfig.allergenWarning}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#ffffff03] border border-[#ffffff15]">
              <span className="font-bold text-white block mb-1 uppercase tracking-wider text-[11px]">
                Recomendação de Consumo:
              </span>
              <p className="leading-relaxed">
                {productConfig.suggestedUse}
              </p>
              <p className="mt-2 text-[#f5f5f060]">
                {productConfig.storageInfo}
              </p>
            </div>
          </div>

          {/* Close footer button */}
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#f5f5f0] text-xs font-bold uppercase tracking-wider text-[#0a0505] transition-colors cursor-pointer"
            >
              Entendido / Fechar
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
