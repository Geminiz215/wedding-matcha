'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { getGoogleCalendarUrl } from '@/lib/calendar';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

export interface Scene08WeddingDayProps {
  lang: Language;
}

const COLOR_SWATCHES = [
  { name: 'Matcha Green', hex: '#8FAF78' },
  { name: 'Strawberry Pink', hex: '#F29BA6' },
  { name: 'Milky Cream', hex: '#FFF9EE' },
  { name: 'Pistachio', hex: '#C7D9AA' },
  { name: 'Cocoa Brown', hex: '#685148' },
];

export const Scene08WeddingDay: React.FC<Scene08WeddingDayProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].scene08;
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef, visibleCount } = useStaggerReveal<HTMLDivElement>(2, { threshold: 0.15 });
  const { ref: attireRef, isVisible: attireVisible } = useScrollReveal({ threshold: 0.3 });

  const events = [
    {
      key: 'akad',
      data: WEDDING_CONFIG.events.akad,
      accent: 'from-[#536B45] to-[#8FAF78]',
      badgeColor: 'bg-[#536B45]',
      border: 'border-[#8FAF78]/60',
      glow: 'hover-glow-green',
      icon: '🕌',
    },
    {
      key: 'resepsi',
      data: WEDDING_CONFIG.events.resepsi,
      accent: 'from-[#D94F5C] to-[#F29BA6]',
      badgeColor: 'bg-[#D94F5C]',
      border: 'border-[#F29BA6]/60',
      glow: 'hover-glow-pink',
      icon: '🎊',
    },
  ];

  return (
    <section id="scene-08" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 strawberry-paper-dots opacity-20 pointer-events-none" />
      <div
        className="absolute top-10 right-[-60px] w-60 h-60 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,232,200,0.4) 0%, transparent 70%)', animation: 'floatA 10s ease-in-out infinite' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'fadeUp 0.7s ease-out forwards' : 'none',
          }}
        >
          <span className="inline-block bg-[#DCE8C8] text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#685148]/90">{t.subtitle}</p>
        </div>

        {/* Event cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map(({ key, data, accent, badgeColor, border, glow, icon }, i) => (
            <article
              key={key}
              className={`glass-card rounded-[2rem] shadow-xl border-2 ${border} flex flex-col justify-between relative overflow-hidden ${glow}`}
              style={{
                opacity: visibleCount > i ? 1 : 0,
                animation: visibleCount > i ? `${i === 0 ? 'fadeRight' : 'fadeLeft'} 0.8s cubic-bezier(0.22,1,0.36,1) forwards` : 'none',
              }}
            >
              {/* Gradient header strip */}
              <div className={`h-1.5 bg-gradient-to-r ${accent} w-full`} />

              <div className="p-7 sm:p-9">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`${badgeColor} text-white font-display font-bold text-xs px-4 py-1.5 rounded-full tracking-wider flex items-center gap-1.5`}>
                    <span>{icon}</span>
                    {data.title}
                  </span>
                  <span className="text-xs font-serif-romantic italic text-[#8FAF78]">
                    {data.subtitle}
                  </span>
                </div>

                <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-[#536B45] mb-4">
                  {data.venueName}
                </h3>

                <div className="space-y-3 text-sm sm:text-base text-[#685148] mb-5">
                  <div className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-[#FBE0E2] flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-[#D94F5C]" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">{t.dayDateLabel}</div>
                      <div className="font-semibold text-[#536B45]">
                        {lang === 'id' ? data.dayDate : 'Sunday, 24 October 2027'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#DCE8C8] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#8FAF78]" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">{t.eventTimeLabel}</div>
                      <div className="font-semibold text-[#536B45]">{data.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FBE0E2] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#D94F5C]" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">{t.addressLabel}</div>
                      <div className="text-sm leading-relaxed">{data.address}</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs bg-white/80 p-3.5 rounded-2xl border border-[#DCE8C8] text-[#685148]/90 italic mb-5">
                  {data.note}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-[#DCE8C8]/60">
                  <a
                    href={data.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#536B45] hover:bg-[#3f5333] text-white font-display font-bold text-xs py-3 px-4 rounded-full transition-all hover:-translate-y-0.5 cursor-pointer shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{t.openMaps}</span>
                  </a>
                  <a
                    href={getGoogleCalendarUrl(data)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FBE0E2] hover:bg-[#F29BA6] text-[#536B45] font-display font-bold text-xs py-3 px-4 rounded-full transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-[#D94F5C]" />
                    <span>{t.addCal}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dress code */}
        <div
          ref={attireRef}
          className="mt-10 glass-card rounded-3xl p-6 border-2 border-[#DCE8C8] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg"
          style={{
            opacity: attireVisible ? 1 : 0,
            animation: attireVisible ? 'fadeUp 0.7s 0.1s ease-out forwards' : 'none',
          }}
        >
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-4 h-4 text-[#D94F5C]" />
              <h4 className="font-display font-bold text-sm text-[#536B45] uppercase tracking-wider">
                {t.attireTitle}
              </h4>
            </div>
            <p className="text-xs text-[#685148]/80">{t.attireSub}</p>
          </div>
          <div className="flex items-center gap-3">
            {COLOR_SWATCHES.map((sw, i) => (
              <div
                key={sw.name}
                className="flex flex-col items-center gap-1"
                style={{
                  opacity: attireVisible ? 1 : 0,
                  animation: attireVisible ? `popIn 0.5s ${0.15 + i * 0.08}s ease-out both` : 'none',
                }}
              >
                <span
                  className="w-9 h-9 rounded-full border-3 border-white shadow-md transition-transform hover:scale-110 cursor-default"
                  style={{ backgroundColor: sw.hex, boxShadow: `0 4px 12px ${sw.hex}55` }}
                  title={sw.name}
                />
                <span className="text-[9px] font-display text-[#685148]">{sw.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
