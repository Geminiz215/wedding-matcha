import type { Metadata } from 'next';
import './globals.css';
import { WEDDING_CONFIG } from '@/config/wedding';

export const metadata: Metadata = {
  title: `${WEDDING_CONFIG.couple.bride.nickname} & ${WEDDING_CONFIG.couple.groom.nickname} — Matcha & Strawberry Wedding Invitation`,
  description: `You're invited to celebrate our sweetest day! ${WEDDING_CONFIG.weddingDayDisplay} • ${WEDDING_CONFIG.events.akad.venueName}. ${WEDDING_CONFIG.hashtag}`,
  keywords: ['Wedding Invitation', 'Matcha', 'Strawberry', 'Undangan Pernikahan', 'Nadia & Raka'],
  authors: [{ name: 'Nadia & Raka' }],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍵</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#FFF9EE] text-[#685148] font-body selection:bg-[#F29BA6]/40 selection:text-[#536B45] overflow-x-hidden relative">
        {children}
      </body>
    </html>
  );
}
