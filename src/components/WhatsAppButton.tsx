import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { brandConfig } from '../data/brand';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '556183266395',
  defaultMessage = 'Olá! Gostaria de saber mais sobre o Power Nature.'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      trackEvent('open_whatsapp_modal', { phone: cleanNumber });
    }
  };

  const handleSendMessage = () => {
    trackEvent('click_whatsapp_send', {
      source: 'floating_modal_send_btn',
      phone: cleanNumber
    });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <aside
      ref={popupRef}
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Caixa de Mensagem / Popup Modal */}
      {isOpen && (
        <div className="mb-3 w-[290px] sm:w-[320px] rounded-2xl sm:rounded-3xl bg-[#110508]/95 backdrop-blur-xl border border-[#801438]/60 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header do Chat */}
          <div className="bg-gradient-to-r from-[#1f0610] to-[#120309] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Raiz Vital"
                  className="w-9 h-9 rounded-full object-contain bg-white/5 border border-[#ff3e78]/40 shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border border-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {brandConfig.name}
                </span>
                <span className="text-[10px] text-[#25D366] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online agora
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar"
              className="p-1 rounded-full text-[#a39c9f] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Corpo do Chat */}
          <div className="p-4 space-y-3.5 bg-gradient-to-b from-[#110508]/50 to-[#070204]/90">
            {/* Balão de Mensagem da Empresa */}
            <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/5 text-xs text-[#e8dfe3] font-light leading-relaxed">
              <p className="mb-1 text-white font-medium">
                Olá! 👋
              </p>
              <p>
                Como podemos te ajudar hoje? Tire suas dúvidas sobre o <strong>Power Nature</strong> ou faça seu pedido diretamente conosco.
              </p>
            </div>

            {/* Opção "Enviar uma mensagem" Solicitada */}
            <button
              onClick={handleSendMessage}
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] cursor-pointer active:scale-98"
              id="whatsapp-send-message-btn"
            >
              {/* WhatsApp Icon */}
              <svg 
                className="w-4 h-4 fill-current shrink-0" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Enviar uma mensagem</span>
            </button>
          </div>

        </div>
      )}

      {/* Botão Flutuante (Badge) que ativa a opção */}
      <button
        onClick={handleToggle}
        className={`relative flex items-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer ${
          isOpen ? 'ring-4 ring-[#25D366]/30 scale-105' : ''
        }`}
        id="whatsapp-floating-badge"
        aria-label="Abrir opções de WhatsApp"
      >
        {/* Ping de Notificação Sutil */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#128C7E] border border-white" />
          </span>
        )}

        {/* WhatsApp Icon */}
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        <span className="hidden sm:inline font-sans">
          Fale Conosco
        </span>
      </button>
    </aside>
  );
};
