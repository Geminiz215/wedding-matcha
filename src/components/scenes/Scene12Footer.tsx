'use client';

import React from 'react';
import { WEDDING_CONFIG } from '@/config/wedding';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

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

  return (
    <footer
      id="scene-12"
      className="relative pt-20 pb-28 px-4 sm:px-8 bg-gradient-to-b from-[#FFF9EE] via-[#DCE8C8] to-[#C7D9AA] text-center overflow-hidden"
    >
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <span className="inline-block bg-white/90 text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
          {t.sceneTag}
        </span>

        {/* Central Strawberry Matcha Illustration with Supporting Characters */}
        <div className="flex items-center justify-center gap-4 my-2">
          <div className="hidden sm:block">
            <KawaiiStrawberry className="w-28 h-28" reducedMotion={reducedMotion} />
          </div>
          <StrawberryMatchaCup
            className="w-60 h-68 sm:w-72 sm:h-80"
            interactive={true}
            blendLevel={cupBlendLevel}
            reducedMotion={reducedMotion}
          />
          <div className="hidden sm:block">
            <MatchaKunafaPastry className="w-28 h-28" reducedMotion={reducedMotion} />
          </div>
        </div>

        <p className="font-serif-romantic italic text-xl sm:text-2xl text-[#D94F5C] mt-2">
          {t.happilyEver}
        </p>

        <h2 className="font-serif-romantic text-5xl sm:text-7xl font-bold text-[#536B45] my-2">
          {WEDDING_CONFIG.couple.bride.nickname.toUpperCase()} &amp;{' '}
          {WEDDING_CONFIG.couple.groom.nickname.toUpperCase()}
        </h2>

        <p className="font-display font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-[#536B45] mb-8">
          {t.madeWithLove}
        </p>

        {/* Back to the Beginning Button */}
        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
          }
          className="inline-flex items-center gap-2 bg-white hover:bg-[#536B45] text-[#536B45] hover:text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md border-2 border-[#536B45] transition-all cursor-pointer"
        >
          <span>{t.backToTop}</span>
        </button>

        <p className="text-xs text-[#536B45]/80 font-display mt-8">
          {WEDDING_CONFIG.hashtag} • {t.footerTagline}
        </p>
      </div>
    </footer>
  );
};
