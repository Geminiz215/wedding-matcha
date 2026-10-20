'use client';

import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface Scene12FooterProps {
  cupBlendLevel: number;
  reducedMotion: boolean;
  lang: Language;
}

export const Scene12Footer: React.FC<Scene12FooterProps> = ({
  cupBlendLevel,
  reducedMotion,
  lang
}) => {
  const t = TRANSLATIONS[lang].scene12;
  const { ref: contentRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <footer
      id="scene-12"
      className="relative pt-20 pb-28 px-4 sm:px-8 text-center overflow-hidden"
      style={{ background: 'linear-gradient(175deg, #FFF9EE 0%, #DCE8C8 40%, #C7D9AA 80%, #b8d09a 100%)' }}
    >
      {/* Petal rain for footer */}
      {!reducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { color: '#F29BA6', size: 8, left: '8%', delay: 0 },
            { color: '#DCE8C8', size: 10, left: '22%', delay: 1.2 },
            { color: '#F29BA6', size: 7, left: '45%', delay: 0.5 },
            { color: '#8FAF78', size: 9, left: '65%', delay: 2.0 },
            { color: '#FBE0E2', size: 11, left: '80%', delay: 0.8 },
            { color: '#C7D9AA', size: 8, left: '92%', delay: 1.7 },
          ].map((p, i) => (
            <div
              key={i}
              className="petal"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                top: '-20px',
                left: p.left,
                animationDelay: `${p.delay}s`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      )}

      {/* Large ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,249,238,0.6) 0%, transparent 70%)' }}
      />

      {/* Decorative stars */}
      {!reducedMotion && (
        <>
          <div className="absolute top-12 left-[10%] text-[#D94F5C]/40 animate-twinkle text-2xl">✦</div>
          <div className="absolute top-20 right-[12%] text-[#536B45]/40 animate-twinkle text-xl" style={{ animationDelay: '1s' }}>✦</div>
          <div className="absolute bottom-20 left-[15%] text-[#F29BA6]/50 animate-twinkle text-lg" style={{ animationDelay: '0.6s' }}>✦</div>
        </>
      )}

      <div
        ref={contentRef}
        className="max-w-3xl mx-auto relative z-10 flex flex-col items-center"
        style={{
          opacity: isVisible ? 1 : 0,
          animation: isVisible && !reducedMotion ? 'fadeUp 0.9s ease-out forwards' : 'none',
        }}
      >
        <span
          className="inline-block bg-white/90 text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-md"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeDown 0.6s 0.1s ease-out both' : 'none',
          }}
        >
          {t.sceneTag}
        </span>

        {/* Illustration trio */}
        <div className="flex items-end justify-center gap-4 my-2">
          <div
            className="hidden sm:block"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeRight 0.7s 0.2s ease-out both' : 'none',
            }}
          >
            <KawaiiStrawberry className="w-28 h-28" reducedMotion={reducedMotion} />
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'popIn 0.8s 0.3s cubic-bezier(0.34,1.56,0.64,1) both' : 'none',
            }}
          >
            <StrawberryMatchaCup
              className="w-60 h-68 sm:w-72 sm:h-80"
              interactive={true}
              blendLevel={cupBlendLevel}
              reducedMotion={reducedMotion}
            />
          </div>

          <div
            className="hidden sm:block"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeLeft 0.7s 0.2s ease-out both' : 'none',
            }}
          >
            <MatchaKunafaPastry className="w-28 h-28" reducedMotion={reducedMotion} />
          </div>
        </div>

        {/* Tagline */}
        <p
          className="font-serif-romantic italic text-xl sm:text-2xl text-[#D94F5C] mt-4"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeUp 0.6s 0.5s ease-out both' : 'none',
          }}
        >
          {t.happilyEver}
        </p>

        {/* Shimmer couple names */}
        <h2
          className="font-serif-romantic text-5xl sm:text-7xl font-bold text-[#536B45] my-3 shimmer-text"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'blurIn 1s 0.6s ease-out both' : 'none',
          }}
        >
          {WEDDING_CONFIG.couple.bride.nickname.toUpperCase()} &amp;{' '}
          {WEDDING_CONFIG.couple.groom.nickname.toUpperCase()}
        </h2>

        <p
          className="font-display font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-[#536B45]/80 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeUp 0.5s 0.8s ease-out both' : 'none',
          }}
        >
          {t.madeWithLove}
        </p>

        {/* Hearts row */}
        {isVisible && (
          <div
            className="flex items-center gap-3 mb-6"
            style={{ animation: !reducedMotion ? 'fadeIn 0.6s 0.9s ease-out both' : 'none', opacity: 0 }}
          >
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 fill-[#D94F5C] text-[#D94F5C]"
                style={{
                  animation: !reducedMotion ? `twinkle 1.5s ${i * 0.15}s ease-in-out infinite` : 'none',
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        )}

        {/* Back to top */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })}
          className="group inline-flex items-center gap-2 bg-white/90 hover:bg-[#536B45] text-[#536B45] hover:text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg border-2 border-[#536B45]/40 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeUp 0.5s 1.0s ease-out both' : 'none',
          }}
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          <span>{t.backToTop}</span>
        </button>

        <p
          className="text-xs text-[#536B45]/70 font-display mt-8 flex items-center gap-1.5"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeIn 0.5s 1.1s ease-out both' : 'none',
          }}
        >
          <Sparkles className="w-3 h-3" />
          {WEDDING_CONFIG.hashtag} • {t.footerTagline}
          <Sparkles className="w-3 h-3" />
        </p>
      </div>
    </footer>
  );
};
