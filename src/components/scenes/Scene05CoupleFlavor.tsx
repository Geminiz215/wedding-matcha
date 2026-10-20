'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { KawaiiStrawberry, MatchaKunafaPastry } from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene05CoupleFlavorProps {
  isFlavorBlended: boolean;
  setIsFlavorBlended: React.Dispatch<React.SetStateAction<boolean>>;
  reducedMotion: boolean;
  lang: Language;
}

export const Scene05CoupleFlavor: React.FC<Scene05CoupleFlavorProps> = ({
  isFlavorBlended,
  setIsFlavorBlended,
  reducedMotion,
  lang
}) => {
  const t = TRANSLATIONS[lang].scene05;

  return (
    <section id="scene-05" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#DCE8C8] text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#536B45]">
            {t.title}
          </h2>
        </div>

        {/* Interactive Split-Screen Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
          {/* LEFT SIDE: MATCHA GREEN (RAKA — A LITTLE CALM) */}
          <div
            className={`p-8 sm:p-12 transition-colors duration-700 flex flex-col justify-between ${isFlavorBlended
              ? 'bg-gradient-to-br from-[#DCE8C8] via-[#FFF9EE] to-[#FBE0E2]'
              : 'bg-[#DCE8C8]'
              }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#536B45] text-white font-display font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
                <span>{WEDDING_CONFIG.couple.groom.flavorTitle}</span>
                <span>•</span>
                <span>{WEDDING_CONFIG.couple.groom.flavorTag}</span>
              </div>

              <h3 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#536B45] mb-1">
                {WEDDING_CONFIG.couple.groom.fullName}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#536B45]/80 mb-4">
                {t.groomParents}
              </p>

              {/* Groom Photo Portrait */}
              <div className="my-5 flex justify-center">
                <div className="relative group">
                  <div className="w-20 h-5 bg-white/70 mx-auto -mb-2.5 rounded-sm -rotate-2 relative z-10 shadow-xs" />
                  <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300 bg-[#C7D9AA]/40">
                    <img
                      src={WEDDING_CONFIG.couple.groom.photo || '/images/groom.jpg'}
                      alt={WEDDING_CONFIG.couple.groom.fullName}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white px-3.5 py-1 rounded-full shadow-md border border-[#8FAF78] text-xs font-display font-bold text-[#536B45] flex items-center gap-1.5">
                    <span>🍵</span>
                    <span>The Groom</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#685148] leading-relaxed mb-6">
                {WEDDING_CONFIG.couple.groom.personality}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {WEDDING_CONFIG.couple.groom.traits.map((trait) => (
                  <span
                    key={trait}
                    className="bg-white/85 text-[#536B45] font-display font-semibold text-xs px-3 py-1.5 rounded-full border border-[#8FAF78]"
                  >
                    🍵 {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER CONNECTING HEART BUTTON */}
          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 flex justify-center -my-5 lg:my-0">
            <button
              type="button"
              onClick={() => setIsFlavorBlended((prev) => !prev)}
              className="group bg-white hover:bg-[#FFF9EE] border-4 border-[#F29BA6] rounded-full px-5 py-3 shadow-xl flex flex-col items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#8FAF78] cursor-pointer"
              title="Click to swirl and blend our two worlds"
            >
              <Heart
                className={`w-7 h-7 text-[#D94F5C] fill-[#D94F5C] ${!reducedMotion ? 'group-hover:scale-110 transition-transform' : ''
                  }`}
              />
              <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#536B45] mt-1">
                {isFlavorBlended ? t.blendedBtn : t.swirlBtn}
              </span>
            </button>
          </div>

          {/* RIGHT SIDE: STRAWBERRY PINK (NADIA — A LITTLE SWEET) */}
          <div
            className={`p-8 sm:p-12 transition-colors duration-700 flex flex-col justify-between ${isFlavorBlended
              ? 'bg-gradient-to-bl from-[#FBE0E2] via-[#FFF9EE] to-[#DCE8C8]'
              : 'bg-[#FBE0E2]'
              }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D94F5C] text-white font-display font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
                <span>{WEDDING_CONFIG.couple.bride.flavorTitle}</span>
                <span>•</span>
                <span>{WEDDING_CONFIG.couple.bride.flavorTag}</span>
              </div>

              <h3 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#536B45] mb-1">
                {WEDDING_CONFIG.couple.bride.fullName}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#D94F5C] mb-4">
                {t.brideParents}
              </p>

              {/* Bride Photo Portrait */}
              <div className="my-5 flex justify-center">
                <div className="relative group">
                  <div className="w-20 h-5 bg-white/70 mx-auto -mb-2.5 rounded-sm rotate-2 relative z-10 shadow-xs" />
                  <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-[2deg] group-hover:rotate-0 transition-transform duration-300 bg-[#F29BA6]/40">
                    <img
                      src={WEDDING_CONFIG.couple.bride.photo || '/images/bride.jpg'}
                      alt={WEDDING_CONFIG.couple.bride.fullName}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-white px-3.5 py-1 rounded-full shadow-md border border-[#F29BA6] text-xs font-display font-bold text-[#D94F5C] flex items-center gap-1.5">
                    <span>🍓</span>
                    <span>The Bride</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#685148] leading-relaxed mb-6">
                {WEDDING_CONFIG.couple.bride.personality}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {WEDDING_CONFIG.couple.bride.traits.map((trait) => (
                  <span
                    key={trait}
                    className="bg-white/85 text-[#D94F5C] font-display font-semibold text-xs px-3 py-1.5 rounded-full border border-[#F29BA6]"
                  >
                    🍓 {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
