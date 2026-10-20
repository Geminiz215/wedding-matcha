'use client';

import React from 'react';
import { Calendar, Download, ExternalLink, Clock } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { StrawberryMatchaCup } from '@/components/illustrations';
import { getGoogleCalendarUrl, handleDownloadICS } from '@/lib/calendar';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Scene07SaveTheDateProps {
  countdown: CountdownState;
  reducedMotion: boolean;
  lang: Language;
}

export const Scene07SaveTheDate: React.FC<Scene07SaveTheDateProps> = ({
  countdown,
  reducedMotion,
  lang
}) => {
  const t = TRANSLATIONS[lang].scene07;
  const { ref: cardRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: countdownRef, isVisible: cdVisible } = useScrollReveal({ threshold: 0.3 });

  const units = [
    { label: t.days, value: countdown.days, color: '#536B45', bg: 'from-[#DCE8C8] to-[#E8F0DA]', emoji: '📅' },
    { label: t.hours, value: countdown.hours, color: '#8FAF78', bg: 'from-[#E8F0DA] to-[#FFF9EE]', emoji: '🕐' },
    { label: t.minutes, value: countdown.minutes, color: '#D94F5C', bg: 'from-[#FBE0E2] to-[#FFF9EE]', emoji: '⏱' },
    { label: t.seconds, value: countdown.seconds, color: '#685148', bg: 'from-[#FBE0E2] to-[#FFF9EE]', emoji: '⚡' },
  ];

  return (
    <section
      id="scene-07"
      className="relative py-20 sm:py-28 px-4 sm:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #DCE8C8 0%, #FFF9EE 50%, #FBE0E2 100%)' }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(143,175,120,0.3) 0%, transparent 70%)', animation: !reducedMotion ? 'floatA 9s ease-in-out infinite' : 'none' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,79,92,0.15) 0%, transparent 70%)', animation: !reducedMotion ? 'floatC 11s ease-in-out infinite' : 'none' }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Card */}
        <div
          ref={cardRef}
          className="relative glass-card rounded-[2.5rem] p-6 sm:p-12 shadow-2xl border-2 border-[#F29BA6]/50 overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
          }}
        >
          {/* Gradient ring border */}
          <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(143,175,120,0.15), transparent 40%, rgba(217,79,92,0.15))', }} />


          <div className="text-center">
            {/* Cup illustration */}
            <div className="flex justify-center -my-4">
              <StrawberryMatchaCup className="w-36 h-44" reducedMotion={reducedMotion} />
            </div>

            <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D94F5C] mt-4">
              {t.saveDateEyebrow}
            </p>

            <h2
              className="font-serif-romantic text-4xl sm:text-6xl font-bold text-[#536B45] my-2"
              style={{ animation: isVisible && !reducedMotion ? 'shimmer 4s linear infinite' : 'none' }}
            >
              NADIA &amp; RAKA
            </h2>

            <p className="font-display font-bold text-lg sm:text-2xl text-[#685148] tracking-wide mb-1">
              {lang === 'id' ? WEDDING_CONFIG.weddingDayDisplay : WEDDING_CONFIG.weddingDateDisplay}
            </p>
            <p className="text-xs font-display text-[#8FAF78] uppercase tracking-widest mb-8 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {t.celebrateSub} {WEDDING_CONFIG.timezone}
            </p>

            {/* Countdown */}
            <div
              ref={countdownRef}
              className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto mb-8"
              aria-label="Countdown to wedding day"
            >
              {units.map((unit, i) => (
                <div
                  key={unit.label}
                  className={`rounded-2xl p-3 sm:p-4 border-2 border-white shadow-lg bg-gradient-to-b ${unit.bg} relative overflow-hidden hover-glow-green`}
                  style={{
                    opacity: cdVisible ? 1 : 0,
                    animation: cdVisible && !reducedMotion ? `popIn 0.6s ${0.05 + i * 0.1}s cubic-bezier(0.34,1.56,0.64,1) forwards` : 'none',
                  }}
                >
                  <div
                    className="font-serif-romantic font-bold text-2xl sm:text-4xl tabular-nums countdown-digit"
                    style={{ color: unit.color, animation: unit.label === t.seconds && !reducedMotion ? 'countPulse 1s ease-in-out infinite' : 'none' }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="font-display font-bold text-[10px] sm:text-xs tracking-wider mt-1" style={{ color: unit.color }}>
                    {unit.label}
                  </div>
                  <div className="absolute top-1 right-2 text-[10px] opacity-40">{unit.emoji}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={getGoogleCalendarUrl(WEDDING_CONFIG.events.akad)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#536B45] hover:bg-[#3f5333] text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.addGoogle}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={() => handleDownloadICS(WEDDING_CONFIG.events.akad)}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FBE0E2]/50 text-[#536B45] border-2 border-[#8FAF78] font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D94F5C]" />
                <span>{t.downloadIcs}</span>
              </button>
            </div>
          </div>

          {/* Footer label */}
          <div className="mt-8 pt-4 border-t-2 border-dashed border-[#C7D9AA] flex flex-wrap items-center justify-between gap-2 text-[11px] font-display text-[#685148]/70">
            <span>{t.ingredients}</span>
            <span>{t.bestServed}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
