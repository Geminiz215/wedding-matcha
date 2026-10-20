'use client';

import React from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { RsvpFormData } from '@/types/wedding';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene10RsvpProps {
  rsvpForm: RsvpFormData;
  setRsvpForm: React.Dispatch<React.SetStateAction<RsvpFormData>>;
  onSubmitRsvp: (e: React.FormEvent) => void;
  rsvpStatus: 'idle' | 'submitting' | 'success' | 'error' | 'duplicate';
  setRsvpStatus: (status: 'idle' | 'submitting' | 'success' | 'error' | 'duplicate') => void;
  rsvpErrorMsg: string;
  lang: Language;
}

export const Scene10Rsvp: React.FC<Scene10RsvpProps> = ({
  rsvpForm,
  setRsvpForm,
  onSubmitRsvp,
  rsvpStatus,
  setRsvpStatus,
  rsvpErrorMsg,
  lang
}) => {
  const t = TRANSLATIONS[lang].scene10;

  return (
    <section id="scene-10" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#DCE8C8]/45">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-7 sm:p-11 shadow-xl border-4 border-[#8FAF78]">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              {t.sceneTag}
            </span>
            <h2 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#536B45]">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#685148]/85 mt-2">
              {t.desc}
            </p>
            {/* Honest Demo Mode Notice */}
            <div className="mt-3 inline-flex items-center gap-1.5 bg-[#FFF9EE] border border-[#C7D9AA] px-3 py-1 rounded-full text-[11px] font-display text-[#536B45]">
              <Sparkles className="w-3.5 h-3.5 text-[#D94F5C]" />
              <span>{t.demoNotice}</span>
            </div>
          </div>

          <form onSubmit={onSubmitRsvp} className="space-y-5" noValidate>
            {/* Nama Tamu */}
            <div>
              <label
                htmlFor="rsvp-name"
                className="block font-display font-bold text-sm text-[#536B45] mb-1.5"
              >
                {t.nameLabel} <span className="text-[#D94F5C]">*</span>
              </label>
              <input
                id="rsvp-name"
                type="text"
                required
                value={rsvpForm.name}
                onChange={(e) => {
                  setRsvpForm({ ...rsvpForm, name: e.target.value });
                  if (rsvpStatus !== 'idle') setRsvpStatus('idle');
                }}
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#C7D9AA] bg-[#FFF9EE]/60 text-[#685148] font-medium focus:outline-none focus:border-[#536B45] transition-colors"
              />
            </div>

            {/* Konfirmasi Kehadiran */}
            <div>
              <span className="block font-display font-bold text-sm text-[#536B45] mb-2">
                {t.attendLabel} <span className="text-[#D94F5C]">*</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: 'Hadir', label: t.attendYes, sub: t.attendYesSub },
                  { value: 'Belum Bisa Hadir', label: t.attendNo, sub: t.attendNoSub }
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setRsvpForm({ ...rsvpForm, attendance: opt.value })}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      rsvpForm.attendance === opt.value
                        ? 'bg-[#536B45] text-white border-[#536B45] shadow-md'
                        : 'bg-[#FFF9EE] text-[#685148] border-[#C7D9AA] hover:border-[#8FAF78]'
                    }`}
                  >
                    <div className="font-display font-bold text-sm">{opt.label}</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        rsvpForm.attendance === opt.value ? 'text-[#DCE8C8]' : 'text-[#685148]/75'
                      }`}
                    >
                      {opt.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Jumlah Tamu & Welcome Drink */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="rsvp-guests"
                  className="block font-display font-bold text-sm text-[#536B45] mb-1.5"
                >
                  {t.guestsLabel}
                </label>
                <select
                  id="rsvp-guests"
                  value={rsvpForm.guests}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, guests: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#C7D9AA] bg-[#FFF9EE]/60 text-[#685148] font-medium focus:outline-none focus:border-[#536B45]"
                >
                  <option value="1">{t.guest1}</option>
                  <option value="2">{t.guest2}</option>
                  <option value="3">{t.guest3}</option>
                  <option value="4">{t.guest4}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="rsvp-drink"
                  className="block font-display font-bold text-sm text-[#536B45] mb-1.5"
                >
                  {t.drinkLabel}
                </label>
                <select
                  id="rsvp-drink"
                  value={rsvpForm.drink}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, drink: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#C7D9AA] bg-[#FFF9EE]/60 text-[#685148] font-medium focus:outline-none focus:border-[#536B45]"
                >
                  <option value="Iced Strawberry Matcha Latte 🍓🍵">Iced Strawberry Matcha Latte 🍓🍵</option>
                  <option value="Ceremonial Uji Matcha Oat 🍵">Ceremonial Uji Matcha Oat 🍵</option>
                  <option value="Fresh Hokkaido Strawberry Milk 🍓">Fresh Hokkaido Strawberry Milk 🍓</option>
                  <option value="Matcha Pistachio Kunafa 🥐">Matcha Pistachio Kunafa 🥐</option>
                </select>
              </div>
            </div>

            {/* Pesan atau Doa */}
            <div>
              <label
                htmlFor="rsvp-message"
                className="block font-display font-bold text-sm text-[#536B45] mb-1.5"
              >
                {t.messageLabel} <span className="text-[#D94F5C]">*</span>
              </label>
              <textarea
                id="rsvp-message"
                rows={3}
                required
                value={rsvpForm.message}
                onChange={(e) => {
                  setRsvpForm({ ...rsvpForm, message: e.target.value });
                  if (rsvpStatus !== 'idle') setRsvpStatus('idle');
                }}
                placeholder={t.messagePlaceholder}
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#C7D9AA] bg-[#FFF9EE]/60 text-[#685148] font-medium focus:outline-none focus:border-[#536B45]"
              />
            </div>

            {/* Validation / Feedback Alerts */}
            {(rsvpStatus === 'error' || rsvpStatus === 'duplicate') && (
              <div className="p-4 rounded-2xl bg-[#FBE0E2] border border-[#D94F5C] text-[#D94F5C] text-xs sm:text-sm font-medium flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{rsvpErrorMsg}</span>
              </div>
            )}

            {rsvpStatus === 'success' && (
              <div className="p-4 rounded-2xl bg-[#DCE8C8] border border-[#536B45] text-[#536B45] text-xs sm:text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#536B45]" />
                <span>{t.successMsg(rsvpForm.name)}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={rsvpStatus === 'submitting'}
              className="w-full bg-[#D94F5C] hover:bg-[#536B45] disabled:opacity-60 text-white font-display font-bold text-base py-4 px-6 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>
                {rsvpStatus === 'submitting'
                  ? t.submittingBtn
                  : rsvpForm.attendance === 'Hadir'
                  ? t.submitYes
                  : t.submitNo}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
