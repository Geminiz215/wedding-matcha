'use client';

import React from 'react';
import { WEDDING_CONFIG } from '@/config/wedding';
import {
  StrawberryMatchaCup,
  KawaiiStrawberry,
  MatchaKunafaPastry
} from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface Scene03TimelineProps {
  reducedMotion: boolean;
  lang: Language;
}

function TimelineItem({
  item,
  idx,
  reducedMotion,
}: {
  item: (typeof WEDDING_CONFIG.storyTimeline)[0];
  idx: number;
  reducedMotion: boolean;
}) {
  const isEven = idx % 2 === 0;
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible && !reducedMotion
          ? `${isEven ? 'fadeRight' : 'fadeLeft'} 0.8s cubic-bezier(0.22,1,0.36,1) forwards`
          : 'none',
      }}
    >
      {/* Timeline center node */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFF9EE] border-4 border-[#8FAF78] text-[#536B45] font-display font-bold text-sm items-center justify-center shadow-lg z-10 transition-all duration-500"
        style={{
          animation: isVisible && !reducedMotion ? 'popIn 0.6s 0.3s ease-out both' : 'none',
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 0 4px rgba(143,175,120,0.15)',
        }}
      >
        0{idx + 1}
      </div>

      {/* Polaroid side */}
      <div className="w-full md:w-5/12 flex justify-center">
        <div
          className="bg-white p-4 pb-6 rounded-3xl shadow-xl border-2 border-[#DCE8C8] max-w-xs w-full hover-glow-green"
          style={{
            transform: isVisible ? `rotate(${item.rotation})` : `rotate(${item.rotation}) translateY(20px)`,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease',
          }}
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
            <span className="absolute top-3 right-3 bg-[#D94F5C] text-white font-display font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm rotate-6">
              {item.stamp}
            </span>
          </div>

          <div className="mt-3 text-center">
            <p className="font-serif-romantic italic text-sm text-[#536B45]">📍 {item.location}</p>
            <p className="text-[11px] font-display text-[#8FAF78] mt-0.5">{item.recipeNote}</p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-2/12" />

      {/* Recipe card side */}
      <div className="w-full md:w-5/12">
        <div className="glass-card p-6 sm:p-7 rounded-3xl shadow-md border-2 border-[#F29BA6]/50 relative hover-glow-pink">
          {/* Accent bar */}
          <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#8FAF78] via-[#F29BA6] to-transparent rounded-full" />

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
}

export const Scene03Timeline: React.FC<Scene03TimelineProps> = ({ reducedMotion, lang }) => {
  const t = TRANSLATIONS[lang].scene03;
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: lineRef, isVisible: lineVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="scene-03" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE] cafe-paper-grid overflow-hidden">
      {/* Ambient blobs */}
      <div
        className="absolute top-20 right-[-60px] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,232,200,0.4) 0%, transparent 70%)', animation: !reducedMotion ? 'floatB 8s ease-in-out infinite' : 'none' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible && !reducedMotion ? 'fadeUp 0.7s ease-out forwards' : 'none',
          }}
        >
          <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 border border-[#F29BA6]">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#685148]/90">{t.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>
          {/* Animated vertical line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-px" aria-hidden="true">
            <svg height="100%" width="2" className="w-full h-full">
              <line
                x1="1" y1="0" x2="1" y2="100%"
                stroke="#8FAF78"
                strokeWidth="2"
                strokeDasharray="8 6"
                className={`timeline-line ${lineVisible ? 'drawn' : ''}`}
              />
            </svg>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {WEDDING_CONFIG.storyTimeline.map((item, idx) => (
              <TimelineItem key={item.id} item={item} idx={idx} reducedMotion={reducedMotion} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
