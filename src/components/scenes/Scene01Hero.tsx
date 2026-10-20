'use client';

import React, { useState } from 'react';
import { Calendar, ChevronDown, Globe } from 'lucide-react';
import { GuestData } from '@/types/wedding';
import { WEDDING_CONFIG } from '@/config/wedding';
import { StrawberryMatchaCup } from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene01HeroProps {
  guestData: GuestData;
  onOpenInvitation: (withChime?: boolean) => void;
  reducedMotion: boolean;
  openingBurst: boolean;
  cupBlendLevel: number;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const Scene01Hero: React.FC<Scene01HeroProps> = ({
  guestData,
  onOpenInvitation,
  reducedMotion,
  openingBurst,
  cupBlendLevel,
  lang,
  onLanguageChange
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const t = TRANSLATIONS[lang].hero;

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  return (
    <>
      <section
        id="scene-01"
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[94vh] flex flex-col items-center justify-center px-4 sm:px-8 py-12 overflow-hidden bg-[#FFF9EE]"
      >
        {/* Background Soft Pale-Green & Strawberry Pastel Blobs */}
        <div
          className="absolute top-12 left-8 w-64 h-64 rounded-full bg-[#DCE8C8]/50 blur-3xl pointer-events-none"
          style={{
            transform: !reducedMotion ? `translate(${mouseOffset.x * -0.8}px, ${mouseOffset.y * -0.8}px)` : 'none'
          }}
        />
        <div
          className="absolute bottom-12 right-8 w-72 h-72 rounded-full bg-[#FBE0E2]/70 blur-3xl pointer-events-none"
          style={{
            transform: !reducedMotion ? `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px)` : 'none'
          }}
        />

        {/* Burst Transition Overlay saat klik Open Invitation */}
        {openingBurst && !reducedMotion && (
          <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
            <div
              className="w-96 h-96 rounded-full bg-gradient-to-r from-[#DCE8C8] via-[#FFF9EE] to-[#FBE0E2]"
              style={{ animation: 'burstOut 1.1s ease-out forwards' }}
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
          {/* =====================================================================
              BUTTON PEMILIH BAHASA DI AWAL (DEFAULT: INGGRIS)
          ===================================================================== */}
          <div className="mb-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md border-2 border-[#C7D9AA] px-3.5 py-1.5 rounded-full shadow-sm animate-fadeIn">
            <Globe className="w-3.5 h-3.5 text-[#536B45]" />
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#536B45]">
              {t.langLabel}
            </span>
            <div className="inline-flex items-center gap-1 bg-[#FFF9EE] p-0.5 rounded-full border border-[#DCE8C8]">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${lang === 'en'
                  ? 'bg-[#536B45] text-white shadow-sm'
                  : 'text-[#685148] hover:bg-white'
                  }`}
                aria-pressed={lang === 'en'}
              >
                🇬🇧 English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('id')}
                className={`px-3 py-1 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${lang === 'id'
                  ? 'bg-[#D94F5C] text-white shadow-sm'
                  : 'text-[#685148] hover:bg-white'
                  }`}
                aria-pressed={lang === 'id'}
              >
                🇮🇩 Indonesia
              </button>
            </div>
          </div>

          {/* Personalized Guest Invitation Badge */}
          <div className="mb-5 inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 bg-white/90 backdrop-blur-sm border-2 border-[#F29BA6] px-5 py-2.5 rounded-2xl sm:rounded-full shadow-sm">
            <span className="text-[11px] sm:text-xs font-display font-bold uppercase tracking-widest text-[#8FAF78]">
              {t.invitationFor}
            </span>
            <span className="hidden sm:inline text-[#F29BA6]">•</span>
            <span className="text-sm sm:text-base font-display font-bold text-[#D94F5C]">
              {t.dear} {guestData.name.toUpperCase()} ♡
            </span>
          </div>

          {/* Subtitle Eyebrow */}
          <p className="font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] text-[#536B45] mb-2">
            {t.introEyebrow}
          </p>

          {/* Couple Names Headline */}
          <h1 className="font-serif-romantic text-5xl sm:text-7xl md:text-8xl font-bold text-[#536B45] tracking-tight leading-none mb-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <span>{WEDDING_CONFIG.couple.bride.nickname.toUpperCase()}</span>
            <span className="font-serif-romantic italic font-normal text-4xl sm:text-6xl text-[#D94F5C]">
              &amp;
            </span>
            <span>{WEDDING_CONFIG.couple.groom.nickname.toUpperCase()}</span>
          </h1>

          <p className="font-display text-xs sm:text-sm tracking-[0.18em] uppercase text-[#685148]/90 mt-1 mb-4">
            {t.invitedHeadline}
          </p>

          {/* CENTRAL SIGNATURE STRAWBERRY MATCHA LATTE ILLUSTRATION */}

          <div
            className="relative my-1 sm:my-2"
            style={{
              transform: !reducedMotion ? `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)` : 'none',
              transition: 'transform 0.15s ease-out'
            }}
          >
            {/* Cute Handwritten Floating Callout Tags */}
            <div className="hidden md:flex items-center gap-1.5 absolute -left-24 lg:-left-32 top-28 bg-white/95 border border-[#C7D9AA] px-3.5 py-1.5 rounded-full shadow-md -rotate-6 text-xs font-display text-[#536B45] z-20">
              <span>🍵</span>
              <span>{t.matchaTag}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 absolute -right-24 lg:-right-32 bottom-28 bg-white/95 border border-[#F29BA6] px-3.5 py-1.5 rounded-full shadow-md rotate-6 text-xs font-display text-[#D94F5C] z-20">
              <span>🍓</span>
              <span>{t.strawberryTag}</span>
            </div>

            {/* HERO COUPLE PHOTO: Foto Berdua Nadia & Raka */}
            <div className="relative group mx-auto my-3">
              {/* Soft romantic glowing gradient behind */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8FAF78]/30 via-[#F29BA6]/40 to-[#D94F5C]/30 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-90 transition duration-500 pointer-events-none" />

              {/* Polaroid Photo Frame */}
              <div className="relative bg-white/95 p-3 sm:p-4 rounded-[2rem] shadow-2xl border-4 border-white transition-transform duration-300 group-hover:scale-[1.01]">
                {/* Washi tape at top */}
                <div className="w-24 h-5 bg-[#F29BA6]/50 mx-auto -mt-6 mb-3 rounded-sm rotate-[-1.5deg] shadow-xs" />

                {/* Photo Container: Taller portrait frame for full couple view */}
                <div className="w-72 h-[380px] sm:w-84 sm:h-[450px] md:w-[380px] md:h-[520px] rounded-2xl overflow-hidden shadow-inner bg-[#FBE0E2]/30">
                  <img
                    src={WEDDING_CONFIG.couple.coupleHeroPhoto || '/images/couple-hero.jpg'}
                    alt={`${WEDDING_CONFIG.couple.bride.nickname} & ${WEDDING_CONFIG.couple.groom.nickname}`}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Cute Romantic Bottom Caption */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs font-display">
                  <span className="text-[#536B45] font-bold tracking-wider flex items-center gap-1.5">
                    <span>🍵</span>
                    <span>{WEDDING_CONFIG.couple.bride.nickname.toUpperCase()} &amp; {WEDDING_CONFIG.couple.groom.nickname.toUpperCase()}</span>
                    <span>🍓</span>
                  </span>
                  <span className="text-[#D94F5C] font-serif-romantic italic text-sm font-semibold">
                    #SweetBlend
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Supporting Text & Wedding Date */}
          <p className="font-display font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#8FAF78] mt-1">
            {t.chapterStarts}
          </p>
          <div className="mt-2 mb-6 inline-flex items-center gap-2 bg-[#DCE8C8]/60 text-[#536B45] px-4 py-1.5 rounded-full font-display font-bold text-sm sm:text-base">
            <Calendar className="w-4 h-4 text-[#D94F5C]" />
            <span>
              {lang === 'id' ? WEDDING_CONFIG.weddingDayDisplay : WEDDING_CONFIG.weddingDateDisplay}
            </span>
          </div>

          {/* Primary CTA: OPEN OUR INVITATION ♡ */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenInvitation(true)}
              className="group relative inline-flex items-center gap-2.5 bg-[#536B45] hover:bg-[#D94F5C] text-white font-display font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#F29BA6] cursor-pointer"
            >
              <span>{guestData.isPersonalized ? t.openPersonalized : t.openGeneral}</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#scene-08"
              className="text-xs sm:text-sm font-display font-semibold text-[#685148]/75 hover:text-[#D94F5C] underline underline-offset-4 px-3 py-2 transition-colors cursor-pointer"
            >
              {t.skipToDetails}
            </a>
          </div>
        </div>
      </section>

      {/* Soft Creamy Wave Divider */}
      <div className="w-full overflow-hidden leading-none bg-[#FFF9EE]">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-20">
          <path
            d="M0 40L60 45C120 50 240 60 360 55C480 50 600 30 720 25C840 20 960 30 1080 42C1200 55 1320 68 1380 74L1440 80V90H1380C1320 90 1200 90 1080 90C960 90 840 90 720 90C600 90 480 90 360 90C240 90 120 90 60 90H0V40Z"
            fill="#DCE8C8"
          />
        </svg>
      </div>
    </>
  );
};
