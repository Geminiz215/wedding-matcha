'use client';

import React from 'react';
import { WEDDING_CONFIG } from '@/config/wedding';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene03TimelineProps {
  reducedMotion: boolean;
  lang: Language;
}

export const Scene03Timeline: React.FC<Scene03TimelineProps> = ({ reducedMotion, lang }) => {
  const t = TRANSLATIONS[lang].scene03;

  return (
    <section id="scene-03" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE] cafe-paper-grid">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 border border-[#F29BA6]">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#685148]/90">
            {t.subtitle}
          </p>
        </div>

        {/* Editorial Scrapbook Timeline */}
        <div className="relative">
          {/* Vertical Dotted Connecting Line on Desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-[#8FAF78] -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {WEDDING_CONFIG.storyTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FFF9EE] border-4 border-[#8FAF78] text-[#536B45] font-display font-bold text-sm items-center justify-center shadow-md z-10">
                    0{idx + 1}
                  </div>

                  {/* Polaroid / Illustration Frame Side */}
                  <div className="w-full md:w-5/12 flex justify-center">
                    <div
                      className="bg-white p-4 pb-6 rounded-3xl shadow-lg border-2 border-[#DCE8C8] max-w-xs w-full transition-transform duration-300 hover:scale-[1.02]"
                      style={{ transform: `rotate(${item.rotation})` }}
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-[#FFF9EE] via-[#DCE8C8]/40 to-[#FBE0E2]/50 h-52 flex items-center justify-center overflow-hidden p-4 relative">
                        {item.illustrationType === 'cup' && (
                          <StrawberryMatchaCup className="w-40 h-44" reducedMotion={reducedMotion} />
                        )}
                        {item.illustrationType === 'strawberry' && (
                          <KawaiiStrawberry className="w-44 h-44" reducedMotion={reducedMotion} />
                        )}
                        {item.illustrationType === 'pastry' && (
                          <MatchaKunafaPastry className="w-44 h-44" reducedMotion={reducedMotion} />
                        )}

                        {/* Tiny Strawberry Stamp */}
                        <span className="absolute top-3 right-3 bg-[#D94F5C] text-white font-display font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm rotate-6">
                          {item.stamp}
                        </span>
                      </div>

                      <div className="mt-3 text-center">
                        <p className="font-serif-romantic italic text-sm text-[#536B45]">
                          📍 {item.location}
                        </p>
                        <p className="text-[11px] font-display text-[#8FAF78] mt-0.5">
                          {item.recipeNote}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for Center Line */}
                  <div className="hidden md:block md:w-2/12" />

                  {/* Recipe Card Narrative Side */}
                  <div className="w-full md:w-5/12">
                    <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-3xl shadow-md border-2 border-[#F29BA6]/60 relative">
                      <span className="inline-block text-xs font-display font-bold tracking-wider uppercase text-[#D94F5C] mb-1">
                        {item.step}
                      </span>
                      <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-[#536B45] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-display font-semibold text-sm text-[#8FAF78] mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-[#685148] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
