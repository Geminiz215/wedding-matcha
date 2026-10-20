'use client';

import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { KawaiiStrawberry, MatchaKunafaPastry } from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="scene-05"
      className="relative py-20 sm:py-28 px-4 sm:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #FFF9EE 0%, #f4f9f0 50%, #FFF5F6 100%)' }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-[-5%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,232,200,0.4) 0%, transparent 70%)', animation: !reducedMotion ? 'floatA 9s ease-in-out infinite' : 'none' }}
      />
      <div
        className="absolute bottom-0 right-[-5%] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,224,226,0.45) 0%, transparent 70%)', animation: !reducedMotion ? 'floatC 7s ease-in-out infinite' : 'none' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible && !reducedMotion ? 'fadeUp 0.7s ease-out forwards' : 'none',
          }}
        >
          <span className="inline-block bg-[#DCE8C8] text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#536B45]">
            {t.title}
          </h2>
        </div>

        {/* Split-screen card */}
        <div
          ref={cardRef}
          className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          style={{
            opacity: cardVisible ? 1 : 0,
            animation: cardVisible && !reducedMotion ? 'scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
          }}
        >
          {/* LEFT: Groom (Matcha) */}
          <div
            className="p-8 sm:p-12 transition-all duration-700 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: isFlavorBlended
                ? 'linear-gradient(135deg, #DCE8C8, #FFF9EE, #FBE0E2)'
                : '#DCE8C8',
              transition: 'background 0.8s ease',
            }}
          >
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 cafe-paper-grid opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#536B45] text-white font-display font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
                <span>🍵</span>
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

              <div className="my-5 flex justify-center">
                <div className="relative group">
                  <div className="w-20 h-5 bg-white/70 mx-auto -mb-2.5 rounded-sm -rotate-2 relative z-10 shadow-sm" />
                  <div
                    className="absolute -inset-1 rounded-2xl pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(143,175,120,0.3), transparent)', animation: !reducedMotion ? 'orbPulse 3s ease-in-out infinite' : 'none' }}
                  />
                  <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-[-2deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 bg-[#C7D9AA]/40">
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

              <div className="flex flex-wrap gap-2">
                {WEDDING_CONFIG.couple.groom.traits.map((trait) => (
                  <span
                    key={trait}
                    className="bg-white/85 text-[#536B45] font-display font-semibold text-xs px-3 py-1.5 rounded-full border border-[#8FAF78] hover-glow-green transition-all"
                  >
                    🍵 {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER: Blend button */}
          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 flex justify-center -my-5 lg:my-0">
            <button
              type="button"
              onClick={() => setIsFlavorBlended((prev) => !prev)}
              className="group relative bg-white hover:bg-[#FFF9EE] border-4 border-[#F29BA6] rounded-full w-20 h-20 shadow-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#8FAF78] cursor-pointer overflow-hidden"
              style={{ animation: !reducedMotion ? 'borderFlow 3s ease-in-out infinite' : 'none' }}
              title="Click to swirl and blend our two worlds"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#DCE8C8] via-white to-[#FBE0E2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Heart
                className={`relative z-10 w-7 h-7 text-[#D94F5C] ${isFlavorBlended ? 'fill-[#D94F5C]' : ''} transition-all duration-300 ${!reducedMotion ? 'group-hover:scale-125' : ''}`}
              />
              <span className="relative z-10 text-[9px] font-display font-bold uppercase tracking-wider text-[#536B45] mt-0.5">
                {isFlavorBlended ? t.blendedBtn : t.swirlBtn}
              </span>
            </button>
          </div>

          {/* RIGHT: Bride (Strawberry) */}
          <div
            className="p-8 sm:p-12 transition-all duration-700 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: isFlavorBlended
                ? 'linear-gradient(225deg, #FBE0E2, #FFF9EE, #DCE8C8)'
                : '#FBE0E2',
              transition: 'background 0.8s ease',
            }}
          >
            <div className="absolute inset-0 strawberry-paper-dots opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#D94F5C] text-white font-display font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
                <span>🍓</span>
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

              <div className="my-5 flex justify-center">
                <div className="relative group">
                  <div className="w-20 h-5 bg-white/70 mx-auto -mb-2.5 rounded-sm rotate-2 relative z-10 shadow-sm" />
                  <div
                    className="absolute -inset-1 rounded-2xl pointer-events-none"
                    style={{ background: 'linear-gradient(225deg, rgba(217,79,92,0.3), transparent)', animation: !reducedMotion ? 'orbPulse 3.5s ease-in-out infinite' : 'none' }}
                  />
                  <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-[2deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 bg-[#F29BA6]/40">
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

              <div className="flex flex-wrap gap-2">
                {WEDDING_CONFIG.couple.bride.traits.map((trait) => (
                  <span
                    key={trait}
                    className="bg-white/85 text-[#D94F5C] font-display font-semibold text-xs px-3 py-1.5 rounded-full border border-[#F29BA6] hover-glow-pink transition-all"
                  >
                    🍓 {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blended state message */}
        {isFlavorBlended && (
          <div
            className="mt-6 text-center"
            style={{ animation: !reducedMotion ? 'fadeUp 0.5s ease-out forwards' : 'none' }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#F29BA6] px-5 py-2.5 rounded-full shadow-md">
              <Sparkles className="w-4 h-4 text-[#D94F5C]" />
              <span className="font-serif-romantic italic text-[#536B45] text-sm">
                Two flavors, one perfect blend ✨
              </span>
              <Sparkles className="w-4 h-4 text-[#8FAF78]" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
