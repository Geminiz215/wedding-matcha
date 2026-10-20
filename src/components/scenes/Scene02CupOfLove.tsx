'use client';

import React from 'react';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

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

  return (
    <section
      id="scene-02"
      className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#DCE8C8] via-[#E8F0DA] to-[#FFF9EE]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Interactive Layered Visual Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-[#FFF9EE] rounded-[2.5rem] p-6 sm:p-8 shadow-xl border-4 border-white">
              {/* Top Cafe Menu Switcher Tabs */}
              <div className="flex items-center justify-center gap-2 mb-4 bg-[#DCE8C8]/50 p-1.5 rounded-full">
                <button
                  type="button"
                  onClick={() => setActiveAssetShowcase('cup')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${activeAssetShowcase === 'cup'
                      ? 'bg-[#536B45] text-white shadow-sm'
                      : 'text-[#536B45] hover:bg-white/60'
                    }`}
                >
                  {t.tabCup}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAssetShowcase('strawberry')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${activeAssetShowcase === 'strawberry'
                      ? 'bg-[#D94F5C] text-white shadow-sm'
                      : 'text-[#685148] hover:bg-white/60'
                    }`}
                >
                  {t.tabBerry}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAssetShowcase('pastry')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${activeAssetShowcase === 'pastry'
                      ? 'bg-[#685148] text-white shadow-sm'
                      : 'text-[#685148] hover:bg-white/60'
                    }`}
                >
                  {t.tabPastry}
                </button>
              </div>

              {/* Active Artwork Display */}
              <div className="min-h-[290px] flex items-center justify-center relative">
                {activeAssetShowcase === 'cup' && (
                  <StrawberryMatchaCup
                    className="w-64 h-72"
                    blendLevel={cupBlendLevel}
                    reducedMotion={reducedMotion}
                  />
                )}
                {activeAssetShowcase === 'strawberry' && (
                  <KawaiiStrawberry className="w-64 h-64" reducedMotion={reducedMotion} />
                )}
                {activeAssetShowcase === 'pastry' && (
                  <MatchaKunafaPastry className="w-64 h-64" reducedMotion={reducedMotion} />
                )}
              </div>

              {/* Interactive Swirl / Sweetness Slider */}
              <div className="mt-4 pt-4 border-t border-[#DCE8C8] text-center">
                <div className="flex items-center justify-between text-xs font-display font-bold mb-1.5 px-1">
                  <span className="text-[#536B45]">{t.sliderMatcha}</span>
                  <span className="text-[#D94F5C]">{t.sliderBerry}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={cupBlendLevel}
                  onChange={(e) => setCupBlendLevel(Number(e.target.value))}
                  aria-label="Adjust Matcha and Strawberry blend ratio"
                  className="w-full accent-[#D94F5C] cursor-pointer h-2 rounded-lg bg-gradient-to-r from-[#8FAF78] via-[#FFF9EE] to-[#F29BA6]"
                />
                <p className="text-[11px] text-[#685148]/80 mt-1.5 font-medium">
                  {t.currentBlend} {100 - cupBlendLevel}% Uji Matcha • {cupBlendLevel}% Fresh Strawberry
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#C7D9AA] text-xs font-display font-bold text-[#536B45] mb-4 shadow-sm">
              <span>{t.sceneTag}</span>
            </div>

            <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#536B45] leading-tight mb-4">
              {t.headingMain}{' '}
              <span className="italic font-normal text-[#D94F5C]">
                {t.headingSub}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#685148] leading-relaxed mb-6">
              {t.storyDesc}
            </p>

            {/* Mini Trio Preview Cards */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <button
                type="button"
                onClick={() => setActiveAssetShowcase('cup')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${activeAssetShowcase === 'cup'
                    ? 'bg-white border-[#8FAF78] shadow-md scale-[1.02]'
                    : 'bg-white/60 border-white hover:bg-white'
                  }`}
              >
                <div className="text-lg mb-1">🥤</div>
                <div className="font-display font-bold text-xs text-[#536B45]">{t.cardCupTitle}</div>
                <div className="text-[11px] text-[#685148]/80">{t.cardCupSub}</div>
              </button>

              <button
                type="button"
                onClick={() => setActiveAssetShowcase('strawberry')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${activeAssetShowcase === 'strawberry'
                    ? 'bg-white border-[#F29BA6] shadow-md scale-[1.02]'
                    : 'bg-white/60 border-white hover:bg-white'
                  }`}
              >
                <div className="text-lg mb-1">🍓</div>
                <div className="font-display font-bold text-xs text-[#D94F5C]">{t.cardBerryTitle}</div>
                <div className="text-[11px] text-[#685148]/80">{t.cardBerrySub}</div>
              </button>

              <button
                type="button"
                onClick={() => setActiveAssetShowcase('pastry')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${activeAssetShowcase === 'pastry'
                    ? 'bg-white border-[#685148] shadow-md scale-[1.02]'
                    : 'bg-white/60 border-white hover:bg-white'
                  }`}
              >
                <div className="text-lg mb-1">🥐</div>
                <div className="font-display font-bold text-xs text-[#685148]">{t.cardPastryTitle}</div>
                <div className="text-[11px] text-[#685148]/80">{t.cardPastrySub}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
