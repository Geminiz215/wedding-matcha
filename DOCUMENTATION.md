# 🍵🍓 Dokumentasi Struktur Proyek & Panduan Edit — Matcha & Strawberry Wedding Invitation

Dokumentasi lengkap arsitektur kode **Next.js (App Router)**, struktur direktori, deskripsi isi setiap file, cara mengubah data pernikahan, serta panduan lengkap mengubah ukuran ilustrasi & gambar (*image sizing guide*).

---

## 📌 Daftar Isi
1. [Arsitektur & Teknologi](#1-arsitektur--teknologi)
2. [Fitur Pilihan Bahasa (Bilingual: English & Indonesia)](#2-fitur-pilihan-bahasa-bilingual-english--indonesia)
3. [Struktur Folder & File (Directory Tree)](#3-struktur-folder--file)
4. [Deskripsi Isi Setiap File](#4-deskripsi-isi-setiap-file)
5. [Panduan Mengubah Konten Pernikahan](#5-panduan-mengubah-konten-pernikahan)
6. [Panduan Mengubah Ukuran Gambar & Ilustrasi (Sizing Guide)](#6-panduan-mengubah-ukuran-gambar--ilustrasi)
7. [Personalisasi Nama Tamu (`?to=` & `?guest=`)](#7-personalisasi-nama-tamu)
8. [Cara Menjalankan Proyek di Komputer Lokal](#8-cara-menjalankan-proyek-di-komputer-lokal)

---

## 1. Arsitektur & Teknologi

Proyek ini dibangun menggunakan:
- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19/18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) dengan palet warna kustom (*Matcha Green, Strawberry Pink, Milky Cream, Cocoa Brown*)
- **Icons**: [lucide-react](https://lucide.react.dev/)
- **Audio**: Web Audio API Synthesizer (*Zero external audio files required, tidak ada broken link audio*)
- **Typography**: Google Fonts (*Fraunces, Fredoka, Nunito, Plus Jakarta Sans*)

---

## 2. Fitur Pilihan Bahasa (Bilingual: English & Indonesia)

Sesuai permintaan, undangan dilengkapi tombol pemilih bahasa di awal halaman:
- **Pilihan**: 🇬🇧 **English** atau 🇮🇩 **Indonesia**.
- **Nilai Default**: **English** (Bahasa Inggris aktif secara otomatis saat pertama kali dibuka).
- **Lokasi Tombol**:
  1. **Di Awal Halaman (Hero Card - Scene 01)**: Tampil tepat di atas lencana nama tamu dengan tombol pill yang jelas dan interaktif (`Language / Bahasa: [English] [Indonesia]`).
  2. **Di Header Atas (Sticky Bar)**: Tombol pemilih bahasa ringkas (`[ 🌐 EN | ID ]`) yang tetap terlihat saat pengguna menggulir ke bawah (*scroll*).
- **Kamus Terjemahan**:
  Seluruh teks terjemahan disimpan terstruktur dan rapi di file:
  📁 **`src/config/translations.ts`**
  Anda dapat dengan mudah menambah atau menyempurnakan kosakata bahasa Inggris maupun Indonesia langsung di file tersebut.

---

## 3. Struktur Folder & File

Kode yang sebelumnya monolitik (3.300+ baris dalam satu file) kini telah dipecah menjadi modul-modul terpisah yang teratur dan sangat mudah dibaca:

```text
wedding-matcha/
├── src/
│   ├── app/                                 # Entrypoint Next.js App Router
│   │   ├── globals.css                      # Tailwind base, Google Fonts, keyframes & tekstur
│   │   ├── layout.tsx                       # Root layout & SEO metadata
│   │   └── page.tsx                         # Halaman utama (merakit semua scene)
│   │
│   ├── config/
│   │   └── wedding.ts                       # ⭐ PUSAT KONTEN PERNIKAHAN (Cukup edit file ini!)
│   │
│   ├── types/
│   │   └── wedding.ts                       # TypeScript interfaces (data types)
│   │
│   ├── lib/
│   │   ├── audioEngine.ts                   # Web Audio API Synthesizer (Lofi Music Box)
│   │   └── calendar.ts                      # Helper Google Calendar & file .ICS
│   │
│   ├── hooks/
│   │   └── useGuestName.ts                  # Hook pengambil nama tamu dari URL (?to=)
│   │
│   └── components/
│       ├── illustrations/                   # Komponen Aset Ilustrasi SVG (Dapat diubah ukurannya)
│       │   ├── StrawberryMatchaCup.tsx      # Aset 1: Cangkir Strawberry Matcha Latte
│       │   ├── KawaiiStrawberry.tsx         # Aset 2: Karakter Stroberi Lucu
│       │   ├── MatchaKunafaPastry.tsx       # Aset 3: Pastry Matcha Pistachio Kunafa
│       │   ├── GalleryMemoryIllustration.tsx# Ilustrasi 6 scene kenangan galeri polaroid
│       │   └── index.ts                     # Export index ilustrasi
│       │
│       ├── layout/                          # Komponen Navigasi & Kontrol Global
│       │   ├── HeaderGuestBar.tsx           # Bar atas personalisasi tamu & live URL tester
│       │   ├── FloatingControls.tsx         # Tombol musik mengambang & bar progres sedotan
│       │   └── index.ts                     # Export index layout
│       │
│       └── scenes/                          # 12 Scene Alur Undangan (Urut & Terisolasi)
│           ├── Scene01Hero.tsx              # Scene 01: Sampul Utama & Tombol Buka Undangan
│           ├── Scene02CupOfLove.tsx         # Scene 02: Filosofi Matcha & Stroberi + Slider Blend
│           ├── Scene03Timeline.tsx          # Scene 03: Barista Notes / Timeline Kisah Cinta
│           ├── Scene04Garden.tsx            # Scene 04: Strawberry Garden Path & Kutipan
│           ├── Scene05CoupleFlavor.tsx      # Scene 05: Profil Mempelai (Raka & Nadia) + Swirl
│           ├── Scene06Gallery.tsx           # Scene 06: Polaroid Scrapbook & Modal Lightbox
│           ├── Scene07SaveTheDate.tsx       # Scene 07: Kemasan Dessert, Countdown & Kalender
│           ├── Scene08WeddingDay.tsx        # Scene 08: Detail Akad & Resepsi + Maps + Dresscode
│           ├── Scene09PersonalNote.tsx      # Scene 09: Surat Pribadi dengan Segel Lilin
│           ├── Scene10Rsvp.tsx              # Scene 10: Formulir Konfirmasi Kehadiran (RSVP)
│           ├── Scene11Guestbook.tsx         # Scene 11: Papan Ucapan Manis (Sweet Wishes)
│           ├── Scene12Footer.tsx            # Scene 12: Penutup Romantis & Tombol Back to Top
│           └── index.ts                     # Export index scenes
│
├── DOCUMENTATION.md                         # File dokumentasi panduan ini
├── README.md                                # Panduan ringkas repository
├── package.json                             # Dependensi & skrip Next.js
├── tailwind.config.js                       # Konfigurasi tema warna & font Tailwind
├── postcss.config.js                        # Konfigurasi PostCSS
├── tsconfig.json                            # Konfigurasi TypeScript path aliases (@/*)
└── next.config.mjs                          # Konfigurasi Next.js
```

---

## 4. Deskripsi Isi Setiap File

| File / Folder | Fungsi & Tanggung Jawab |
|---|---|
| `src/config/wedding.ts` | **Paling Penting!** Menyimpan seluruh data: nama pengantin, orang tua, tanggal, lokasi, maps, cerita timeline, galeri, dan ucapan demo. Semua perubahan teks dilakukan di sini tanpa menyentuh JSX. |
| `src/types/wedding.ts` | Menyediakan tipe data TypeScript (`WeddingConfig`, `EventDetail`, `GalleryItem`, dll) untuk mencegah kesalahan penulisan dan memudahkan *autocomplete* di editor. |
| `src/app/page.tsx` | Komponen utama yang mengelola *state* global (musik, countdown, form RSVP, URL tester) dan memanggil Scene 01 s/d Scene 12 secara berurutan. |
| `src/app/layout.tsx` | Menentukan kerangka HTML dasar, font, warna latar, dan meta tag SEO. |
| `src/app/globals.css` | Mendefinisikan Tailwind directives, font Google, keyframe animasi melayang (*gentleFloat*, *berryBob*), serta tekstur kertas (*cafe-paper-grid*, *strawberry-paper-dots*). |
| `src/components/illustrations/` | Berisi 4 file SVG komponen ilustrasi resolusi tinggi yang fleksibel. Setiap file menerima prop `className` untuk kemudahan mengubah ukuran. |
| `src/components/layout/` | Berisi bar atas nama tamu + tester URL (`HeaderGuestBar.tsx`) dan tombol musik serta progres sedotan (`FloatingControls.tsx`). |
| `src/components/scenes/` | Terdiri dari 12 komponen mandiri yang mewakili setiap seksi pada undangan pernikahan, memudahkan penyesuaian visual per seksi. |
| `src/hooks/useGuestName.ts` | Hook untuk mendeteksi `?to=` atau `?guest=` dari URL, membersihkan input dari script berbahaya (sanitasi), dan sinkronisasi simulator. |
| `src/lib/audioEngine.ts` | Mesin pensintesis audio berbasis browser Web Audio API yang membunyikan lonceng piano lo-fi tanpa dependensi MP3 eksternal. |
| `src/lib/calendar.ts` | Utilitas pembuatan tautan Google Calendar dan unduhan berkas `.ics`. |

---

## 5. Panduan Mengubah Konten Pernikahan

Untuk mengubah nama, tanggal, tempat, cerita, atau ucapan, buka file:
📁 **`src/config/wedding.ts`**

### Contoh 1: Mengubah Nama Mempelai & Orang Tua
```typescript
couple: {
  bride: {
    nickname: 'Nadia',
    fullName: 'Nadia Larasati Putri, S.Ds.',
    parents: 'Putri Pertama dari Bpk. Hendra Wijaya & Ibu Sofia Kartika',
    flavorTitle: 'A LITTLE SWEET',
    flavorTag: 'Fresh Strawberry Puree 🍓',
    personality: 'Hangat, ceria, dan penuh kejutan manis...',
    traits: ['Sweet & Affectionate', 'Dessert Enthusiast', 'Creative Soul', 'Morning Sunshine']
  },
  groom: {
    nickname: 'Raka',
    fullName: 'Raka Pradipta Mahendra, S.Ars.',
    parents: 'Putra Kedua dari Bpk. Surya Mahendra & Ibu Dewi Anggraini',
    flavorTitle: 'A LITTLE CALM',
    flavorTag: 'Ceremonial Uji Matcha 🍵',
    personality: 'Tenang, penuh perhatian, dan pendengar yang baik...',
    traits: ['Calm & Comforting', 'Matcha Barista', 'Gentle Listener', 'Steady Warmth']
  }
}
```

### Contoh 2: Mengubah Tanggal & Countdown Acara
Format tanggal menggunakan standar ISO 8601 (`YYYY-MM-DDTHH:mm:ss+ZonaWaktu`):
```typescript
weddingDateISO: '2027-10-24T08:00:00+07:00', // Countdown otomatis menghitung mundur ke waktu ini
weddingDateDisplay: '24 OCTOBER 2027',
weddingDayDisplay: 'Minggu, 24 Oktober 2027',
hashtag: '#NadiaRakaSweetBlend',
```

### Contoh 3: Mengubah Lokasi Akad & Resepsi
```typescript
events: {
  akad: {
    title: 'AKAD NIKAH',
    subtitle: 'The Sacred Vows',
    dayDate: 'Minggu, 24 Oktober 2027',
    time: '08.00 – 10.00 WIB',
    startISO: '20271024T010000Z',
    endISO: '20271024T030000Z',
    venueName: 'The Botanical Glasshouse Conservatory',
    address: 'Jl. Asia Afrika No. 8, Gelora Senayan, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Lokasi+Anda',
    note: 'Upacara intim di kelilingi tanaman hijau segar.'
  },
  resepsi: {
    title: 'RESEPSI & CAFÉ SOIRÉE',
    ...
  }
}
```

---

## 6. Panduan Mengubah Ukuran Gambar, Ilustrasi & Foto Pengantin

### 📸 Foto Asli Pengantin (Real Wedding Photos)

Semua aset foto pernikahan diletakkan di dalam folder: `public/images/`.

| Foto | File di `public/images/` | Resolusi Rekomendasi | Letak Pemasangan di Website | Konfigurasi Terpusat |
|---|---|---|---|---|
| **Foto Berdua (Couple)** | `couple-hero.jpg` | 1264 × 843 px (Landscape 3:2) | • **Scene 01 (Hero Utama)**: Frame Polaroid Cover dengan Washi Tape & Ribbon Glow<br>• **Scene 06 (Galeri Scrapbook)**: Kartu Pre-Wedding Polaroid + Lightbox Popup | `WEDDING_CONFIG.couple.coupleHeroPhoto`<br>(`src/config/wedding.ts`) |
| **Foto Pria (Groom - Raka)** | `groom.jpg` (atau `groom.jfif`) | 896 × 1200 px (Portrait 3:4) | • **Scene 05 (Profil Raka)**: Kartu Potret Portrait Matcha Calm dengan pita & lencana "The Groom"<br>• **Scene 06 (Galeri)**: Kartu Sunday Ritual + Lightbox Popup | `WEDDING_CONFIG.couple.groom.photo`<br>(`src/config/wedding.ts`) |
| **Foto Wanita (Bride - Nadia)** | `bride.jpg` (atau `bride.jfif`) | 896 × 1200 px (Portrait 3:4) | • **Scene 05 (Profil Nadia)**: Kartu Potret Portrait Strawberry Sweet dengan pita & lencana "The Bride"<br>• **Scene 06 (Galeri)**: Kartu Rainy Window + Lightbox Popup | `WEDDING_CONFIG.couple.bride.photo`<br>(`src/config/wedding.ts`) |

#### Cara Mengubah atau Mengganti Foto:
1. **Cara 1 (Paling Mudah)**: Timpa file foto baru langsung ke folder `public/images/` dengan nama yang sama (`couple-hero.jpg`, `groom.jpg`, `bride.jpg`).
2. **Cara 2 (Ubah Path File)**: Buka `src/config/wedding.ts` lalu ubah URL path:
   ```ts
   // src/config/wedding.ts
   export const WEDDING_CONFIG: WeddingConfig = {
     couple: {
       coupleHeroPhoto: '/images/nama-foto-berdua-baru.jpg',
       bride: {
         nickname: 'Nadia',
         photo: '/images/nama-foto-wanita-baru.jpg',
         ...
       },
       groom: {
         nickname: 'Raka',
         photo: '/images/nama-foto-pria-baru.jpg',
         ...
       }
     },
#### Cara Mengubah Ukuran Foto Hero (`Scene01Hero.tsx`):
Di file `src/components/scenes/Scene01Hero.tsx`:
```tsx
{/* Photo Container: Ukuran kartu foto berdua di Hero Cover */}
<div className="w-72 h-[380px] sm:w-84 sm:h-[450px] md:w-[380px] md:h-[520px] rounded-2xl overflow-hidden shadow-inner bg-[#FBE0E2]/30">
  <img
    src={WEDDING_CONFIG.couple.coupleHeroPhoto || '/images/couple-hero.jpg'}
    alt="..."
    className="w-full h-full object-cover object-top ..."
  />
</div>
```
- **Ingin lebih tinggi lagi**: ubah menjadi `h-[420px] sm:h-[500px] md:h-[560px]`.
- **Ingin lebih lebar**: ubah menjadi `w-80 sm:w-96 md:w-[420px]`.
- **Ingin lebih ramping**: ubah menjadi `w-68 sm:w-76 md:w-[340px]`.

---

### A. Cangkir Strawberry Matcha Latte (`StrawberryMatchaCup`)

File komponen: `src/components/illustrations/StrawberryMatchaCup.tsx`

| Lokasi Scene | File Pemanggil | Ukuran Saat Ini | Cara Mengubah Ukuran |
|---|---|---|---|
| **Scene 01 (Hero Utama)** | `src/components/scenes/Scene01Hero.tsx` | `w-64 h-72 sm:w-80 sm:h-96` | Cari tag `<StrawberryMatchaCup>` lalu ganti class: <br>• Ingin lebih besar: `className="w-80 h-96 sm:w-96 sm:h-[450px]"` <br>• Ingin lebih kecil: `className="w-56 h-64 sm:w-64 sm:h-72"` |
| **Scene 02 (Showcase)** | `src/components/scenes/Scene02CupOfLove.tsx` | `w-64 h-72` | Ganti `className="w-64 h-72"` menjadi misalnya `className="w-72 h-80"` |
| **Scene 03 (Timeline 01 & 04)** | `src/components/scenes/Scene03Timeline.tsx` | `w-40 h-44` | Ganti `className="w-40 h-44"` menjadi misalnya `className="w-48 h-52"` |
| **Scene 04 (Taman Samping)** | `src/components/scenes/Scene04Garden.tsx` | `w-36 h-44` | Ganti `className="w-36 h-44"` |
| **Scene 07 (Kemasan Dessert)** | `src/components/scenes/Scene07SaveTheDate.tsx` | `w-36 h-44` | Ganti `className="w-36 h-44"` |
| **Scene 12 (Footer Penutup)** | `src/components/scenes/Scene12Footer.tsx` | `w-60 h-68 sm:w-72 sm:h-80` | Ganti `className="w-60 h-68 sm:w-72 sm:h-80"` |

#### Contoh Kode Mengubah Ukuran di Hero (`Scene01Hero.tsx`):
```tsx
// Buka file: src/components/scenes/Scene01Hero.tsx
// Cari baris ini:
<StrawberryMatchaCup
  className="w-64 h-72 sm:w-80 sm:h-96"  // <-- Ubah di sini!
  interactive={true}
  blendLevel={cupBlendLevel}
  reducedMotion={reducedMotion}
/>
```

---

### B. Karakter Stroberi Lucu (`KawaiiStrawberry`)

File komponen: `src/components/illustrations/KawaiiStrawberry.tsx`

| Lokasi Scene | File Pemanggil | Ukuran Saat Ini | Rekomendasi Pilihan Ukuran |
|---|---|---|---|
| **Scene 02 (Tab Stroberi)** | `Scene02CupOfLove.tsx` | `w-64 h-64` | `w-56 h-56` (sedang) atau `w-72 h-72` (besar) |
| **Scene 03 (Timeline 02)** | `Scene03Timeline.tsx` | `w-44 h-44` | `w-40 h-40` s/d `w-48 h-48` |
| **Scene 04 (Taman Stroberi)** | `Scene04Garden.tsx` | `w-52 h-52 sm:w-64 sm:h-64` | `w-64 h-64 sm:w-80 sm:h-80` (jika ingin lebih menonjol) |
| **Scene 05 (Profil Nadia)** | `Scene05CoupleFlavor.tsx`| `w-36 h-36` | `w-32 h-32` s/d `w-48 h-48` |
| **Scene 09 (Surat Pribadi)** | `Scene09PersonalNote.tsx` | `w-16 h-16` | `w-20 h-20` |
| **Scene 12 (Footer)** | `Scene12Footer.tsx` | `w-28 h-28` | `w-24 h-24` s/d `w-32 h-32` |

#### Contoh Kode Mengubah Ukuran di Scene 04 Garden:
```tsx
// Buka file: src/components/scenes/Scene04Garden.tsx
<KawaiiStrawberry
  className="w-52 h-52 sm:w-64 sm:h-64" // <-- Ganti misal "w-64 h-64 sm:w-72 sm:h-72"
  reducedMotion={reducedMotion}
/>
```

---

### C. Pastry Kunafa Cokelat Matcha (`MatchaKunafaPastry`)

File komponen: `src/components/illustrations/MatchaKunafaPastry.tsx`

| Lokasi Scene | File Pemanggil | Ukuran Saat Ini | Rekomendasi Pilihan Ukuran |
|---|---|---|---|
| **Scene 02 (Tab Pastry)** | `Scene02CupOfLove.tsx` | `w-64 h-64` | `w-60 h-60` s/d `w-72 h-72` |
| **Scene 03 (Timeline 03)** | `Scene03Timeline.tsx` | `w-44 h-44` | `w-40 h-40` s/d `w-48 h-48` |
| **Scene 04 (Taman Samping)** | `Scene04Garden.tsx` | `w-36 h-36` | `w-32 h-32` s/d `w-40 h-40` |
| **Scene 05 (Profil Raka)** | `Scene05CoupleFlavor.tsx`| `w-36 h-36` | `w-32 h-32` s/d `w-48 h-48` |
| **Scene 12 (Footer)** | `Scene12Footer.tsx` | `w-28 h-28` | `w-24 h-24` s/d `w-32 h-32` |

---

### D. Ilustrasi Galeri Polaroid (`GalleryMemoryIllustration`)

File komponen: `src/components/illustrations/GalleryMemoryIllustration.tsx`

Ukuran frame foto polaroid diatur pada pembungkusnya di file `src/components/scenes/Scene06Gallery.tsx`:

1. **Ukuran Kartu Polaroid di Grid**:
   ```tsx
   // Pada Scene06Gallery.tsx:
   <div className="relative h-60 rounded-2xl overflow-hidden border border-[#DCE8C8]">
     <GalleryMemoryIllustration sceneType={item.sceneType} />
   </div>
   ```
   > Ubah `h-60` menjadi `h-72` jika ingin polaroid lebih tinggi, atau `h-48` jika ingin lebih pendek.

2. **Ukuran Gambar Modal Popup (Lightbox)**:
   ```tsx
   // Pada Scene06Gallery.tsx (Bagian Lightbox):
   <div className="h-72 rounded-2xl overflow-hidden border-2 border-[#C7D9AA] mb-4">
     <GalleryMemoryIllustration sceneType={filteredGallery[lightboxIndex].sceneType} />
   </div>
   ```
   > Ubah `h-72` menjadi `h-96` jika ingin gambar pratinjau popup lebih besar.

---

### E. Tabel Nilai Dimensi Tailwind CSS yang Umum

| Tailwind Class | Ukuran dalam Pixel (px) |
|---|---|
| `w-16 h-16` | 64px × 64px |
| `w-24 h-24` | 96px × 96px |
| `w-28 h-28` | 112px × 112px |
| `w-36 h-36` | 144px × 144px |
| `w-40 h-44` | 160px × 176px |
| `w-48 h-48` | 192px × 192px |
| `w-64 h-72` | 256px × 288px |
| `w-72 h-80` | 288px × 320px |
| `w-80 h-96` | 320px × 384px |
| `w-96 h-[450px]` | 384px × 450px |

> **Tips:** Anda juga bisa menggunakan nilai custom pixel langsung di Tailwind, misalnya: `className="w-[350px] h-[420px]"`.

---

## 7. Personalisasi Nama Tamu

Undangan ini mendukung personalisasi nama tamu undangan secara otomatis dari URL:

### Format Tautan:
- **Prioritas Utama**: `https://domain-anda.com/?to=Nama%20Tamu`
- **Fallback Tambahan**: `https://domain-anda.com/?guest=Nama%20Tamu`

### Bagian yang Terpengaruh Otomatis:
1. **Header Bar**: Menampilkan badge `Guest: Nama Tamu`.
2. **Scene 01 Hero**: Menampilkan badge *"DEAR, NAMA TAMU ♡"*.
3. **Scene 09 Surat Pribadi**: Salam pembuka otomatis menjadi *"Dear Nama Tamu,"*.
4. **Scene 10 RSVP**: Input nama tamu otomatis terisi nama yang ada di URL.
5. **Judul Tab Browser**: Berubah menjadi *"Dear Nama Tamu ♡ — Nadia & Raka Wedding Invitation"*.

### Mencoba Simulator:
Di bagian atas halaman, klik tombol **"Test ?to= Guest URL"** untuk menguji nama tamu secara langsung tanpa harus me-refresh browser.

---

## 8. Cara Menjalankan Proyek di Komputer Lokal

### 1. Masuk ke direktori proyek:
```bash
cd wedding-matcha
```

### 2. Jalankan server pengembangan (Dev Server):
```bash
npm run dev
```
Buka browser di: [http://localhost:3000](http://localhost:3000)

### 3. Build untuk produksi (Production Build):
```bash
npm run build
npm run start
```

---

*Semoga panduan ini membantu dalam membaca, mengedit, dan mengkustomisasi undangan pernikahan Nadia & Raka! 🍓🍵*
