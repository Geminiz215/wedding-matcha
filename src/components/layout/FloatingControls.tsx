'use client';

import React from 'react';
import { Volume2, VolumeX, Eye, AlertCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface FloatingControlsProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  audioError: string | null;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  scrollProgress: number;
  lang: Language;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  isMusicPlaying,
  onToggleMusic,
  audioError,
  reducedMotion,
  onToggleReducedMotion,
  scrollProgress,
  lang
}) => {
  const t = TRANSLATIONS[lang].controls;

  return (
    <>
      {/* =====================================================================
          PERSISTENT FLOATING MUSIC & REDUCED-MOTION CONTROLS
      ===================================================================== */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {audioError && (
          <div className="bg-[#FFF9EE] border border-[#D94F5C] text-[#D94F5C] text-xs px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{audioError}</span>
          </div>
        )}

        <div className="flex items-center gap-2 bg-[#FFF9EE]/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border-2 border-[#C7D9AA]">
          {/* Reduced Motion Toggle Button */}
          <button
            type="button"
            onClick={onToggleReducedMotion}
            className={`px-3 py-1.5 rounded-full text-xs font-display font-medium transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#536B45] cursor-pointer ${
              reducedMotion
                ? 'bg-[#DCE8C8] text-[#536B45]'
                : 'bg-white text-[#685148] hover:bg-[#DCE8C8]/40'
            }`}
            title="Toggle Reduced Motion for Accessibility"
          >
            <Eye className="w-3.5 h-3.5 text-[#536B45]" />
            <span className="hidden sm:inline">
              {reducedMotion ? t.motionReduced : t.motionFull}
            </span>
          </button>

          {/* Persistent Music Control Button (Starts strictly OFF) */}
          <button
            type="button"
            onClick={onToggleMusic}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D94F5C] cursor-pointer ${
              isMusicPlaying
                ? 'bg-[#536B45] text-white'
                : 'bg-[#F29BA6] hover:bg-[#D94F5C] text-white'
            }`}
            aria-pressed={isMusicPlaying}
            aria-label={isMusicPlaying ? 'Turn music off' : 'Turn music on'}
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className={`w-4 h-4 ${!reducedMotion ? 'animate-bounce' : ''}`} />
                <span>{t.musicOn}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span>{t.musicOff}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Left Vertical Scroll Progress Bar (Straw-inspired) */}
      <div
        className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] font-display font-bold text-[#536B45] uppercase tracking-widest rotate-180 [writing-mode:vertical-lr]">
          {t.progressLabel}
        </span>
        <div className="w-2.5 h-44 rounded-full bg-[#FFF9EE] border-2 border-[#C7D9AA] overflow-hidden p-0.5 shadow-inner flex flex-col justify-end">
          <div
            className="w-full rounded-full transition-all duration-150"
            style={{
              height: `${scrollProgress}%`,
              background: 'linear-gradient(to top, #D94F5C 0%, #F29BA6 45%, #8FAF78 100%)'
            }}
          />
        </div>
        <span className="text-xs font-display font-bold text-[#D94F5C]">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </>
  );
};
