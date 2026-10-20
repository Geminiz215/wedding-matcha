'use client';

import React from 'react';

export interface KawaiiStrawberryProps {
  /**
   * Tailwind class untuk ukuran & tata letak (Contoh: "w-48 h-48", "w-64 h-64", "w-36 h-36", "w-16 h-16")
   */
  className?: string;
  /**
   * Mode kurangi animasi (aksesibilitas)
   */
  reducedMotion?: boolean;
}

/**
 * ============================================================================
 * ASSET 2: KAWAII STRAWBERRY CHARACTER ILLUSTRATION
 * ============================================================================
 * PANDUAN MENGUBAH UKURAN:
 * Ubah prop `className` untuk menentukan ukuran gambar stroberi:
 * - Standar / Sedang : className="w-48 h-48"
 * - Besar di Garden  : className="w-64 h-64"
 * - Mini / Ikonik    : className="w-16 h-16" atau "w-28 h-28"
 */
export const KawaiiStrawberry: React.FC<KawaiiStrawberryProps> = ({
  className = 'w-48 h-48',
  reducedMotion = false
}) => {
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

        {/* Concentric Soft Pink Aura Circles */}
        <circle cx="200" cy="205" r="165" fill="#FFF3F5" />
        <circle cx="200" cy="205" r="130" fill="#FFE8ED" opacity="0.6" />

        {/* Soft Purple-Pink Shadow Under Strawberry */}
        <ellipse cx="200" cy="346" rx="58" ry="11" fill="#F3D6E4" />
        <ellipse cx="200" cy="346" rx="45" ry="7.5" fill="#E8BBD2" />

        {/* Ambient Floating Hearts & Sparkles */}
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
