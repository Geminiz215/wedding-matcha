'use client';

import React from 'react';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { StrawberryMatchaCup } from '@/components/illustrations';
import { getGoogleCalendarUrl, handleDownloadICS } from '@/lib/calendar';
import { Language, TRANSLATIONS } from '@/config/translations';

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

  return (
    <section
      id="scene-07"
      className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#DCE8C8]/60 via-[#FFF9EE] to-[#FBE0E2]/50"
    >
      <div className="max-w-3xl mx-auto">
        {/* Dessert Packaging Label Frame */}
        <div className="bg-[#FFF9EE] rounded-[2.5rem] p-6 sm:p-12 shadow-xl border-4 border-[#F29BA6] relative overflow-hidden">
          {/* Corner Decorative Strawberry & Matcha Stamps */}
          <div className="flex items-center justify-between border-b-2 border-dashed border-[#C7D9AA] pb-4 mb-8 text-xs font-display font-bold text-[#536B45]">
            <span>{t.batchTag}</span>
            <span className="bg-[#FBE0E2] text-[#D94F5C] px-3 py-1 rounded-full">
              {t.organicBadge}
            </span>
          </div>

          <div className="text-center">
            {/* Small Brand Motif */}
            <div className="flex justify-center -my-4">
              <StrawberryMatchaCup className="w-36 h-44" reducedMotion={reducedMotion} />
            </div>

            <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D94F5C] mt-2">
              {t.saveDateEyebrow}
            </p>

            <h2 className="font-serif-romantic text-4xl sm:text-6xl font-bold text-[#536B45] my-2">
              NADIA &amp; RAKA
            </h2>

            <p className="font-display font-bold text-lg sm:text-2xl text-[#685148] tracking-wide mb-1">
              {lang === 'id' ? WEDDING_CONFIG.weddingDayDisplay : WEDDING_CONFIG.weddingDateDisplay}
            </p>
            <p className="text-xs font-display text-[#8FAF78] uppercase tracking-widest mb-8">
              {t.celebrateSub} {WEDDING_CONFIG.timezone}
            </p>

            {/* Real-Time Countdown Grid */}
            <div
              className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto mb-8"
              aria-label="Countdown to wedding day"
            >
              {[
                { label: t.days, value: countdown.days },
                { label: t.hours, value: countdown.hours },
                { label: t.minutes, value: countdown.minutes },
                { label: t.seconds, value: countdown.seconds }
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-[#DCE8C8] shadow-sm"
                >
                  <div className="font-serif-romantic font-bold text-2xl sm:text-4xl text-[#536B45] tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="font-display font-bold text-[10px] sm:text-xs text-[#D94F5C] tracking-wider mt-1">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Working ADD TO CALENDAR Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={getGoogleCalendarUrl(WEDDING_CONFIG.events.akad)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#536B45] hover:bg-[#3f5333] text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.addGoogle}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={() => handleDownloadICS(WEDDING_CONFIG.events.akad)}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FBE0E2]/50 text-[#536B45] border-2 border-[#8FAF78] font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D94F5C]" />
                <span>{t.downloadIcs}</span>
              </button>
            </div>
          </div>

          {/* Packaging Nutrition Facts Footer */}
          <div className="mt-8 pt-4 border-t-2 border-dashed border-[#C7D9AA] flex flex-wrap items-center justify-between gap-2 text-[11px] font-display text-[#685148]/80">
            <span>{t.ingredients}</span>
            <span>{t.bestServed}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
