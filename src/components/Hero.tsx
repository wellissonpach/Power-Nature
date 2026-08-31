import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Sparkles, Zap, Dumbbell } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onBuyClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick, onExploreClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [headlineStep, setHeadlineStep] = useState<number>(0);
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);

  const handleBuy = () => {
    trackEvent('click_buy', { source: 'hero' });
    onBuyClick();
  };

  useEffect(() => {
    // Configurar vídeo para compatibilidade máxima com WebKit / iOS Safari
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      video.currentTime = 0;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          })
          .catch((err) => {
            // Em Modo de Pouca Energia (Low Power Mode) do iOS, o Safari bloqueia autoplay
            console.log('Mobile video autoplay blocked (e.g. Low Power Mode):', err);
            setAutoplayBlocked(true);
            setIsPlaying(false);
          });
      }
    }

    // Permitir que o primeiro toque ou scroll na tela inicie o vídeo caso bloqueado pelo sistema
    const handleFirstInteraction = () => {
      const v = videoRef.current;
      if (v && v.paused && !videoEnded) {
        v.play()
          .then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          })
          .catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });

    // Faster progressive reveal timer sequence (starts completely hidden at 0ms)
    const t1 = setTimeout(() => setHeadlineStep((s) => Math.max(s, 1)), 250);
    const t2 = setTimeout(() => setHeadlineStep((s) => Math.max(s, 2)), 650);
    const t3 = setTimeout(() => setHeadlineStep((s) => Math.max(s, 3)), 1100);
    const t4 = setTimeout(() => setHeadlineStep((s) => Math.max(s, 4)), 1600);
    const t5 = setTimeout(() => setHeadlineStep((s) => Math.max(s, 5)), 2100);

    return () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [videoEnded]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      if (time >= 2.1) {
        setHeadlineStep(5);
      } else if (time >= 1.6) {
        setHeadlineStep((s) => Math.max(s, 4));
      } else if (time >= 1.1) {
        setHeadlineStep((s) => Math.max(s, 3));
      } else if (time >= 0.65) {
        setHeadlineStep((s) => Math.max(s, 2));
      } else if (time >= 0.25) {
        setHeadlineStep((s) => Math.max(s, 1));
      }
    }
  };

  const handleVideoEnded = () => {
    setVideoEnded(true);
    setHeadlineStep(5);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const isLine1Visible = headlineStep >= 1;
  const isLine2Visible = headlineStep >= 2;
  const isLine3Visible = headlineStep >= 3;
  const isLine4Visible = headlineStep >= 4;
  const isButtonVisible = headlineStep >= 5;

  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-10 pb-4 sm:pt-14 sm:pb-8 lg:pt-20 lg:pb-16 flex flex-col justify-between overflow-hidden bg-[#070204]"
    >
      {/* Desktop Background Image (Hidden on Mobile) */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu hidden md:block">
        <source type="image/webp" srcSet="/background-desktop.webp" />
        <img
          src="/background-desktop.webp"
          alt="Power Nature Hero Background"
          className="w-full h-full object-cover object-center lg:object-right-top transform-gpu"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Mobile Background Video (Executed on load/refresh, freezes at last frame) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden md:hidden">
        {/* Poster / Fallback image layer */}
        <img
          src={videoEnded || autoplayBlocked ? "/video-mobile-lastframe.webp" : "/video-mobile-poster.webp"}
          alt="Power Nature Mobile Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <video
          ref={videoRef}
          src="/video-mobile-optimized.mp4"
          playsInline
          muted
          autoPlay
          preload="auto"
          onPlay={() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          }}
          onPlaying={() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          }}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu transition-opacity duration-700 ${
            isPlaying && !videoEnded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      </div>

      {/* Subtle readability gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070204]/90 via-[#070204]/60 to-transparent pointer-events-none z-[1] hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070204]/75 via-transparent to-[#070204]/95 pointer-events-none z-[1] md:hidden" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between lg:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-8 items-center w-full">
          
          {/* Left Column: Typography & Conversion Action */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            {/* Impact Headline with progressive fast reveal */}
            <h1 className="font-bebas text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[82px] leading-[0.94] tracking-[0.03em] text-[#f5f3f0] font-normal drop-shadow-md uppercase">
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isLine1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                A FÓRMULA
              </span> <br />

              <span
                className={`inline-block text-[#c02652] transition-all duration-500 ease-out ${
                  isLine2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                MAIS AVANÇADA
              </span> <br />

              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isLine3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                PARA <span className="text-[#c02652]">TRANSFORMAR</span>
              </span> <br />

              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isLine4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                SEU CORPO E SUA ROTINA
              </span>
            </h1>

            {/* Espaço no mobile calibrado para o botão assentar perfeitamente na base do pote */}
            <div className="h-[405px] sm:h-[445px] lg:hidden w-full" />

            {/* CTA Button - Centralizado no mobile, descido pontualmente e com entrada gradual suave */}
            <div
              className={`w-full flex justify-center lg:justify-start mt-8 sm:mt-10 lg:mt-24 transition-all duration-700 ease-out ${
                isButtonVisible
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-3 pointer-events-none'
              }`}
            >
              <button
                onClick={handleBuy}
                className="w-full max-w-[290px] sm:max-w-xs sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#801438] hover:bg-[#991944] text-white text-xs sm:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_8px_30px_rgba(128,20,56,0.6)] hover:shadow-[0_12px_40px_rgba(153,25,68,0.8)] active:scale-98 cursor-pointer group"
                id="hero-primary-cta"
              >
                <Leaf className="w-4 h-4 text-white/90 group-hover:rotate-12 transition-transform duration-300" />
                <span>QUERO EXPERIMENTAR</span>
              </button>
            </div>
          </div>

          {/* Right Column: Space reserved for background artwork composition on desktop */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[400px]" />

        </div>
      </div>

      {/* Bottom Features Bar - Cards aumentados e com presença marcante */}
      <div className="relative z-10 w-full mt-4 sm:mt-6 lg:mt-14 border-t border-[#2d0e19]/60 pt-3.5 sm:pt-5 lg:pt-8 pb-1.5 sm:pb-3 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-[#801438]/80 flex items-center justify-center text-[#c02652] shrink-0 bg-[#16060c]/80 shadow-[0_0_20px_rgba(128,20,56,0.3)] backdrop-blur-sm">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm lg:text-base font-extrabold tracking-wider text-[#f5f3f0] uppercase leading-snug">
                  AUMENTO DA RESISTÊNCIA
                </span>
                <span className="text-[11px] sm:text-xs text-[#a39c9f] font-normal mt-0.5">
                  Zero corantes sintéticos
                </span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-[#801438]/80 flex items-center justify-center text-[#c02652] shrink-0 bg-[#16060c]/80 shadow-[0_0_20px_rgba(128,20,56,0.3)] backdrop-blur-sm">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm lg:text-base font-extrabold tracking-wider text-[#f5f3f0] uppercase leading-snug">
                  GANHO DE MASSA
                </span>
                <span className="text-[11px] sm:text-xs text-[#a39c9f] font-normal mt-0.5">
                  Castanha de Baru nativa
                </span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-[#801438]/80 flex items-center justify-center text-[#c02652] shrink-0 bg-[#16060c]/80 shadow-[0_0_20px_rgba(128,20,56,0.3)] backdrop-blur-sm">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm lg:text-base font-extrabold tracking-wider text-[#f5f3f0] uppercase leading-snug">
                  NUTRIÇÃO & PERFORMANCE
                </span>
                <span className="text-[11px] sm:text-xs text-[#a39c9f] font-normal mt-0.5">
                  Ingredientes que fazem sentido
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
