import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { productConfig } from '../config/product';
import { trackEvent } from '../utils/analytics';

export const InstagramSection: React.FC = () => {
  const handleInstagramClick = () => {
    trackEvent('click_instagram', { handle: productConfig.instagramHandle });
  };

  const instagramPosts = [
    {
      image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=600&auto=format&fit=crop",
      tag: "#RaizVital",
      title: "Nutrição que vem da terra"
    },
    {
      image: "/ciclismo.webp",
      tag: "#TreinoNatural",
      title: "Constância nos pedais"
    },
    {
      image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?q=80&w=600&auto=format&fit=crop",
      tag: "#BeterrabaBaru",
      title: "Cor e vitalidade natural"
    },
    {
      image: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=600&auto=format&fit=crop",
      tag: "#CorridaDiaria",
      title: "Energia botânica na pista"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1a3e]/15 border border-[#8b1a3e] mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#ff3e78]" />
              <span className="text-[10px] font-bold tracking-widest text-[#ff3e78] uppercase">
                COMUNIDADE DIGITAL
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#f5f5f0]">
              Conheça a Raiz Vital no Instagram
            </h2>
            <p className="text-sm sm:text-base text-[#f5f5f0a0] mt-1 font-light">
              Acompanhe novidades, bastidores e rotinas ativas em nosso perfil oficial.
            </p>
          </div>

          <a
            href={productConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14070a] border border-[#8b1a3e] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#8b1a3e]/20 transition-all shadow-md shrink-0 cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#ff3e78]" />
            <span>Seguir {productConfig.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4 text-[#ff3e78]" />
          </a>
        </div>

        {/* 4 Image Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, idx) => (
            <a
              key={idx}
              href={productConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramClick}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-[#ffffff15] bg-[#14070a] shadow-md hover:border-[#8b1a3e] transition-colors"
            >
              <img
                src={post.image}
                alt={post.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] text-[#ff3e78] font-mono">{post.tag}</span>
                <span className="text-xs font-semibold text-white">{post.title}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
