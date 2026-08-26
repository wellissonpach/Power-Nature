import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ShieldCheck, CreditCard, QrCode, FileText, ExternalLink, Lock } from 'lucide-react';
import { ProductPack } from '../types';
import { productConfig } from '../config/product';
import { trackEvent } from '../utils/analytics';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  pack: ProductPack;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, pack }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleProceedToCheckout = () => {
    setIsProcessing(true);
    trackEvent('click_buy', {
      packId: pack.id,
      paymentMethod,
      price: pack.price,
      action: 'proceed_to_gateway'
    });

    // Simulate quick validation and redirect to checkout link
    setTimeout(() => {
      setIsProcessing(false);
      if (productConfig.checkoutUrl && productConfig.checkoutUrl !== '#') {
        window.open(productConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
      } else {
        alert('Redirecionando para o ambiente de pagamento seguro...');
      }
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#14070a] border border-[#8b1a3e] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Top subtle glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#8b1a3e]/20 rounded-full blur-3xl pointer-events-none" />

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
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff3e78] block">
                CHECKOUT SEGURO
              </span>
              <h3 className="text-xl font-bold text-white">
                Finalizar seu Pedido
              </h3>
            </div>
          </div>

          {/* Selected Pack Summary */}
          <div className="p-4 rounded-2xl bg-black/40 border border-[#ffffff15] mb-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-white block">
                  {productConfig.fullName}
                </span>
                <span className="text-xs text-[#ff3e78] font-medium">
                  {pack.name} ({pack.units * 300}g total)
                </span>
                <span className="text-[11px] text-[#f5f5f0a0] block mt-0.5 font-light">
                  {pack.subtitle}
                </span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-white">
                  R$ {pack.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-[10px] text-[#ff3e78] block font-medium">
                  {pack.shippingFree ? 'Frete Grátis' : 'Envio Nacional'}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="mb-6">
            <label className="text-xs font-mono uppercase tracking-widest text-[#f5f5f060] block mb-3">
              Forma de pagamento preferida:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'bg-[#1a080c] border-[#8b1a3e] text-white shadow-md'
                    : 'bg-white/[0.02] border-[#ffffff15] text-[#f5f5f0a0] hover:border-white/20'
                }`}
              >
                <QrCode className="w-5 h-5 text-[#ff3e78]" />
                <span className="text-xs font-semibold">Pix</span>
                <span className="text-[9px] text-[#ff3e78]">Aprovação imediata</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-[#1a080c] border-[#8b1a3e] text-white shadow-md'
                    : 'bg-white/[0.02] border-[#ffffff15] text-[#f5f5f0a0] hover:border-white/20'
                }`}
              >
                <CreditCard className="w-5 h-5 text-[#ff3e78]" />
                <span className="text-xs font-semibold">Cartão</span>
                <span className="text-[9px] text-[#f5f5f060]">Até 12x</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('boleto')}
                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'boleto'
                    ? 'bg-[#1a080c] border-[#8b1a3e] text-white shadow-md'
                    : 'bg-white/[0.02] border-[#ffffff15] text-[#f5f5f0a0] hover:border-white/20'
                }`}
              >
                <FileText className="w-5 h-5 text-[#ff3e78]" />
                <span className="text-xs font-semibold">Boleto</span>
                <span className="text-[9px] text-[#f5f5f060]">À vista</span>
              </button>
            </div>
          </div>

          {/* Secure Purchase Button */}
          <button
            onClick={handleProceedToCheckout}
            disabled={isProcessing}
            className="w-full py-4 px-6 rounded-full bg-white hover:bg-[#f5f5f0] text-sm font-bold uppercase tracking-wider text-[#0a0505] shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_35px_rgba(255,255,255,0.35)] transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
          >
            <Lock className="w-4 h-4 text-[#8b1a3e]" />
            <span>{isProcessing ? 'Abrindo Checkout...' : 'Ir para o Pagamento Seguro'}</span>
            <ExternalLink className="w-4 h-4 text-[#8b1a3e]" />
          </button>

          {/* Trust Footer */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#f5f5f060]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff3e78]" />
              <span>Ambiente Criptografado SSL</span>
            </div>
            <span>Rastreamento via E-mail & WhatsApp</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
