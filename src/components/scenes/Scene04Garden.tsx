'use client';

import React from 'react';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface Scene04GardenProps {
  reducedMotion: boolean;
  lang: Language;
}

export const Scene04Garden: React.FC<Scene04GardenProps> = ({ reducedMotion, lang }) => {
  const t = TRANSLATIONS[lang].scene04;
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal<HTMLQuoteElement>({ threshold: 0.3 });

  return (
    <section
      id="scene-04"
      className="relative py-24 sm:py-36 px-4 sm:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFF9EE 0%, #FBE0E2 40%, #DCE8C8 100%)' }}
    >
      {/* Curved garden path */}
      <svg
        viewBox="0 0 1200 500"
        fill="none"
        className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 420 C250 380 350 120 650 220 C950 320 1050 80 1300 120"
          stroke="#FFF9EE"
          strokeWidth="55"
          strokeLinecap="round"
        />
        <path
          d="M-100 420 C250 380 350 120 650 220 C950 320 1050 80 1300 120"
          stroke="#8FAF78"
          strokeWidth="4"
          strokeDasharray="12 12"
        />
      </svg>

      {/* Floating ambient orbs */}
      <div
        className="absolute top-[-5%] left-[10%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,224,226,0.5) 0%, transparent 70%)', animation: !reducedMotion ? 'floatA 10s ease-in-out infinite' : 'none' }}
      />
      <div
        className="absolute bottom-[-5%] right-[10%] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,232,200,0.5) 0%, transparent 70%)', animation: !reducedMotion ? 'floatC 8s ease-in-out infinite' : 'none' }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span
          className="inline-block bg-white/90 text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeDown 0.6s ease-out forwards' : 'none',
          }}
        >
          {t.sceneTag}
        </span>

        {/* Illustration trio */}
        <div
          ref={sectionRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 my-6"
        >
          <div
            className="hidden sm:block"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeRight 0.7s 0.1s ease-out forwards' : 'none',
              transform: !reducedMotion && isVisible ? 'rotate(-12deg)' : 'rotate(-12deg) translateX(50px)',
              transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <MatchaKunafaPastry className="w-36 h-36" reducedMotion={reducedMotion} />
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'popIn 0.8s 0.2s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none',
            }}
          >
            <KawaiiStrawberry className="w-52 h-52 sm:w-64 sm:h-64" reducedMotion={reducedMotion} />
          </div>

          <div
            className="hidden sm:block"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeLeft 0.7s 0.1s ease-out forwards' : 'none',
              transform: !reducedMotion && isVisible ? 'rotate(12deg)' : 'rotate(12deg) translateX(-50px)',
              transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <StrawberryMatchaCup className="w-36 h-44" reducedMotion={reducedMotion} />
          </div>
        </div>

        {/* Quote */}
        <blockquote
          ref={quoteRef}
          className="font-serif-romantic italic text-3xl sm:text-5xl md:text-6xl font-bold text-[#536B45] leading-tight max-w-3xl mx-auto mt-4 mb-5"
          style={{
            opacity: quoteVisible ? 1 : 0,
            animation: quoteVisible && !reducedMotion ? 'blurIn 1s 0.1s ease-out forwards' : 'none',
          }}
        >
          {t.quote}
        </blockquote>

        <p
          className="font-display text-sm sm:text-base text-[#685148] max-w-xl mx-auto"
          style={{
            opacity: quoteVisible ? 1 : 0,
            animation: quoteVisible && !reducedMotion ? 'fadeUp 0.6s 0.4s ease-out forwards' : 'none',
          }}
        >
          {t.desc}
        </p>
      </div>
    </section>
  );
};
