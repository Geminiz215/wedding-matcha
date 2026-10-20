'use client';

import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { getGoogleCalendarUrl } from '@/lib/calendar';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene08WeddingDayProps {
  lang: Language;
}

export const Scene08WeddingDay: React.FC<Scene08WeddingDayProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].scene08;

  return (
    <section id="scene-08" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#DCE8C8] text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#685148]/90">
            {t.subtitle}
          </p>
        </div>

        {/* Two Main Event Blocks: AKAD NIKAH & RESEPSI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              key: 'akad',
              data: WEDDING_CONFIG.events.akad,
              badgeColor: 'bg-[#536B45]',
              border: 'border-[#8FAF78]'
            },
            {
              key: 'resepsi',
              data: WEDDING_CONFIG.events.resepsi,
              badgeColor: 'bg-[#D94F5C]',
              border: 'border-[#F29BA6]'
            }
          ].map(({ key, data, badgeColor, border }) => (
            <article
              key={key}
              className={`bg-white rounded-[2rem] p-7 sm:p-9 shadow-lg border-2 ${border} flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`${badgeColor} text-white font-display font-bold text-xs px-4 py-1.5 rounded-full tracking-wider`}>
                    {data.title}
                  </span>
                  <span className="text-xs font-serif-romantic italic text-[#8FAF78]">
                    {data.subtitle}
                  </span>
                </div>

                <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-[#536B45] mb-4">
                  {data.venueName}
                </h3>

                <div className="space-y-3 text-sm sm:text-base text-[#685148] mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#D94F5C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">
                        {t.dayDateLabel}
                      </div>
                      <div className="font-semibold text-[#536B45]">
                        {lang === 'id' ? data.dayDate : 'Sunday, 24 October 2027'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#8FAF78] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">
                        {t.eventTimeLabel}
                      </div>
                      <div className="font-semibold text-[#536B45]">{data.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D94F5C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">
                        {t.addressLabel}
                      </div>
                      <div className="text-sm leading-relaxed">{data.address}</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs bg-[#FFF9EE] p-3.5 rounded-2xl border border-[#DCE8C8] text-[#685148]/90 italic mb-6">
                  {data.note}
                </p>
              </div>

              {/* Action Buttons: OPEN GOOGLE MAPS & ADD TO CALENDAR */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-[#DCE8C8]">
                <a
                  href={data.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#536B45] hover:bg-[#3f5333] text-white font-display font-bold text-xs py-3 px-4 rounded-full transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t.openMaps}</span>
                </a>
                <a
                  href={getGoogleCalendarUrl(data)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FBE0E2] hover:bg-[#F29BA6] text-[#536B45] font-display font-bold text-xs py-3 px-4 rounded-full transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#D94F5C]" />
                  <span>{t.addCal}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Cute Dress Code Palette Guide */}
        <div className="mt-10 bg-white rounded-3xl p-6 border-2 border-[#DCE8C8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-sm text-[#536B45] uppercase tracking-wider">
              {t.attireTitle}
            </h4>
            <p className="text-xs text-[#685148]/80 mt-0.5">
              {t.attireSub}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { name: 'Matcha Green', hex: '#8FAF78' },
              { name: 'Strawberry Pink', hex: '#F29BA6' },
              { name: 'Milky Cream', hex: '#FFF9EE' },
              { name: 'Pistachio', hex: '#C7D9AA' },
              { name: 'Cocoa Brown', hex: '#685148' }
            ].map((sw) => (
              <div key={sw.name} className="flex flex-col items-center gap-1">
                <span
                  className="w-8 h-8 rounded-full border-2 border-stone-300 shadow-sm"
                  style={{ backgroundColor: sw.hex }}
                  title={sw.name}
                />
                <span className="text-[10px] font-display text-[#685148]">{sw.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
