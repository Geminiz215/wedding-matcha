import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Heart,
  Calendar,
  MapPin,
  Clock,
  Music,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Download,
  UserCheck,
  Users,
  Coffee,
  Camera,
  X,
  Eye,
  Share2,
  Copy,
  Check,
  Gift,
  BookOpen,
  Star
} from 'lucide-react';

/**
 * ============================================================================
 * CENTRALIZED WEDDING CONFIGURATION (config/wedding.ts equivalent)
 * ============================================================================
 * Edit all wedding details, dates, venues, story milestones, and gallery items
 * in one centralized place.
 */
const WEDDING_CONFIG = {
  couple: {
    bride: {
      nickname: 'Nadia',
      fullName: 'Nadia Larasati Putri, S.Ds.',
      parents: 'Putri Pertama dari Bpk. Hendra Wijaya & Ibu Sofia Kartika',
      flavorTitle: 'A LITTLE SWEET',
      flavorTag: 'Fresh Strawberry Puree 🍓',
      personality:
        'Warm, expressive, joyful, and full of sweet surprises. Loves sunny café mornings, strawberry shortcake, polaroid cameras, and spontaneous weekend road trips.',
      traits: ['Sweet & Affectionate', 'Dessert Enthusiast', 'Creative Soul', 'Morning Sunshine']
    },
    groom: {
      nickname: 'Raka',
      fullName: 'Raka Pradipta Mahendra, S.Ars.',
      parents: 'Putra Kedua dari Bpk. Surya Mahendra & Ibu Dewi Anggraini',
      flavorTitle: 'A LITTLE CALM',
      flavorTag: 'Ceremonial Uji Matcha 🍵',
      personality:
        'Calm, grounded, comforting, and quietly thoughtful. Loves slow pour-over tea rituals, architectural sketches, rainy afternoon playlists, and making Nadia laugh.',
      traits: ['Calm & Comforting', 'Matcha Barista', 'Gentle Listener', 'Steady Warmth']
    }
  },
  weddingDateISO: '2027-10-24T08:00:00+07:00',
  weddingDateDisplay: '24 OCTOBER 2027',
  weddingDayDisplay: 'Minggu, 24 Oktober 2027',
  timezone: 'WIB (UTC+7 • Jakarta)',
  hashtag: '#NadiaRakaSweetBlend',
  events: {
    akad: {
      title: 'AKAD NIKAH',
      subtitle: 'The Sacred Vows',
      dayDate: 'Minggu, 24 Oktober 2027',
      time: '08.00 – 10.00 WIB',
      startISO: '20271024T010000Z',
      endISO: '20271024T030000Z',
      venueName: 'The Botanical Glasshouse Conservatory',
      address: 'Jl. Asia Afrika No. 8, Gelora Senayan, Kec. Tanah Abang, Kota Jakarta Pusat 10270',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Senayan+Jakarta+Pusat+Glasshouse',
      note: 'Intimate morning ceremony surrounded by lush greenery and warm sunlight.'
    },
    resepsi: {
      title: 'RESEPSI & CAFÉ SOIRÉE',
      subtitle: 'Sweet Garden Celebration',
      dayDate: 'Minggu, 24 Oktober 2027',
      time: '11.00 – 14.00 WIB',
      startISO: '20271024T040000Z',
      endISO: '20271024T070000Z',
      venueName: 'The Botanical Glasshouse Conservatory — Grand Lawn',
      address: 'Jl. Asia Afrika No. 8, Gelora Senayan, Kec. Tanah Abang, Kota Jakarta Pusat 10270',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Senayan+Jakarta+Pusat+Glasshouse',
      note: 'Featuring our signature live Matcha & Strawberry Latte Bar and artisanal dessert station.'
    }
  },
  storyTimeline: [
    {
      id: 'first-sip',
      step: 'RECIPE 01 • MAY 2023',
      title: 'FIRST SIP',
      subtitle: 'The day we met.',
      location: 'Kissa Matcha Bar, Kemang',
      description:
        'It started on a rainy Saturday afternoon when we accidentally reached for the last Matcha Pistachio Kunafa pastry at the counter. Raka offered to split it in half, and Nadia ordered an iced strawberry matcha latte to share. Two hours of conversation felt like five minutes.',
      recipeNote: 'Base: 30ml accidental meeting + 2 shy smiles',
      stamp: '100% KISMET',
      rotation: '-2deg',
      accent: 'matcha',
      illustrationType: 'cup'
    },
    {
      id: 'little-sweeter',
      step: 'RECIPE 02 • DECEMBER 2024',
      title: 'A LITTLE SWEETER',
      subtitle: 'When friendship became something more.',
      location: 'Bandung Highland Tea Garden',
      description:
        'After months of weekend café-hopping and exchanging playlists, a misty morning walk through a tea plantation made everything clear. Raka brought a thermos of warm matcha; Nadia brought fresh strawberries. Under a tiny umbrella, friendship bloomed into love.',
      recipeNote: 'Add: 50g crushed strawberries + endless late-night talks',
      stamp: 'EXTRA SWEET',
      rotation: '2deg',
      accent: 'strawberry',
      illustrationType: 'strawberry'
    },
    {
      id: 'favorite-blend',
      step: 'RECIPE 03 • AUGUST 2026',
      title: 'OUR FAVORITE BLEND',
      subtitle: 'The moments that made us closer.',
      location: 'Kyoto & Uji, Japan',
      description:
        'We learned that we didn’t have to be the same to be right for each other. Raka’s calm steadiness became Nadia’s safe harbor, and Nadia’s bubbly laughter became Raka’s favorite melody. Earthy matcha and bright strawberry—two opposites creating harmony.',
      recipeNote: 'Swirl gently: Earthy calm + Joyful sweetness',
      stamp: 'PERFECT RATIO',
      rotation: '-1.5deg',
      accent: 'cream',
      illustrationType: 'pastry'
    },
    {
      id: 'forever-making',
      step: 'RECIPE 04 • 24 OCTOBER 2027',
      title: 'FOREVER IN THE MAKING',
      subtitle: 'The decision to spend our lives together.',
      location: 'Jakarta, Indonesia',
      description:
        'With a custom recipe card hidden at the bottom of a strawberry matcha cup that read "Will you be my forever blend?", Nadia said the easiest "Yes!" Now, we are ready to pour our hearts into the sweetest chapter of our lives with all of you.',
      recipeNote: 'Serve with: Warm blessings, family, and forever love',
      stamp: 'BREWED FOR LIFE',
      rotation: '1.8deg',
      accent: 'both',
      illustrationType: 'cup'
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Sunday Morning Matcha Ritual',
      category: 'Café Dates',
      aspect: 'portrait',
      date: 'Kyoto, Autumn 2025',
      caption: 'Whisking ceremonial Uji matcha while Nadia picks the sweetest strawberries.',
      bgGradient: 'from-[#DCE8C8] via-[#FFF9EE] to-[#FBE0E2]',
      sticker: '🍵',
      rotation: '-2.5deg',
      sceneType: 'cafe-table'
    },
    {
      id: 'gal-2',
      title: 'Golden Hour in the Strawberry Greenhouse',
      category: 'Pre-Wedding',
      aspect: 'landscape',
      date: 'Lembang, Spring 2026',
      caption: 'Surrounded by rows of ripe red berries and soft afternoon sunbeams.',
      bgGradient: 'from-[#FBE0E2] via-[#FFF9EE] to-[#C7D9AA]',
      sticker: '🍓',
      rotation: '2deg',
      sceneType: 'greenhouse'
    },
    {
      id: 'gal-3',
      title: 'Splitting Our Favorite Kunafa Bun',
      category: 'Candid',
      aspect: 'square',
      date: 'Senopati, Jakarta',
      caption: 'Back where it all began—still sharing the crispy pistachio center every weekend.',
      bgGradient: 'from-[#FFF9EE] via-[#DCE8C8] to-[#F29BA6]/30',
      sticker: '🥐',
      rotation: '-1.5deg',
      sceneType: 'bakery'
    },
    {
      id: 'gal-4',
      title: 'Rainy Window & Polaroid Smiles',
      category: 'Candid',
      aspect: 'portrait',
      date: 'Menteng, Jakarta',
      caption: 'Two cups on a wooden table, raindrops on glass, and nowhere else we’d rather be.',
      bgGradient: 'from-[#C7D9AA]/60 via-[#FFF9EE] to-[#FBE0E2]',
      sticker: '📸',
      rotation: '2.8deg',
      sceneType: 'window'
    },
    {
      id: 'gal-5',
      title: 'Picnic Under the Blossom Trees',
      category: 'Pre-Wedding',
      aspect: 'landscape',
      date: 'Botanical Garden, 2026',
      caption: 'A linen blanket, handwritten letters, and our signature two-toned drinks.',
      bgGradient: 'from-[#FBE0E2] via-[#FFF9EE] to-[#DCE8C8]',
      sticker: '🌸',
      rotation: '-2deg',
      sceneType: 'picnic'
    },
    {
      id: 'gal-6',
      title: 'The "Yes!" Cup Moment',
      category: 'Café Dates',
      aspect: 'square',
      date: 'Our Favorite Corner, 2026',
      caption: 'Right after Nadia read the secret note at the bottom of the cup.',
      bgGradient: 'from-[#DCE8C8] via-[#FBE0E2]/50 to-[#FFF9EE]',
      sticker: '💍',
      rotation: '1.5deg',
      sceneType: 'proposal'
    }
  ],
  initialWishes: [
    {
      id: 'w-1',
      name: 'Fathi Farhat',
      attendance: 'Hadir',
      guests: 2,
      drink: 'Iced Strawberry Matcha Latte 🍓🍵',
      message:
        'Selamat menempuh hidup baru Nadia & Raka! Semoga pernikahannya selalu manis seperti strawberry dan menenangkan seperti hangatnya matcha. Can’t wait to celebrate with you both!',
      timestamp: '2 jam yang lalu',
      color: 'pink'
    },
    {
      id: 'w-2',
      name: 'Alya & Dimas',
      attendance: 'Hadir',
      guests: 2,
      drink: 'Ceremonial Uji Matcha Oat 🍵',
      message:
        'Literally the cutest couple and the most adorable wedding invitation ever! Semoga lancar sampai hari H, langgeng selamanya sampai kakek nenek ya!',
      timestamp: '5 jam yang lalu',
      color: 'green'
    },
    {
      id: 'w-3',
      name: 'Tante Ratna & Keluarga',
      attendance: 'Hadir',
      guests: 3,
      drink: 'Fresh Hokkaido Strawberry Milk 🍓',
      message:
        'Barakallahu lakuma wa baraka alaikuma wa jama’a bainakuma fii khair. Doa terbaik untuk ananda Nadia dan Raka, semoga menjadi keluarga sakinah, mawaddah, warahmah.',
      timestamp: '1 hari yang lalu',
      color: 'cream'
    },
    {
      id: 'w-4',
      name: 'Kevin Tanoto',
      attendance: 'Belum Bisa Hadir',
      guests: 1,
      drink: 'Matcha Pistachio Kunafa 🥐',
      message:
        'Happy wedding Raka & Nadia! So sorry I’ll be in Tokyo on October 24th, but I’ll definitely raise a glass of Uji matcha for you two from afar! Happily ever after!',
      timestamp: '2 hari yang lalu',
      color: 'green'
    }
  ]
};

/**
 * ============================================================================
 * PROVIDED VISUAL ASSETS — FAITHFUL MULTI-LAYERED SVG RECREATIONS
 * ============================================================================
 * Recreated directly from the 3 user-supplied SVG illustrations:
 * 1. StrawberryMatchaCupSVG (gemini-svg (1).svg)
 * 2. KawaiiStrawberrySVG (gemini-svg (2).svg)
 * 3. MatchaKunafaPastrySVG (gemini-svg (3).svg)
 */

// 1. PRIMARY HERO ASSET: STRAWBERRY MATCHA LATTE CUP (gemini-svg (1).svg)
const StrawberryMatchaCupSVG = ({
  className = 'w-72 h-72',
  interactive = true,
  blendLevel = 50,
  reducedMotion = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative select-none flex items-center justify-center ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-sm"
        role="img"
        aria-label="Cute Strawberry Matcha Latte Cup Illustration"
      >
        <defs>
          {/* Outer & Inner Pastel Halo Gradients */}
          <radialGradient id="outerPinkHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF0F3" />
            <stop offset="100%" stopColor="#FFF4F6" stopOpacity="0.95" />
          </radialGradient>

          {/* Matcha Top Layer Gradient */}
          <linearGradient id="matchaLayerGrad" x1="200" y1="180" x2="200" y2="305" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6BA346" />
            <stop offset="55%" stopColor="#8EC364" />
            <stop offset="100%" stopColor="#C5E2A6" />
          </linearGradient>

          {/* Matcha Foam Sub-Layer */}
          <linearGradient id="matchaFoamGrad" x1="200" y1="245" x2="200" y2="325" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#CBE4B3" />
            <stop offset="100%" stopColor="#DFF0CE" />
          </linearGradient>

          {/* Strawberry Bottom Layer Gradient */}
          <linearGradient id="strawberryLayerGrad" x1="200" y1="335" x2="200" y2="445" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F06A93" />
            <stop offset="42%" stopColor="#E62A65" />
            <stop offset="100%" stopColor="#BA164B" />
          </linearGradient>

          {/* Pink Straw Gradient */}
          <linearGradient id="pinkStrawGrad" x1="215" y1="45" x2="255" y2="175" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF5D8F" />
            <stop offset="50%" stopColor="#FF85A9" />
            <stop offset="100%" stopColor="#FF5D8F" />
          </linearGradient>

          {/* Cup Body Clip Path */}
          <clipPath id="cupInteriorClip">
            <path d="M114 184 H286 L268 415 C266 432 252 444 235 444 H165 C148 444 134 432 132 415 L114 184 Z" />
          </clipPath>
        </defs>

        {/* Background Concentric Pastel Circles (Exact match to gemini-svg (1).svg) */}
        <circle
          cx="200"
          cy="260"
          r="190"
          fill="url(#outerPinkHalo)"
          className={!reducedMotion ? 'transition-transform duration-700' : ''}
          style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1)' }}
        />
        <circle
          cx="200"
          cy="260"
          r="150"
          fill="#EDF4EA"
          className={!reducedMotion ? 'transition-transform duration-700' : ''}
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />

        {/* Soft Oval Floor Shadow */}
        <ellipse
          cx="200"
          cy="452"
          rx="75"
          ry="12"
          fill="#DDE2E5"
          className={!reducedMotion ? 'animate-pulse' : ''}
        />

        {/* Main Floating Cup Group */}
        <g
          className={!reducedMotion ? 'cup-float-group' : ''}
          style={{
            transform: isHovered ? 'translateY(-6px) rotate(-1deg)' : 'translateY(0px)',
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* DOME LID BACK FILL */}
          <path
            d="M108 173 C108 122 149 104 200 104 C251 104 292 122 292 173 Z"
            fill="#F8FBF8"
            fillOpacity="0.65"
            stroke="#CBD5E1"
            strokeWidth="2.5"
          />

          {/* Dome Lid Inner Highlight Arc */}
          <path
            d="M128 158 C135 125 162 112 192 110"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* PINK STRAW (Passing through Dome Lid) */}
          <g
            style={{
              transformOrigin: '225px 170px',
              transform: isHovered ? 'rotate(3deg) translateY(-3px)' : 'rotate(0deg)',
              transition: 'transform 0.4s ease'
            }}
          >
            <path
              d="M236 47 L251 50 L226 174 L210 174 Z"
              fill="url(#pinkStrawGrad)"
              rx="3"
            />
            {/* Straw Vertical Gloss Highlight */}
            <path
              d="M241 50 L216 172"
              stroke="#FFB8CE"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Straw Rounded Top Tip */}
            <ellipse cx="243.5" cy="48.5" rx="7.8" ry="2.5" transform="rotate(11 243.5 48.5)" fill="#FF477E" />
          </g>

          {/* Dome Lid Straw Hole Ring */}
          <ellipse
            cx="222"
            cy="109"
            rx="18"
            ry="5.5"
            transform="rotate(6 222 109)"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="2"
          />

          {/* SLICED STRAWBERRY FLOATING INSIDE THE DOME LID (Left top) */}
          <g
            className={!reducedMotion ? 'berry-bob-slow' : ''}
            style={{
              transformOrigin: '160px 145px',
              transform: isHovered ? 'translateY(-4px) rotate(-8deg)' : 'none',
              transition: 'transform 0.5s ease'
            }}
          >
            {/* Outer Red Slice */}
            <path
              d="M148 126 C158 119 172 128 176 144 C179 157 173 169 166 170 C158 171 146 159 143 145 C141 135 143 129 148 126 Z"
              fill="#EC3868"
            />
            {/* Inner Light Pink Flesh */}
            <path
              d="M151 131 C158 126 168 133 171 145 C173 155 169 163 164 164 C158 164 150 155 148 145 C146 137 148 133 151 131 Z"
              fill="#F9A8BC"
            />
            {/* White Core Center */}
            <ellipse
              cx="160"
              cy="146"
              rx="4.2"
              ry="9.5"
              transform="rotate(-18 160 146)"
              fill="#FFF9FB"
            />
            {/* Cute Green Calyx Leaf on Slice */}
            <path
              d="M145 130 C148 122 157 119 164 124 C157 125 150 127 145 130 Z"
              fill="#559E43"
            />
          </g>

          {/* CUP BODY OUTER SHELL (Background Glass) */}
          <path
            d="M110 180 H290 L271 416 C269 435 253 447 234 447 H166 C147 447 131 435 129 416 L110 180 Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="4"
          />

          {/* CUP INTERIOR LIQUID LAYERS (Clipped to Cup Shape) */}
          <g clipPath="url(#cupInteriorClip)">
            {/* 1. TOP LAYER: MATCHA GREEN TEA */}
            <rect x="105" y="180" width="190" height="145" fill="url(#matchaLayerGrad)" />

            {/* Wavy Soft Matcha Foam Transition */}
            <path
              d="M108 252 C126 244 138 258 156 266 C176 274 196 254 222 259 C248 264 265 278 292 269 L292 330 L108 330 Z"
              fill="url(#matchaFoamGrad)"
            />

            {/* Matcha Powder Specks */}
            <circle cx="190" cy="205" r="2" fill="#4D7C32" opacity="0.7" />
            <circle cx="240" cy="195" r="1.6" fill="#4D7C32" opacity="0.6" />
            <circle cx="170" cy="240" r="1.8" fill="#4D7C32" opacity="0.6" />
            <circle cx="265" cy="235" r="1.6" fill="#4D7C32" opacity="0.6" />

            {/* 4 TRANSLUCENT ROUNDED ICE CUBES */}
            <g
              style={{
                transform: `translateY(${(blendLevel - 50) * 0.08}px)`,
                transition: 'transform 0.3s ease'
              }}
            >
              {/* Ice Cube 1 (Top Left) */}
              <rect
                x="134"
                y="195"
                width="39"
                height="39"
                rx="9"
                transform="rotate(-11 153 214)"
                fill="#FFFFFF"
                fillOpacity="0.28"
                stroke="#E9F5DB"
                strokeWidth="2"
              />
              {/* Ice Cube 2 (Top Right) */}
              <rect
                x="212"
                y="210"
                width="43"
                height="43"
                rx="10"
                transform="rotate(17 233 231)"
                fill="#FFFFFF"
                fillOpacity="0.28"
                stroke="#E9F5DB"
                strokeWidth="2"
              />
              {/* Ice Cube 3 (Middle Left) */}
              <rect
                x="159"
                y="254"
                width="41"
                height="41"
                rx="9"
                transform="rotate(7 179 274)"
                fill="#FFFFFF"
                fillOpacity="0.32"
                stroke="#F2F9EB"
                strokeWidth="2"
              />
              {/* Ice Cube 4 (Lower Right) */}
              <rect
                x="212"
                y="280"
                width="38"
                height="38"
                rx="8"
                transform="rotate(-19 231 299)"
                fill="#FFFFFF"
                fillOpacity="0.32"
                stroke="#F2F9EB"
                strokeWidth="2"
              />
            </g>

            {/* 2. MIDDLE LAYER: CREAMY MILK WAVE */}
            <path
              d="M108 265 C122 286 144 295 168 287 C188 280 202 278 220 295 C238 312 254 328 272 308 C282 297 288 284 294 272 L294 378 L108 378 Z"
              fill="#FFFFFF"
            />

            {/* 3. BOTTOM LAYER: STRAWBERRY MILK & PUREE */}
            {/* Upper Soft Strawberry Milk Wave */}
            <path
              d="M110 350 C134 332 154 339 175 349 C198 360 220 354 238 331 C254 311 271 314 290 342 L290 450 L110 450 Z"
              fill="#F3A6BE"
            />

            {/* Rich Strawberry Puree Wave */}
            <path
              d="M110 380 C136 376 155 360 182 361 C208 362 222 344 244 342 C264 340 276 358 290 374 L290 450 L110 450 Z"
              fill="url(#strawberryLayerGrad)"
            />

            {/* Deep Ruby Bottom Blend */}
            <rect x="110" y="380" width="180" height="70" fill="url(#strawberryLayerGrad)" opacity="0.88" />

            {/* DARK RUBY STRAWBERRY CHUNKS & DICES AT BOTTOM */}
            <g
              style={{
                transform: isHovered ? 'translateY(-3px)' : 'translateY(0px)',
                transition: 'transform 0.5s ease'
              }}
            >
              <polygon points="136,372 151,365 156,381 139,386" fill="#A31845" opacity="0.7" />
              <polygon points="145,396 161,390 165,407 149,412" fill="#8C133B" />
              <polygon points="160,425 176,420 180,435 163,438" fill="#8C133B" />
              <polygon points="185,409 205,405 200,425 180,420" fill="#8C133B" />
              <polygon points="215,424 235,419 240,433 219,436" fill="#8C133B" />
              <polygon points="220,398 226,385 244,391 237,408" fill="#8C133B" />
              <polygon points="240,382 246,368 262,375 255,390" fill="#A31845" />

              {/* Tiny Yellow Strawberry Seeds */}
              <ellipse cx="150" cy="385" rx="1.6" ry="2.8" transform="rotate(20 150 385)" fill="#F7D88B" />
              <ellipse cx="145" cy="420" rx="1.6" ry="2.8" transform="rotate(-25 145 420)" fill="#F7D88B" />
              <ellipse cx="175" cy="398" rx="1.6" ry="2.8" transform="rotate(-15 175 398)" fill="#F7D88B" />
              <ellipse cx="195" cy="430" rx="1.6" ry="2.8" transform="rotate(10 195 430)" fill="#F7D88B" />
              <ellipse cx="205" cy="378" rx="1.6" ry="2.8" transform="rotate(25 205 378)" fill="#F7D88B" />
              <ellipse cx="235" cy="400" rx="1.6" ry="2.8" transform="rotate(-30 235 400)" fill="#F7D88B" />
              <ellipse cx="250" cy="415" rx="1.6" ry="2.8" transform="rotate(15 250 415)" fill="#F7D88B" />
            </g>
          </g>

          {/* CENTER CIRCULAR CAFE STICKER LABEL ON CUP */}
          <g
            style={{
              transformOrigin: '200px 310px',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.4s ease'
            }}
          >
            <circle cx="200" cy="310" r="24" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
            {/* Tiny Cute Strawberry Icon inside Sticker */}
            <path
              d="M193 305 C193 301 207 301 207 305 C208 312 204 321 200 323 C196 321 192 312 193 305 Z"
              fill="#E61E50"
            />
            {/* Sticker Berry Leaf Crown */}
            <path
              d="M194 303 C196 299 204 299 206 303 C203 304 197 304 194 303 Z"
              fill="#559E43"
            />
            {/* Sticker Berry Tiny Seeds */}
            <circle cx="198" cy="309" r="0.9" fill="#FFF" />
            <circle cx="202" cy="311" r="0.9" fill="#FFF" />
            <circle cx="199" cy="315" r="0.9" fill="#FFF" />
          </g>

          {/* VERTICAL GLASS REFLECTION SHINE LINES ON LEFT OF CUP */}
          <path
            d="M124 195 L141 410"
            stroke="#FFFFFF"
            strokeWidth="6.5"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M134 220 L147 375"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* CUP FLAT RIM BAR */}
          <rect
            x="102"
            y="173"
            width="196"
            height="11"
            rx="5.5"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="2.5"
          />
        </g>

        {/* FLOATING AMBIENT HEARTS & SPARKLES AROUND THE CUP */}
        {!reducedMotion && (
          <g className="pointer-events-none">
            {/* Floating Mini Strawberry Left */}
            <g className="float-slow-1" transform="translate(55, 195)">
              <path
                d="M12 6 C18 2 26 8 26 16 C26 24 18 30 14 31 C10 30 4 22 6 14 C7 9 9 7 12 6 Z"
                fill="#F29BA6"
                opacity="0.85"
              />
              <circle cx="15" cy="16" r="1.3" fill="#FFF9EE" />
              <circle cx="19" cy="21" r="1.3" fill="#FFF9EE" />
            </g>

            {/* Floating Matcha Leaf Right */}
            <g className="float-slow-2" transform="translate(318, 225) rotate(25)">
              <path
                d="M0 18 C6 4 22 0 32 6 C26 20 12 26 0 18 Z"
                fill="#8FAF78"
                opacity="0.85"
              />
              <path d="M3 17 Q16 11 28 7" stroke="#536B45" strokeWidth="1.5" fill="none" />
            </g>

            {/* Cute Sparkle Top Left */}
            <path
              d="M88 110 Q96 110 96 102 Q96 110 104 110 Q96 110 96 118 Q96 110 88 110 Z"
              fill="#F5B841"
              className="animate-pulse"
            />
            {/* Cute Heart Top Right */}
            <path
              d="M312 128 C309 123 301 124 301 131 C301 137 312 143 312 143 C312 143 323 137 323 131 C323 124 315 123 312 128 Z"
              fill="#F29BA6"
              opacity="0.85"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

// 2. SECOND PROVIDED ASSET: KAWAII STRAWBERRY CHARACTER (gemini-svg (2).svg)
const KawaiiStrawberrySVG = ({ className = 'w-48 h-48', reducedMotion = false }) => {
  return (
    <div className={`relative select-none flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        role="img"
        aria-label="Cute Kawaii Strawberry Illustration"
      >
        <defs>
          <radialGradient id="kawaiiBerryGrad" cx="45%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#FF6B8B" />
            <stop offset="55%" stopColor="#F4365C" />
            <stop offset="100%" stopColor="#D6244A" />
          </radialGradient>
        </defs>

        {/* Concentric Soft Pink Aura Circles (Exact match to gemini-svg (2).svg) */}
        <circle cx="200" cy="205" r="165" fill="#FFF3F5" />
        <circle cx="200" cy="205" r="130" fill="#FFE8ED" opacity="0.6" />

        {/* Soft Purple-Pink Shadow Under Strawberry */}
        <ellipse cx="200" cy="346" rx="58" ry="11" fill="#F3D6E4" />
        <ellipse cx="200" cy="346" rx="45" ry="7.5" fill="#E8BBD2" />

        {/* Ambient Floating Hearts & Sparkles from Asset 2 */}
        <path
          d="M100 95 L104 107 L116 111 L104 115 L100 127 L96 115 L84 111 L96 107 Z"
          fill="#FFB703"
          className={!reducedMotion ? 'animate-pulse' : ''}
        />
        <path
          d="M318 263 L321 271 L329 274 L321 277 L318 285 L315 277 L307 274 L315 271 Z"
          fill="#FFB703"
          className={!reducedMotion ? 'animate-pulse' : ''}
        />
        {/* Left Floating Pink Heart */}
        <path
          d="M82 272 C78 265 68 267 68 276 C68 283 82 291 82 291 C82 291 93 280 93 273 C93 265 84 265 82 272 Z"
          fill="#FF9EBB"
        />
        {/* Top Right Floating Pink Heart */}
        <path
          d="M290 122 C285 112 272 115 272 126 C272 136 288 147 288 147 C288 147 306 135 306 124 C306 114 294 113 290 122 Z"
          fill="#FF95B3"
        />
        <circle cx="75" cy="180" r="6" fill="#FFD6E0" />
        <circle cx="325" cy="195" r="7" fill="#FFD6E0" />
        <circle cx="275" cy="86" r="5" fill="#95D5B2" />
        <circle cx="120" cy="324" r="4" fill="#FFCA3A" />

        {/* MAIN KAWAII STRAWBERRY GROUP */}
        <g className={!reducedMotion ? 'cup-float-group' : ''}>
          {/* Curved Green Stem */}
          <path
            d="M195 98 C198 78 208 65 218 62 C222 61 224 66 220 69 C212 73 206 84 204 98 Z"
            fill="#4CAF7D"
            stroke="#1B4332"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Back Dark Green Leaves */}
          <path
            d="M190 100 C155 82 120 96 124 118 C126 125 148 126 175 118 Z"
            fill="#2D936C"
            stroke="#2B192E"
            strokeWidth="5.5"
            strokeLinejoin="round"
          />
          <path
            d="M210 100 C245 82 280 96 276 118 C274 125 252 126 225 118 Z"
            fill="#2D936C"
            stroke="#2B192E"
            strokeWidth="5.5"
            strokeLinejoin="round"
          />

          {/* Plump Strawberry Body */}
          <path
            d="M200 104 C258 104 292 140 292 195 C292 262 246 331 200 331 C154 331 108 262 108 195 C108 140 142 104 200 104 Z"
            fill="url(#kawaiiBerryGrad)"
            stroke="#3D1220"
            strokeWidth="6.5"
          />

          {/* Glossy Left Highlight Curve */}
          <path
            d="M136 154 C126 178 126 205 132 222"
            stroke="#FFA6BE"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <circle cx="141" cy="243" r="4.5" fill="#FFA6BE" />

          {/* Yellow Strawberry Seeds */}
          <g fill="#FFE169">
            <ellipse cx="142" cy="155" rx="3.2" ry="5.5" transform="rotate(15 142 155)" />
            <ellipse cx="158" cy="175" rx="3.2" ry="5.5" transform="rotate(5 158 175)" />
            <ellipse cx="200" cy="162" rx="3.2" ry="5.5" />
            <ellipse cx="242" cy="175" rx="3.2" ry="5.5" transform="rotate(-5 242 175)" />
            <ellipse cx="258" cy="155" rx="3.2" ry="5.5" transform="rotate(-15 258 155)" />
            <ellipse cx="132" cy="195" rx="3.2" ry="5.5" transform="rotate(10 132 195)" />
            <ellipse cx="268" cy="195" rx="3.2" ry="5.5" transform="rotate(-10 268 195)" />
            <ellipse cx="142" cy="245" rx="3.2" ry="5.5" transform="rotate(-10 142 245)" />
            <ellipse cx="258" cy="245" rx="3.2" ry="5.5" transform="rotate(10 258 245)" />
            <ellipse cx="164" cy="278" rx="3.2" ry="5.5" transform="rotate(-12 164 278)" />
            <ellipse cx="200" cy="282" rx="3.2" ry="5.5" />
            <ellipse cx="236" cy="278" rx="3.2" ry="5.5" transform="rotate(12 236 278)" />
            <ellipse cx="182" cy="304" rx="3.2" ry="5.5" transform="rotate(-8 182 304)" />
            <ellipse cx="218" cy="304" rx="3.2" ry="5.5" transform="rotate(8 218 304)" />
          </g>

          {/* Foreground Bright Green Leaf Crown */}
          <path
            d="M140 125 C155 100 180 96 200 96 C220 96 245 100 260 125 C242 132 225 126 216 116 C213 132 206 147 200 147 C194 147 187 132 184 116 C175 126 158 132 140 125 Z"
            fill="#68D33B"
            stroke="#3D1220"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          {/* Leaf Crown Shine */}
          <path
            d="M162 115 C175 106 186 105 194 106"
            stroke="#B8F29C"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Cute White 5-Petal Blossom on Top Right of Crown */}
          <g transform="translate(238, 96)">
            <path
              d="M0 -14 C5 -14 7 -8 4 -4 C9 -6 14 -2 12 3 C10 8 4 7 2 4 C5 9 1 14 -4 12 C-9 10 -6 4 -4 2 C-9 5 -14 1 -12 -4 C-10 -9 -4 -7 -2 -4 C-5 -9 -4 -14 0 -14 Z"
              fill="#FFFFFF"
              stroke="#3D1220"
              strokeWidth="3.5"
            />
            <circle cx="0" cy="0" r="4.5" fill="#FFB703" stroke="#3D1220" strokeWidth="2" />
          </g>

          {/* KAWAII FACE DETAILS */}
          {/* Left Eye */}
          <circle cx="164" cy="208" r="11.5" fill="#2B0912" />
          <circle cx="161" cy="204" r="4.2" fill="#FFFFFF" />
          <circle cx="168" cy="212" r="2" fill="#FFFFFF" />

          {/* Right Eye */}
          <circle cx="236" cy="208" r="11.5" fill="#2B0912" />
          <circle cx="233" cy="204" r="4.2" fill="#FFFFFF" />
          <circle cx="240" cy="212" r="2" fill="#FFFFFF" />

          {/* Rosy Blush Cheeks with Hash Marks */}
          <ellipse cx="145" cy="224" rx="13" ry="6.5" fill="#FF2A6D" opacity="0.65" />
          <line x1="141" y1="222" x2="144" y2="226" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="147" y1="222" x2="150" y2="226" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

          <ellipse cx="255" cy="224" rx="13" ry="6.5" fill="#FF2A6D" opacity="0.65" />
          <line x1="251" y1="222" x2="254" y2="226" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="257" y1="222" x2="260" y2="226" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

          {/* Cute "w" Smiling Mouth with Pink Tongue */}
          <path
            d="M193 219 C193 229 207 229 207 219"
            fill="#FF7597"
            stroke="#2B0912"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M186 216 Q193 223 200 217 Q207 223 214 216"
            fill="none"
            stroke="#2B0912"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

// 3. THIRD PROVIDED ASSET: MATCHA PISTACHIO KUNAFA CHOCO PASTRY (gemini-svg (3).svg)
const MatchaKunafaPastrySVG = ({ className = 'w-48 h-48', reducedMotion = false }) => {
  return (
    <div className={`relative select-none flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        role="img"
        aria-label="Cute Matcha Pistachio Kunafa Choco Pastry Illustration"
      >
        <defs>
          <linearGradient id="cookieTopGrad" x1="200" y1="60" x2="200" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D68C45" />
            <stop offset="100%" stopColor="#B06825" />
          </linearGradient>
          <linearGradient id="cookieBaseGrad" x1="200" y1="140" x2="200" y2="315" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D68C45" />
            <stop offset="55%" stopColor="#B86F2A" />
            <stop offset="100%" stopColor="#8F511A" />
          </linearGradient>
          <linearGradient id="kunafaGreenGrad" x1="200" y1="165" x2="200" y2="312" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A7D96C" />
            <stop offset="50%" stopColor="#87C44B" />
            <stop offset="100%" stopColor="#6BA832" />
          </linearGradient>
        </defs>

        {/* Soft Cream Circular Aura (Exact match to gemini-svg (3).svg) */}
        <circle cx="200" cy="200" r="172" fill="#FDFBF7" />
        <circle cx="200" cy="200" r="142" fill="#F2F7EC" opacity="0.6" />

        {/* Floor Shadow */}
        <ellipse cx="200" cy="348" rx="125" ry="16" fill="#E2DFDC" />
        <ellipse cx="200" cy="348" rx="90" ry="11" fill="#CFCAC6" />

        {/* Golden Sparkles Around Pastry */}
        <path
          d="M85 95 L89 106 L100 110 L89 114 L85 125 L81 114 L70 110 L81 106 Z"
          fill="#F59E0B"
          className={!reducedMotion ? 'animate-pulse' : ''}
        />
        <path
          d="M322 86 L325 94 L333 97 L325 100 L322 108 L319 100 L311 97 L319 94 Z"
          fill="#F59E0B"
          className={!reducedMotion ? 'animate-pulse' : ''}
        />
        <circle cx="85" cy="315" r="4" fill="#4A2E20" />
        <circle cx="330" cy="284" r="5" fill="#B86F2A" />
        <circle cx="342" cy="272" r="3" fill="#7CB342" />

        {/* MAIN PASTRY GROUP */}
        <g className={!reducedMotion ? 'cup-float-group' : ''}>
          {/* Top Rounded Cookie Bun Dome */}
          <path
            d="M84 155 C88 88 138 62 200 62 C262 62 312 88 316 155 Z"
            fill="url(#cookieTopGrad)"
            stroke="#361E15"
            strokeWidth="6"
          />

          {/* Top Bun Crease Lines */}
          <path d="M140 94 C150 110 150 125 144 138" stroke="#7A4419" strokeWidth="4" strokeLinecap="round" />
          <path d="M195 72 C198 88 196 105 190 115" stroke="#7A4419" strokeWidth="4" strokeLinecap="round" />
          <path d="M244 90 C236 104 235 120 240 132" stroke="#7A4419" strokeWidth="4" strokeLinecap="round" />

          {/* Lower Wide Cookie Bowl Base */}
          <path
            d="M54 205 C54 150 100 138 200 138 C300 138 346 150 346 205 C346 276 292 315 200 315 C108 315 54 276 54 205 Z"
            fill="url(#cookieBaseGrad)"
            stroke="#361E15"
            strokeWidth="6.5"
          />

          {/* Cookie Crust Shine Highlights */}
          <path d="M68 192 C72 170 86 158 106 152" stroke="#EAB67E" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M332 192 C328 170 314 158 294 152" stroke="#EAB67E" strokeWidth="5.5" strokeLinecap="round" />

          {/* OVERFLOWING MELTING MATCHA PISTACHIO KUNAFA FILLING */}
          <path
            d="M82 206 C82 170 128 158 200 158 C272 158 318 170 318 206 C318 242 296 262 268 266 C252 268 250 296 238 296 C226 296 226 268 212 268 C196 268 194 313 178 313 C162 313 165 270 144 268 C124 266 118 286 106 286 C94 286 96 254 88 238 C84 228 82 218 82 206 Z"
            fill="url(#kunafaGreenGrad)"
            stroke="#361E15"
            strokeWidth="5.5"
            strokeLinejoin="round"
          />

          {/* Filling White Gloss Highlights & Drip Shines */}
          <path d="M98 196 C108 176 135 168 168 166" stroke="#E2F4CB" strokeWidth="5" strokeLinecap="round" />
          <path d="M168 278 L175 303" stroke="#E2F4CB" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M232 270 L236 287" stroke="#E2F4CB" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="106" cy="274" r="4.5" fill="#E2F4CB" />
          <circle cx="295" cy="236" r="5" fill="#CBE8A6" />

          {/* CRISPY GOLDEN KUNAFA KATAIFI SHREDS & PISTACHIO BITS */}
          <g strokeLinecap="round">
            {/* Golden & Orange Kunafa Shreds */}
            <line x1="122" y1="190" x2="155" y2="182" stroke="#F59E0B" strokeWidth="3.5" />
            <line x1="145" y1="202" x2="185" y2="180" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="165" y1="176" x2="198" y2="195" stroke="#D97706" strokeWidth="3.5" />
            <line x1="178" y1="198" x2="212" y2="178" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="205" y1="176" x2="238" y2="195" stroke="#F59E0B" strokeWidth="3.5" />
            <line x1="245" y1="178" x2="280" y2="200" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="248" y1="192" x2="288" y2="215" stroke="#D97706" strokeWidth="3.5" />
            <line x1="115" y1="208" x2="152" y2="225" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="108" y1="215" x2="146" y2="212" stroke="#D97706" strokeWidth="3.5" />
            <line x1="135" y1="234" x2="172" y2="215" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="164" y1="216" x2="202" y2="232" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="195" y1="210" x2="230" y2="202" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="180" y1="240" x2="218" y2="225" stroke="#D97706" strokeWidth="3.5" />
            <line x1="225" y1="236" x2="262" y2="214" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="258" y1="232" x2="292" y2="214" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="246" y1="242" x2="284" y2="224" stroke="#D97706" strokeWidth="3.5" />
            <line x1="142" y1="248" x2="176" y2="262" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="158" y1="255" x2="192" y2="246" stroke="#D97706" strokeWidth="3.5" />
            <line x1="172" y1="272" x2="190" y2="255" stroke="#FBBF24" strokeWidth="3.5" />
            <line x1="205" y1="255" x2="242" y2="242" stroke="#D97706" strokeWidth="3.5" />
            <line x1="218" y1="256" x2="242" y2="266" stroke="#FBBF24" strokeWidth="3.5" />

            {/* White Crispy Kataifi Strands */}
            <line x1="128" y1="198" x2="152" y2="194" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="198" y1="186" x2="225" y2="196" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="242" y1="204" x2="266" y2="194" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="186" y1="220" x2="212" y2="234" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="152" y1="236" x2="180" y2="232" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="232" y1="222" x2="252" y2="210" stroke="#FFFFFF" strokeWidth="2.2" />

            {/* Diced Green Pistachio Bits */}
            <rect x="136" y="186" width="9" height="9" rx="1.5" transform="rotate(-15 136 186)" fill="#4D7C2B" />
            <rect x="186" y="180" width="10" height="9" rx="1.5" transform="rotate(12 186 180)" fill="#4D7C2B" />
            <rect x="238" y="186" width="10" height="10" rx="1.5" transform="rotate(-20 238 186)" fill="#4D7C2B" />
            <rect x="158" y="218" width="9" height="9" rx="1.5" transform="rotate(18 158 218)" fill="#4D7C2B" />
            <rect x="215" y="220" width="10" height="9" rx="1.5" transform="rotate(-12 215 220)" fill="#4D7C2B" />
            <rect x="270" y="208" width="9" height="9" rx="1.5" transform="rotate(22 270 208)" fill="#4D7C2B" />
            <rect x="172" y="252" width="9" height="9" rx="1.5" transform="rotate(-18 172 252)" fill="#4D7C2B" />
            <rect x="234" y="252" width="9" height="9" rx="1.5" transform="rotate(15 234 252)" fill="#4D7C2B" />
          </g>

          {/* DRIZZLED DARK CHOCOLATE RIBBONS ACROSS TOP */}
          <path
            d="M92 162 C135 140 175 184 218 182 C252 180 264 148 298 184"
            stroke="#361E15"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M108 148 C156 146 196 156 244 138 C272 128 292 152 312 170"
            stroke="#361E15"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Small Pistachio Chunks on Chocolate Drizzle */}
          <rect x="155" y="148" width="10" height="10" rx="2" transform="rotate(-22 155 148)" fill="#80C244" stroke="#361E15" strokeWidth="2" />
          <rect x="190" y="160" width="9" height="9" rx="2" transform="rotate(15 190 160)" fill="#80C244" stroke="#361E15" strokeWidth="2" />
          <rect x="218" y="145" width="10" height="10" rx="2" transform="rotate(-18 218 145)" fill="#A8E070" stroke="#361E15" strokeWidth="2" />

          {/* DARK CHOCOLATE CHIPS EMBEDDED ON COOKIE */}
          <g fill="#2B1710" stroke="#1F100B" strokeWidth="2">
            {/* Top Dome Chips */}
            <ellipse cx="120" cy="120" rx="11" ry="8" transform="rotate(12 120 120)" />
            <ellipse cx="166" cy="82" rx="12" ry="8.5" transform="rotate(10 166 82)" />
            <ellipse cx="226" cy="100" rx="12" ry="9" transform="rotate(20 226 100)" />
            <ellipse cx="282" cy="120" rx="10.5" ry="8.5" transform="rotate(15 282 120)" />
            {/* Bottom Rim Chips */}
            <ellipse cx="76" cy="242" rx="12" ry="9.5" transform="rotate(25 76 242)" />
            <ellipse cx="132" cy="296" rx="13" ry="9.5" transform="rotate(15 132 296)" />
            <ellipse cx="274" cy="292" rx="14" ry="10" transform="rotate(12 274 292)" />
            <ellipse cx="322" cy="248" rx="12" ry="9.5" transform="rotate(22 322 248)" />
          </g>
        </g>
      </svg>
    </div>
  );
};

// 4. CUSTOM EDITORIAL SCENE ILLUSTRATIONS FOR GALLERY POLAROIDS (Non-stock, bespoke illustrated memories)
const GalleryMemoryIllustration = ({ sceneType }) => {
  switch (sceneType) {
    case 'cafe-table':
      return (
        <svg viewBox="0 0 300 320" className="w-full h-full">
          <rect width="300" height="320" fill="#DCE8C8" />
          <circle cx="240" cy="60" r="45" fill="#FFF9EE" opacity="0.8" />
          {/* Wooden Cafe Table */}
          <ellipse cx="150" cy="250" rx="125" ry="55" fill="#D69F7E" stroke="#685148" strokeWidth="3" />
          <ellipse cx="150" cy="244" rx="115" ry="48" fill="#E6B89C" />
          {/* Matcha Bowl & Chasen Whisk */}
          <ellipse cx="110" cy="230" rx="34" ry="22" fill="#536B45" stroke="#362722" strokeWidth="3" />
          <ellipse cx="110" cy="225" rx="28" ry="16" fill="#8FAF78" />
          <path d="M100 225 Q110 218 122 225" stroke="#DCE8C8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Strawberry Shortcake Plate */}
          <ellipse cx="195" cy="240" rx="36" ry="18" fill="#FFFFFF" stroke="#685148" strokeWidth="2.5" />
          <path d="M175 236 L195 205 L218 236 Z" fill="#FFF9EE" stroke="#685148" strokeWidth="2.5" />
          <path d="M175 225 L218 225" stroke="#F29BA6" strokeWidth="4" />
          <circle cx="196" cy="205" r="7" fill="#D94F5C" />
          {/* Two Holding Hands Silhouette */}
          <path d="M90 135 C120 155 140 155 150 145 C160 155 180 155 210 135" stroke="#685148" strokeWidth="3" fill="none" strokeDasharray="4 4" />
          <text x="150" y="95" textAnchor="middle" fill="#536B45" fontFamily="Fraunces, serif" fontSize="18" fontStyle="italic">
            Kyoto Morning, 2025
          </text>
          <path d="M150 112 C146 105 136 107 136 115 C136 122 150 130 150 130 C150 130 164 122 164 115 C164 107 154 105 150 112 Z" fill="#D94F5C" />
        </svg>
      );
    case 'greenhouse':
      return (
        <svg viewBox="0 0 360 260" className="w-full h-full">
          <rect width="360" height="260" fill="#FBE0E2" />
          {/* Glasshouse Arches */}
          <path d="M30 260 V90 C30 40 180 40 180 90 V260" fill="#FFF9EE" fillOpacity="0.6" stroke="#8FAF78" strokeWidth="3" />
          <path d="M180 260 V90 C180 40 330 40 330 90 V260" fill="#FFF9EE" fillOpacity="0.6" stroke="#8FAF78" strokeWidth="3" />
          {/* Hanging Vines & Strawberries */}
          <path d="M30 95 Q105 140 180 95 Q255 140 330 95" stroke="#536B45" strokeWidth="3" fill="none" />
          <circle cx="105" cy="122" r="10" fill="#D94F5C" />
          <circle cx="255" cy="122" r="10" fill="#D94F5C" />
          <circle cx="180" cy="105" r="8" fill="#F29BA6" />
          {/* Couple Polaroid Illustration */}
          <circle cx="158" cy="175" r="22" fill="#8FAF78" stroke="#685148" strokeWidth="3" />
          <circle cx="202" cy="180" r="20" fill="#F29BA6" stroke="#685148" strokeWidth="3" />
          <path d="M180 142 C176 136 168 137 168 144 C168 150 180 157 180 157 C180 157 192 150 192 144 C192 137 184 136 180 142 Z" fill="#D94F5C" />
          <text x="180" y="235" textAnchor="middle" fill="#685148" fontFamily="Fredoka, sans-serif" fontSize="14">
            🍓 Lembang Strawberry Conservatory
          </text>
        </svg>
      );
    case 'bakery':
      return (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <rect width="300" height="300" fill="#FFF9EE" />
          <circle cx="150" cy="150" r="110" fill="#DCE8C8" opacity="0.65" />
          {/* Pastry Plate */}
          <ellipse cx="150" cy="175" rx="85" ry="42" fill="#FFFFFF" stroke="#685148" strokeWidth="3" />
          {/* Kunafa Bun Mini */}
          <ellipse cx="150" cy="165" rx="55" ry="30" fill="#C68B59" stroke="#685148" strokeWidth="3" />
          <ellipse cx="150" cy="165" rx="40" ry="20" fill="#8FAF78" />
          <line x1="135" y1="162" x2="165" y2="168" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <line x1="140" y1="170" x2="168" y2="158" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <text x="150" y="75" textAnchor="middle" fill="#536B45" fontFamily="Fraunces, serif" fontSize="17" fontWeight="bold">
            One Pastry, Two Forks
          </text>
          <text x="150" y="255" textAnchor="middle" fill="#685148" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12">
            Every Saturday since May 2023 ♡
          </text>
        </svg>
      );
    case 'window':
      return (
        <svg viewBox="0 0 300 320" className="w-full h-full">
          <rect width="300" height="320" fill="#E6EFE0" />
          {/* Cafe Window Frame */}
          <rect x="35" y="30" width="230" height="190" rx="16" fill="#FFF9EE" stroke="#685148" strokeWidth="4" />
          <line x1="150" y1="30" x2="150" y2="220" stroke="#685148" strokeWidth="3" />
          <line x1="35" y1="125" x2="265" y2="125" stroke="#685148" strokeWidth="3" />
          {/* Two Latte Cups on Sill */}
          <rect x="85" y="175" width="36" height="45" rx="6" fill="#8FAF78" stroke="#685148" strokeWidth="2.5" />
          <rect x="175" y="175" width="36" height="45" rx="6" fill="#F29BA6" stroke="#685148" strokeWidth="2.5" />
          <line x1="108" y1="155" x2="103" y2="175" stroke="#D94F5C" strokeWidth="3" strokeLinecap="round" />
          <line x1="192" y1="155" x2="197" y2="175" stroke="#536B45" strokeWidth="3" strokeLinecap="round" />
          <text x="150" y="275" textAnchor="middle" fill="#536B45" fontFamily="Fraunces, serif" fontSize="16" fontStyle="italic">
            “Rain outside, warm inside”
          </text>
        </svg>
      );
    case 'picnic':
      return (
        <svg viewBox="0 0 360 260" className="w-full h-full">
          <rect width="360" height="260" fill="#DCE8C8" />
          {/* Checkered Picnic Blanket */}
          <polygon points="40,240 110,145 260,145 320,240" fill="#FFF9EE" stroke="#685148" strokeWidth="3" />
          <polygon points="85,240 135,145 180,145 150,240" fill="#FBE0E2" opacity="0.8" />
          <polygon points="210,240 225,145 260,145 285,240" fill="#FBE0E2" opacity="0.8" />
          {/* Floating Blossoms */}
          <circle cx="80" cy="65" r="8" fill="#F29BA6" />
          <circle cx="280" cy="75" r="9" fill="#F29BA6" />
          <circle cx="180" cy="50" r="7" fill="#FFF9EE" />
          {/* Picnic Basket & Berries */}
          <rect x="145" y="155" width="70" height="45" rx="10" fill="#D69F7E" stroke="#685148" strokeWidth="3" />
          <circle cx="115" cy="205" r="9" fill="#D94F5C" />
          <circle cx="245" cy="200" r="9" fill="#D94F5C" />
          <text x="180" y="105" textAnchor="middle" fill="#536B45" fontFamily="Fraunces, serif" fontSize="18">
            Spring Botanical Picnic 🌸
          </text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <rect width="300" height="300" fill="#FBE0E2" />
          <circle cx="150" cy="145" r="85" fill="#FFF9EE" stroke="#F29BA6" strokeWidth="3" strokeDasharray="6 6" />
          {/* Ring Box & Cup Note */}
          <rect x="115" y="125" width="70" height="55" rx="12" fill="#8FAF78" stroke="#536B45" strokeWidth="3" />
          <circle cx="150" cy="120" r="18" fill="none" stroke="#F59E0B" strokeWidth="4" />
          <polygon points="150,94 158,104 142,104" fill="#FFF" stroke="#F59E0B" strokeWidth="2" />
          <text x="150" y="255" textAnchor="middle" fill="#536B45" fontFamily="Fraunces, serif" fontSize="16" fontWeight="bold">
            “Will you be my forever blend?”
          </text>
        </svg>
      );
  }
};

/**
 * ============================================================================
 * CENTRALIZED GUEST NAME HOOK (hooks/useGuestName.ts equivalent)
 * ============================================================================
 * Mandatory requirement:
 * - Reads `?to=` (primary) and `?guest=` (fallback) from URL search params.
 * - Safely decodes, trims whitespace, and renders strictly as plain text.
 * - Supports live simulation switcher so users can test `?to=Fathi%20Farhat`,
 *   `?guest=Nadia`, or custom names immediately inside the preview.
 */
function sanitizeGuestName(rawValue) {
  if (!rawValue || typeof rawValue !== 'string') return '';
  try {
    const decoded = decodeURIComponent(rawValue);
    // Strip any HTML tags or control chars to guarantee plain-text safety
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

function useGuestName() {
  const [guestData, setGuestData] = useState({
    name: 'Our Dearest Friend',
    isPersonalized: false,
    sourceParam: 'default',
    rawQuery: ''
  });

  // Parse from real window.location.search on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    const guestParam = params.get('guest');

    // `to` takes priority over `guest`
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

  // Helper to simulate URL query changes and sync with history.replaceState if allowed
  const setSimulatedQuery = useCallback((paramType, value) => {
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
        // Ignore in sandboxed iframe environments
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
      // Ignore in sandboxed iframe environments
    }
  }, []);

  return { guestData, setSimulatedQuery };
}

/**
 * ============================================================================
 * ROMANTIC CAFE MUSIC BOX SYNTHESIZER (Web Audio API)
 * ============================================================================
 * Generates a delicate, warm lo-fi piano & music-box chime melody in F Major /
 * D Minor pentatonic so music plays reliably with zero external broken audio
 * dependencies, strictly respecting user consent.
 */
class CafeMusicBoxEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.step = 0;
    // Dreamy Japanese café chord & melody progression
    this.notes = [
      { freq: 523.25, bass: 261.63, dur: 1.4 }, // C5 + C4
      { freq: 659.25, bass: null, dur: 1.1 },   // E5
      { freq: 783.99, bass: 220.0, dur: 1.5 },  // G5 + A3
      { freq: 659.25, bass: null, dur: 1.1 },   // E5
      { freq: 587.33, bass: 174.61, dur: 1.4 }, // D5 + F3
      { freq: 698.46, bass: null, dur: 1.2 },   // F5
      { freq: 880.0, bass: 196.0, dur: 1.6 },   // A5 + G3
      { freq: 783.99, bass: null, dur: 1.4 },   // G5
      { freq: 659.25, bass: 261.63, dur: 1.3 }, // E5 + C4
      { freq: 523.25, bass: null, dur: 1.1 },   // C5
      { freq: 587.33, bass: 293.66, dur: 1.5 }, // D5 + D4
      { freq: 523.25, bass: 196.0, dur: 1.8 }   // C5 + G3
    ];
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBellNote(freq, duration = 1.4, volume = 0.065) {
    if (!this.ctx || !freq) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    subOsc.type = 'triangle';

    osc.frequency.setValueAtTime(freq, now);
    subOsc.frequency.setValueAtTime(freq * 0.5, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    subOsc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + duration + 0.05);
    subOsc.stop(now + duration + 0.05);
  }

  playSparkleChime() {
    this.init();
    if (!this.ctx) return;
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.5];
    chimeFreqs.forEach((f, idx) => {
      setTimeout(() => {
        this.playBellNote(f, 0.9, 0.05);
      }, idx * 90);
    });
  }

  start() {
    this.init();
    if (!this.ctx) return false;
    if (this.isPlaying) return true;
    this.isPlaying = true;

    const triggerStep = () => {
      if (!this.isPlaying) return;
      const item = this.notes[this.step % this.notes.length];
      this.playBellNote(item.freq, item.dur, 0.055);
      if (item.bass) {
        this.playBellNote(item.bass, item.dur * 1.3, 0.035);
      }
      this.step += 1;
    };

    triggerStep();
    this.intervalId = setInterval(triggerStep, 720);
    return true;
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

/**
 * ============================================================================
 * MAIN APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
  // Guest Personalization Hook
  const { guestData, setSimulatedQuery } = useGuestName();
  const [customGuestInput, setCustomGuestInput] = useState('');
  const [showUrlTester, setShowUrlTester] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Invitation Cover State (Scene 01 -> Unlocked Full Experience)
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [openingBurst, setOpeningBurst] = useState(false);

  // Scroll Progress & Active Scene Tracking
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Accessibility: Reduced Motion State
  const [reducedMotion, setReducedMotion] = useState(false);

  // Music Controller State (Starts strictly OFF per mandatory requirement)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioError, setAudioError] = useState(null);
  const musicEngineRef = useRef(null);

  // Scene 02 & Scene 05 Interactive Blend State
  const [cupBlendLevel, setCupBlendLevel] = useState(50);
  const [isFlavorBlended, setIsFlavorBlended] = useState(false);
  const [activeAssetShowcase, setActiveAssetShowcase] = useState('cup'); // 'cup' | 'strawberry' | 'pastry'

  // Scene 06 Gallery Filter & Lightbox State
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Scene 07 Real-Time Countdown State
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Scene 10 & 11 RSVP & Guestbook State
  const [wishes, setWishes] = useState(WEDDING_CONFIG.initialWishes);
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    attendance: 'Hadir',
    guests: '2',
    drink: 'Iced Strawberry Matcha Latte 🍓🍵',
    message: ''
  });
  const [rsvpStatus, setRsvpStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error' | 'duplicate'
  const [rsvpErrorMsg, setRsvpErrorMsg] = useState('');
  const [submittedNames, setSubmittedNames] = useState([]);

  // Quick Guestbook Note State (Scene 11 standalone wish input)
  const [quickWishName, setQuickWishName] = useState('');
  const [quickWishText, setQuickWishText] = useState('');
  const [quickWishFeedback, setQuickWishFeedback] = useState('');

  // Initialize Music Engine & Check Reduced Motion Preference
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

  // Keep RSVP Name Pre-filled when personalized URL parameter changes
  useEffect(() => {
    if (guestData.isPersonalized) {
      setRsvpForm((prev) => ({
        ...prev,
        name: guestData.name
      }));
      setQuickWishName(guestData.name);
    }
  }, [guestData]);

  // Update Document Title Dynamically with Guest Name
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = guestData.isPersonalized
        ? `Dear ${guestData.name} ♡ — Nadia & Raka Wedding Invitation`
        : `Nadia & Raka — Matcha & Strawberry Wedding Invitation`;
    }
  }, [guestData]);

  // Real-time Countdown Timer to 24 October 2027 08:00 WIB
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

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Toggle Music Play/Pause with Explicit User Interaction
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
          setAudioError('Audio unavailable on this device.');
        }
      }
    } catch {
      setAudioError('Could not initialize audio.');
    }
  };

  // Handle Opening Invitation Cover CTA
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

  // Mouse Parallax Handler for Hero
  const handleHeroMouseMove = (e) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  // Filtered Gallery Items
  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'All') return WEDDING_CONFIG.gallery;
    return WEDDING_CONFIG.gallery.filter((item) => item.category === galleryFilter);
  }, [galleryFilter]);

  // Calendar Event Generators (Google Calendar URL & Downloadable .ICS File)
  const getGoogleCalendarUrl = (eventObj) => {
    const title = encodeURIComponent(`Wedding of Nadia & Raka (${eventObj.title})`);
    const details = encodeURIComponent(
      `Join us as we celebrate the wedding of Nadia & Raka — A Sweet Little Love Story!\nVenue: ${eventObj.venueName}\nAddress: ${eventObj.address}`
    );
    const location = encodeURIComponent(`${eventObj.venueName}, ${eventObj.address}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${eventObj.startISO}/${eventObj.endISO}&details=${details}&location=${location}`;
  };

  const handleDownloadICS = (eventObj) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Nadia & Raka Wedding//Matcha Strawberry//EN',
      'BEGIN:VEVENT',
      `DTSTART:${eventObj.startISO}`,
      `DTEND:${eventObj.endISO}`,
      `SUMMARY:Nadia & Raka Wedding — ${eventObj.title}`,
      `DESCRIPTION:We would be so happy to celebrate our sweet new chapter with you! (${eventObj.time})`,
      `LOCATION:${eventObj.venueName}, ${eventObj.address}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `Nadia-Raka-${eventObj.title.toLowerCase().replace(/\s+/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle RSVP Submission (Validated + Duplicate Check + Honest Demo Mode Persistence)
  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpErrorMsg('');

    const cleanName = sanitizeGuestName(rsvpForm.name);
    const cleanMsg = rsvpForm.message.trim();

    if (!cleanName || cleanName.length < 2) {
      setRsvpStatus('error');
      setRsvpErrorMsg('Mohon masukkan nama lengkap Anda (minimal 2 karakter).');
      return;
    }

    if (!cleanMsg || cleanMsg.length < 5) {
      setRsvpStatus('error');
      setRsvpErrorMsg('Mohon tuliskan pesan atau doa manis untuk Nadia & Raka (minimal 5 karakter).');
      return;
    }

    // Check duplicate submission in current session
    if (submittedNames.includes(cleanName.toLowerCase())) {
      setRsvpStatus('duplicate');
      setRsvpErrorMsg(`Konfirmasi untuk "${cleanName}" sudah tercatat di sesi ini. Terima kasih!`);
      return;
    }

    setRsvpStatus('submitting');

    setTimeout(() => {
      const newWish = {
        id: `w-${Date.now()}`,
        name: cleanName,
        attendance: rsvpForm.attendance,
        guests: Number(rsvpForm.guests) || 1,
        drink: rsvpForm.drink,
        message: cleanMsg,
        timestamp: 'Baru saja • Demo Session',
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

  // Handle Standalone Guestbook Note Submission (Scene 11)
  const handleQuickWishSubmit = (e) => {
    e.preventDefault();
    const cleanName = sanitizeGuestName(quickWishName);
    const cleanText = quickWishText.trim();

    if (!cleanName || !cleanText) {
      setQuickWishFeedback('Mohon isi nama dan ucapan manis Anda terlebih dahulu ♡');
      return;
    }

    const newNote = {
      id: `note-${Date.now()}`,
      name: cleanName,
      attendance: 'Sweet Note ♡',
      guests: 1,
      drink: 'Strawberry Matcha Love 🍓🍵',
      message: cleanText,
      timestamp: 'Baru saja • Demo Session',
      color: wishes.length % 2 === 0 ? 'green' : 'pink'
    };

    setWishes((prev) => [newNote, ...prev]);
    setQuickWishText('');
    setQuickWishFeedback('Ucapan manis berhasil ditempel di papan (Mode Demo)! ✨');
    setTimeout(() => setQuickWishFeedback(''), 4000);
  };

  // Copy Personalized Share Link
  const handleCopyShareLink = () => {
    const sampleUrl = `https://nadia-raka-wedding.com/invitation${
      guestData.isPersonalized ? guestData.rawQuery : '?to=Fathi%20Farhat'
    }`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(sampleUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EE] text-[#685148] font-body selection:bg-[#F29BA6]/40 selection:text-[#536B45] overflow-x-hidden relative">
      {/* =====================================================================
          GOOGLE FONTS & CUSTOM KEYFRAME ANIMATIONS
      ===================================================================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Fredoka:wght@400;500;600;700&family=Nunito:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-display {
          font-family: 'Fredoka', 'Nunito', sans-serif;
        }
        .font-serif-romantic {
          font-family: 'Fraunces', Georgia, serif;
        }
        .font-body {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.2deg); }
        }
        @keyframes berryBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-6deg); }
        }
        @keyframes slowDrift1 {
          0%, 100% { transform: translate(55px, 195px) rotate(0deg); }
          50% { transform: translate(50px, 182px) rotate(12deg); }
        }
        @keyframes slowDrift2 {
          0%, 100% { transform: translate(318px, 225px) rotate(25deg); }
          50% { transform: translate(324px, 212px) rotate(14deg); }
        }
        @keyframes burstOut {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .cup-float-group {
          animation: gentleFloat 4.5s ease-in-out infinite;
        }
        .berry-bob-slow {
          animation: berryBob 3.6s ease-in-out infinite;
        }
        .float-slow-1 {
          animation: slowDrift1 5.2s ease-in-out infinite;
        }
        .float-slow-2 {
          animation: slowDrift2 4.8s ease-in-out infinite;
        }

        /* Paper dot grid subtle texture */
        .cafe-paper-grid {
          background-image: radial-gradient(#8FAF78 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .strawberry-paper-dots {
          background-image: radial-gradient(#F29BA6 1.2px, transparent 1.2px);
          background-size: 26px 26px;
        }
      `}</style>

      {/* =====================================================================
          TOP GUEST URL QUERY PERSONALIZATION BAR & LIVE TESTER
          Lets visitors or reviewers test ?to=Fathi%20Farhat, ?guest=Nadia, etc.
      ===================================================================== */}
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

          {/* Active Personalized Guest Indicator + Interactive Tester Toggle */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 bg-[#FBE0E2]/70 border border-[#F29BA6] text-[#685148] px-3 py-1 rounded-full text-xs">
              <UserCheck className="w-3.5 h-3.5 text-[#D94F5C]" />
              <span className="opacity-75 hidden sm:inline">Guest:</span>
              <strong className="text-[#536B45] font-display">{guestData.name}</strong>
              <code className="hidden lg:inline text-[10px] bg-white/80 px-1.5 py-0.5 rounded text-[#D94F5C] ml-1">
                {guestData.rawQuery}
              </code>
            </div>

            <button
              type="button"
              onClick={() => setShowUrlTester((prev) => !prev)}
              className="inline-flex items-center gap-1 bg-[#8FAF78] hover:bg-[#536B45] text-white font-display font-medium px-3 py-1 rounded-full text-xs transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#536B45]"
              aria-expanded={showUrlTester}
            >
              <Sparkles className="w-3 h-3" />
              <span>{showUrlTester ? 'Hide URL Tester' : 'Test ?to= Guest URL'}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Live URL Query Simulator Drawer */}
        {showUrlTester && (
          <div className="max-w-6xl mx-auto mt-2 pt-2.5 pb-1.5 border-t border-[#DCE8C8] flex flex-wrap items-center justify-between gap-2 text-xs animate-fadeIn">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-[#536B45] mr-1">Simulate URL Query:</span>
              <button
                type="button"
                onClick={() => setSimulatedQuery('to', 'Fathi Farhat')}
                className={`px-2.5 py-1 rounded-full border transition-all ${
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
                className={`px-2.5 py-1 rounded-full border transition-all ${
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
                className={`px-2.5 py-1 rounded-full border transition-all ${
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
                className={`px-2.5 py-1 rounded-full border transition-all ${
                  !guestData.isPersonalized
                    ? 'bg-[#685148] text-white border-[#685148]'
                    : 'bg-white text-[#685148] border-[#C7D9AA] hover:bg-stone-100'
                }`}
              >
                /invitation (No Param Fallback)
              </button>
            </div>

            {/* Custom Guest Name Input */}
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
                placeholder="Custom guest name..."
                className="px-2.5 py-1 rounded-full border border-[#C7D9AA] bg-white text-[#685148] text-xs focus:outline-none focus:border-[#536B45] w-40"
                aria-label="Custom guest name"
              />
              <button
                type="submit"
                className="bg-[#F29BA6] hover:bg-[#D94F5C] text-white font-display px-3 py-1 rounded-full text-xs transition-colors"
              >
                Apply
              </button>
              <button
                type="button"
                onClick={handleCopyShareLink}
                className="inline-flex items-center gap-1 bg-white border border-[#C7D9AA] text-[#536B45] px-2.5 py-1 rounded-full text-xs hover:bg-[#DCE8C8]/40"
                title="Copy personalized invitation link"
              >
                {copiedLink ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </form>
          </div>
        )}
      </header>

      {/* =====================================================================
          PERSISTENT FLOATING MUSIC & REDUCED-MOTION CONTROLS + SCROLL CUP
      ===================================================================== */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {audioError && (
          <div className="bg-[#FFF9EE] border border-[#D94F5C] text-[#D94F5C] text-xs px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{audioError}</span>
          </div>
        )}

        <div className="flex items-center gap-2 bg-[#FFF9EE]/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border-2 border-[#C7D9AA]">
          {/* Reduced Motion Toggle */}
          <button
            type="button"
            onClick={() => setReducedMotion((prev) => !prev)}
            className={`px-3 py-1.5 rounded-full text-xs font-display font-medium transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#536B45] ${
              reducedMotion
                ? 'bg-[#DCE8C8] text-[#536B45]'
                : 'bg-white text-[#685148] hover:bg-[#DCE8C8]/40'
            }`}
            title="Toggle Reduced Motion for Accessibility"
          >
            <Eye className="w-3.5 h-3.5 text-[#536B45]" />
            <span className="hidden sm:inline">{reducedMotion ? 'Motion: Reduced' : 'Motion: Full'}</span>
          </button>

          {/* Persistent Music Control Button (Starts OFF) */}
          <button
            type="button"
            onClick={handleToggleMusic}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D94F5C] ${
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
                <span>♫ MUSIC ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span>♫ MUSIC OFF</span>
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
          LOVE STORY SIP
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

      {/* =====================================================================
          SCENE 01 — THE SWEET LITTLE INTRO (HERO & PERSONALIZED COVER)
      ===================================================================== */}
      <section
        id="scene-01"
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[94vh] flex flex-col items-center justify-center px-4 sm:px-8 py-12 overflow-hidden bg-[#FFF9EE]"
      >
        {/* Background Soft Pale-Green & Strawberry Pastel Blobs */}
        <div
          className="absolute top-12 left-8 w-64 h-64 rounded-full bg-[#DCE8C8]/50 blur-3xl pointer-events-none"
          style={{
            transform: !reducedMotion ? `translate(${mouseOffset.x * -0.8}px, ${mouseOffset.y * -0.8}px)` : 'none'
          }}
        />
        <div
          className="absolute bottom-12 right-8 w-72 h-72 rounded-full bg-[#FBE0E2]/70 blur-3xl pointer-events-none"
          style={{
            transform: !reducedMotion ? `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px)` : 'none'
          }}
        />

        {/* Burst Transition Overlay when clicking Open Invitation */}
        {openingBurst && !reducedMotion && (
          <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
            <div
              className="w-96 h-96 rounded-full bg-gradient-to-r from-[#DCE8C8] via-[#FFF9EE] to-[#FBE0E2]"
              style={{ animation: 'burstOut 1.1s ease-out forwards' }}
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
          {/* Personalized Guest Invitation Badge (Mandatory Feature #8) */}
          <div className="mb-5 inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 bg-white/90 backdrop-blur-sm border-2 border-[#F29BA6] px-5 py-2.5 rounded-2xl sm:rounded-full shadow-sm">
            <span className="text-[11px] sm:text-xs font-display font-bold uppercase tracking-widest text-[#8FAF78]">
              A LITTLE INVITATION FOR
            </span>
            <span className="hidden sm:inline text-[#F29BA6]">•</span>
            <span className="text-sm sm:text-base font-display font-bold text-[#D94F5C]">
              DEAR, {guestData.name.toUpperCase()} ♡
            </span>
          </div>

          {/* Subtitle Eyebrow */}
          <p className="font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] text-[#536B45] mb-2">
            A LITTLE SIP OF LOVE
          </p>

          {/* Couple Names Headline */}
          <h1 className="font-serif-romantic text-5xl sm:text-7xl md:text-8xl font-bold text-[#536B45] tracking-tight leading-none mb-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <span>{WEDDING_CONFIG.couple.bride.nickname.toUpperCase()}</span>
            <span className="font-serif-romantic italic font-normal text-4xl sm:text-6xl text-[#D94F5C]">
              &amp;
            </span>
            <span>{WEDDING_CONFIG.couple.groom.nickname.toUpperCase()}</span>
          </h1>

          <p className="font-display text-xs sm:text-sm tracking-[0.18em] uppercase text-[#685148]/90 mt-1 mb-4">
            YOU&apos;RE INVITED TO OUR SWEETEST DAY!
          </p>

          {/* CENTRAL SIGNATURE STRAWBERRY MATCHA LATTE ILLUSTRATION (Asset 1) */}
          <div
            className="relative my-1 sm:my-2"
            style={{
              transform: !reducedMotion ? `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)` : 'none',
              transition: 'transform 0.15s ease-out'
            }}
          >
            {/* Cute Handwritten Floating Callout Tags */}
            <div className="hidden md:flex items-center gap-1.5 absolute -left-28 top-16 bg-white/90 border border-[#C7D9AA] px-3 py-1.5 rounded-full shadow-sm -rotate-6 text-xs font-display text-[#536B45]">
              <span>🍵</span>
              <span>Calm Uji Matcha</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 absolute -right-32 bottom-20 bg-white/90 border border-[#F29BA6] px-3 py-1.5 rounded-full shadow-sm rotate-6 text-xs font-display text-[#D94F5C]">
              <span>🍓</span>
              <span>Sweet Berry Puree</span>
            </div>

            <StrawberryMatchaCupSVG
              className="w-64 h-72 sm:w-80 sm:h-96"
              interactive={true}
              blendLevel={cupBlendLevel}
              reducedMotion={reducedMotion}
            />
          </div>

          {/* Supporting Text & Wedding Date */}
          <p className="font-display font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#8FAF78] mt-1">
            OUR SWEETEST CHAPTER STARTS HERE
          </p>
          <div className="mt-2 mb-6 inline-flex items-center gap-2 bg-[#DCE8C8]/60 text-[#536B45] px-4 py-1.5 rounded-full font-display font-bold text-sm sm:text-base">
            <Calendar className="w-4 h-4 text-[#D94F5C]" />
            <span>{WEDDING_CONFIG.weddingDateDisplay}</span>
          </div>

          {/* Primary CTA: OPEN OUR INVITATION ♡ */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => handleOpenInvitation(true)}
              className="group relative inline-flex items-center gap-2.5 bg-[#536B45] hover:bg-[#D94F5C] text-white font-display font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#F29BA6]"
            >
              <span>
                {guestData.isPersonalized ? 'OPEN YOUR INVITATION ♡' : 'OPEN OUR INVITATION ♡'}
              </span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#scene-08"
              onClick={() => setIsInvitationOpened(true)}
              className="text-xs sm:text-sm font-display font-semibold text-[#685148]/75 hover:text-[#D94F5C] underline underline-offset-4 px-3 py-2 transition-colors"
            >
              Skip to Wedding Details ↓
            </a>
          </div>
        </div>
      </section>

      {/* Soft Creamy Wave Divider */}
      <div className="w-full overflow-hidden leading-none bg-[#FFF9EE]">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-20">
          <path
            d="M0 40L60 45C120 50 240 60 360 55C480 50 600 30 720 25C840 20 960 30 1080 42C1200 55 1320 68 1380 74L1440 80V90H1380C1320 90 1200 90 1080 90C960 90 840 90 720 90C600 90 480 90 360 90C240 90 120 90 60 90H0V40Z"
            fill="#DCE8C8"
          />
        </svg>
      </div>

      {/* =====================================================================
          SCENE 02 — THE CUP OF LOVE (ALL 3 PROVIDED ASSETS SHOWCASE)
      ===================================================================== */}
      <section
        id="scene-02"
        className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#DCE8C8] via-[#E8F0DA] to-[#FFF9EE]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Split Composition on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Interactive Layered Visual Showcase of All 3 Provided SVG Assets */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-md bg-[#FFF9EE] rounded-[2.5rem] p-6 sm:p-8 shadow-xl border-4 border-white">
                {/* Top Cafe Menu Switcher Tabs for the 3 Provided Assets */}
                <div className="flex items-center justify-center gap-2 mb-4 bg-[#DCE8C8]/50 p-1.5 rounded-full">
                  <button
                    type="button"
                    onClick={() => setActiveAssetShowcase('cup')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all ${
                      activeAssetShowcase === 'cup'
                        ? 'bg-[#536B45] text-white shadow-sm'
                        : 'text-[#536B45] hover:bg-white/60'
                    }`}
                  >
                    🥤 The Signature Cup
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveAssetShowcase('strawberry')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all ${
                      activeAssetShowcase === 'strawberry'
                        ? 'bg-[#D94F5C] text-white shadow-sm'
                        : 'text-[#685148] hover:bg-white/60'
                    }`}
                  >
                    🍓 Sweet Berry
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveAssetShowcase('pastry')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all ${
                      activeAssetShowcase === 'pastry'
                        ? 'bg-[#685148] text-white shadow-sm'
                        : 'text-[#685148] hover:bg-white/60'
                    }`}
                  >
                    🥐 Matcha Pastry
                  </button>
                </div>

                {/* Active Artwork Display */}
                <div className="min-h-[290px] flex items-center justify-center relative">
                  {activeAssetShowcase === 'cup' && (
                    <StrawberryMatchaCupSVG
                      className="w-64 h-72"
                      blendLevel={cupBlendLevel}
                      reducedMotion={reducedMotion}
                    />
                  )}
                  {activeAssetShowcase === 'strawberry' && (
                    <KawaiiStrawberrySVG className="w-64 h-64" reducedMotion={reducedMotion} />
                  )}
                  {activeAssetShowcase === 'pastry' && (
                    <MatchaKunafaPastrySVG className="w-64 h-64" reducedMotion={reducedMotion} />
                  )}
                </div>

                {/* Interactive Swirl / Sweetness Slider */}
                <div className="mt-4 pt-4 border-t border-[#DCE8C8] text-center">
                  <div className="flex items-center justify-between text-xs font-display font-bold mb-1.5 px-1">
                    <span className="text-[#536B45]">🍵 More Matcha Calm</span>
                    <span className="text-[#D94F5C]">More Berry Sweet 🍓</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={cupBlendLevel}
                    onChange={(e) => setCupBlendLevel(Number(e.target.value))}
                    aria-label="Adjust Matcha and Strawberry blend ratio"
                    className="w-full accent-[#D94F5C] cursor-pointer h-2 rounded-lg bg-gradient-to-r from-[#8FAF78] via-[#FFF9EE] to-[#F29BA6]"
                  />
                  <p className="text-[11px] text-[#685148]/80 mt-1.5 font-medium">
                    Current Blend: {100 - cupBlendLevel}% Uji Matcha • {cupBlendLevel}% Fresh Strawberry
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Story Text */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#C7D9AA] text-xs font-display font-bold text-[#536B45] mb-4 shadow-sm">
                <span>SCENE 02 • THE CUP OF LOVE</span>
              </div>

              <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#536B45] leading-tight mb-4">
                LIKE MATCHA &amp; STRAWBERRY —{' '}
                <span className="italic font-normal text-[#D94F5C]">
                  DIFFERENT IN EVERY WAY, PERFECT TOGETHER.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#685148] leading-relaxed mb-6">
                Matcha is earthy, serene, and comforting—just like{' '}
                <strong className="text-[#536B45]">Raka</strong>. Strawberry is bright, joyful, and
                unapologetically sweet—just like <strong className="text-[#D94F5C]">Nadia</strong>.
                On paper, they come from two completely different worlds. Yet when poured into the
                same glass, they create a harmony neither could ever achieve alone.
              </p>

              {/* Mini Trio Preview Cards of the 3 Signature Café Elements */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setActiveAssetShowcase('cup')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    activeAssetShowcase === 'cup'
                      ? 'bg-white border-[#8FAF78] shadow-md scale-[1.02]'
                      : 'bg-white/60 border-white hover:bg-white'
                  }`}
                >
                  <div className="text-lg mb-1">🥤</div>
                  <div className="font-display font-bold text-xs text-[#536B45]">The Blend</div>
                  <div className="text-[11px] text-[#685148]/80">Two layers, one cup</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveAssetShowcase('strawberry')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    activeAssetShowcase === 'strawberry'
                      ? 'bg-white border-[#F29BA6] shadow-md scale-[1.02]'
                      : 'bg-white/60 border-white hover:bg-white'
                  }`}
                >
                  <div className="text-lg mb-1">🍓</div>
                  <div className="font-display font-bold text-xs text-[#D94F5C]">Sweet Joy</div>
                  <div className="text-[11px] text-[#685148]/80">Nadia&apos;s warmth</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveAssetShowcase('pastry')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    activeAssetShowcase === 'pastry'
                      ? 'bg-white border-[#685148] shadow-md scale-[1.02]'
                      : 'bg-white/60 border-white hover:bg-white'
                  }`}
                >
                  <div className="text-lg mb-1">🥐</div>
                  <div className="font-display font-bold text-xs text-[#685148]">First Bite</div>
                  <div className="text-[11px] text-[#685148]/80">Our kunafa story</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 03 — HOW OUR STORY BREWED (CAFÉ MENU & RECIPE TIMELINE)
      ===================================================================== */}
      <section id="scene-03" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE] cafe-paper-grid">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 border border-[#F29BA6]">
              SCENE 03 • HOUSE SPECIALTY MENU
            </span>
            <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
              HOW OUR STORY BREWED
            </h2>
            <p className="text-sm sm:text-base text-[#685148]/90">
              Handwritten barista notes from our very first shared pastry to the forever cup we are
              brewing today.
            </p>
          </div>

          {/* Editorial Scrapbook Timeline */}
          <div className="relative">
            {/* Vertical Dotted Connecting Line on Desktop */}
            <div
              className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-[#8FAF78] -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-12 sm:space-y-16">
              {WEDDING_CONFIG.storyTimeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Center Node Badge */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FFF9EE] border-4 border-[#8FAF78] text-[#536B45] font-display font-bold text-sm items-center justify-center shadow-md z-10">
                      0{idx + 1}
                    </div>

                    {/* Polaroid / Illustration Frame Side */}
                    <div className="w-full md:w-5/12 flex justify-center">
                      <div
                        className="bg-white p-4 pb-6 rounded-3xl shadow-lg border-2 border-[#DCE8C8] max-w-xs w-full transition-transform duration-300 hover:scale-[1.02]"
                        style={{ transform: `rotate(${item.rotation})` }}
                      >
                        <div className="rounded-2xl bg-gradient-to-br from-[#FFF9EE] via-[#DCE8C8]/40 to-[#FBE0E2]/50 h-52 flex items-center justify-center overflow-hidden p-4 relative">
                          {item.illustrationType === 'cup' && (
                            <StrawberryMatchaCupSVG className="w-40 h-44" reducedMotion={reducedMotion} />
                          )}
                          {item.illustrationType === 'strawberry' && (
                            <KawaiiStrawberrySVG className="w-44 h-44" reducedMotion={reducedMotion} />
                          )}
                          {item.illustrationType === 'pastry' && (
                            <MatchaKunafaPastrySVG className="w-44 h-44" reducedMotion={reducedMotion} />
                          )}

                          {/* Tiny Strawberry Stamp */}
                          <span className="absolute top-3 right-3 bg-[#D94F5C] text-white font-display font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm rotate-6">
                            {item.stamp}
                          </span>
                        </div>

                        <div className="mt-3 text-center">
                          <p className="font-serif-romantic italic text-sm text-[#536B45]">
                            📍 {item.location}
                          </p>
                          <p className="text-[11px] font-display text-[#8FAF78] mt-0.5">
                            {item.recipeNote}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for Center Line */}
                    <div className="hidden md:block md:w-2/12" />

                    {/* Recipe Card Narrative Side */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-3xl shadow-md border-2 border-[#F29BA6]/60 relative">
                        <span className="inline-block text-xs font-display font-bold tracking-wider uppercase text-[#D94F5C] mb-1">
                          {item.step}
                        </span>
                        <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-[#536B45] mb-1">
                          {item.title}
                        </h3>
                        <p className="font-display font-semibold text-sm text-[#8FAF78] mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-sm sm:text-base text-[#685148] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 04 — STRAWBERRY GARDEN (IMMERSIVE PASTEL GARDEN PATH)
      ===================================================================== */}
      <section
        id="scene-04"
        className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#FFF9EE] via-[#FBE0E2] to-[#DCE8C8]"
      >
        {/* Curved SVG Garden Path in Background */}
        <svg
          viewBox="0 0 1200 500"
          fill="none"
          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 420 C250 380 350 120 650 220 C950 320 1050 80 1300 120"
            stroke="#FFF9EE"
            strokeWidth="55"
            strokeLinecap="round"
          />
          <path
            d="M-100 420 C250 380 350 120 650 220 C950 320 1050 80 1300 120"
            stroke="#8FAF78"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
        </svg>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-white/90 text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
            SCENE 04 • STRAWBERRY GARDEN
          </span>

          {/* Central Kawaii Strawberry Character in the Garden */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-4">
            <div className="hidden sm:block transform -rotate-12">
              <MatchaKunafaPastrySVG className="w-36 h-36" reducedMotion={reducedMotion} />
            </div>
            <KawaiiStrawberrySVG className="w-52 h-52 sm:w-64 sm:h-64" reducedMotion={reducedMotion} />
            <div className="hidden sm:block transform rotate-12">
              <StrawberryMatchaCupSVG className="w-36 h-44" reducedMotion={reducedMotion} />
            </div>
          </div>

          <blockquote className="font-serif-romantic italic text-3xl sm:text-5xl md:text-6xl font-bold text-[#536B45] leading-tight max-w-3xl mx-auto mt-4 mb-4">
            &ldquo;YOU MAKE MY WORLD A LITTLE SWEETER.&rdquo;
          </blockquote>

          <p className="font-display text-sm sm:text-base text-[#685148] max-w-xl mx-auto">
            In a garden of calm pistachio leaves and blushing strawberry blossoms, every step feels
            lighter when we walk together.
          </p>
        </div>
      </section>

      {/* =====================================================================
          SCENE 05 — OUR FAVORITE FLAVOR (COUPLE SPLIT-SCREEN PERSONALITIES)
      ===================================================================== */}
      <section id="scene-05" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#DCE8C8] text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              SCENE 05 • OUR FAVORITE FLAVOR
            </span>
            <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#536B45]">
              TOGETHER, WE&apos;RE SOMETHING SPECIAL.
            </h2>
          </div>

          {/* Interactive Split-Screen Composition */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
            {/* LEFT SIDE: MATCHA GREEN (RAKA — A LITTLE CALM) */}
            <div
              className={`p-8 sm:p-12 transition-colors duration-700 flex flex-col justify-between ${
                isFlavorBlended
                  ? 'bg-gradient-to-br from-[#DCE8C8] via-[#FFF9EE] to-[#FBE0E2]'
                  : 'bg-[#DCE8C8]'
              }`}
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-[#536B45] text-white font-display font-bold text-xs px-3.5 py-1.5 rounded-full mb-4">
                  <span>{WEDDING_CONFIG.couple.groom.flavorTitle}</span>
                  <span>•</span>
                  <span>{WEDDING_CONFIG.couple.groom.flavorTag}</span>
                </div>

                <h3 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#536B45] mb-1">
                  {WEDDING_CONFIG.couple.groom.fullName}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#536B45]/80 mb-5">
                  {WEDDING_CONFIG.couple.groom.parents}
                </p>

                <p className="text-sm sm:text-base text-[#685148] leading-relaxed mb-6">
                  {WEDDING_CONFIG.couple.groom.personality}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {WEDDING_CONFIG.couple.groom.traits.map((trait) => (
                    <span
                      key={trait}
                      className="bg-white/85 text-[#536B45] font-display font-semibold text-xs px-3 py-1.5 rounded-full border border-[#8FAF78]"
                    >
                      🍵 {trait}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <MatchaKunafaPastrySVG className="w-36 h-36" reducedMotion={reducedMotion} />
                </div>
              </div>
            </div>

            {/* CENTER CONNECTING HEART BUTTON */}
            <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 flex justify-center -my-5 lg:my-0">
              <button
                type="button"
                onClick={() => setIsFlavorBlended((prev) => !prev)}
                className="group bg-white hover:bg-[#FFF9EE] border-4 border-[#F29BA6] rounded-full px-5 py-3 shadow-xl flex flex-col items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#8FAF78]"
                title="Click to swirl and blend our two worlds"
              >
                <Heart
                  className={`w-7 h-7 text-[#D94F5C] fill-[#D94F5C] ${
                    !reducedMotion ? 'group-hover:scale-110 transition-transform' : ''
                  }`}
                />
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#536B45] mt-1">
                  {isFlavorBlended ? 'Blended! ✨' : 'Swirl Flavors'}
                </span>
              </button>
            </div>

            {/* RIGHT SIDE: STRAWBERRY PINK (NADIA — A LITTLE SWEET) */}
            <div
              className={`p-8 sm:p-12 transition-colors duration-700 flex flex-col justify-between ${
                isFlavorBlended
                  ? 'bg-gradient-to-bl from-[#FBE0E2] via-[#FFF9EE] to-[#DCE8C8]'
                  : 'bg-[#FBE0E2]'
              }`}
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-[#D94F5C] text-white font-display font-bold text-xs px-3.5 py-1.5 rounded-full mb-4">
                  <span>{WEDDING_CONFIG.couple.bride.flavorTitle}</span>
                  <span>•</span>
                  <span>{WEDDING_CONFIG.couple.bride.flavorTag}</span>
                </div>

                <h3 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#536B45] mb-1">
                  {WEDDING_CONFIG.couple.bride.fullName}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#D94F5C] mb-5">
                  {WEDDING_CONFIG.couple.bride.parents}
                </p>

                <p className="text-sm sm:text-base text-[#685148] leading-relaxed mb-6">
                  {WEDDING_CONFIG.couple.bride.personality}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {WEDDING_CONFIG.couple.bride.traits.map((trait) => (
                    <span
                      key={trait}
                      className="bg-white/85 text-[#D94F5C] font-display font-semibold text-xs px-3 py-1.5 rounded-full border border-[#F29BA6]"
                    >
                      🍓 {trait}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <KawaiiStrawberrySVG className="w-36 h-36" reducedMotion={reducedMotion} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 06 — OUR LITTLE GALLERY (SCRAPBOOK & LIGHTBOX)
      ===================================================================== */}
      <section
        id="scene-06"
        className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE] strawberry-paper-dots"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              SCENE 06 • OUR LITTLE GALLERY
            </span>
            <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
              A SCRAPBOOK OF SWEET MOMENTS
            </h2>
            <p className="text-sm sm:text-base text-[#685148]/90 mb-6">
              Click any illustrated memory polaroid to inspect the story note in full view.
              (Configurable in <code className="text-xs bg-white px-1.5 py-0.5 rounded">WEDDING_CONFIG.gallery</code>)
            </p>

            {/* Category Filter Pills */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white p-1.5 rounded-full shadow-sm border border-[#C7D9AA]">
              {['All', 'Café Dates', 'Pre-Wedding', 'Candid'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-display font-bold transition-all ${
                    galleryFilter === cat
                      ? 'bg-[#536B45] text-white shadow-sm'
                      : 'text-[#685148] hover:bg-[#DCE8C8]/40'
                  }`}
                >
                  {cat}
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

                <div className="relative h-60 rounded-2xl overflow-hidden border border-[#DCE8C8]">
                  <GalleryMemoryIllustration sceneType={item.sceneType} />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-display font-bold text-[#536B45] shadow-sm">
                    {item.sticker} {item.category}
                  </span>
                  <div className="absolute inset-0 bg-[#536B45]/0 group-hover:bg-[#536B45]/15 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#536B45] font-display font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[#D94F5C]" />
                      <span>Open Memory</span>
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
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#D94F5C] text-white flex items-center justify-center shadow-lg hover:bg-[#536B45] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-72 rounded-2xl overflow-hidden border-2 border-[#C7D9AA] mb-4">
                <GalleryMemoryIllustration sceneType={filteredGallery[lightboxIndex].sceneType} />
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
                  className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#536B45] hover:text-[#D94F5C] px-3 py-1.5 rounded-full bg-[#DCE8C8]/50"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <span className="text-xs font-display text-[#685148]">
                  {lightboxIndex + 1} / {filteredGallery.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)}
                  className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#536B45] hover:text-[#D94F5C] px-3 py-1.5 rounded-full bg-[#DCE8C8]/50"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================================
          SCENE 07 — SAVE THE DATE (ARTISANAL DESSERT PACKAGING LABEL)
      ===================================================================== */}
      <section
        id="scene-07"
        className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#DCE8C8]/60 via-[#FFF9EE] to-[#FBE0E2]/50"
      >
        <div className="max-w-3xl mx-auto">
          {/* Dessert Packaging Label Frame */}
          <div className="bg-[#FFF9EE] rounded-[2.5rem] p-6 sm:p-12 shadow-xl border-4 border-[#F29BA6] relative overflow-hidden">
            {/* Corner Decorative Strawberry & Matcha Stamps */}
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#C7D9AA] pb-4 mb-8 text-xs font-display font-bold text-[#536B45]">
              <span>ARTISANAL LOVE BLEND • BATCH #241027</span>
              <span className="bg-[#FBE0E2] text-[#D94F5C] px-3 py-1 rounded-full">
                100% ORGANIC ROMANCE
              </span>
            </div>

            <div className="text-center">
              {/* Small Brand Motif using the Central Drink Illustration */}
              <div className="flex justify-center -my-4">
                <StrawberryMatchaCupSVG className="w-36 h-44" reducedMotion={reducedMotion} />
              </div>

              <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D94F5C] mt-2">
                SAVE OUR SWEET DATE
              </p>

              <h2 className="font-serif-romantic text-4xl sm:text-6xl font-bold text-[#536B45] my-2">
                NADIA &amp; RAKA
              </h2>

              <p className="font-display font-bold text-lg sm:text-2xl text-[#685148] tracking-wide mb-1">
                {WEDDING_CONFIG.weddingDateDisplay}
              </p>
              <p className="text-xs font-display text-[#8FAF78] uppercase tracking-widest mb-8">
                LET&apos;S CELEBRATE LOVE! • {WEDDING_CONFIG.timezone}
              </p>

              {/* Real-Time Countdown Grid */}
              <div
                className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto mb-8"
                aria-label="Countdown to wedding day"
              >
                {[
                  { label: 'DAYS', value: countdown.days },
                  { label: 'HOURS', value: countdown.hours },
                  { label: 'MINUTES', value: countdown.minutes },
                  { label: 'SECONDS', value: countdown.seconds }
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-[#DCE8C8] shadow-sm"
                  >
                    <div className="font-serif-romantic font-bold text-2xl sm:text-4xl text-[#536B45] tabular-nums">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="font-display font-bold text-[10px] sm:text-xs text-[#D94F5C] tracking-wider mt-1">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Working ADD TO CALENDAR Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={getGoogleCalendarUrl(WEDDING_CONFIG.events.akad)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#536B45] hover:bg-[#3f5333] text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>ADD TO GOOGLE CALENDAR</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  type="button"
                  onClick={() => handleDownloadICS(WEDDING_CONFIG.events.akad)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#FBE0E2]/50 text-[#536B45] border-2 border-[#8FAF78] font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-[#D94F5C]" />
                  <span>DOWNLOAD .ICS CALENDAR</span>
                </button>
              </div>
            </div>

            {/* Packaging Nutrition Facts Footer */}
            <div className="mt-8 pt-4 border-t-2 border-dashed border-[#C7D9AA] flex flex-wrap items-center justify-between gap-2 text-[11px] font-display text-[#685148]/80">
              <span>INGREDIENTS: WARMTH, LAUGHTER, PATIENCE &amp; STRAWBERRIES</span>
              <span>BEST SERVED: 24 OCT 2027 • JAKARTA</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 08 — THE WEDDING DAY (AKAD NIKAH & RESEPSI HTML CARDS)
      ===================================================================== */}
      <section id="scene-08" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#DCE8C8] text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              SCENE 08 • THE WEDDING DAY
            </span>
            <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
              JOIN OUR SWEET CELEBRATION
            </h2>
            <p className="text-sm sm:text-base text-[#685148]/90">
              All ceremony and reception details are presented below so you can easily plan your
              trip.
            </p>
          </div>

          {/* Two Main Event Blocks: AKAD NIKAH & RESEPSI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { key: 'akad', data: WEDDING_CONFIG.events.akad, badgeColor: 'bg-[#536B45]', border: 'border-[#8FAF78]' },
              { key: 'resepsi', data: WEDDING_CONFIG.events.resepsi, badgeColor: 'bg-[#D94F5C]', border: 'border-[#F29BA6]' }
            ].map(({ key, data, badgeColor, border }) => (
              <article
                key={key}
                className={`bg-white rounded-[2rem] p-7 sm:p-9 shadow-lg border-2 ${border} flex flex-col justify-between relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`${badgeColor} text-white font-display font-bold text-xs px-4 py-1.5 rounded-full tracking-wider`}>
                      {data.title}
                    </span>
                    <span className="text-xs font-serif-romantic italic text-[#8FAF78]">
                      {data.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-[#536B45] mb-4">
                    {data.venueName}
                  </h3>

                  <div className="space-y-3 text-sm sm:text-base text-[#685148] mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#D94F5C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">
                          Hari &amp; Tanggal
                        </div>
                        <div className="font-semibold text-[#536B45]">{data.dayDate}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#8FAF78] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">
                          Jam Acara
                        </div>
                        <div className="font-semibold text-[#536B45]">{data.time}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#D94F5C] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-display font-bold text-xs uppercase text-[#8FAF78]">
                          Alamat Lengkap
                        </div>
                        <div className="text-sm leading-relaxed">{data.address}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs bg-[#FFF9EE] p-3.5 rounded-2xl border border-[#DCE8C8] text-[#685148]/90 italic mb-6">
                    {data.note}
                  </p>
                </div>

                {/* Action Buttons: OPEN GOOGLE MAPS & ADD TO CALENDAR */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-[#DCE8C8]">
                  <a
                    href={data.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#536B45] hover:bg-[#3f5333] text-white font-display font-bold text-xs py-3 px-4 rounded-full transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>OPEN GOOGLE MAPS</span>
                  </a>
                  <a
                    href={getGoogleCalendarUrl(data)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FBE0E2] hover:bg-[#F29BA6] text-[#536B45] font-display font-bold text-xs py-3 px-4 rounded-full transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-[#D94F5C]" />
                    <span>ADD TO CALENDAR</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Cute Dress Code Palette Guide */}
          <div className="mt-10 bg-white rounded-3xl p-6 border-2 border-[#DCE8C8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-bold text-sm text-[#536B45] uppercase tracking-wider">
                🍓🍵 Suggested Garden Attire Palette
              </h4>
              <p className="text-xs text-[#685148]/80 mt-0.5">
                Soft pastel tones inspired by our strawberry matcha café palette:
              </p>
            </div>
            <div className="flex items-center gap-3">
              {[
                { name: 'Matcha Green', hex: '#8FAF78' },
                { name: 'Strawberry Pink', hex: '#F29BA6' },
                { name: 'Milky Cream', hex: '#FFF9EE' },
                { name: 'Pistachio', hex: '#C7D9AA' },
                { name: 'Cocoa Brown', hex: '#685148' }
              ].map((sw) => (
                <div key={sw.name} className="flex flex-col items-center gap-1">
                  <span
                    className="w-8 h-8 rounded-full border-2 border-stone-300 shadow-sm"
                    style={{ backgroundColor: sw.hex }}
                    title={sw.name}
                  />
                  <span className="text-[10px] font-display text-[#685148]">{sw.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 09 — A LITTLE NOTE JUST FOR YOU (PERSONALIZED GUEST LETTER)
      ===================================================================== */}
      <section
        id="scene-09"
        className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#FFF9EE] via-[#FBE0E2]/45 to-[#FFF9EE]"
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFF9EE] rounded-[2rem] p-8 sm:p-12 shadow-xl border-2 border-[#F29BA6] relative">
            {/* Wax Seal / Stamp Badge at Top Center */}
            <div className="w-16 h-16 rounded-full bg-[#D94F5C] text-white flex items-center justify-center mx-auto -mt-14 mb-6 shadow-md border-4 border-[#FFF9EE]">
              <Heart className="w-7 h-7 fill-white" />
            </div>

            <div className="text-center mb-6">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#8FAF78]">
                SCENE 09 • A LITTLE NOTE JUST FOR YOU
              </span>
              <h2 className="font-serif-romantic text-2xl sm:text-4xl font-bold text-[#536B45] mt-1">
                OUR DEAREST FRIENDS &amp; FAMILY
              </h2>
            </div>

            {/* Dynamic Personalized Letter Greeting (Mandatory Requirement #8) */}
            <div className="bg-white/90 rounded-2xl p-6 sm:p-8 border border-[#DCE8C8] space-y-4 text-base sm:text-lg text-[#685148] leading-relaxed font-serif-romantic">
              <p className="font-bold text-xl text-[#D94F5C]">
                Dear {guestData.name},
              </p>

              {guestData.isPersonalized ? (
                <p>
                  &ldquo;We have a little celebration coming up, and it wouldn&apos;t feel complete
                  without you. Join us as we celebrate the beginning of our sweetest forever.&rdquo;
                </p>
              ) : (
                <p>
                  &ldquo;We have a little celebration coming up, and we would love to have you with
                  us.&rdquo;
                </p>
              )}

              <p className="italic text-[#536B45]">
                &ldquo;We would be so happy to celebrate this sweet new chapter with you. Your
                presence, prayers, and warm wishes would mean the world to us.&rdquo;
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-dashed border-[#C7D9AA] text-sm font-body">
                <div>
                  <div className="text-xs text-[#8FAF78] font-display font-bold uppercase">
                    With all our love,
                  </div>
                  <div className="font-serif-romantic font-bold text-lg text-[#536B45]">
                    Nadia &amp; Raka ♡
                  </div>
                </div>
                <div className="w-16 h-16">
                  <KawaiiStrawberrySVG className="w-16 h-16" reducedMotion={reducedMotion} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 10 — RSVP, PLEASE! (VALIDATED ATTENDANCE FORM)
      ===================================================================== */}
      <section
        id="scene-10"
        className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#DCE8C8]/45"
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-7 sm:p-11 shadow-xl border-4 border-[#8FAF78]">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                SCENE 10 • RSVP, PLEASE!
              </span>
              <h2 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#536B45]">
                WILL YOU JOIN OUR LITTLE PARTY? ♡
              </h2>
              <p className="text-xs sm:text-sm text-[#685148]/85 mt-2">
                Mohon konfirmasi kehadiran Anda agar kami dapat menyiapkan tempat &amp; sajian
                strawberry matcha terbaik untuk Anda.
              </p>
              {/* Honest Demo Mode Notice */}
              <div className="mt-3 inline-flex items-center gap-1.5 bg-[#FFF9EE] border border-[#C7D9AA] px-3 py-1 rounded-full text-[11px] font-display text-[#536B45]">
                <Sparkles className="w-3.5 h-3.5 text-[#D94F5C]" />
                <span>Interactive Demo Mode: Submissions appear live on the Sweet Wishes board below!</span>
              </div>
            </div>

            <form onSubmit={handleRsvpSubmit} className="space-y-5" noValidate>
              {/* Nama Tamu */}
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="block font-display font-bold text-sm text-[#536B45] mb-1.5"
                >
                  Nama Tamu <span className="text-[#D94F5C]">*</span>
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
                  placeholder="Contoh: Fathi Farhat"
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#C7D9AA] bg-[#FFF9EE]/60 text-[#685148] font-medium focus:outline-none focus:border-[#536B45] transition-colors"
                />
              </div>

              {/* Konfirmasi Kehadiran */}
              <div>
                <span className="block font-display font-bold text-sm text-[#536B45] mb-2">
                  Konfirmasi Kehadiran <span className="text-[#D94F5C]">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'Hadir', label: "YES, I'LL BE THERE! 🍓", sub: 'Hadir di acara pernikahan' },
                    { value: 'Belum Bisa Hadir', label: 'SEND MY LOVE 🍵', sub: 'Maaf, belum bisa hadir' }
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRsvpForm({ ...rsvpForm, attendance: opt.value })}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
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
                    Jumlah Tamu
                  </label>
                  <select
                    id="rsvp-guests"
                    value={rsvpForm.guests}
                    onChange={(e) => setRsvpForm({ ...rsvpForm, guests: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#C7D9AA] bg-[#FFF9EE]/60 text-[#685148] font-medium focus:outline-none focus:border-[#536B45]"
                  >
                    <option value="1">1 Orang (Sendiri)</option>
                    <option value="2">2 Orang (Berdua)</option>
                    <option value="3">3 Orang (Keluarga)</option>
                    <option value="4">4 Orang (Keluarga)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="rsvp-drink"
                    className="block font-display font-bold text-sm text-[#536B45] mb-1.5"
                  >
                    Welcome Drink Favorit ☕
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
                  Pesan atau Doa Manis <span className="text-[#D94F5C]">*</span>
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
                  placeholder="Tuliskan doa dan harapan manis untuk Nadia & Raka..."
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
                  <span>
                    Terima kasih, <strong>{rsvpForm.name}</strong>! Konfirmasi &amp; doa manis Anda
                    telah ditambahkan ke papan Sweet Wishes di bawah (Mode Demo). ♡
                  </span>
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
                    ? 'BREWING YOUR RSVP...'
                    : rsvpForm.attendance === 'Hadir'
                    ? "YES, I'LL BE THERE! ♡"
                    : 'SEND MY LOVE ♡'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 11 — SWEET WISHES (GUESTBOOK WALL OF LOVE NOTES)
      ===================================================================== */}
      <section id="scene-11" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FFF9EE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#FBE0E2] text-[#D94F5C] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              SCENE 11 • SWEET WISHES
            </span>
            <h2 className="font-serif-romantic text-4xl sm:text-5xl font-bold text-[#536B45] mb-3">
              LITTLE LOVE NOTES FROM YOU
            </h2>
            <p className="text-sm sm:text-base text-[#685148]/90">
              Every prayer and sweet note warms our hearts like a fresh cup of matcha latte.
            </p>
          </div>

          {/* Quick Standalone Wish Form Bar */}
          <form
            onSubmit={handleQuickWishSubmit}
            className="max-w-3xl mx-auto mb-12 bg-white p-4 sm:p-5 rounded-3xl shadow-md border-2 border-[#C7D9AA] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
          >
            <input
              type="text"
              value={quickWishName}
              onChange={(e) => setQuickWishName(e.target.value)}
              placeholder="Nama Anda..."
              aria-label="Nama pengirim ucapan"
              className="sm:w-48 px-4 py-2.5 rounded-2xl border border-[#C7D9AA] bg-[#FFF9EE] text-sm focus:outline-none focus:border-[#536B45]"
            />
            <input
              type="text"
              value={quickWishText}
              onChange={(e) => setQuickWishText(e.target.value)}
              placeholder="Tulis ucapan singkat untuk Nadia & Raka..."
              aria-label="Isi ucapan singkat"
              className="flex-1 px-4 py-2.5 rounded-2xl border border-[#C7D9AA] bg-[#FFF9EE] text-sm focus:outline-none focus:border-[#536B45]"
            />
            <button
              type="submit"
              className="bg-[#536B45] hover:bg-[#D94F5C] text-white font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-colors shrink-0"
            >
              Pin Note 📌
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

      {/* =====================================================================
          SCENE 12 — THE SWEETEST FOREVER (MEMORABLE CLOSING SCENE)
      ===================================================================== */}
      <footer
        id="scene-12"
        className="relative pt-20 pb-28 px-4 sm:px-8 bg-gradient-to-b from-[#FFF9EE] via-[#DCE8C8] to-[#C7D9AA] text-center overflow-hidden"
      >
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <span className="inline-block bg-white/90 text-[#536B45] font-display font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
            SCENE 12 • THE SWEETEST FOREVER
          </span>

          {/* Central Strawberry Matcha Illustration Returns with Supporting Characters */}
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="hidden sm:block">
              <KawaiiStrawberrySVG className="w-28 h-28" reducedMotion={reducedMotion} />
            </div>
            <StrawberryMatchaCupSVG
              className="w-60 h-68 sm:w-72 sm:h-80"
              interactive={true}
              blendLevel={cupBlendLevel}
              reducedMotion={reducedMotion}
            />
            <div className="hidden sm:block">
              <MatchaKunafaPastrySVG className="w-28 h-28" reducedMotion={reducedMotion} />
            </div>
          </div>

          <p className="font-serif-romantic italic text-xl sm:text-2xl text-[#D94F5C] mt-2">
            AND THEY LIVED HAPPILY EVER AFTER...
          </p>

          <h2 className="font-serif-romantic text-5xl sm:text-7xl font-bold text-[#536B45] my-2">
            NADIA &amp; RAKA
          </h2>

          <p className="font-display font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-[#536B45] mb-8">
            MADE WITH LOVE, BREWED FOR FOREVER.
          </p>

          {/* Back to the Beginning Button */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
            }
            className="inline-flex items-center gap-2 bg-white hover:bg-[#536B45] text-[#536B45] hover:text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md border-2 border-[#536B45] transition-all cursor-pointer"
          >
            <span>BACK TO THE BEGINNING ↑</span>
          </button>

          <p className="text-xs text-[#536B45]/80 font-display mt-8">
            {WEDDING_CONFIG.hashtag} • Two different flavors, one sweet forever 🍓🍵
          </p>
        </div>
      </footer>
    </div>
  );
}