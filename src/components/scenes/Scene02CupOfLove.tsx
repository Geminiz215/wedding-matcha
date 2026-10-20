'use client';

import React from 'react';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface Scene02CupOfLoveProps {
  cupBlendLevel: number;
  setCupBlendLevel: (level: number) => void;
  activeAssetShowcase: 'cup' | 'strawberry' | 'pastry';
  setActiveAssetShowcase: (asset: 'cup' | 'strawberry' | 'pastry') => void;
  reducedMotion: boolean;
  lang: Language;
}

export const Scene02CupOfLove: React.FC<Scene02CupOfLoveProps> = ({
  cupBlendLevel,
  setCupBlendLevel,
  activeAssetShowcase,
  setActiveAssetShowcase,
  reducedMotion,
  lang
}) => {
  const t = TRANSLATIONS[lang].scene02;
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  return (
    <section
      id="scene-02"
      className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#DCE8C8] via-[#E8F0DA] to-[#FFF9EE] overflow-hidden"
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-10 right-[-100px] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(242,155,166,0.25) 0%, transparent 70%)', animation: !reducedMotion ? 'floatA 9s ease-in-out infinite' : 'none' }}
      />
      <div
        className="absolute bottom-10 left-[-80px] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(143,175,120,0.3) 0%, transparent 70%)', animation: !reducedMotion ? 'floatC 7s ease-in-out infinite' : 'none' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left: Interactive Visual */}
          <div
            ref={leftRef}
            className="lg:col-span-6 flex flex-col items-center"
            style={{
              opacity: leftVisible ? 1 : 0,
              animation: leftVisible && !reducedMotion ? 'fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
            }}
          >
            <div className="relative w-full max-w-md glass-card rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border-2 border-white/70 hover-glow-green transition-all duration-500">
              {/* Decorative ring */}
              {!reducedMotion && (
                <div className="absolute -inset-0.5 rounded-[2.5rem] border border-dashed border-[#8FAF78]/30 pointer-events-none" style={{ animation: 'spin 40s linear infinite' }} />
              )}

              {/* Tabs */}
              <div className="flex items-center justify-center gap-2 mb-5 bg-[#DCE8C8]/60 p-1.5 rounded-full backdrop-blur-sm">
                {([
                  { key: 'cup', label: t.tabCup, active: 'bg-[#536B45]', emoji: '🥤' },
                  { key: 'strawberry', label: t.tabBerry, active: 'bg-[#D94F5C]', emoji: '🍓' },
                  { key: 'pastry', label: t.tabPastry, active: 'bg-[#685148]', emoji: '🥐' },
                ] as const).map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveAssetShowcase(tab.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all duration-300 cursor-pointer flex items-center gap-1 ${activeAssetShowcase === tab.key
                      ? `${tab.active} text-white shadow-md scale-105`
                      : 'text-[#536B45] hover:bg-white/60'
                    }`}
                  >
                    <span>{tab.emoji}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Artwork display */}
              <div className="min-h-[290px] flex items-center justify-center relative">
                <div
                  key={activeAssetShowcase}
                  style={{ animation: !reducedMotion ? 'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none' }}
                >
                  {activeAssetShowcase === 'cup' && (
                    <StrawberryMatchaCup className="w-64 h-72" blendLevel={cupBlendLevel} reducedMotion={reducedMotion} />
                  )}
                  {activeAssetShowcase === 'strawberry' && (
                    <KawaiiStrawberry className="w-64 h-64" reducedMotion={reducedMotion} />
                  )}
                  {activeAssetShowcase === 'pastry' && (
                    <MatchaKunafaPastry className="w-64 h-64" reducedMotion={reducedMotion} />
                  )}
                </div>
              </div>

              {/* Slider */}
              <div className="mt-4 pt-4 border-t border-[#DCE8C8] text-center">
                <div className="flex items-center justify-between text-xs font-display font-bold mb-2 px-1">
                  <span className="text-[#536B45] flex items-center gap-1">🍵 {t.sliderMatcha}</span>
                  <span className="text-[11px] font-normal text-[#685148]/60">
                    {100 - cupBlendLevel}% / {cupBlendLevel}%
                  </span>
                  <span className="text-[#D94F5C] flex items-center gap-1">{t.sliderBerry} 🍓</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={cupBlendLevel}
                    onChange={(e) => setCupBlendLevel(Number(e.target.value))}
                    aria-label="Adjust Matcha and Strawberry blend ratio"
                    className="w-full cursor-pointer h-3 rounded-full appearance-none"
                    style={{
                      background: `linear-gradient(to right, #8FAF78 0%, #8FAF78 ${100 - cupBlendLevel}%, #F29BA6 ${100 - cupBlendLevel}%, #D94F5C 100%)`
                    }}
                  />
                </div>
                <p className="text-[11px] text-[#685148]/70 mt-2 font-medium">
                  {t.currentBlend} {100 - cupBlendLevel}% Uji Matcha • {cupBlendLevel}% Fresh Strawberry
                </p>
              </div>
            </div>
          </div>

          {/* Right: Story text */}
          <div
            ref={rightRef}
            className="lg:col-span-6 text-center lg:text-left"
            style={{
              opacity: rightVisible ? 1 : 0,
              animation: rightVisible && !reducedMotion ? 'fadeLeft 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#C7D9AA] text-xs font-display font-bold text-[#536B45] mb-4 shadow-sm">
              <span>✦</span>
              <span>{t.sceneTag}</span>
            </div>

            <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#536B45] leading-tight mb-4">
              {t.headingMain}{' '}
              <span className="italic font-normal text-[#D94F5C]">
                {t.headingSub}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#685148] leading-relaxed mb-8">
              {t.storyDesc}
            </p>

            {/* Mini cards */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {([
                { key: 'cup', emoji: '🥤', title: t.cardCupTitle, sub: t.cardCupSub, border: 'border-[#8FAF78]', glow: 'hover-glow-green' },
                { key: 'strawberry', emoji: '🍓', title: t.cardBerryTitle, sub: t.cardBerrySub, border: 'border-[#F29BA6]', glow: 'hover-glow-pink' },
                { key: 'pastry', emoji: '🥐', title: t.cardPastryTitle, sub: t.cardPastrySub, border: 'border-[#685148]/40', glow: 'hover-glow-green' },
              ] as const).map((card, i) => (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setActiveAssetShowcase(card.key)}
                  className={`p-3 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer ${card.glow} ${activeAssetShowcase === card.key
                    ? `bg-white ${card.border} shadow-lg scale-[1.05]`
                    : 'bg-white/60 border-white/60 hover:bg-white'
                  }`}
                  style={{
                    animation: rightVisible && !reducedMotion ? `fadeUp 0.5s ${0.2 + i * 0.12}s ease-out both` : 'none',
                    opacity: rightVisible ? 1 : 0,
                  }}
                >
                  <div className="text-xl mb-1">{card.emoji}</div>
                  <div className="font-display font-bold text-xs text-[#536B45]">{card.title}</div>
                  <div className="text-[11px] text-[#685148]/75 mt-0.5">{card.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
