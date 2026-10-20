'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { Language } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface Scene02CupOfLoveProps {
  cupBlendLevel?: number;
  setCupBlendLevel?: (level: number) => void;
  activeAssetShowcase?: 'cup' | 'strawberry' | 'pastry';
  setActiveAssetShowcase?: (asset: 'cup' | 'strawberry' | 'pastry') => void;
  reducedMotion: boolean;
  lang: Language;
}

export const Scene02CupOfLove: React.FC<Scene02CupOfLoveProps> = ({
  reducedMotion,
  lang,
}) => {
  const isId = lang === 'id';
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.12 });
  const [photoMode, setPhotoMode] = useState<'childhood' | 'adult'>('childhood');

  const groomChildhood = '/images/groom-childhood.jpg';
  const brideChildhood = '/images/bride-childhood.jpg';
  const groomAdult = WEDDING_CONFIG.couple.groom.photo;
  const brideAdult = WEDDING_CONFIG.couple.bride.photo;

  return (
    <section
      id="scene-02"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(175deg, #DCE8C8 0%, #F5F7EE 28%, #FFF9EE 60%, #FBE0E2 100%)',
      }}
    >
      {/* Background decorative ambient lights */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #8FAF78 0%, transparent 70%)',
          animation: !reducedMotion ? 'floatA 11s ease-in-out infinite' : 'none',
        }}
      />
      <div
        className="absolute top-1/2 -right-28 w-96 h-96 rounded-full pointer-events-none opacity-35 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #F29BA6 0%, transparent 70%)',
          animation: !reducedMotion ? 'floatB 13s ease-in-out infinite' : 'none',
        }}
      />

      {/* Subtle organic watermark wave */}
      <svg
        viewBox="0 0 1440 220"
        fill="none"
        className="absolute top-0 left-0 w-full opacity-20 pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          fill="#536B45"
        />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeDown 0.8s ease-out forwards' : 'none',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C7D9AA] text-xs font-display font-bold text-[#536B45] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D94F5C]" />
            <span>
              {isId ? 'SCENE 02 • BAGAIMANA SEMUA DIMULAI' : 'SCENE 02 • WHERE IT ALL BEGAN'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#536B45]" />
          </div>

          <h2 className="font-serif-romantic text-3xl sm:text-5xl lg:text-6xl font-bold text-[#536B45] leading-tight mb-4">
            {isId ? 'Dua Jiwa Kecil, ' : 'Two Little Souls, '}
            <span className="italic font-normal text-[#D94F5C] block sm:inline">
              {isId ? 'Satu Takdir Manis' : 'One Sweet Destiny'}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#685148] leading-relaxed max-w-2xl mx-auto">
            {isId
              ? 'Sebelum secangkir matcha dan stroberi dipertemukan, dua anak kecil ini telah memulai kisah bahagianya masing-masing dengan senyum dan mimpi yang tulus.'
              : 'Before matcha and strawberry were blended into our signature cup, these two cheerful children lived their own little worlds, destined to meet one day.'}
          </p>

          {/* Interactive Switcher: Masa Kecil vs Hari Ini */}
          <div className="mt-7 inline-flex items-center p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#DCE8C8] shadow-md">
            <button
              type="button"
              onClick={() => setPhotoMode('childhood')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${photoMode === 'childhood'
                ? 'bg-gradient-to-r from-[#536B45] to-[#6A8958] text-white shadow-md scale-105'
                : 'text-[#685148] hover:text-[#536B45] hover:bg-white/60'
                }`}
            >
              <span>🧸</span>
              <span>{isId ? 'Masa Kecil (~1998-2000)' : 'Childhood Memories'}</span>
            </button>
            <button
              type="button"
              onClick={() => setPhotoMode('adult')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${photoMode === 'adult'
                ? 'bg-gradient-to-r from-[#D94F5C] to-[#E26975] text-white shadow-md scale-105'
                : 'text-[#685148] hover:text-[#D94F5C] hover:bg-white/60'
                }`}
            >
              <span>💍</span>
              <span>{isId ? 'Hari Ini (Menuju Pelaminan)' : 'Today (To The Altar)'}</span>
            </button>
          </div>
        </div>

        {/* Polaroids Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left: Groom Polaroid Card */}
          <div
            className="lg:col-span-5 flex justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeRight 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) both' : 'none',
            }}
          >
            <div className="relative group max-w-sm w-full">
              {/* Green washi tape pin */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 z-20 opacity-85 shadow-sm transform -rotate-2"
                style={{
                  backgroundColor: '#8FAF78',
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.2) 5px, rgba(255,255,255,0.2) 10px)',
                }}
              />

              {/* Polaroid Frame */}
              <div className="bg-[#FEFDF9] p-4 sm:p-5 pb-7 sm:pb-8 rounded-3xl shadow-xl hover:shadow-2xl border-2 border-[#E3EBDA] transition-all duration-500 transform lg:-rotate-2 hover:rotate-0 hover:-translate-y-2">
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#E8EDE0] shadow-inner mb-4">
                  <img
                    src={photoMode === 'childhood' ? groomChildhood : groomAdult}
                    alt={photoMode === 'childhood' ? 'Raka Kecil (Childhood)' : 'Raka Pradipta Mahendra'}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Stamp badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#8FAF78]/50 shadow-sm flex items-center gap-1.5 text-[11px] font-display font-bold text-[#536B45]">
                    <span>🍵</span>
                    <span>{photoMode === 'childhood' ? 'Raka Kecil • 1998' : 'Raka • Groom'}</span>
                  </div>

                  {/* Vintage film effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Polaroid Caption & Bio */}
                <div className="px-1 text-center sm:text-left">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif-romantic text-xl font-bold text-[#536B45]">
                      {WEDDING_CONFIG.couple.groom.nickname}
                    </h3>
                    <span className="text-[11px] font-display font-bold text-[#8FAF78] uppercase tracking-wider bg-[#F0F5EB] px-2.5 py-0.5 rounded-full border border-[#DCE8C8]">
                      {photoMode === 'childhood' ? (isId ? 'Si Pecinta Hening' : 'The Calm Thinker') : 'Matcha Soul'}
                    </span>
                  </div>

                  <p className="font-display text-xs text-[#8FAF78] font-bold mb-2">
                    {WEDDING_CONFIG.couple.groom.fullName}
                  </p>

                  <p className="text-xs text-[#685148] leading-relaxed mb-3">
                    {photoMode === 'childhood'
                      ? isId
                        ? 'Sejak kecil gemar duduk santai di halaman, menggambar sketsa imajinatif, dan suka mengamati ketenangan alam dengan mata berbinar.'
                        : 'Since early childhood, he loved quiet garden afternoons, sketching imaginative ideas, and observing the serene world around him.'
                      : isId
                        ? 'Sosok arsitek berjiwa tenang yang selalu menjadi pelindung terhangat dan penenang di setiap langkah Nadia.'
                        : 'A calm-spirited architect who remains Nadia’s most steady anchor and warmest sanctuary.'}
                  </p>

                  {/* Little trait tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {(photoMode === 'childhood'
                      ? isId
                        ? ['🌿 Cinta Kebun', '✏️ Suka Menggambar', '🍵 Penuh Ketenangan']
                        : ['🌿 Nature Lover', '✏️ Sketch Dreamer', '🍵 Quiet Calm']
                      : WEDDING_CONFIG.couple.groom.traits.slice(0, 3)
                    ).map((trait) => (
                      <span
                        key={trait}
                        className="text-[10px] font-display font-semibold px-2 py-0.5 rounded-md bg-[#F4F8EE] text-[#536B45] border border-[#D5E5C3]"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Story & Sweet Connector */}
          <div
            className="lg:col-span-2 flex flex-col items-center justify-center text-center px-2 py-4"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'popIn 0.8s 0.3s cubic-bezier(0.34,1.56,0.64,1) both' : 'none',
            }}
          >
            {/* Center Heart Emblem */}
            <div className="relative mb-3">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#8FAF78] via-[#FFF9EE] to-[#F29BA6] p-1 shadow-lg flex items-center justify-center"
                style={{
                  animation: !reducedMotion ? 'countPulse 3.5s ease-in-out infinite' : 'none',
                }}
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl shadow-inner">
                  ❤️
                </div>
              </div>

              {/* Orbiting sparkles */}
              {!reducedMotion && (
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ animation: 'spin 18s linear infinite' }}
                >
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-xs">✨</span>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs">🌸</span>
                </div>
              )}
            </div>

            <div className="font-serif-romantic italic text-lg font-bold text-[#536B45]">
              {isId ? 'Dua Masa Kecil' : 'Two Childhoods'}
            </div>
            <div className="text-[10px] font-display font-extrabold text-[#D94F5C] uppercase tracking-widest mt-0.5 mb-2">
              {isId ? 'Satu Muara Cinta' : 'One Sweet Destiny'}
            </div>

            <div className="hidden lg:flex items-center gap-1 text-[11px] text-[#685148]/60 font-display">
              <span>🍵</span>
              <span className="border-t border-dashed border-[#8FAF78] w-6" />
              <span>♡</span>
              <span className="border-t border-dashed border-[#F29BA6] w-6" />
              <span>🍓</span>
            </div>
          </div>

          {/* Right: Bride Polaroid Card */}
          <div
            className="lg:col-span-5 flex justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeLeft 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) both' : 'none',
            }}
          >
            <div className="relative group max-w-sm w-full">
              {/* Pink washi tape pin */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 z-20 opacity-85 shadow-sm transform rotate-2"
                style={{
                  backgroundColor: '#F29BA6',
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.25) 5px, rgba(255,255,255,0.25) 10px)',
                }}
              />

              {/* Polaroid Frame */}
              <div className="bg-[#FEFDF9] p-4 sm:p-5 pb-7 sm:pb-8 rounded-3xl shadow-xl hover:shadow-2xl border-2 border-[#FCE2E5] transition-all duration-500 transform lg:rotate-2 hover:rotate-0 hover:-translate-y-2">
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FCE8EB] shadow-inner mb-4">
                  <img
                    src={photoMode === 'childhood' ? brideChildhood : brideAdult}
                    alt={photoMode === 'childhood' ? 'Nadia Kecil (Childhood)' : 'Nadia Larasati Putri'}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Stamp badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#F29BA6]/50 shadow-sm flex items-center gap-1.5 text-[11px] font-display font-bold text-[#D94F5C]">
                    <span>🍓</span>
                    <span>{photoMode === 'childhood' ? 'Nadia Kecil • 2000' : 'Nadia • Bride'}</span>
                  </div>

                  {/* Vintage film effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Polaroid Caption & Bio */}
                <div className="px-1 text-center sm:text-left">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif-romantic text-xl font-bold text-[#D94F5C]">
                      {WEDDING_CONFIG.couple.bride.nickname}
                    </h3>
                    <span className="text-[11px] font-display font-bold text-[#D94F5C] uppercase tracking-wider bg-[#FDF0F2] px-2.5 py-0.5 rounded-full border border-[#F9CAD0]">
                      {photoMode === 'childhood' ? (isId ? 'Gadis Berpita Manis' : 'Little Sweetheart') : 'Berry Sweet'}
                    </span>
                  </div>

                  <p className="font-display text-xs text-[#D94F5C] font-bold mb-2">
                    {WEDDING_CONFIG.couple.bride.fullName}
                  </p>

                  <p className="text-xs text-[#685148] leading-relaxed mb-3">
                    {photoMode === 'childhood'
                      ? isId
                        ? 'Gadis cilik yang selalu penuh tawa ceria, suka pita merah jambu di rambutnya, dan pencinta segala camilan strawberry yang manis.'
                        : 'A bubbly little girl full of radiant giggles, fond of pink hair ribbons, and completely fascinated by sweet strawberry treats.'
                      : isId
                        ? 'Desainer kreatif berhati lembut yang menghadirkan warna, keceriaan, dan rasa manis tak terhingga dalam hari-hari Raka.'
                        : 'A creative designer whose tender heart brings endless color, laughter, and sweetness to Raka’s everyday life.'}
                  </p>

                  {/* Little trait tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {(photoMode === 'childhood'
                      ? isId
                        ? ['🎀 Pita Merah Jambu', '🍰 Suka Kue Manis', '☀️ Senyum Mentari']
                        : ['🎀 Pink Ribbons', '🍰 Sweet Tooth', '☀️ Sunny Giggles']
                      : WEDDING_CONFIG.couple.bride.traits.slice(0, 3)
                    ).map((trait) => (
                      <span
                        key={trait}
                        className="text-[10px] font-display font-semibold px-2 py-0.5 rounded-md bg-[#FFF2F4] text-[#D94F5C] border border-[#FBD2D8]"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
