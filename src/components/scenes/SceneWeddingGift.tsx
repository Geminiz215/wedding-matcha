'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  Copy,
  Check,
  Gift,
  QrCode,
  MapPin,
  Sparkles,
  Heart,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Send
} from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';
import { Language } from '@/config/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface SceneWeddingGiftProps {
  reducedMotion: boolean;
  lang: Language;
}

export const SceneWeddingGift: React.FC<SceneWeddingGiftProps> = ({
  reducedMotion,
  lang,
}) => {
  const isId = lang === 'id';
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.12 });

  const [activeTab, setActiveTab] = useState<'bank' | 'qris' | 'address'>('bank');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const bankAccounts = WEDDING_CONFIG.gifts?.bankAccounts || [
    {
      id: 'bca-raka',
      bankName: 'BCA',
      accountNumber: '8271902344',
      accountHolder: 'RAKA PRADIPTA MAHENDRA',
      recipient: 'groom' as const,
      recipientNickname: 'Raka',
      theme: 'matcha' as const,
      cardGradient: 'linear-gradient(135deg, #24351E 0%, #3F5733 50%, #5F7C4E 100%)',
      chipColor: '#E5C460',
    },
    {
      id: 'bca-nadia',
      bankName: 'BCA',
      accountNumber: '5270194822',
      accountHolder: 'NADIA LARASATI PUTRI',
      recipient: 'bride' as const,
      recipientNickname: 'Nadia',
      theme: 'strawberry' as const,
      cardGradient: 'linear-gradient(135deg, #7A1C28 0%, #B03444 50%, #D86271 100%)',
      chipColor: '#F7D774',
    },
  ];

  const giftAddress = WEDDING_CONFIG.gifts?.giftAddress || {
    recipientName: 'Nadia Larasati & Raka Pradipta',
    phone: '+62 812-3456-7890',
    address: 'Jl. Melati Botanical No. 18, Kebayoran Baru',
    city: 'Jakarta Selatan, DKI Jakarta 12160',
    note: 'Mohon sertakan nama pengirim pada label paket agar kami dapat menyampaikan ucapan terima kasih.',
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section
      id="scene-gift"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF9EE 0%, #F5F8F0 45%, #FDEEEF 100%)',
      }}
    >
      {/* Background ambient orbs */}
      <div
        className="absolute top-12 left-[-100px] w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #8FAF78 0%, transparent 70%)',
          animation: !reducedMotion ? 'floatA 12s ease-in-out infinite' : 'none',
        }}
      />
      <div
        className="absolute bottom-10 right-[-100px] w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #F29BA6 0%, transparent 70%)',
          animation: !reducedMotion ? 'floatB 10s ease-in-out infinite' : 'none',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeDown 0.8s ease-out forwards' : 'none',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#DCE8C8] text-xs font-display font-bold text-[#536B45] mb-4 shadow-sm">
            <Gift className="w-3.5 h-3.5 text-[#D94F5C]" />
            <span>
              {isId ? 'TANDA KASIH & HADIAH' : 'WEDDING GIFT & ENVELOPE'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#536B45]" />
          </div>

          <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#536B45] leading-tight mb-4">
            {isId ? 'Hadiah Pernikahan untuk ' : 'Wedding Gift for '}
            <span className="italic font-normal text-[#D94F5C] block sm:inline">
              Nadia & Raka
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#685148] leading-relaxed">
            {isId
              ? 'Doa dan kehadiranmu sudah menjadi hadiah terbaik bagi kami. Namun jika kamu ingin memberikan tanda kasih atau hadiah pernikahan, informasi di bawah ini bisa kamu gunakan:'
              : 'Your prayers and presence mean the world to us. If you wish to send a wedding gift or token of love, you can use the details below:'}
          </p>

          {/* Navigation Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#DCE8C8] shadow-md flex-wrap justify-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('bank')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'bank'
                  ? 'bg-gradient-to-r from-[#536B45] to-[#6A8958] text-white shadow-md scale-105'
                  : 'text-[#685148] hover:text-[#536B45] hover:bg-white/60'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>{isId ? 'Transfer Bank' : 'Bank Transfer'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('qris')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'qris'
                  ? 'bg-gradient-to-r from-[#D94F5C] to-[#E26975] text-white shadow-md scale-105'
                  : 'text-[#685148] hover:text-[#D94F5C] hover:bg-white/60'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>QRIS</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('address')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'address'
                  ? 'bg-gradient-to-r from-[#685148] to-[#82675C] text-white shadow-md scale-105'
                  : 'text-[#685148] hover:text-[#685148] hover:bg-white/60'
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>{isId ? 'Kirim Kado' : 'Physical Gift'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Bank Transfer Cards */}
        {activeTab === 'bank' && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeUp 0.7s 0.15s ease-out both' : 'none',
            }}
          >
            {bankAccounts.map((card, idx) => {
              const isMatcha = card.theme === 'matcha';
              const isCopied = copiedId === card.id;

              return (
                <div
                  key={card.id}
                  className="relative group transition-all duration-500 hover:-translate-y-2"
                  style={{
                    animation: isVisible && !reducedMotion ? `popIn 0.6s ${0.2 + idx * 0.15}s ease-out both` : 'none',
                  }}
                >
                  {/* Decorative ambient card shadow glow */}
                  <div
                    className="absolute -inset-1 rounded-[2.5rem] opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: isMatcha
                        ? 'linear-gradient(135deg, rgba(83,107,69,0.5), rgba(143,175,120,0.4))'
                        : 'linear-gradient(135deg, rgba(217,79,92,0.5), rgba(242,155,166,0.4))',
                    }}
                  />

                  {/* Main Bank Card */}
                  <div
                    className="relative rounded-[2rem] p-6 sm:p-7 text-white shadow-2xl overflow-hidden border border-white/20"
                    style={{ background: card.cardGradient }}
                  >
                    {/* Metallic card pattern & light sheen */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                      }}
                    />

                    {/* Card Top: Bank Name & NFC / Contactless */}
                    <div className="flex items-center justify-between relative z-10 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-extrabold text-xl tracking-wider uppercase text-white drop-shadow-sm">
                          {card.bankName}
                        </span>
                        <span
                          className={`text-[10px] font-display font-bold px-2 py-0.5 rounded-full backdrop-blur-md ${
                            isMatcha
                              ? 'bg-[#8FAF78]/30 border border-[#8FAF78]/40 text-[#E8F0DA]'
                              : 'bg-[#F29BA6]/30 border border-[#F29BA6]/40 text-[#FDEEEF]'
                          }`}
                        >
                          {isMatcha ? '🍵 ' + (isId ? 'Mempelai Pria' : 'Groom') : '🍓 ' + (isId ? 'Mempelai Wanita' : 'Bride')}
                        </span>
                      </div>

                      {/* Contactless waves SVG */}
                      <svg
                        className="w-6 h-6 opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                        <path d="M12 19a8.5 8.5 0 0 0 0-14" />
                        <path d="M15.5 21.5a12 12 0 0 0 0-19" />
                      </svg>
                    </div>

                    {/* EMV Chip & Contactless */}
                    <div className="flex items-center gap-3 relative z-10 mb-6">
                      <div
                        className="w-12 h-9 rounded-lg p-1 relative shadow-md overflow-hidden flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, #F9E392 0%, #D4AF37 50%, #AA820A 100%)',
                          border: '1px solid rgba(255,255,255,0.5)',
                        }}
                      >
                        <div className="w-full h-[1px] bg-black/30 my-auto" />
                        <div className="w-full h-[1px] bg-black/30 my-auto" />
                        <div className="absolute inset-y-0 left-1/3 w-[1px] bg-black/30" />
                        <div className="absolute inset-y-0 right-1/3 w-[1px] bg-black/30" />
                      </div>
                      <span className="text-[11px] font-mono tracking-widest text-white/70">
                        DIGITAL LOVE CARD
                      </span>
                    </div>

                    {/* Account Number */}
                    <div className="relative z-10 mb-4">
                      <div className="text-[11px] font-display font-medium text-white/70 uppercase tracking-wider mb-1">
                        {isId ? 'Nomor Rekening' : 'Account Number'}
                      </div>
                      <div className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-white drop-shadow-md select-all">
                        {card.accountNumber.replace(/(\d{4})/g, '$1 ').trim()}
                      </div>
                    </div>

                    {/* Cardholder Name & Expiry */}
                    <div className="flex items-end justify-between relative z-10 pt-3 border-t border-white/15">
                      <div>
                        <div className="text-[10px] font-display font-medium text-white/60 uppercase tracking-wider">
                          {isId ? 'Atas Nama' : 'Account Holder'}
                        </div>
                        <div className="font-display font-bold text-sm tracking-wide text-white drop-shadow-sm">
                          {card.accountHolder}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-[9px] font-display font-medium text-white/60 uppercase tracking-wider">
                          VALID THRU
                        </div>
                        <div className="font-mono text-xs font-bold text-white/90">
                          10/27
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy Button & WhatsApp Confirmation */}
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleCopy(card.accountNumber, card.id)}
                      className={`flex-1 py-3 px-4 rounded-2xl font-display font-bold text-xs sm:text-sm transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 ${
                        isCopied
                          ? 'bg-[#536B45] text-white ring-2 ring-[#8FAF78]'
                          : isMatcha
                            ? 'bg-white text-[#536B45] hover:bg-[#F4F8EE] border border-[#DCE8C8] hover:shadow-lg'
                            : 'bg-white text-[#D94F5C] hover:bg-[#FFF2F4] border border-[#FCE2E5] hover:shadow-lg'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#8FAF78] animate-bounce" />
                          <span>{isId ? 'Nomor Rekening Berhasil Disalin!' : 'Account Number Copied!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>{isId ? 'Salin No. Rekening' : 'Copy Account Number'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                        isId
                          ? `Halo ${card.recipientNickname}, saya ingin mengonfirmasi pengiriman hadiah pernikahan ke rekening ${card.bankName} (${card.accountNumber}). Selamat atas pernikahannya ya!`
                          : `Hello ${card.recipientNickname}, I would like to confirm my wedding gift transfer to ${card.bankName} (${card.accountNumber}). Wishing you both a lifetime of happiness!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={isId ? 'Kirim Konfirmasi via WhatsApp' : 'Confirm via WhatsApp'}
                      className="p-3 rounded-2xl bg-white border border-[#DCE8C8] text-[#536B45] hover:text-[#D94F5C] hover:bg-[#FFF9EE] hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: QRIS Digital Code */}
        {activeTab === 'qris' && (
          <div
            className="max-w-md mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'scaleIn 0.6s ease-out both' : 'none',
            }}
          >
            <div className="glass-card rounded-[2.5rem] p-7 sm:p-8 border-2 border-white/80 shadow-2xl text-center relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE8EB] text-[#D94F5C] text-xs font-display font-bold mb-4">
                <span>📱</span>
                <span>QRIS Universal Payment</span>
              </div>

              <h3 className="font-serif-romantic text-2xl font-bold text-[#536B45] mb-1">
                Nadia & Raka Wedding Gift
              </h3>
              <p className="text-xs text-[#685148]/80 mb-6">
                NMID: ID102027241001 • All E-Wallets & Banks
              </p>

              {/* QR Code Container with Stylized Pattern */}
              <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 bg-white rounded-3xl p-5 shadow-inner border-2 border-[#DCE8C8] flex flex-col items-center justify-center mb-6">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer corner positioning squares */}
                  <rect x="10" y="10" width="50" height="50" rx="8" stroke="#536B45" strokeWidth="6" fill="#F4F8EE" />
                  <rect x="22" y="22" width="26" height="26" rx="4" fill="#536B45" />

                  <rect x="140" y="10" width="50" height="50" rx="8" stroke="#D94F5C" strokeWidth="6" fill="#FFF2F4" />
                  <rect x="152" y="22" width="26" height="26" rx="4" fill="#D94F5C" />

                  <rect x="10" y="140" width="50" height="50" rx="8" stroke="#536B45" strokeWidth="6" fill="#F4F8EE" />
                  <rect x="22" y="152" width="26" height="26" rx="4" fill="#536B45" />

                  {/* QR Matrix Grid Dots */}
                  <g fill="#435738">
                    <rect x="70" y="15" width="10" height="10" rx="2" />
                    <rect x="90" y="15" width="10" height="10" rx="2" />
                    <rect x="115" y="15" width="12" height="10" rx="2" />

                    <rect x="70" y="35" width="15" height="12" rx="2" />
                    <rect x="95" y="35" width="10" height="12" rx="2" />
                    <rect x="115" y="35" width="10" height="12" rx="2" />

                    <rect x="70" y="55" width="10" height="10" rx="2" />
                    <rect x="90" y="55" width="20" height="10" rx="2" />
                    <rect x="120" y="55" width="10" height="10" rx="2" />

                    <rect x="15" y="70" width="12" height="10" rx="2" />
                    <rect x="35" y="70" width="15" height="10" rx="2" />
                    <rect x="55" y="70" width="10" height="10" rx="2" />
                    <rect x="75" y="70" width="10" height="10" rx="2" />
                    <rect x="140" y="70" width="12" height="10" rx="2" />
                    <rect x="165" y="70" width="15" height="10" rx="2" />

                    <rect x="15" y="90" width="10" height="10" rx="2" />
                    <rect x="40" y="90" width="12" height="10" rx="2" />
                    <rect x="145" y="90" width="20" height="10" rx="2" />
                    <rect x="175" y="90" width="10" height="10" rx="2" />

                    <rect x="15" y="115" width="15" height="12" rx="2" />
                    <rect x="40" y="115" width="10" height="12" rx="2" />
                    <rect x="60" y="115" width="10" height="12" rx="2" />
                    <rect x="140" y="115" width="15" height="12" rx="2" />
                    <rect x="165" y="115" width="15" height="12" rx="2" />

                    <rect x="70" y="140" width="10" height="10" rx="2" />
                    <rect x="90" y="140" width="15" height="10" rx="2" />
                    <rect x="115" y="140" width="10" height="10" rx="2" />

                    <rect x="70" y="160" width="20" height="10" rx="2" />
                    <rect x="100" y="160" width="10" height="10" rx="2" />
                    <rect x="120" y="160" width="15" height="10" rx="2" />

                    <rect x="140" y="140" width="15" height="15" rx="3" fill="#D94F5C" />
                    <rect x="165" y="140" width="15" height="15" rx="3" fill="#536B45" />
                    <rect x="140" y="165" width="15" height="15" rx="3" fill="#536B45" />
                    <rect x="165" y="165" width="15" height="15" rx="3" fill="#D94F5C" />
                  </g>

                  {/* Center Couple Emblem in QR */}
                  <circle cx="100" cy="100" r="24" fill="#FFFFFF" stroke="#DCE8C8" strokeWidth="4" />
                  <text x="100" y="106" textAnchor="middle" fontSize="18">🍵🍓</text>
                </svg>

                {/* Subtext */}
                <div className="text-[10px] font-mono text-[#685148]/70 mt-2">
                  SCAN WITH ANY MOBILE BANKING / E-WALLET
                </div>
              </div>

              {/* Supported badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-[11px] font-display font-semibold text-[#536B45]">
                {['BCA Mobile', 'Livin Mandiri', 'GoPay', 'OVO', 'ShopeePay', 'Dana'].map((app) => (
                  <span
                    key={app}
                    className="px-2.5 py-1 rounded-full bg-white border border-[#DCE8C8] shadow-xs"
                  >
                    {app}
                  </span>
                ))}
              </div>

              <p className="text-xs text-[#685148] leading-relaxed mb-4">
                {isId
                  ? 'Buka aplikasi mobile banking atau e-wallet pilihanmu, pilih menu QRIS / Scan, lalu arahkan kamera ke kode QR di atas.'
                  : 'Open your mobile banking or e-wallet app, select QRIS / Scan, and point your camera at the QR code above.'}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Physical Gift Delivery Address */}
        {activeTab === 'address' && (
          <div
            className="max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible && !reducedMotion ? 'fadeUp 0.6s ease-out both' : 'none',
            }}
          >
            <div className="glass-card rounded-[2.5rem] p-7 sm:p-10 border-2 border-white/80 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2F4] border border-[#FCE2E5] flex items-center justify-center text-2xl shadow-sm">
                  🎁
                </div>
                <div>
                  <h3 className="font-serif-romantic text-xl sm:text-2xl font-bold text-[#536B45]">
                    {isId ? 'Kirim Kado Fisik' : 'Physical Gift Delivery'}
                  </h3>
                  <p className="text-xs text-[#685148]/80">
                    {isId ? 'Alamat Pengiriman Nadia & Raka' : 'Delivery Address for Nadia & Raka'}
                  </p>
                </div>
              </div>

              {/* Address Details Card */}
              <div className="bg-white/80 rounded-2xl p-5 border border-[#DCE8C8] mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-4 h-4 text-[#D94F5C] shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] font-display font-bold text-[#685148]/60 uppercase tracking-wider block">
                      {isId ? 'Nama Penerima' : 'Recipient'}
                    </span>
                    <span className="font-display font-bold text-sm text-[#536B45]">
                      {giftAddress.recipientName}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#536B45] shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] font-display font-bold text-[#685148]/60 uppercase tracking-wider block">
                      {isId ? 'Alamat Pengiriman' : 'Shipping Address'}
                    </span>
                    <span className="font-display text-sm text-[#685148] block font-semibold leading-relaxed">
                      {giftAddress.address}
                    </span>
                    <span className="font-display text-xs text-[#685148]/80 block mt-0.5">
                      {giftAddress.city}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#8FAF78] shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] font-display font-bold text-[#685148]/60 uppercase tracking-wider block">
                      {isId ? 'No. Telepon / WhatsApp' : 'Phone / WhatsApp'}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#536B45]">
                      {giftAddress.phone}
                    </span>
                  </div>
                </div>

                {giftAddress.note && (
                  <div className="p-3 bg-[#F4F8EE] rounded-xl border border-[#DCE8C8] text-xs text-[#536B45] leading-relaxed">
                    💡 <span className="font-semibold">{isId ? 'Catatan:' : 'Note:'}</span> {giftAddress.note}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      `${giftAddress.recipientName}\n${giftAddress.phone}\n${giftAddress.address}, ${giftAddress.city}`,
                      'address'
                    )
                  }
                  className={`w-full sm:flex-1 py-3 px-5 rounded-2xl font-display font-bold text-xs sm:text-sm transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 ${
                    copiedId === 'address'
                      ? 'bg-[#536B45] text-white ring-2 ring-[#8FAF78]'
                      : 'bg-[#536B45] text-white hover:bg-[#435738]'
                  }`}
                >
                  {copiedId === 'address' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#8FAF78] animate-bounce" />
                      <span>{isId ? 'Alamat Berhasil Disalin!' : 'Address Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{isId ? 'Salin Alamat Lengkap' : 'Copy Full Address'}</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    isId
                      ? 'Halo Nadia & Raka, saya telah mengirimkan kado fisik melalui kurir. Semoga bermanfaat dan kalian suka ya! Selamat atas pernikahannya!'
                      : 'Hello Nadia & Raka, I have sent a physical gift via courier. Hope you like it! Congratulations on your wedding!'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 rounded-2xl font-display font-bold text-xs sm:text-sm bg-white text-[#D94F5C] hover:bg-[#FFF2F4] border border-[#FCE2E5] shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isId ? 'Konfirmasi via WhatsApp' : 'Confirm via WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Heartfelt Thanks Box */}
        <div
          className="mt-14 max-w-2xl mx-auto text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible && !reducedMotion ? 'fadeUp 0.8s 0.3s ease-out both' : 'none',
          }}
        >
          <div className="inline-flex items-center justify-center gap-2 text-xs font-display font-bold text-[#536B45] mb-2">
            <Heart className="w-3.5 h-3.5 text-[#D94F5C] fill-current" />
            <span>{isId ? 'Terima Kasih' : 'With Sincere Thanks'}</span>
            <Heart className="w-3.5 h-3.5 text-[#D94F5C] fill-current" />
          </div>
          <p className="text-xs sm:text-sm text-[#685148]/85 italic font-serif-romantic leading-relaxed">
            {isId
              ? '“Terima kasih banyak atas doa restu, ucapan hangat, dan perhatianmu untuk kami berdua. Semoga kebaikan dan kebahagiaan yang sama selalu menyertaimu dan keluarga.”'
              : '“Thank you so much for your blessings, warm wishes, and kindness towards us. May happiness and warmth always surround you and your family.”'}
          </p>
        </div>
      </div>
    </section>
  );
};
