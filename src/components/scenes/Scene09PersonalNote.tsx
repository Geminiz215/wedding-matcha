'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { GuestData } from '@/types/wedding';
import { KawaiiStrawberry } from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene09PersonalNoteProps {
  guestData: GuestData;
  reducedMotion: boolean;
  lang: Language;
}

export const Scene09PersonalNote: React.FC<Scene09PersonalNoteProps> = ({
  guestData,
  reducedMotion,
  lang
}) => {
  const t = TRANSLATIONS[lang].scene09;

  return (
    <section
      id="scene-09"
      className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#FFF9EE] via-[#FBE0E2]/45 to-[#FFF9EE]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#FFF9EE] rounded-[2rem] p-8 sm:p-12 shadow-xl border-2 border-[#F29BA6] relative">
          {/* Wax Seal / Stamp Badge at Top Center */}
          <div className="w-16 h-16 rounded-full bg-[#D94F5C] text-white flex items-center justify-center mx-auto -mt-14 mb-6 shadow-md border-4 border-[#FFF9EE]">
            <Heart className="w-7 h-7 fill-white" />
          </div>

          <div className="text-center mb-6">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#8FAF78]">
              {t.sceneTag}
            </span>
            <h2 className="font-serif-romantic text-2xl sm:text-4xl font-bold text-[#536B45] mt-1">
              {t.title}
            </h2>
          </div>

          {/* Dynamic Personalized Letter Greeting */}
          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 border border-[#DCE8C8] space-y-4 text-base sm:text-lg text-[#685148] leading-relaxed font-serif-romantic">
            <p className="font-bold text-xl text-[#D94F5C]">
              {t.dearLabel} {guestData.name},
            </p>

            {guestData.isPersonalized ? (
              <p>{t.notePersonalized}</p>
            ) : (
              <p>{t.noteGeneral}</p>
            )}

            <p className="italic text-[#536B45]">{t.noteClosing}</p>

            <div className="pt-4 flex items-center justify-between border-t border-dashed border-[#C7D9AA] text-sm font-body">
              <div>
                <div className="text-xs text-[#8FAF78] font-display font-bold uppercase">
                  {t.withLove}
                </div>
                <div className="font-serif-romantic font-bold text-lg text-[#536B45]">
                  Nadia &amp; Raka ♡
                </div>
              </div>
              <div className="w-16 h-16">
                <KawaiiStrawberry className="w-16 h-16" reducedMotion={reducedMotion} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
