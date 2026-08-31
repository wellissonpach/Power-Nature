import React from 'react';
import { Instagram, ArrowUp, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { brandConfig } from '../data/brand';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenNutrition: () => void;
  onNavigate?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenPrivacy, 
  onOpenTerms, 
  onOpenNutrition,
  onNavigate 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (targetId: string, route: string = '/') => {
    if (onNavigate) {
      onNavigate(route);
    }
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <footer className="bg-[#050203] text-[#f5f5f0a0] pt-16 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (Raiz Vital) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/NEW LOGO.png"
                alt="Raiz Vital Logo"
                className="w-10 h-10 object-contain rounded-full shadow-[0_0_12px_rgba(255,62,120,0.35)]"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-[0.16em] uppercase leading-none">
                  {brandConfig.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#ff3e78] font-sans font-semibold mt-1">
                  {brandConfig.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#f5f5f0a0] leading-relaxed max-w-sm font-light mb-6">
              {brandConfig.subTagline}
            </p>

            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14070a] hover:bg-[#8b1a3e]/20 border border-[#ffffff15] text-xs text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#ff3e78]" />
              <span>Siga no Instagram: <strong>{brandConfig.instagramHandle}</strong></span>
            </a>
          </div>

          {/* Col 2: Empresa */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff3e78] mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-xs text-[#f5f5f0a0]">
              <li>
                <button 
                  onClick={() => handleLinkClick('beneficios-raiz-vital', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer text-[#e02b5e] font-medium"
                >
                  Benefícios Funcionais
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('nossa-essencia', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Nossa Essência
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('ingredientes-marca', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Ingredientes Botânicos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('pilares-marca', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Da Origem ao Produto
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('por-que-raiz-vital', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Por Que Raiz Vital?
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Produtos */}
          <div className="md:col-span-2 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff3e78] mb-4">
              Produtos
            </h4>
            <ul className="space-y-2.5 text-xs text-[#f5f5f0a0]">
              <li>
                <button 
                  onClick={() => handleLinkClick('produtos', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Todos os Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('destaque-produto', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer text-[#e02b5e] font-medium"
                >
                  Power Nature (300g)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenNutrition}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tabela Nutricional
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Suporte & Políticas */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff3e78] mb-4">
              Suporte & Transparência
            </h4>
            <ul className="space-y-2.5 text-xs text-[#f5f5f0a0] mb-5">
              <li>
                <button 
                  onClick={() => handleLinkClick('faq', '/')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-[#ffffff03] border border-[#ffffff15] text-[11px] text-[#f5f5f0a0]">
              <span className="font-semibold text-white block mb-0.5">Atendimento Oficial:</span>
              <span>Canal direto pelo perfil {brandConfig.instagramHandle} no Instagram.</span>
            </div>
          </div>

        </div>

        {/* Mandatory Legal Warning Banner */}
        <div className="my-8 p-4 rounded-xl bg-[#14070a] border border-[#ffffff15] text-center text-xs text-[#f5f5f0a0] leading-relaxed">
          <p className="font-medium text-white/90">
            Aviso importante: Produto destinado a adultos. Consulte as informações presentes na embalagem antes do consumo.
          </p>
          <p className="text-[11px] text-[#f5f5f060] mt-1">
            Power Nature é uma linha desenvolvida e comercializada pela <strong>Raiz Vital</strong>. Suplemento alimentar funcional que não substitui alimentação equilibrada ou orientação médica.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5f5f060]">
          <p>
            © {new Date().getFullYear()} Raiz Vital. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
