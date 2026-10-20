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
      flavorTitle: 'A LITTLE SWEET',
      flavorTag: 'Fresh Strawberry Puree 🍓',
      personality:
        'Warm, expressive, joyful, and full of sweet surprises. Loves sunny café mornings, strawberry shortcake, polaroid cameras, and spontaneous weekend road trips.',
      traits: ['Sweet & Affectionate', 'Dessert Enthusiast', 'Creative Soul', 'Morning Sunshine']
    },
    groom: {
      nickname: 'Raka',
      fullName: 'Raka Pradipta Mahendra, S.Ars.',
      photo: '/images/groom.jpg',
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
      sceneType: 'cafe-table',
      imageUrl: '/images/groom.jpg'
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
      sceneType: 'greenhouse',
      imageUrl: '/images/couple-hero.jpg'
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
      sceneType: 'window',
      imageUrl: '/images/bride.jpg'
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
