'use client';

import { useState, useEffect, useCallback } from 'react';
import { GuestData } from '@/types/wedding';

/**
 * Sanitasi nama tamu:
 * - Menghilangkan tag HTML dan karakter kontrol
 * - Membatasi panjang maksimal 60 karakter
 */
export function sanitizeGuestName(rawValue?: string | null): string {
  if (!rawValue || typeof rawValue !== 'string') return '';
  try {
    const decoded = decodeURIComponent(rawValue);
    return decoded
      .replace(/<[^>]*>?/gm, '')
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
      .trim()
      .slice(0, 60);
  } catch {
    return rawValue
      .replace(/<[^>]*>?/gm, '')
      .trim()
      .slice(0, 60);
  }
}

export function useGuestName() {
  const [guestData, setGuestData] = useState<GuestData>({
    name: 'Our Dearest Friend',
    isPersonalized: false,
    sourceParam: 'default',
    rawQuery: ''
  });

  // Parse dari window.location.search saat dimuat di browser
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    const guestParam = params.get('guest');

    if (toParam && sanitizeGuestName(toParam)) {
      const clean = sanitizeGuestName(toParam);
      setGuestData({
        name: clean,
        isPersonalized: true,
        sourceParam: 'to',
        rawQuery: `?to=${encodeURIComponent(clean)}`
      });
    } else if (guestParam && sanitizeGuestName(guestParam)) {
      const clean = sanitizeGuestName(guestParam);
      setGuestData({
        name: clean,
        isPersonalized: true,
        sourceParam: 'guest',
        rawQuery: `?guest=${encodeURIComponent(clean)}`
      });
    } else {
      setGuestData({
        name: 'Our Dearest Friend',
        isPersonalized: false,
        sourceParam: 'fallback',
        rawQuery: '/invitation'
      });
    }
  }, []);

  // Helper untuk simulasi ganti query URL secara live (misal saat klik tombol tester)
  const setSimulatedQuery = useCallback((paramType: 'to' | 'guest' | 'fallback', value: string) => {
    const clean = sanitizeGuestName(value);
    if (!clean || paramType === 'fallback') {
      setGuestData({
        name: 'Our Dearest Friend',
        isPersonalized: false,
        sourceParam: 'fallback',
        rawQuery: '/invitation'
      });
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete('to');
        url.searchParams.delete('guest');
        window.history.replaceState({}, '', url.toString());
      } catch {
        // Abaikan pada environment iframe
      }
      return;
    }

    const paramKey = paramType === 'guest' ? 'guest' : 'to';
    setGuestData({
      name: clean,
      isPersonalized: true,
      sourceParam: paramKey,
      rawQuery: `?${paramKey}=${encodeURIComponent(clean)}`
    });

    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('to');
      url.searchParams.delete('guest');
      url.searchParams.set(paramKey, clean);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Abaikan pada environment iframe
    }
  }, []);

  return { guestData, setSimulatedQuery };
}
