'use client';

import React, { useState } from 'react';
import { UserCheck, Sparkles, Copy, Check, Globe } from 'lucide-react';
import { GuestData } from '@/types/wedding';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface HeaderGuestBarProps {
  guestData: GuestData;
  setSimulatedQuery: (paramType: 'to' | 'guest' | 'fallback', value: string) => void;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const HeaderGuestBar: React.FC<HeaderGuestBarProps> = ({
  guestData,
  setSimulatedQuery,
  lang,
  onLanguageChange
}) => {
  const [showUrlTester, setShowUrlTester] = useState(false);
  const [customGuestInput, setCustomGuestInput] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const t = TRANSLATIONS[lang].header;

  // Salin Link Undangan dengan parameter personalisasi
  const handleCopyShareLink = () => {
    const sampleUrl = typeof window !== 'undefined'
      ? `${window.location.origin}/invitation${guestData.isPersonalized ? guestData.rawQuery : '?to=Fathi%20Farhat'}`
      : `https://nadia-raka-wedding.com/invitation${guestData.isPersonalized ? guestData.rawQuery : '?to=Fathi%20Farhat'}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(sampleUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9EE]/90 backdrop-blur-md border-b border-[#DCE8C8] px-3 sm:px-6 py-2 transition-all">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
        {/* Brand Mini Pill */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DCE8C8] text-[#536B45] font-display font-bold text-xs">
            🍵
          </span>
          <span className="font-display font-semibold text-[#536B45] tracking-wide">
            NADIA <span className="text-[#D94F5C]">&amp;</span> RAKA
          </span>
          <span className="hidden md:inline-block text-[#8FAF78]">•</span>
          <span className="hidden md:inline-block text-xs text-[#685148]/80 font-medium">
            24.10.2027
          </span>
        </div>

        {/* Right Section: Language Switcher + Guest Indicator + URL Tester */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Language Switcher Pill (EN by default / ID) */}
          <div className="inline-flex items-center gap-0.5 bg-white border border-[#C7D9AA] rounded-full p-0.5 shadow-sm">
            <span className="pl-1.5 pr-0.5 text-[#536B45] hidden sm:inline" title="Language selection">
              <Globe className="w-3.5 h-3.5 inline" />
            </span>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#536B45] text-white shadow-sm'
                  : 'text-[#685148] hover:bg-[#DCE8C8]/40'
              }`}
              title="English (Default)"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('id')}
              className={`px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${
                lang === 'id'
                  ? 'bg-[#D94F5C] text-white shadow-sm'
                  : 'text-[#685148] hover:bg-[#FBE0E2]/40'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          {/* Active Personalized Guest Indicator */}
          <div className="inline-flex items-center gap-1.5 bg-[#FBE0E2]/70 border border-[#F29BA6] text-[#685148] px-3 py-1 rounded-full text-xs">
            <UserCheck className="w-3.5 h-3.5 text-[#D94F5C]" />
            <span className="opacity-75 hidden sm:inline">{t.guest}</span>
            <strong className="text-[#536B45] font-display">{guestData.name}</strong>
            <code className="hidden lg:inline text-[10px] bg-white/80 px-1.5 py-0.5 rounded text-[#D94F5C] ml-1">
              {guestData.rawQuery}
            </code>
          </div>

          <button
            type="button"
            onClick={() => setShowUrlTester((prev) => !prev)}
            className="inline-flex items-center gap-1 bg-[#8FAF78] hover:bg-[#536B45] text-white font-display font-medium px-3 py-1 rounded-full text-xs transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#536B45] cursor-pointer"
            aria-expanded={showUrlTester}
          >
            <Sparkles className="w-3 h-3" />
            <span>{showUrlTester ? t.hideTester : t.testUrlBtn}</span>
          </button>
        </div>
      </div>

      {/* Collapsible Live URL Query Simulator Drawer */}
      {showUrlTester && (
        <div className="max-w-6xl mx-auto mt-2 pt-2.5 pb-1.5 border-t border-[#DCE8C8] flex flex-wrap items-center justify-between gap-2 text-xs animate-fadeIn">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-semibold text-[#536B45] mr-1">{t.simulateQuery}</span>
            <button
              type="button"
              onClick={() => setSimulatedQuery('to', 'Fathi Farhat')}
              className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                guestData.name === 'Fathi Farhat'
                  ? 'bg-[#536B45] text-white border-[#536B45]'
                  : 'bg-white text-[#536B45] border-[#C7D9AA] hover:bg-[#DCE8C8]/50'
              }`}
            >
              ?to=Fathi%20Farhat
            </button>
            <button
              type="button"
              onClick={() => setSimulatedQuery('guest', 'Nadia')}
              className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                guestData.name === 'Nadia' && guestData.sourceParam === 'guest'
                  ? 'bg-[#D94F5C] text-white border-[#D94F5C]'
                  : 'bg-white text-[#685148] border-[#F29BA6] hover:bg-[#FBE0E2]/50'
              }`}
            >
              ?guest=Nadia
            </button>
            <button
              type="button"
              onClick={() => setSimulatedQuery('to', 'Budi & Keluarga')}
              className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                guestData.name === 'Budi & Keluarga'
                  ? 'bg-[#536B45] text-white border-[#536B45]'
                  : 'bg-white text-[#536B48] border-[#C7D9AA] hover:bg-[#DCE8C8]/50'
              }`}
            >
              ?to=Budi%20%26%20Keluarga
            </button>
            <button
              type="button"
              onClick={() => setSimulatedQuery('fallback', '')}
              className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                !guestData.isPersonalized
                  ? 'bg-[#685148] text-white border-[#685148]'
                  : 'bg-white text-[#685148] border-[#C7D9AA] hover:bg-stone-100'
              }`}
            >
              /invitation (No Param Fallback)
            </button>
          </div>

          {/* Custom Guest Name Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (customGuestInput.trim()) {
                setSimulatedQuery('to', customGuestInput);
                setCustomGuestInput('');
              }
            }}
            className="flex items-center gap-1.5"
          >
            <input
              type="text"
              value={customGuestInput}
              onChange={(e) => setCustomGuestInput(e.target.value)}
              placeholder={t.customGuestPlaceholder}
              className="px-2.5 py-1 rounded-full border border-[#C7D9AA] bg-white text-[#685148] text-xs focus:outline-none focus:border-[#536B45] w-40"
              aria-label="Custom guest name"
            />
            <button
              type="submit"
              className="bg-[#F29BA6] hover:bg-[#D94F5C] text-white font-display px-3 py-1 rounded-full text-xs transition-colors cursor-pointer"
            >
              {t.applyBtn}
            </button>
            <button
              type="button"
              onClick={handleCopyShareLink}
              className="inline-flex items-center gap-1 bg-white border border-[#C7D9AA] text-[#536B45] px-2.5 py-1 rounded-full text-xs hover:bg-[#DCE8C8]/40 cursor-pointer"
              title="Copy personalized invitation link"
            >
              {copiedLink ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedLink ? t.copied : t.copyLink}</span>
            </button>
          </form>
        </div>
      )}
    </header>
  );
};
