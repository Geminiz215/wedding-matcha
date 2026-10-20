'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Globe, Heart, Sparkles } from 'lucide-react';
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

const PETALS = [
  { color: '#F29BA6', size: 10, delay: 0 },
  { color: '#DCE8C8', size: 8, delay: 0.5 },
  { color: '#F29BA6', size: 12, delay: 1.2 },
  { color: '#8FAF78', size: 7, delay: 0.8 },
  { color: '#FBE0E2', size: 14, delay: 2.0 },
  { color: '#C7D9AA', size: 9, delay: 1.5 },
  { color: '#F29BA6', size: 11, delay: 3.0 },
  { color: '#DCE8C8', size: 8, delay: 0.3 },
];

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
  const [mounted, setMounted] = useState(false);
  const t = TRANSLATIONS[lang].hero;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 22;
    setMouseOffset({ x, y });
  };

  return (
    <>
      <section
        id="scene-01"
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[98vh] flex flex-col items-center justify-center px-4 sm:px-8 py-12 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #FFF9EE 0%, #F0F7E6 35%, #FFF5F6 70%, #FFF9EE 100%)'
        }}
      >
        {/* ── Animated orb blobs ── */}
        <div
          className="absolute top-[-10%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orbPulse"
          style={{
            background: 'radial-gradient(circle, rgba(220,232,200,0.55) 0%, transparent 70%)',
            transform: !reducedMotion ? `translate(${mouseOffset.x * -1.2}px, ${mouseOffset.y * -1.2}px)` : 'none',
            transition: 'transform 0.2s ease-out',
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[-10%] w-[550px] h-[550px] rounded-full pointer-events-none animate-orbPulse"
          style={{
            background: 'radial-gradient(circle, rgba(251,224,226,0.65) 0%, transparent 70%)',
            animationDelay: '2s',
            transform: !reducedMotion ? `translate(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px)` : 'none',
            transition: 'transform 0.2s ease-out',
          }}
        />
        <div
          className="absolute top-[40%] right-[5%] w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(143,175,120,0.2) 0%, transparent 70%)',
            animation: !reducedMotion ? 'floatC 8s ease-in-out infinite' : 'none',
          }}
        />

        {/* ── Petal rain ── */}
        {!reducedMotion && mounted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {PETALS.map((p, i) => (
              <div
                key={i}
                className="petal"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  top: '-20px',
                  left: `${10 + i * 11}%`,
                  animationDelay: `${p.delay}s`,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        )}

        {/* ── Sparkle stars ── */}
        {!reducedMotion && (
          <>
            {[
              { top: '12%', left: '8%', delay: '0s' },
              { top: '22%', right: '12%', delay: '0.8s' },
              { top: '65%', left: '5%', delay: '1.5s' },
              { bottom: '20%', right: '8%', delay: '0.4s' },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute pointer-events-none animate-twinkle text-[#F29BA6]"
                style={{ ...pos, animationDelay: pos.delay, fontSize: '18px' }}
              >
                ✦
              </div>
            ))}
          </>
        )}

        {/* ── Burst overlay ── */}
        {openingBurst && !reducedMotion && (
          <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
            <div
              className="w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, #DCE8C8 0%, #FBE0E2 50%, transparent 100%)',
                animation: 'burstOut 1.1s ease-out forwards'
              }}
            />
          </div>
        )}

        {/* ── Main content ── */}
        <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center">

          {/* Language switcher */}
          <div
            className="mb-5 inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/80 px-3.5 py-1.5 rounded-full shadow-lg"
            style={{ animation: mounted && !reducedMotion ? 'fadeDown 0.6s 0.1s ease-out both' : 'none' }}
          >
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

          {/* Guest badge */}
          {/* <div
            className="mb-5 inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 glass-card-pink border-2 border-[#F29BA6]/60 px-5 py-2.5 rounded-2xl sm:rounded-full shadow-lg"
            style={{ animation: mounted && !reducedMotion ? 'fadeDown 0.6s 0.2s ease-out both' : 'none' }}
          >
            <Sparkles className="w-4 h-4 text-[#D94F5C]" />
            <span className="text-[11px] sm:text-xs font-display font-bold uppercase tracking-widest text-[#8FAF78]">
              {t.invitationFor}
            </span>
            <span className="hidden sm:inline text-[#F29BA6]">•</span>
            <span className="text-sm sm:text-base font-display font-bold text-[#D94F5C]">
              {t.dear} {guestData.name.toUpperCase()} ♡
            </span>
          </div> */}

          {/* Eyebrow */}
          <p
            className="font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.28em] text-[#536B45] mb-3"
            style={{ animation: mounted && !reducedMotion ? 'fadeUp 0.7s 0.3s ease-out both' : 'none' }}
          >
            {t.introEyebrow}
          </p>

          {/* Headline names — shimmer on hover */}
          <h1
            className="font-serif-romantic text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
            style={{ animation: mounted && !reducedMotion ? 'blurIn 0.9s 0.4s ease-out both' : 'none' }}
          >
            <span className="text-[#536B45] hover:shimmer-text transition-all duration-500 cursor-default">
              {WEDDING_CONFIG.couple.bride.nickname.toUpperCase()}
            </span>
            <span className="font-serif-romantic italic font-normal text-4xl sm:text-6xl text-[#D94F5C] animate-floatB">
              &amp;
            </span>
            <span className="text-[#536B45] hover:shimmer-text transition-all duration-500 cursor-default">
              {WEDDING_CONFIG.couple.groom.nickname.toUpperCase()}
            </span>
          </h1>

          <p
            className="font-display text-xs sm:text-sm tracking-[0.18em] uppercase text-[#685148]/80 mt-1 mb-4"
            style={{ animation: mounted && !reducedMotion ? 'fadeUp 0.7s 0.5s ease-out both' : 'none' }}
          >
            {t.invitedHeadline}
          </p>

          {/* ── HERO PHOTO + floating tags ── */}
          <div
            className="relative my-1 sm:my-2"
            style={{
              transform: !reducedMotion ? `translate(${mouseOffset.x * 0.45}px, ${mouseOffset.y * 0.45}px)` : 'none',
              transition: 'transform 0.15s ease-out',
              animation: mounted && !reducedMotion ? 'scaleIn 0.9s 0.6s ease-out both' : 'none',
            }}
          >
            {/* Floating callout tags */}
            <div
              className="hidden md:flex items-center gap-1.5 absolute -left-28 lg:-left-36 top-32 glass-card border border-[#C7D9AA] px-3.5 py-1.5 rounded-full shadow-lg -rotate-6 text-xs font-display text-[#536B45] z-20 hover-glow-green cursor-default"
              style={{ animation: !reducedMotion ? 'floatB 4s 1s ease-in-out infinite' : 'none' }}
            >
              <span>🍵</span>
              <span>{t.matchaTag}</span>
            </div>
            <div
              className="hidden md:flex items-center gap-1.5 absolute -right-28 lg:-right-36 bottom-32 glass-card-pink border border-[#F29BA6] px-3.5 py-1.5 rounded-full shadow-lg rotate-6 text-xs font-display text-[#D94F5C] z-20 hover-glow-pink cursor-default"
              style={{ animation: !reducedMotion ? 'floatA 5s 0.5s ease-in-out infinite' : 'none' }}
            >
              <span>🍓</span>
              <span>{t.strawberryTag}</span>
            </div>

            {/* Polaroid */}
            <div className="relative group mx-auto my-3">
              {/* Glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#8FAF78]/40 via-[#F29BA6]/50 to-[#D94F5C]/40 rounded-[2.8rem] blur-xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />
              {/* Rotating ring */}
              {!reducedMotion && (
                <div
                  className="absolute -inset-1 rounded-[2.5rem] border-2 border-dashed border-[#C7D9AA]/50 pointer-events-none"
                  style={{ animation: 'spin 30s linear infinite' }}
                />
              )}

              {/* Card */}
              <div className="relative bg-white/95 p-3 sm:p-4 rounded-[2rem] shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Washi tape */}
                <div className="w-24 h-5 bg-[#F29BA6]/50 mx-auto -mt-6 mb-3 rounded-sm rotate-[-1.5deg] shadow-sm" />

                <div className="w-72 h-[380px] sm:w-84 sm:h-[450px] md:w-[380px] md:h-[520px] rounded-2xl overflow-hidden shadow-inner bg-[#FBE0E2]/30 relative">
                  <img
                    src={WEDDING_CONFIG.couple.coupleHeroPhoto || '/images/couple-hero.jpg'}
                    alt={`${WEDDING_CONFIG.couple.bride.nickname} & ${WEDDING_CONFIG.couple.groom.nickname}`}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#536B45]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Caption */}
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

          {/* Date badge */}
          <p
            className="font-display font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#8FAF78] mt-2"
            style={{ animation: mounted && !reducedMotion ? 'fadeUp 0.6s 0.8s ease-out both' : 'none' }}
          >
            {t.chapterStarts}
          </p>
          <div
            className="mt-2 mb-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-[#DCE8C8] text-[#536B45] px-5 py-2 rounded-full font-display font-bold text-sm sm:text-base shadow-md hover-glow-green"
            style={{ animation: mounted && !reducedMotion ? 'fadeUp 0.6s 0.9s ease-out both' : 'none' }}
          >
            <Calendar className="w-4 h-4 text-[#D94F5C]" />
            <span>{lang === 'id' ? WEDDING_CONFIG.weddingDayDisplay : WEDDING_CONFIG.weddingDateDisplay}</span>
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3"
            style={{ animation: mounted && !reducedMotion ? 'fadeUp 0.7s 1.0s ease-out both' : 'none' }}
          >
            <button
              type="button"
              onClick={() => onOpenInvitation(true)}
              className="group relative inline-flex items-center gap-2.5 bg-[#536B45] hover:bg-[#D94F5C] text-white font-display font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#F29BA6] cursor-pointer overflow-hidden"
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{guestData.isPersonalized ? t.openPersonalized : t.openGeneral}</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#scene-08"
              className="text-xs sm:text-sm font-display font-semibold text-[#685148]/70 hover:text-[#D94F5C] underline underline-offset-4 px-3 py-2 transition-colors cursor-pointer"
            >
              {t.skipToDetails}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        {!reducedMotion && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60"
            style={{ animation: 'fadeIn 1s 1.5s ease-out both' }}
          >
            <span className="text-[10px] font-display uppercase tracking-widest text-[#536B45]">scroll</span>
            <div
              className="w-5 h-8 border-2 border-[#8FAF78] rounded-full flex items-start justify-center pt-1"
            >
              <div
                className="w-1 h-2 bg-[#D94F5C] rounded-full"
                style={{ animation: 'floatB 1.5s ease-in-out infinite' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none" style={{ background: '#FFF9EE' }}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 sm:h-24">
          <path
            d="M0 30C240 80 480 0 720 40C960 80 1200 10 1440 60V100H0V30Z"
            fill="#DCE8C8"
          />
          <path
            d="M0 55C200 30 500 75 720 55C940 35 1200 65 1440 45V100H0V55Z"
            fill="#E8F0DA"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </>
  );
};
