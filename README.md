# 🍵🍓 Nadia & Raka — Matcha & Strawberry Wedding Invitation (Next.js)

Undangan pernikahan digital interaktif bertema **Matcha & Strawberry Café** yang dibangun dengan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**.

Tampilan, posisi, dan estetika visual 100% terjaga dan identik dengan desain asli, namun kode kini telah direfaktor menjadi arsitektur modular yang rapi, mudah dibaca, dan mudah diedit.

---

## 🚀 Cara Menjalankan Proyek

1. **Install dependensi** (jika baru pertama kali clone):
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka browser di: [http://localhost:3000](http://localhost:3000)

3. **Build untuk produksi**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📖 Dokumentasi Lengkap

Panduan lengkap mengenai:
- 📂 **Struktur Folder & Penjelasan Setiap File**
- ✍️ **Cara Mengubah Nama Pengantin, Tanggal, Tempat, dan Cerita** (di `src/config/wedding.ts`)
- 🖼️ **Panduan Mengubah Ukuran Gambar & Ilustrasi SVG** (Cangkir, Stroberi, Kunafa, Polaroid)
- 💌 **Personalisasi Nama Tamu** via parameter URL `?to=Nama%20Tamu`

👉 Silakan baca file [DOCUMENTATION.md](file:///c:/Users/Muhammad.Farhat/project/wedding-matcha/DOCUMENTATION.md).

---

## 📁 Struktur Ringkas Proyek

```text
src/
├── app/                  # Next.js App Router (layout.tsx, page.tsx, globals.css)
├── config/wedding.ts     # ⭐ PUSAT KONTEN (Edit nama, tanggal, venue, dll di sini)
├── types/wedding.ts      # TypeScript interfaces
├── lib/                  # Web Audio Engine & Calendar Helpers
├── hooks/                # useGuestName hook (?to= parameter)
└── components/
    ├── illustrations/    # SVG Ilustrasi (StrawberryMatchaCup, KawaiiStrawberry, dll)
    ├── layout/           # Header Bar & Floating Audio Controls
    └── scenes/           # 12 Scene Alur Undangan (Hero, Story, RSVP, Guestbook, dll)
```
