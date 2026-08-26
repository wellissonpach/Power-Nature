import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText } from 'lucide-react';
import { productConfig } from '../config/product';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

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

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#14070a] border border-[#8b1a3e] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[85vh] overflow-y-auto text-left"
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
              {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {isPrivacy ? 'Política de Privacidade' : 'Termos e Condições de Uso'}
              </h3>
              <p className="text-xs text-[#f5f5f0a0]">
                {productConfig.name} • Atualizado para conformidade LGPD
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-xs sm:text-sm text-[#f5f5f0a0] leading-relaxed font-light">
            {isPrivacy ? (
              <>
                <p>
                  A <strong className="text-white font-semibold">{productConfig.name}</strong> tem o compromisso de proteger a privacidade e a segurança dos dados pessoais de todos os nossos clientes e visitantes.
                </p>
                <h4 className="text-sm font-bold text-white mt-3">1. Coleta de Informações</h4>
                <p>
                  Coletamos informações cadastrais exclusivamente para o processamento de pedidos, faturamento e entrega segura dos produtos adquiridos em nosso website, além de comunicações de rastreio.
                </p>
                <h4 className="text-sm font-bold text-white mt-3">2. Segurança dos Dados</h4>
                <p>
                  Todas as transações financeiras são processadas através de gateways de pagamento criptografados com certificado SSL. Nenhum dado bancário ou de cartão de crédito fica salvo em nossos servidores.
                </p>
                <h4 className="text-sm font-bold text-white mt-3">3. Seus Direitos</h4>
                <p>
                  Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você pode a qualquer momento solicitar a atualização, correção ou exclusão de seus dados de nossa base de contatos.
                </p>
              </>
            ) : (
              <>
                <p>
                  Ao utilizar o website da <strong className="text-white font-semibold">{productConfig.name}</strong> e adquirir nossos suplementos funcionais, você concorda com os seguintes termos e condições gerais.
                </p>
                <h4 className="text-sm font-bold text-white mt-3">1. Informações sobre o Produto</h4>
                <p>
                  O {productConfig.fullName} é um suplemento alimentar funcional em pó destinado a adultos. As instruções de uso, composição e advertências encontram-se descritas nas embalagens oficiais e devem ser sempre lidas antes do consumo.
                </p>
                <h4 className="text-sm font-bold text-white mt-3">2. Prazos e Entregas</h4>
                <p>
                  Os prazos de entrega informados são estimativas baseadas nos serviços dos Correios e transportadoras parceiras, iniciando a contagem a partir da confirmação do pagamento.
                </p>
                <h4 className="text-sm font-bold text-white mt-3">3. Trocas e Devoluções</h4>
                <p>
                  Garantimos o direito de arrependimento em até 7 (sete) dias corridos após o recebimento da mercadoria, conforme o Código de Defesa do Consumidor, desde que o produto permaneça lacrado e em sua embalagem original.
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#f5f5f0] text-xs font-bold uppercase tracking-wider text-[#0a0505] transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
