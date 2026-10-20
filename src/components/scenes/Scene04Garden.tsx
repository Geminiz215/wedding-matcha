'use client';

import React from 'react';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene04GardenProps {
  reducedMotion: boolean;
  lang: Language;
}

export const Scene04Garden: React.FC<Scene04GardenProps> = ({ reducedMotion, lang }) => {
  const t = TRANSLATIONS[lang].scene04;

  return (
    <section
      id="scene-04"
      className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#FFF9EE] via-[#FBE0E2] to-[#DCE8C8]"
    >
      {/* Curved SVG Garden Path in Background */}
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

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="inline-block bg-white/90 text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
          {t.sceneTag}
        </span>

        {/* Central Kawaii Strawberry Character in the Garden */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-4">
          <div className="hidden sm:block transform -rotate-12">
            <MatchaKunafaPastry className="w-36 h-36" reducedMotion={reducedMotion} />
          </div>
          <KawaiiStrawberry className="w-52 h-52 sm:w-64 sm:h-64" reducedMotion={reducedMotion} />
          <div className="hidden sm:block transform rotate-12">
            <StrawberryMatchaCup className="w-36 h-44" reducedMotion={reducedMotion} />
          </div>
        </div>

        <blockquote className="font-serif-romantic italic text-3xl sm:text-5xl md:text-6xl font-bold text-[#536B45] leading-tight max-w-3xl mx-auto mt-4 mb-4">
          {t.quote}
        </blockquote>

        <p className="font-display text-sm sm:text-base text-[#685148] max-w-xl mx-auto">
          {t.desc}
        </p>
      </div>
    </section>
  );
};
