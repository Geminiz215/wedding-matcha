'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { GalleryMemoryIllustration } from '@/components/illustrations';
import { Language, TRANSLATIONS } from '@/config/translations';

export interface Scene06GalleryProps {
  reducedMotion: boolean;
  lang: Language;
}

export const Scene06Gallery: React.FC<Scene06GalleryProps> = ({ reducedMotion, lang }) => {
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const t = TRANSLATIONS[lang].scene06;

  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'All') return WEDDING_CONFIG.gallery;
    return WEDDING_CONFIG.gallery.filter((item) => item.category === galleryFilter);
  }, [galleryFilter]);

  // Keyboard Navigation untuk Lightbox Modal
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredGallery.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const categories = [
    { key: 'All', label: t.catAll },
    { key: 'Café Dates', label: t.catCafe },
    { key: 'Pre-Wedding', label: t.catPrewed },
    { key: 'Candid', label: t.catCandid }
  ];

  return (
    <section
      id="scene-06"
      className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE] strawberry-paper-dots"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            {t.sceneTag}
          </span>
          <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#685148]/90 mb-6">
            {t.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white p-1.5 rounded-full shadow-sm border border-[#C7D9AA]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setGalleryFilter(cat.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${
                  galleryFilter === cat.key
                    ? 'bg-[#536B45] text-white shadow-sm'
                    : 'text-[#685148] hover:bg-[#DCE8C8]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrapbook Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              className="group cursor-pointer bg-white p-4 pb-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-[#DCE8C8] transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-[#F29BA6]"
              style={{ transform: !reducedMotion ? `rotate(${item.rotation})` : 'none' }}
            >
              {/* Washi Tape Accent at Top */}
              <div className="w-24 h-5 bg-[#F29BA6]/40 mx-auto -mt-6 mb-3 rounded-sm rotate-1" />

              {/* Box Ilustrasi / Foto Polaroid */}
              <div className="relative h-60 rounded-2xl overflow-hidden border border-[#DCE8C8] bg-[#FFF9EE]">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <GalleryMemoryIllustration sceneType={item.sceneType} />
                )}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-display font-bold text-[#536B45] shadow-sm">
                  {item.sticker} {item.category}
                </span>
                <div className="absolute inset-0 bg-[#536B45]/0 group-hover:bg-[#536B45]/15 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#536B45] font-display font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#D94F5C]" />
                    <span>{t.openMemory}</span>
                  </span>
                </div>
              </div>

              <div className="mt-4 px-1">
                <div className="flex items-center justify-between text-xs text-[#8FAF78] font-display font-bold mb-1">
                  <span>{item.date}</span>
                  <span>#{index + 1}</span>
                </div>
                <h3 className="font-serif-romantic font-bold text-lg text-[#536B45] group-hover:text-[#D94F5C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#685148]/85 mt-1 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="bg-[#FFF9EE] max-w-lg w-full rounded-3xl p-5 sm:p-6 shadow-2xl border-4 border-[#F29BA6] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#D94F5C] text-white flex items-center justify-center shadow-lg hover:bg-[#536B45] transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gambar Besar Modal Lightbox */}
            <div className="h-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#C7D9AA] mb-4 bg-white flex items-center justify-center">
              {filteredGallery[lightboxIndex].imageUrl ? (
                <img
                  src={filteredGallery[lightboxIndex].imageUrl}
                  alt={filteredGallery[lightboxIndex].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <GalleryMemoryIllustration sceneType={filteredGallery[lightboxIndex].sceneType} />
              )}
            </div>

            <div className="flex items-center justify-between text-xs font-display font-bold text-[#8FAF78] mb-1">
              <span>{filteredGallery[lightboxIndex].category}</span>
              <span>{filteredGallery[lightboxIndex].date}</span>
            </div>
            <h3 className="font-serif-romantic text-2xl font-bold text-[#536B45] mb-2">
              {filteredGallery[lightboxIndex].title}
            </h3>
            <p className="text-sm text-[#685148] mb-5">
              {filteredGallery[lightboxIndex].caption}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-[#DCE8C8]">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
                  )
                }
                className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#536B45] hover:text-[#D94F5C] px-3 py-1.5 rounded-full bg-[#DCE8C8]/50 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> {t.prev}
              </button>
              <span className="text-xs font-display text-[#685148]">
                {lightboxIndex + 1} / {filteredGallery.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)}
                className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#536B45] hover:text-[#D94F5C] px-3 py-1.5 rounded-full bg-[#DCE8C8]/50 cursor-pointer"
              >
                {t.next} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
