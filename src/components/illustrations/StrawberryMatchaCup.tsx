'use client';

import React, { useState } from 'react';

export interface StrawberryMatchaCupProps {
  /**
   * Tailwind class untuk mengatur ukuran atau posisi (Contoh: "w-72 h-72", "w-64 h-72", "w-80 h-96")
   */
  className?: string;
  /**
   * Interaktivitas saat di-hover kursor
   */
  interactive?: boolean;
  /**
   * Level blend matcha & strawberry (0 - 100)
   */
  blendLevel?: number;
  /**
   * Mode kurangi animasi (aksesibilitas)
   */
  reducedMotion?: boolean;
}

/**
 * ============================================================================
 * ASSET 1: STRAWBERRY MATCHA LATTE CUP ILLUSTRATION
 * ============================================================================
 * PANDUAN MENGUBAH UKURAN:
 * Untuk mengubah ukuran cangkir ini di halaman mana pun, ubah prop className:
 * - Ukuran Sedang  : className="w-64 h-72"
 * - Ukuran Besar   : className="w-80 h-96"
 * - Ukuran Kecil   : className="w-36 h-44" atau "w-40 h-44"
 */
export const StrawberryMatchaCup: React.FC<StrawberryMatchaCupProps> = ({
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

        {/* Background Concentric Pastel Circles */}
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

          {/* SLICED STRAWBERRY FLOATING INSIDE THE DOME LID */}
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
            <path
              d="M110 350 C134 332 154 339 175 349 C198 360 220 354 238 331 C254 311 271 314 290 342 L290 450 L110 450 Z"
              fill="#F3A6BE"
            />

            <path
              d="M110 380 C136 376 155 360 182 361 C208 362 222 344 244 342 C264 340 276 358 290 374 L290 450 L110 450 Z"
              fill="url(#strawberryLayerGrad)"
            />

            <rect x="110" y="380" width="180" height="70" fill="url(#strawberryLayerGrad)" opacity="0.88" />

            {/* DARK RUBY STRAWBERRY CHUNKS & DICES */}
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

          {/* CENTER CIRCULAR CAFE STICKER LABEL */}
          <g
            style={{
              transformOrigin: '200px 310px',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.4s ease'
            }}
          >
            <circle cx="200" cy="310" r="24" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
            <path
              d="M193 305 C193 301 207 301 207 305 C208 312 204 321 200 323 C196 321 192 312 193 305 Z"
              fill="#E61E50"
            />
            <path
              d="M194 303 C196 299 204 299 206 303 C203 304 197 304 194 303 Z"
              fill="#559E43"
            />
            <circle cx="198" cy="309" r="0.9" fill="#FFF" />
            <circle cx="202" cy="311" r="0.9" fill="#FFF" />
            <circle cx="199" cy="315" r="0.9" fill="#FFF" />
          </g>

          {/* VERTICAL GLASS REFLECTION SHINE LINES */}
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

        {/* FLOATING AMBIENT HEARTS & SPARKLES */}
        {!reducedMotion && (
          <g className="pointer-events-none">
            <g className="float-slow-1" transform="translate(55, 195)">
              <path
                d="M12 6 C18 2 26 8 26 16 C26 24 18 30 14 31 C10 30 4 22 6 14 C7 9 9 7 12 6 Z"
                fill="#F29BA6"
                opacity="0.85"
              />
              <circle cx="15" cy="16" r="1.3" fill="#FFF9EE" />
              <circle cx="19" cy="21" r="1.3" fill="#FFF9EE" />
            </g>

            <g className="float-slow-2" transform="translate(318, 225) rotate(25)">
              <path
                d="M0 18 C6 4 22 0 32 6 C26 20 12 26 0 18 Z"
                fill="#8FAF78"
                opacity="0.85"
              />
              <path d="M3 17 Q16 11 28 7" stroke="#536B45" strokeWidth="1.5" fill="none" />
            </g>

            <path
              d="M88 110 Q96 110 96 102 Q96 110 104 110 Q96 110 96 118 Q96 110 88 110 Z"
              fill="#F5B841"
              className="animate-pulse"
            />
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
