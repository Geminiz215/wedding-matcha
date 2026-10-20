'use client';

import React from 'react';
import { WishItem } from '@/types/wedding';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene11GuestbookProps {
  wishes: WishItem[];
  quickWishName: string;
  setQuickWishName: React.Dispatch<React.SetStateAction<string>>;
  quickWishText: string;
  setQuickWishText: React.Dispatch<React.SetStateAction<string>>;
  quickWishFeedback: string;
  onQuickWishSubmit: (e: React.FormEvent) => void;
  lang: Language;
}

export const Scene11Guestbook: React.FC<Scene11GuestbookProps> = ({
  wishes,
  quickWishName,
  setQuickWishName,
  quickWishText,
  setQuickWishText,
  quickWishFeedback,
  onQuickWishSubmit,
  lang
}) => {
  const t = TRANSLATIONS[lang].scene11;

  return (
    <section id="scene-11" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#685148]/90">
            {t.desc}
          </p>
        </div>

        {/* Quick Standalone Wish Form Bar */}
        <form
          onSubmit={onQuickWishSubmit}
          className="max-w-3xl mx-auto mb-12 bg-white p-4 sm:p-5 rounded-3xl shadow-md border-2 border-[#C7D9AA] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
        >
          <input
            type="text"
            value={quickWishName}
            onChange={(e) => setQuickWishName(e.target.value)}
            placeholder={t.namePlaceholder}
            aria-label="Guest name"
            className="sm:w-48 px-4 py-2.5 rounded-2xl border border-[#C7D9AA] bg-[#FFF9EE] text-sm focus:outline-none focus:border-[#536B45]"
          />
          <input
            type="text"
            value={quickWishText}
            onChange={(e) => setQuickWishText(e.target.value)}
            placeholder={t.wishPlaceholder}
            aria-label="Wish message"
            className="flex-1 px-4 py-2.5 rounded-2xl border border-[#C7D9AA] bg-[#FFF9EE] text-sm focus:outline-none focus:border-[#536B45]"
          />
          <button
            type="submit"
            className="bg-[#536B45] hover:bg-[#D94F5C] text-white font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-colors shrink-0 cursor-pointer"
          >
            {t.pinBtn}
          </button>
        </form>

        {quickWishFeedback && (
          <p className="text-center text-xs font-display font-bold text-[#536B45] -mt-8 mb-8">
            {quickWishFeedback}
          </p>
        )}

        {/* Editorial Grid of Little Paper Love Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, idx) => {
            const bgStyle =
              wish.color === 'pink'
                ? 'bg-[#FBE0E2]/75 border-[#F29BA6]'
                : wish.color === 'green'
                ? 'bg-[#DCE8C8]/75 border-[#8FAF78]'
                : 'bg-white border-[#C7D9AA]';

            return (
              <div
                key={wish.id}
                className={`rounded-3xl p-6 border-2 shadow-sm relative transition-transform hover:-translate-y-1 ${bgStyle}`}
              >
                {/* Decorative Strawberry / Leaf Pin */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-display font-bold text-[#536B45] shadow-sm border border-[#C7D9AA]">
                      {wish.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#536B45]">
                        {wish.name}
                      </h3>
                      <span className="text-[11px] text-[#685148]/70">{wish.timestamp}</span>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-display font-bold px-3 py-1 rounded-full ${
                      wish.attendance === 'Hadir'
                        ? 'bg-[#D94F5C] text-white'
                        : 'bg-[#536B45] text-white'
                    }`}
                  >
                    {wish.attendance}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#685148] leading-relaxed mb-4">
                  &ldquo;{wish.message}&rdquo;
                </p>

                <div className="flex items-center justify-between text-xs font-display text-[#536B45]/80 pt-3 border-t border-white/60">
                  <span>☕ {wish.drink}</span>
                  <span>{idx % 2 === 0 ? '🍓' : '🍵'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
