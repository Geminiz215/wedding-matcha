'use client';

import React, { useState, useEffect, useRef } from 'react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { CafeMusicBoxEngine } from '@/lib/audioEngine';
import { useGuestName, sanitizeGuestName } from '@/hooks/useGuestName';
import { WishItem, RsvpFormData } from '@/types/wedding';
import { Language, TRANSLATIONS } from '@/config/translations';
import { FloatingControls } from '@/components/layout';
import {
  Scene01Hero,
  Scene02CupOfLove,
  Scene03Timeline,
  Scene04Garden,
  Scene05CoupleFlavor,
  Scene06Gallery,
  Scene07SaveTheDate,
  Scene08WeddingDay,
  Scene09PersonalNote,
  Scene10Rsvp,
  Scene11Guestbook,
  Scene12Footer
} from '@/components/scenes';

export default function WeddingInvitationPage() {
  // 0. Language State (DEFAULT: 'en' / English)
  const [lang, setLang] = useState<Language>('en');

  // 1. Guest Personalization Hook (?to= / ?guest= / fallback)
  const { guestData, setSimulatedQuery } = useGuestName();

  // 2. Invitation Cover State (Scene 01 -> Unlocked Full Experience)
  const [, setIsInvitationOpened] = useState(false);
  const [openingBurst, setOpeningBurst] = useState(false);

  // 3. Scroll Progress & Accessibility Reduced Motion State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // 4. Music Controller State (Dimulai strictly OFF sesuai preferensi user)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const musicEngineRef = useRef<CafeMusicBoxEngine | null>(null);

  // 5. Interactive Blend & Asset Showcase State (Scene 02 & Scene 05)
  const [cupBlendLevel, setCupBlendLevel] = useState(50);
  const [isFlavorBlended, setIsFlavorBlended] = useState(false);
  const [activeAssetShowcase, setActiveAssetShowcase] = useState<'cup' | 'strawberry' | 'pastry'>('cup');

  // 6. Real-Time Countdown State (Scene 07)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 7. RSVP & Guestbook State (Scene 10 & 11)
  const [wishes, setWishes] = useState<WishItem[]>(WEDDING_CONFIG.initialWishes);
  const [rsvpForm, setRsvpForm] = useState<RsvpFormData>({
    name: '',
    attendance: 'Hadir',
    guests: '2',
    drink: 'Iced Strawberry Matcha Latte 🍓🍵',
    message: ''
  });
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'duplicate'>('idle');
  const [rsvpErrorMsg, setRsvpErrorMsg] = useState('');
  const [submittedNames, setSubmittedNames] = useState<string[]>([]);

  // 8. Quick Guestbook Note State (Scene 11 standalone wish input)
  const [quickWishName, setQuickWishName] = useState('');
  const [quickWishText, setQuickWishText] = useState('');
  const [quickWishFeedback, setQuickWishFeedback] = useState('');

  // Inisialisasi Audio Engine & Deteksi Reduced Motion Preference
  useEffect(() => {
    musicEngineRef.current = new CafeMusicBoxEngine();
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setReducedMotion(true);
      }
    }
    return () => {
      if (musicEngineRef.current) {
        musicEngineRef.current.stop();
      }
    };
  }, []);

  // Pre-fill nama RSVP ketika parameter nama tamu di URL berubah
  useEffect(() => {
    if (guestData.isPersonalized) {
      setRsvpForm((prev) => ({
        ...prev,
        name: guestData.name
      }));
      setQuickWishName(guestData.name);
    }
  }, [guestData]);

  // Update Judul Dokumen Secara Dinamis sesuai nama tamu dan bahasa
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (lang === 'id') {
        document.title = guestData.isPersonalized
          ? `Kepada Yth. ${guestData.name} ♡ — Undangan Pernikahan Nadia & Raka`
          : `Nadia & Raka — Undangan Pernikahan Matcha & Strawberry`;
      } else {
        document.title = guestData.isPersonalized
          ? `Dear ${guestData.name} ♡ — Nadia & Raka Wedding Invitation`
          : `Nadia & Raka — Matcha & Strawberry Wedding Invitation`;
      }
    }
  }, [guestData, lang]);

  // Real-time Countdown Timer ke tanggal pernikahan
  useEffect(() => {
    const targetTime = new Date(WEDDING_CONFIG.weddingDateISO).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Musik Play/Pause dengan interaksi user eksplisit
  const handleToggleMusic = () => {
    try {
      setAudioError(null);
      if (!musicEngineRef.current) {
        musicEngineRef.current = new CafeMusicBoxEngine();
      }
      if (isMusicPlaying) {
        musicEngineRef.current.stop();
        setIsMusicPlaying(false);
      } else {
        const started = musicEngineRef.current.start();
        if (started) {
          setIsMusicPlaying(true);
        } else {
          setAudioError(lang === 'id' ? 'Audio tidak tersedia di perangkat ini.' : 'Audio unavailable on this device.');
        }
      }
    } catch {
      setAudioError(lang === 'id' ? 'Gagal menginisialisasi audio.' : 'Could not initialize audio.');
    }
  };

  // Handler Buka Undangan (Scene 01 CTA)
  const handleOpenInvitation = (withChime = true) => {
    setOpeningBurst(true);
    setIsInvitationOpened(true);
    if (withChime && isMusicPlaying && musicEngineRef.current) {
      musicEngineRef.current.playSparkleChime();
    }
    setTimeout(() => {
      const scene2El = document.getElementById('scene-02');
      if (scene2El) {
        scene2El.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      }
    }, 320);
    setTimeout(() => setOpeningBurst(false), 1400);
  };

  // Handler Submit Form RSVP
  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpErrorMsg('');
    const tRsvp = TRANSLATIONS[lang].scene10;

    const cleanName = sanitizeGuestName(rsvpForm.name);
    const cleanMsg = rsvpForm.message.trim();

    if (!cleanName || cleanName.length < 2) {
      setRsvpStatus('error');
      setRsvpErrorMsg(tRsvp.errName);
      return;
    }

    if (!cleanMsg || cleanMsg.length < 5) {
      setRsvpStatus('error');
      setRsvpErrorMsg(tRsvp.errMsg);
      return;
    }

    // Cek duplikasi submission di sesi ini
    if (submittedNames.includes(cleanName.toLowerCase())) {
      setRsvpStatus('duplicate');
      setRsvpErrorMsg(tRsvp.errDuplicate(cleanName));
      return;
    }

    setRsvpStatus('submitting');

    setTimeout(() => {
      const newWish: WishItem = {
        id: `w-${Date.now()}`,
        name: cleanName,
        attendance: rsvpForm.attendance,
        guests: Number(rsvpForm.guests) || 1,
        drink: rsvpForm.drink,
        message: cleanMsg,
        timestamp: lang === 'id' ? 'Baru saja • Sesi Demo' : 'Just now • Demo Session',
        color: rsvpForm.attendance === 'Hadir' ? 'pink' : 'green'
      };

      setWishes((prev) => [newWish, ...prev]);
      setSubmittedNames((prev) => [...prev, cleanName.toLowerCase()]);
      setRsvpStatus('success');

      if (isMusicPlaying && musicEngineRef.current) {
        musicEngineRef.current.playSparkleChime();
      }
    }, 650);
  };

  // Handler Submit Quick Note di Scene 11
  const handleQuickWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tScene11 = TRANSLATIONS[lang].scene11;
    const cleanName = sanitizeGuestName(quickWishName);
    const cleanText = quickWishText.trim();

    if (!cleanName || !cleanText) {
      setQuickWishFeedback(tScene11.emptyFeedback);
      return;
    }

    const newNote: WishItem = {
      id: `note-${Date.now()}`,
      name: cleanName,
      attendance: 'Sweet Note ♡',
      guests: 1,
      drink: 'Strawberry Matcha Love 🍓🍵',
      message: cleanText,
      timestamp: lang === 'id' ? 'Baru saja • Sesi Demo' : 'Just now • Demo Session',
      color: wishes.length % 2 === 0 ? 'green' : 'pink'
    };

    setWishes((prev) => [newNote, ...prev]);
    setQuickWishText('');
    setQuickWishFeedback(tScene11.pinFeedback);
    setTimeout(() => setQuickWishFeedback(''), 4000);
  };

  return (
    <>

      {/* 2. Floating Controls: Audio Engine, Reduced Motion & Scroll Progress */}
      <FloatingControls
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        audioError={audioError}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
        scrollProgress={scrollProgress}
        lang={lang}
      />

      {/* 3. Main Content Scenes */}
      <main>
        {/* Scene 01: Hero & Personalized Cover + Language Switcher "di awal" */}
        <Scene01Hero
          guestData={guestData}
          onOpenInvitation={handleOpenInvitation}
          reducedMotion={reducedMotion}
          openingBurst={openingBurst}
          cupBlendLevel={cupBlendLevel}
          lang={lang}
          onLanguageChange={setLang}
        />

        {/* Scene 02: The Cup of Love & Asset Switcher */}
        <Scene02CupOfLove
          cupBlendLevel={cupBlendLevel}
          setCupBlendLevel={setCupBlendLevel}
          activeAssetShowcase={activeAssetShowcase}
          setActiveAssetShowcase={setActiveAssetShowcase}
          reducedMotion={reducedMotion}
          lang={lang}
        />

        {/* Scene 03: Recipe Story Timeline */}
        <Scene03Timeline
          reducedMotion={reducedMotion}
          lang={lang}
        />

        {/* Scene 04: Strawberry Garden */}
        <Scene04Garden
          reducedMotion={reducedMotion}
          lang={lang}
        />

        {/* Scene 05: Couple Flavor Personalities & Swirl */}
        <Scene05CoupleFlavor
          isFlavorBlended={isFlavorBlended}
          setIsFlavorBlended={setIsFlavorBlended}
          reducedMotion={reducedMotion}
          lang={lang}
        />

        {/* Scene 06: Polaroid Gallery & Lightbox */}
        <Scene06Gallery
          reducedMotion={reducedMotion}
          lang={lang}
        />

        {/* Scene 07: Save The Date Packaging Label & Countdown */}
        <Scene07SaveTheDate
          countdown={countdown}
          reducedMotion={reducedMotion}
          lang={lang}
        />

        {/* Scene 08: The Wedding Day Events (Akad & Resepsi) */}
        <Scene08WeddingDay lang={lang} />

        {/* Scene 09: Personalized Note Letter */}
        <Scene09PersonalNote
          guestData={guestData}
          reducedMotion={reducedMotion}
          lang={lang}
        />

        {/* Scene 10: RSVP Form */}
        <Scene10Rsvp
          rsvpForm={rsvpForm}
          setRsvpForm={setRsvpForm}
          onSubmitRsvp={handleRsvpSubmit}
          rsvpStatus={rsvpStatus}
          setRsvpStatus={setRsvpStatus}
          rsvpErrorMsg={rsvpErrorMsg}
          lang={lang}
        />

        {/* Scene 11: Sweet Wishes Guestbook Wall */}
        <Scene11Guestbook
          wishes={wishes}
          quickWishName={quickWishName}
          setQuickWishName={setQuickWishName}
          quickWishText={quickWishText}
          setQuickWishText={setQuickWishText}
          quickWishFeedback={quickWishFeedback}
          onQuickWishSubmit={handleQuickWishSubmit}
          lang={lang}
        />
      </main>

      {/* Scene 12: Memorable Closing Footer */}
      <Scene12Footer
        cupBlendLevel={cupBlendLevel}
        reducedMotion={reducedMotion}
        lang={lang}
      />
    </>
  );
}
