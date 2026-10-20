export type Language = 'en' | 'id';

export interface Translations {
  header: {
    guest: string;
    testUrlBtn: string;
    hideTester: string;
    simulateQuery: string;
    customGuestPlaceholder: string;
    applyBtn: string;
    copyLink: string;
    copied: string;
  };
  controls: {
    motionReduced: string;
    motionFull: string;
    musicOn: string;
    musicOff: string;
    progressLabel: string;
  };
  hero: {
    langLabel: string;
    invitationFor: string;
    dear: string;
    introEyebrow: string;
    invitedHeadline: string;
    matchaTag: string;
    strawberryTag: string;
    chapterStarts: string;
    openPersonalized: string;
    openGeneral: string;
    skipToDetails: string;
  };
  scene02: {
    sceneTag: string;
    headingMain: string;
    headingSub: string;
    storyDesc: string;
    tabCup: string;
    tabBerry: string;
    tabPastry: string;
    sliderMatcha: string;
    sliderBerry: string;
    currentBlend: string;
    cardCupTitle: string;
    cardCupSub: string;
    cardBerryTitle: string;
    cardBerrySub: string;
    cardPastryTitle: string;
    cardPastrySub: string;
  };
  scene03: {
    sceneTag: string;
    title: string;
    subtitle: string;
  };
  scene04: {
    sceneTag: string;
    quote: string;
    desc: string;
  };
  scene05: {
    sceneTag: string;
    title: string;
    swirlBtn: string;
    blendedBtn: string;
    brideParents: string;
    groomParents: string;
  };
  scene06: {
    sceneTag: string;
    title: string;
    subtitle: string;
    catAll: string;
    catCafe: string;
    catPrewed: string;
    catCandid: string;
    openMemory: string;
    prev: string;
    next: string;
  };
  scene07: {
    batchTag: string;
    organicBadge: string;
    saveDateEyebrow: string;
    celebrateSub: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    addGoogle: string;
    downloadIcs: string;
    ingredients: string;
    bestServed: string;
  };
  scene08: {
    sceneTag: string;
    title: string;
    subtitle: string;
    dayDateLabel: string;
    eventTimeLabel: string;
    addressLabel: string;
    openMaps: string;
    addCal: string;
    attireTitle: string;
    attireSub: string;
  };
  scene09: {
    sceneTag: string;
    title: string;
    dearLabel: string;
    notePersonalized: string;
    noteGeneral: string;
    noteClosing: string;
    withLove: string;
  };
  scene10: {
    sceneTag: string;
    title: string;
    desc: string;
    demoNotice: string;
    nameLabel: string;
    namePlaceholder: string;
    attendLabel: string;
    attendYes: string;
    attendYesSub: string;
    attendNo: string;
    attendNoSub: string;
    guestsLabel: string;
    guest1: string;
    guest2: string;
    guest3: string;
    guest4: string;
    drinkLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submittingBtn: string;
    submitYes: string;
    submitNo: string;
    errName: string;
    errMsg: string;
    errDuplicate: (name: string) => string;
    successMsg: (name: string) => string;
  };
  scene11: {
    sceneTag: string;
    title: string;
    desc: string;
    namePlaceholder: string;
    wishPlaceholder: string;
    pinBtn: string;
    pinFeedback: string;
    emptyFeedback: string;
  };
  scene12: {
    sceneTag: string;
    happilyEver: string;
    madeWithLove: string;
    backToTop: string;
    footerTagline: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    header: {
      guest: 'Guest:',
      testUrlBtn: 'Test ?to= Guest URL',
      hideTester: 'Hide URL Tester',
      simulateQuery: 'Simulate URL Query:',
      customGuestPlaceholder: 'Custom guest name...',
      applyBtn: 'Apply',
      copyLink: 'Copy Link',
      copied: 'Copied!'
    },
    controls: {
      motionReduced: 'Motion: Reduced',
      motionFull: 'Motion: Full',
      musicOn: '♫ MUSIC ON',
      musicOff: '♫ MUSIC OFF',
      progressLabel: 'LOVE STORY SIP'
    },
    hero: {
      langLabel: 'Language / Bahasa:',
      invitationFor: 'A LITTLE INVITATION FOR',
      dear: 'DEAR,',
      introEyebrow: 'A LITTLE SIP OF LOVE',
      invitedHeadline: "YOU'RE INVITED TO OUR SWEETEST DAY!",
      matchaTag: 'Calm Uji Matcha',
      strawberryTag: 'Sweet Berry Puree',
      chapterStarts: 'OUR SWEETEST CHAPTER STARTS HERE',
      openPersonalized: 'OPEN YOUR INVITATION ♡',
      openGeneral: 'OPEN OUR INVITATION ♡',
      skipToDetails: 'Skip to Wedding Details ↓'
    },
    scene02: {
      sceneTag: 'SCENE 02 • THE CUP OF LOVE',
      headingMain: 'LIKE MATCHA & STRAWBERRY —',
      headingSub: 'DIFFERENT IN EVERY WAY, PERFECT TOGETHER.',
      storyDesc:
        'Matcha is earthy, serene, and comforting—just like Raka. Strawberry is bright, joyful, and unapologetically sweet—just like Nadia. On paper, they come from two completely different worlds. Yet when poured into the same glass, they create a harmony neither could ever achieve alone.',
      tabCup: '🥤 The Signature Cup',
      tabBerry: '🍓 Sweet Berry',
      tabPastry: '🥐 Matcha Pastry',
      sliderMatcha: '🍵 More Matcha Calm',
      sliderBerry: 'More Berry Sweet 🍓',
      currentBlend: 'Current Blend:',
      cardCupTitle: 'The Blend',
      cardCupSub: 'Two layers, one cup',
      cardBerryTitle: 'Sweet Joy',
      cardBerrySub: "Nadia's warmth",
      cardPastryTitle: 'First Bite',
      cardPastrySub: 'Our kunafa story'
    },
    scene03: {
      sceneTag: 'SCENE 03 • HOUSE SPECIALTY MENU',
      title: 'HOW OUR STORY BREWED',
      subtitle:
        'Handwritten barista notes from our very first shared pastry to the forever cup we are brewing today.'
    },
    scene04: {
      sceneTag: 'SCENE 04 • STRAWBERRY GARDEN',
      quote: '“YOU MAKE MY WORLD A LITTLE SWEETER.”',
      desc:
        'In a garden of calm pistachio leaves and blushing strawberry blossoms, every step feels lighter when we walk together.'
    },
    scene05: {
      sceneTag: 'SCENE 05 • OUR FAVORITE FLAVOR',
      title: "TOGETHER, WE'RE SOMETHING SPECIAL.",
      swirlBtn: 'Swirl Flavors',
      blendedBtn: 'Blended! ✨',
      brideParents: 'First daughter of Mr. Hendra Wijaya & Mrs. Sofia Kartika',
      groomParents: 'Second son of Mr. Surya Mahendra & Mrs. Dewi Anggraini'
    },
    scene06: {
      sceneTag: 'SCENE 06 • OUR LITTLE GALLERY',
      title: 'A SCRAPBOOK OF SWEET MOMENTS',
      subtitle: 'Click any illustrated memory polaroid to inspect the story note in full view.',
      catAll: 'All',
      catCafe: 'Café Dates',
      catPrewed: 'Pre-Wedding',
      catCandid: 'Candid',
      openMemory: 'Open Memory',
      prev: 'Prev',
      next: 'Next'
    },
    scene07: {
      batchTag: 'ARTISANAL LOVE BLEND • BATCH #241027',
      organicBadge: '100% ORGANIC ROMANCE',
      saveDateEyebrow: 'SAVE OUR SWEET DATE',
      celebrateSub: "LET'S CELEBRATE LOVE! • ",
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINUTES',
      seconds: 'SECONDS',
      addGoogle: 'ADD TO GOOGLE CALENDAR',
      downloadIcs: 'DOWNLOAD .ICS CALENDAR',
      ingredients: 'INGREDIENTS: WARMTH, LAUGHTER, PATIENCE & STRAWBERRIES',
      bestServed: 'BEST SERVED: 24 OCT 2027 • JAKARTA'
    },
    scene08: {
      sceneTag: 'SCENE 08 • THE WEDDING DAY',
      title: 'JOIN OUR SWEET CELEBRATION',
      subtitle: 'All ceremony and reception details are presented below so you can easily plan your trip.',
      dayDateLabel: 'Day & Date',
      eventTimeLabel: 'Event Time',
      addressLabel: 'Full Address',
      openMaps: 'OPEN GOOGLE MAPS',
      addCal: 'ADD TO CALENDAR',
      attireTitle: '🍓🍵 Suggested Garden Attire Palette',
      attireSub: 'Soft pastel tones inspired by our strawberry matcha café palette:'
    },
    scene09: {
      sceneTag: 'SCENE 09 • A LITTLE NOTE JUST FOR YOU',
      title: 'OUR DEAREST FRIENDS & FAMILY',
      dearLabel: 'Dear',
      notePersonalized:
        '“We have a little celebration coming up, and it wouldn\'t feel complete without you. Join us as we celebrate the beginning of our sweetest forever.”',
      noteGeneral:
        '“We have a little celebration coming up, and we would love to have you with us.”',
      noteClosing:
        '“We would be so happy to celebrate this sweet new chapter with you. Your presence, prayers, and warm wishes would mean the world to us.”',
      withLove: 'With all our love,'
    },
    scene10: {
      sceneTag: 'SCENE 10 • RSVP, PLEASE!',
      title: 'WILL YOU JOIN OUR LITTLE PARTY? ♡',
      desc: 'Please confirm your attendance so we can prepare the best seats and strawberry matcha treats for you.',
      demoNotice: 'Interactive Demo Mode: Submissions appear live on the Sweet Wishes board below!',
      nameLabel: 'Guest Name',
      namePlaceholder: 'e.g. Fathi Farhat',
      attendLabel: 'Attendance Confirmation',
      attendYes: "YES, I'LL BE THERE! 🍓",
      attendYesSub: 'Attending the wedding celebration',
      attendNo: 'SEND MY LOVE 🍵',
      attendNoSub: 'Cannot attend in person',
      guestsLabel: 'Number of Guests',
      guest1: '1 Person (Solo)',
      guest2: '2 Persons (Couple)',
      guest3: '3 Persons (Family)',
      guest4: '4 Persons (Family)',
      drinkLabel: 'Favorite Welcome Drink ☕',
      messageLabel: 'Sweet Message or Prayer',
      messagePlaceholder: 'Write your warm prayers and sweet wishes for Nadia & Raka...',
      submittingBtn: 'BREWING YOUR RSVP...',
      submitYes: "YES, I'LL BE THERE! ♡",
      submitNo: 'SEND MY LOVE ♡',
      errName: 'Please enter your full name (minimum 2 characters).',
      errMsg: 'Please write a sweet prayer or message (minimum 5 characters).',
      errDuplicate: (name: string) => `Confirmation for "${name}" has already been recorded in this session. Thank you!`,
      successMsg: (name: string) => `Thank you, ${name}! Your confirmation & wishes have been added to the Sweet Wishes board below (Demo Mode). ♡`
    },
    scene11: {
      sceneTag: 'SCENE 11 • SWEET WISHES',
      title: 'LITTLE LOVE NOTES FROM YOU',
      desc: 'Every prayer and sweet note warms our hearts like a fresh cup of matcha latte.',
      namePlaceholder: 'Your name...',
      wishPlaceholder: 'Write a short wish for Nadia & Raka...',
      pinBtn: 'Pin Note 📌',
      pinFeedback: 'Sweet note pinned to the board (Demo Mode)! ✨',
      emptyFeedback: 'Please fill in your name and sweet wish first ♡'
    },
    scene12: {
      sceneTag: 'SCENE 12 • THE SWEETEST FOREVER',
      happilyEver: 'AND THEY LIVED HAPPILY EVER AFTER...',
      madeWithLove: 'MADE WITH LOVE, BREWED FOR FOREVER.',
      backToTop: 'BACK TO THE BEGINNING ↑',
      footerTagline: 'Two different flavors, one sweet forever 🍓🍵'
    }
  },
  id: {
    header: {
      guest: 'Tamu:',
      testUrlBtn: 'Uji URL Tamu ?to=',
      hideTester: 'Tutup Penguji URL',
      simulateQuery: 'Simulasi Query URL:',
      customGuestPlaceholder: 'Nama kustom tamu...',
      applyBtn: 'Terapkan',
      copyLink: 'Salin Tautan',
      copied: 'Tersalin!'
    },
    controls: {
      motionReduced: 'Animasi: Minimal',
      motionFull: 'Animasi: Penuh',
      musicOn: '♫ MUSIK NYALA',
      musicOff: '♫ MUSIK MATI',
      progressLabel: 'TEGUKAN CINTA'
    },
    hero: {
      langLabel: 'Pilihan Bahasa / Language:',
      invitationFor: 'UNDANGAN SPESIAL UNTUK',
      dear: 'KEPADA,',
      introEyebrow: 'SETITIS TEGUKAN CINTA',
      invitedHeadline: 'KAMU DIUNDANG KE HARI TERMANIS KAMI!',
      matchaTag: 'Matcha Uji yang Tenang',
      strawberryTag: 'Puree Stroberi Manis',
      chapterStarts: 'BABAK TERMANIS KAMI DIMULAI DI SINI',
      openPersonalized: 'BUKA UNDANGAN ANDA ♡',
      openGeneral: 'BUKA UNDANGAN KAMI ♡',
      skipToDetails: 'Langsung ke Detail Acara ↓'
    },
    scene02: {
      sceneTag: 'SCENE 02 • SECANGKIR CINTA',
      headingMain: 'SEPERTI MATCHA & STRAWBERRY —',
      headingSub: 'BERBEDA DALAM SEGALA HAL, SEMPURNA BERSAMA.',
      storyDesc:
        'Matcha itu membumi, tenang, dan menyejukkan—persis seperti Raka. Strawberry itu cerah, penuh tawa, dan manis—persis seperti Nadia. Di atas kertas, mereka berasal dari dua dunia yang berbeda. Namun ketika dituangkan ke dalam satu gelas, terciptalah keharmonisan rasa yang tak tertandingi.',
      tabCup: '🥤 Cangkir Khas',
      tabBerry: '🍓 Stroberi Manis',
      tabPastry: '🥐 Pastry Matcha',
      sliderMatcha: '🍵 Lebih Tenang Matcha',
      sliderBerry: 'Lebih Manis Stroberi 🍓',
      currentBlend: 'Racikan Saat Ini:',
      cardCupTitle: 'Racikan',
      cardCupSub: 'Dua lapisan, satu cangkir',
      cardBerryTitle: 'Keceriaan Manis',
      cardBerrySub: 'Kehangatan Nadia',
      cardPastryTitle: 'Gigitan Pertama',
      cardPastrySub: 'Kisah kunafa kami'
    },
    scene03: {
      sceneTag: 'SCENE 03 • MENU SPESIAL KAFE',
      title: 'BAGAIMANA KISAH KAMI DIMULAI',
      subtitle:
        'Catatan barista bertulisan tangan dari pastry pertama yang kami bagi berdua hingga cangkir selamanya yang kami seduh hari ini.'
    },
    scene04: {
      sceneTag: 'SCENE 04 • TAMAN STROBERI',
      quote: '“KAMU MEMBUAT DUNIAPU JADI LEBIH MANIS.”',
      desc:
        'Di taman berdaun pistachio yang tenang dan bermekaran bunga stroberi merah muda, setiap langkah terasa lebih ringan saat kita melangkah bersama.'
    },
    scene05: {
      sceneTag: 'SCENE 05 • RASA FAVORIT KAMI',
      title: 'BERSAMA, KITA ADALAH SESUATU YANG SPESIAL.',
      swirlBtn: 'Aduk Rasa',
      blendedBtn: 'Tercampur! ✨',
      brideParents: 'Putri Pertama dari Bpk. Hendra Wijaya & Ibu Sofia Kartika',
      groomParents: 'Putra Kedua dari Bpk. Surya Mahendra & Ibu Dewi Anggraini'
    },
    scene06: {
      sceneTag: 'SCENE 06 • GALERI KAMI',
      title: 'ALBUM KENANGAN MANIS',
      subtitle: 'Klik polaroid kenangan berilustrasi untuk melihat catatan cerita dalam tampilan penuh.',
      catAll: 'Semua',
      catCafe: 'Kencan Kafe',
      catPrewed: 'Pre-Wedding',
      catCandid: 'Momen Spontan',
      openMemory: 'Buka Kenangan',
      prev: 'Sebelumnya',
      next: 'Selanjutnya'
    },
    scene07: {
      batchTag: 'RACIKAN CINTA ARTISANAL • BATCH #241027',
      organicBadge: '100% ROMANSA ALAMI',
      saveDateEyebrow: 'SIMPAN TANGGAL MANIS KAMI',
      celebrateSub: 'MARI RAYAKAN CINTA! • ',
      days: 'HARI',
      hours: 'JAM',
      minutes: 'MENIT',
      seconds: 'DETIK',
      addGoogle: 'TAMBAH KE GOOGLE CALENDAR',
      downloadIcs: 'UNDUH KALENDER .ICS',
      ingredients: 'KOMPOSISI: KEHANGATAN, TAWA, KESABARAN & STROBERI',
      bestServed: 'DISAJIKAN TERBAIK: 24 OKTOBER 2027 • JAKARTA'
    },
    scene08: {
      sceneTag: 'SCENE 08 • HARI PERNIKAHAN',
      title: 'HADIRILAH PERAYAAN MANIS KAMI',
      subtitle: 'Detail upacara akad dan resepsi tertera di bawah untuk memudahkan rencana kehadiran Anda.',
      dayDateLabel: 'Hari & Tanggal',
      eventTimeLabel: 'Jam Acara',
      addressLabel: 'Alamat Lengkap',
      openMaps: 'BUKA GOOGLE MAPS',
      addCal: 'TAMBAH KE KALENDER',
      attireTitle: '🍓🍵 Rekomendasi Palet Pakaian Taman',
      attireSub: 'Warna-warna pastel lembut terinspirasi dari palet kafe strawberry matcha kami:'
    },
    scene09: {
      sceneTag: 'SCENE 09 • CATATAN SPESIAL UNTUK ANDA',
      title: 'SAHABAT & KELUARGA TERCINTA',
      dearLabel: 'Kepada',
      notePersonalized:
        '“Hari bahagia kami segera tiba, dan tidak akan terasa lengkap tanpa kehadiran Anda. Bergabunglah bersama kami merayakan awal dari kebersamaan termanis ini.”',
      noteGeneral:
        '“Hari bahagia kami segera tiba, dan kami akan sangat berbahagia jika Anda hadir bersama kami.”',
      noteClosing:
        '“Kehadiran, doa restu, serta harapan hangat Anda adalah berkah terindah bagi kami berdua dalam memulai babak baru ini.”',
      withLove: 'Dengan penuh cinta,'
    },
    scene10: {
      sceneTag: 'SCENE 10 • RSVP, MOHON KONFIRMASI!',
      title: 'APAKAH ANDA AKAN HADIR? ♡',
      desc: 'Mohon konfirmasi kehadiran Anda agar kami dapat menyiapkan tempat & sajian strawberry matcha terbaik untuk Anda.',
      demoNotice: 'Mode Demo Interaktif: Konfirmasi Anda akan langsung muncul di papan Ucapan Manis di bawah!',
      nameLabel: 'Nama Tamu',
      namePlaceholder: 'Contoh: Fathi Farhat',
      attendLabel: 'Konfirmasi Kehadiran',
      attendYes: 'YA, SAYA AKAN HADIR! 🍓',
      attendYesSub: 'Hadir di acara pernikahan',
      attendNo: 'KIRIMKAN DOA RESTU 🍵',
      attendNoSub: 'Maaf, belum bisa hadir langsung',
      guestsLabel: 'Jumlah Tamu',
      guest1: '1 Orang (Sendiri)',
      guest2: '2 Orang (Berdua)',
      guest3: '3 Orang (Keluarga)',
      guest4: '4 Orang (Keluarga)',
      drinkLabel: 'Welcome Drink Favorit ☕',
      messageLabel: 'Pesan atau Doa Manis',
      messagePlaceholder: 'Tuliskan doa dan harapan manis untuk Nadia & Raka...',
      submittingBtn: 'MERACIK RSVP ANDA...',
      submitYes: 'YA, SAYA AKAN HADIR! ♡',
      submitNo: 'KIRIMKAN DOA RESTU ♡',
      errName: 'Mohon masukkan nama lengkap Anda (minimal 2 karakter).',
      errMsg: 'Mohon tuliskan pesan atau doa manis untuk Nadia & Raka (minimal 5 karakter).',
      errDuplicate: (name: string) => `Konfirmasi untuk "${name}" sudah tercatat di sesi ini. Terima kasih!`,
      successMsg: (name: string) => `Terima kasih, ${name}! Konfirmasi & doa manis Anda telah ditambahkan ke papan Sweet Wishes di bawah (Mode Demo). ♡`
    },
    scene11: {
      sceneTag: 'SCENE 11 • UCAPAN MANIS',
      title: 'UNTAPAIAN DOA & UCAPAN MANIS',
      desc: 'Setiap doa dan ucapan manis menghangatkan hati kami layaknya secangkir matcha latte hangat.',
      namePlaceholder: 'Nama Anda...',
      wishPlaceholder: 'Tulis ucapan singkat untuk Nadia & Raka...',
      pinBtn: 'Pasang Catatan 📌',
      pinFeedback: 'Ucapan manis berhasil ditempel di papan (Mode Demo)! ✨',
      emptyFeedback: 'Mohon isi nama dan ucapan manis Anda terlebih dahulu ♡'
    },
    scene12: {
      sceneTag: 'SCENE 12 • SELAMANYA TERMANIS',
      happilyEver: 'DAN MEREKA HIDUP BAHAGIA SELAMANYA...',
      madeWithLove: 'DIBUAT DENGAN CINTA, DIRACIK UNTUK SELAMANYA.',
      backToTop: 'KEMBALI KE AWAL ↑',
      footerTagline: 'Dua rasa berbeda, satu selamanya yang manis 🍓🍵'
    }
  }
};
