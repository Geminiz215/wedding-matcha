import React from 'react';
import { GallerySceneType } from '@/types/wedding';

export interface GalleryMemoryIllustrationProps {
  sceneType: GallerySceneType;
  className?: string;
}

/**
 * ============================================================================
 * BESPOKE ILLUSTRATED GALLERY SCENES
 * ============================================================================
 * Komponen ilustrasi kustom untuk foto-foto polaroid kenangan (Scene 06).
 */
export const GalleryMemoryIllustration: React.FC<GalleryMemoryIllustrationProps> = ({
  sceneType,
  className = 'w-full h-full'
}) => {
  switch (sceneType) {
    case 'cafe-table':
      return (
        <svg viewBox="0 0 300 320" className={className}>
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
        <svg viewBox="0 0 360 260" className={className}>
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
        <svg viewBox="0 0 300 300" className={className}>
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
        <svg viewBox="0 0 300 320" className={className}>
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
            &ldquo;Rain outside, warm inside&rdquo;
          </text>
        </svg>
      );
    case 'picnic':
      return (
        <svg viewBox="0 0 360 260" className={className}>
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
    case 'proposal':
    default:
      return (
        <svg viewBox="0 0 300 300" className={className}>
          <rect width="300" height="300" fill="#FBE0E2" />
          <circle cx="150" cy="145" r="85" fill="#FFF9EE" stroke="#F29BA6" strokeWidth="3" strokeDasharray="6 6" />
          {/* Ring Box & Cup Note */}
          <rect x="115" y="125" width="70" height="55" rx="12" fill="#8FAF78" stroke="#536B45" strokeWidth="3" />
          <circle cx="150" cy="120" r="18" fill="none" stroke="#F59E0B" strokeWidth="4" />
          <polygon points="150,94 158,104 142,104" fill="#FFF" stroke="#F59E0B" strokeWidth="2" />
          <text x="150" y="255" textAnchor="middle" fill="#536B45" fontFamily="Fraunces, serif" fontSize="16" fontWeight="bold">
            &ldquo;Will you be my forever blend?&rdquo;
          </text>
        </svg>
      );
  }
};
