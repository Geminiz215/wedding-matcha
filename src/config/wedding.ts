import { WeddingConfig } from '@/types/wedding';

/**
 * ============================================================================
 * CENTRALIZED WEDDING CONFIGURATION
 * ============================================================================
 * Ubah semua detail pernikahan, nama pengantin, orang tua, tanggal, venue,
 * link Google Maps, cerita perjalanan (timeline), galeri, dan ucapan awal di sini.
 */
export const WEDDING_CONFIG: WeddingConfig = {
  couple: {
    coupleHeroPhoto: '/images/couple-hero.jpg',
    bride: {
      nickname: 'Nadia',
      fullName: 'Nadia Larasati Putri, S.Ds.',
      photo: '/images/bride.jpg',
      parents: 'Putri Pertama dari Bpk. Hendra Wijaya & Ibu Sofia Kartika',
      flavorTitle: 'SENTUHAN CERIA',
      flavorTag: 'Strawberry Segar 🍓',
      personality:
        'Hangat, ekspresif, dan selalu penuh keceriaan. Senang suasana kafe pagi hari, kue stroberi, kamera polaroid, dan jalan-jalan santai di akhir pekan.',
      traits: ['Hangat & Perhatian', 'Pencinta Dessert', 'Jiwa Kreatif', 'Penuh Energi Positif']
    },
    groom: {
      nickname: 'Raka',
      fullName: 'Raka Pradipta Mahendra, S.Ars.',
      photo: '/images/groom.jpg',
      parents: 'Putra Kedua dari Bpk. Surya Mahendra & Ibu Dewi Anggraini',
      flavorTitle: 'SENTUHAN TENANG',
      flavorTag: 'Matcha Uji Hangat 🍵',
      personality:
        'Tenang, penuh perhatian, dan dapat diandalkan. Menyukai seduhan teh hangat, sketsa arsitektur, musik santai saat sore gerimis, dan membuat Nadia tersenyum.',
      traits: ['Tenang & Mengayomi', 'Penyeduh Teh', 'Pendengar yang Baik', 'Sabar & Hangat']
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
      subtitle: 'Prosesi Akad Nikah',
      dayDate: 'Minggu, 24 Oktober 2027',
      time: '08.00 – 10.00 WIB',
      startISO: '20271024T010000Z',
      endISO: '20271024T030000Z',
      venueName: 'The Botanical Glasshouse Conservatory',
      address: 'Jl. Asia Afrika No. 8, Gelora Senayan, Kec. Tanah Abang, Kota Jakarta Pusat 10270',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Senayan+Jakarta+Pusat+Glasshouse',
      note: 'Akad nikah diadakan secara khidmat di pagi hari dikelilingi taman hijau yang asri.'
    },
    resepsi: {
      title: 'RESEPSI PERNIKAHAN',
      subtitle: 'Syukuran & Perayaan Bersama',
      dayDate: 'Minggu, 24 Oktober 2027',
      time: '11.00 – 14.00 WIB',
      startISO: '20271024T040000Z',
      endISO: '20271024T070000Z',
      venueName: 'The Botanical Glasshouse Conservatory — Grand Lawn',
      address: 'Jl. Asia Afrika No. 8, Gelora Senayan, Kec. Tanah Abang, Kota Jakarta Pusat 10270',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Senayan+Jakarta+Pusat+Glasshouse',
      note: 'Dimeriahkan live beverage bar Matcha & Strawberry spesial kami serta aneka sajian dessert.'
    }
  },
  storyTimeline: [
    {
      id: 'first-sip',
      step: 'LANGKAH 01 • MEI 2023',
      title: 'PERTEMUAN PERTAMA',
      subtitle: 'Saat kami pertama kali bertegur sapa.',
      location: 'Kissa Matcha Bar, Kemang',
      description:
        'Semuanya berawal di suatu sore yang gerimis di Kemang, saat kami tidak sengaja berebut pastry Matcha Pistachio Kunafa terakhir di kasir. Raka menawarkan untuk membaginya berdua, dan Nadia memesan iced strawberry matcha latte untuk dinikmati bersama. Obrolan santai dua jam terasa seperti lima menit.',
      recipeNote: 'Pertemuan tidak sengaja yang berlanjut obrolan hangat',
      stamp: 'AWAL CERITA',
      rotation: '-2deg',
      accent: 'matcha',
      illustrationType: 'cup'
    },
    {
      id: 'little-sweeter',
      step: 'LANGKAH 02 • DESEMBER 2024',
      title: 'MAKIN DEKAT',
      subtitle: 'Saat pertemanan mulai terasa istimewa.',
      location: 'Kebun Teh Lembang, Bandung',
      description:
        'Setelah berbulan-bulan sering jalan bareng dan saling bertukar playlist musik, jalan pagi di perkebunan teh membuat semuanya makin jelas. Raka membawa termos matcha hangat, Nadia membawa sekotak stroberi segar. Di momen sederhana itu, kami merasa saling nyaman dan ingin terus berjalan bersama.',
      recipeNote: 'Banyak obrolan seru dan saling berbagi cerita',
      stamp: 'LEBIH DEKAT',
      rotation: '2deg',
      accent: 'strawberry',
      illustrationType: 'strawberry'
    },
    {
      id: 'favorite-blend',
      step: 'LANGKAH 03 • AGUSTUS 2026',
      title: 'SALING MELENGKAPI',
      subtitle: 'Belajar saling mengerti dan menerima.',
      location: 'Kyoto & Uji, Jepang',
      description:
        'Kami belajar bahwa untuk melangkah bersama, kami tidak harus selalu sama dalam segala hal. Ketenangan Raka menjadi penyejuk bagi Nadia, dan keceriaan Nadia selalu berhasil mewarnai hari-hari Raka. Dua kepribadian yang berbeda, tapi saling mengisi dengan pas.',
      recipeNote: 'Dua sifat berbeda yang saling mengisi dan menguatkan',
      stamp: 'COCOK BERSAMA',
      rotation: '-1.5deg',
      accent: 'cream',
      illustrationType: 'pastry'
    },
    {
      id: 'forever-making',
      step: 'LANGKAH 04 • 24 OKTOBER 2027',
      title: 'MELANGKAH BERSAMA',
      subtitle: 'Keputusan untuk memulai babak baru.',
      location: 'Jakarta, Indonesia',
      description:
        'Lewat pesan kecil di bawah cangkir minuman favorit kami yang bertuliskan "Yuk, jalani hari-hari ke depan bareng aku selamanya?", Nadia menjawab "Iya!" tanpa ragu. Sekarang, kami siap melangkah ke jenjang pernikahan dan merayakannya bersama orang-orang tercinta.',
      recipeNote: 'Doa restu keluarga dan kehadiran orang-orang terdekat',
      stamp: 'MENUJU PELAMINAN',
      rotation: '1.8deg',
      accent: 'both',
      illustrationType: 'cup'
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Ritual Seduh Teh Pagi Hari',
      category: 'Kencan Kafe',
      aspect: 'portrait',
      date: 'Kyoto, Musim Gugur 2025',
      caption: 'Menyeduh matcha hangat di pagi hari sambil ngobrol santai bersama.',
      bgGradient: 'from-[#DCE8C8] via-[#FFF9EE] to-[#FBE0E2]',
      sticker: '🍵',
      rotation: '-2.5deg',
      sceneType: 'cafe-table',
      imageUrl: '/images/groom.jpg'
    },
    {
      id: 'gal-2',
      title: 'Sore Hari di Kebun Stroberi',
      category: 'Pre-Wedding',
      aspect: 'landscape',
      date: 'Lembang, 2026',
      caption: 'Menikmati udara sejuk pegunungan dan hangatnya matahari sore di perkebunan.',
      bgGradient: 'from-[#FBE0E2] via-[#FFF9EE] to-[#C7D9AA]',
      sticker: '🍓',
      rotation: '2deg',
      sceneType: 'greenhouse',
      imageUrl: '/images/couple-hero.jpg'
    },
    {
      id: 'gal-3',
      title: 'Pastry Favorit Berdua',
      category: 'Spontan',
      aspect: 'square',
      date: 'Senopati, Jakarta',
      caption: 'Kembali ke tempat pertama kali kami bertemu, masih sering memesan menu yang sama.',
      bgGradient: 'from-[#FFF9EE] via-[#DCE8C8] to-[#F29BA6]/30',
      sticker: '🥐',
      rotation: '-1.5deg',
      sceneType: 'bakery'
    },
    {
      id: 'gal-4',
      title: 'Sore Hujan & Foto Polaroid',
      category: 'Spontan',
      aspect: 'portrait',
      date: 'Menteng, Jakarta',
      caption: 'Dua cangkir di meja kayu, gerimis di jendela kafe, dan obrolan yang tidak ada habisnya.',
      bgGradient: 'from-[#C7D9AA]/60 via-[#FFF9EE] to-[#FBE0E2]',
      sticker: '📸',
      rotation: '2.8deg',
      sceneType: 'window',
      imageUrl: '/images/bride.jpg'
    },
    {
      id: 'gal-5',
      title: 'Piknik Santai di Kebun Raya',
      category: 'Pre-Wedding',
      aspect: 'landscape',
      date: 'Kebun Raya, 2026',
      caption: 'Menghabiskan akhir pekan dengan piknik santai dan camilan favorit.',
      bgGradient: 'from-[#FBE0E2] via-[#FFF9EE] to-[#DCE8C8]',
      sticker: '🌸',
      rotation: '-2deg',
      sceneType: 'picnic'
    },
    {
      id: 'gal-6',
      title: 'Momen Spesial di Sudut Kafe',
      category: 'Kencan Kafe',
      aspect: 'square',
      date: 'Kafe Favorit Kami, 2026',
      caption: 'Tepat setelah Nadia membaca pesan kejutan di bawah cangkir minuman.',
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
        'Selamat menempuh hidup baru Nadia & Raka! Semoga pernikahannya penuh berkah, saling menguatkan, dan selalu kompak sampai tua nanti. Can’t wait to celebrate with you both!',
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
        'Pasangan favorit! Semoga seluruh persiapan dan acaranya lancar sampai hari H ya. Bahagia selalu Nadia dan Raka!',
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
        'Happy wedding Raka & Nadia! Maaf banget belum bisa hadir langsung karena masih di luar kota tanggal 24 nanti, tapi doa terbaik dari jauh buat kalian berdua ya. Langgeng selalu!',
      timestamp: '2 hari yang lalu',
      color: 'green'
    }
  ],
  gifts: {
    bankAccounts: [
      {
        id: 'bank-bca-raka',
        bankName: 'BCA',
        accountNumber: '8271902344',
        accountHolder: 'RAKA PRADIPTA MAHENDRA',
        recipient: 'groom',
        recipientNickname: 'Raka',
        theme: 'matcha',
        cardGradient: 'linear-gradient(135deg, #2A3B23 0%, #47603B 50%, #688555 100%)',
        chipColor: '#E6C663'
      },
      {
        id: 'bank-bca-nadia',
        bankName: 'BCA',
        accountNumber: '5270194822',
        accountHolder: 'NADIA LARASATI PUTRI',
        recipient: 'bride',
        recipientNickname: 'Nadia',
        theme: 'strawberry',
        cardGradient: 'linear-gradient(135deg, #851E2B 0%, #BA3849 50%, #E26877 100%)',
        chipColor: '#F7D97B'
      },
      {
        id: 'bank-mandiri-raka',
        bankName: 'Bank Mandiri',
        accountNumber: '1370019283741',
        accountHolder: 'RAKA PRADIPTA MAHENDRA',
        recipient: 'groom',
        recipientNickname: 'Raka',
        theme: 'matcha',
        cardGradient: 'linear-gradient(135deg, #1C3322 0%, #304D36 60%, #4E7456 100%)',
        chipColor: '#E6C663'
      }
    ],
    qris: {
      title: 'QRIS Pembayaran Digital',
      description: 'Bisa di-scan menggunakan aplikasi mobile banking atau e-wallet apa pun (BCA, Livin, GoPay, OVO, Dana)',
      imageUrl: ''
    },
    giftAddress: {
      recipientName: 'Nadia Larasati & Raka Pradipta',
      phone: '+62 812-3456-7890',
      address: 'Jl. Melati Botanical No. 18, Kebayoran Baru',
      city: 'Jakarta Selatan, DKI Jakarta 12160',
      note: 'Mohon sertakan nama pengirim pada label paket agar kami bisa menyampaikan terima kasih secara langsung.'
    }
  }
};

