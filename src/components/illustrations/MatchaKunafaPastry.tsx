'use client';

import React from 'react';

export interface MatchaKunafaPastryProps {
  /**
   * Tailwind class untuk ukuran & tata letak (Contoh: "w-48 h-48", "w-64 h-64", "w-36 h-36", "w-28 h-28")
   */
  className?: string;
  /**
   * Mode kurangi animasi (aksesibilitas)
   */
  reducedMotion?: boolean;
}

/**
 * ============================================================================
 * ASSET 3: MATCHA PISTACHIO KUNAFA CHOCO PASTRY ILLUSTRATION
 * ============================================================================
 * PANDUAN MENGUBAH UKURAN:
 * Ubah prop `className` untuk menentukan ukuran pastry kunafa:
 * - Standar / Sedang : className="w-48 h-48"
 * - Besar Showcase   : className="w-64 h-64"
 * - Compact / Side   : className="w-36 h-36" atau "w-28 h-28"
 */
export const MatchaKunafaPastry: React.FC<MatchaKunafaPastryProps> = ({
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

        {/* Soft Cream Circular Aura */}
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

            <line x1="128" y1="198" x2="152" y2="194" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="198" y1="186" x2="225" y2="196" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="242" y1="204" x2="266" y2="194" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="186" y1="220" x2="212" y2="234" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="152" y1="236" x2="180" y2="232" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="232" y1="222" x2="252" y2="210" stroke="#FFFFFF" strokeWidth="2.2" />

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
          <rect x="155" y="148" width="10" height="10" rx="2" transform="rotate(-22 155 148)" fill="#80C244" stroke="#361E15" strokeWidth="2" />
          <rect x="190" y="160" width="9" height="9" rx="2" transform="rotate(15 190 160)" fill="#80C244" stroke="#361E15" strokeWidth="2" />
          <rect x="218" y="145" width="10" height="10" rx="2" transform="rotate(-18 218 145)" fill="#A8E070" stroke="#361E15" strokeWidth="2" />

          {/* DARK CHOCOLATE CHIPS EMBEDDED ON COOKIE */}
          <g fill="#2B1710" stroke="#1F100B" strokeWidth="2">
            <ellipse cx="120" cy="120" rx="11" ry="8" transform="rotate(12 120 120)" />
            <ellipse cx="166" cy="82" rx="12" ry="8.5" transform="rotate(10 166 82)" />
            <ellipse cx="226" cy="100" rx="12" ry="9" transform="rotate(20 226 100)" />
            <ellipse cx="282" cy="120" rx="10.5" ry="8.5" transform="rotate(15 282 120)" />
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
