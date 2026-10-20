'use client';

import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { GuestData } from '@/types/wedding';
import { KawaiiStrawberry } from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="scene-09"
      className="relative py-20 sm:py-28 px-4 sm:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFF9EE 0%, #FBE0E2 50%, #FFF9EE 100%)' }}
    >
      {/* Ambient */}
      <div
        className="absolute top-10 left-[-5%] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(242,155,166,0.3) 0%, transparent 70%)', animation: !reducedMotion ? 'floatA 8s ease-in-out infinite' : 'none' }}
      />
      <div
        className="absolute bottom-10 right-[-5%] w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(143,175,120,0.3) 0%, transparent 70%)', animation: !reducedMotion ? 'floatC 10s ease-in-out infinite' : 'none' }}
      />

      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className="relative glass-card-pink rounded-[2rem] p-8 sm:p-12 shadow-2xl border-2 border-[#F29BA6]/60"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
          }}
        >
          {/* Envelope flap top decoration */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8FAF78] via-[#F29BA6] to-[#8FAF78] rounded-t-[2rem]" />

          {/* Wax seal */}
          <div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D94F5C] to-[#F29BA6] text-white flex items-center justify-center mx-auto -mt-14 mb-6 shadow-xl border-4 border-white"
            style={{ animation: isVisible && !reducedMotion ? 'popIn 0.6s 0.3s ease-out both' : 'none', opacity: isVisible ? 1 : 0 }}
          >
            <Heart className="w-7 h-7 fill-white" />
          </div>

          <div
            className="text-center mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeUp 0.6s 0.2s ease-out both' : 'none',
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-[#8FAF78]" />
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#8FAF78]">
                {t.sceneTag}
              </span>
            </div>
            <h2 className="font-serif-romantic text-2xl sm:text-4xl font-bold text-[#536B45] mt-1">
              {t.title}
            </h2>
          </div>

          {/* Letter body */}
          <div
            className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-[#DCE8C8] space-y-4 text-base sm:text-lg text-[#685148] leading-relaxed font-serif-romantic shadow-inner"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeUp 0.6s 0.35s ease-out both' : 'none',
            }}
          >
            {/* Decorative lines */}
            <div className="flex gap-2 mb-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-0.5 rounded-full bg-[#DCE8C8] flex-1" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>

            <p className="font-bold text-xl text-[#D94F5C]">
              {t.dearLabel} {guestData.name},
            </p>

            {guestData.isPersonalized ? (
              <p>{t.notePersonalized}</p>
            ) : (
              <p>{t.noteGeneral}</p>
            )}

            <p className="italic text-[#536B45]">{t.noteClosing}</p>

            <div className="pt-4 flex items-center justify-between border-t border-dashed border-[#C7D9AA]">
              <div>
                <div className="text-xs text-[#8FAF78] font-display font-bold uppercase mb-1">
                  {t.withLove}
                </div>
                <div className="font-serif-romantic font-bold text-lg text-[#536B45]">
                  Nadia &amp; Raka ♡
                </div>
              </div>
              <div
                style={{ animation: !reducedMotion ? 'floatB 3s ease-in-out infinite' : 'none' }}
              >
                <KawaiiStrawberry className="w-16 h-16" reducedMotion={reducedMotion} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
