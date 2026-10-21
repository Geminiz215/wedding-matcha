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
      customGuestPlaceholder: 'Type guest name...',
      applyBtn: 'Apply',
      copyLink: 'Copy Link',
      copied: 'Copied!'
    },
    controls: {
      motionReduced: 'Motion: Reduced',
      motionFull: 'Motion: Normal',
      musicOn: '♫ MUSIC ON',
      musicOff: '♫ MUSIC OFF',
      progressLabel: 'OUR STORY'
    },
    hero: {
      langLabel: 'Language / Bahasa:',
      invitationFor: 'WEDDING INVITATION FOR',
      dear: 'DEAR',
      introEyebrow: 'WEDDING INVITATION',
      invitedHeadline: "WE'D LOVE TO CELEBRATE OUR WEDDING WITH YOU!",
      matchaTag: 'Calm Uji Matcha',
      strawberryTag: 'Sweet Berry Puree',
      chapterStarts: 'SUNDAY, 24 OCTOBER 2027 • JAKARTA',
      openPersonalized: 'OPEN INVITATION ♡',
      openGeneral: 'OPEN INVITATION ♡',
      skipToDetails: 'Jump to Event Details ↓'
    },
    scene02: {
      sceneTag: 'ABOUT US',
      headingMain: 'TWO DIFFERENT PERSONALITIES,',
      headingSub: 'COMPLEMENTING EACH OTHER PERFECTLY.',
      storyDesc:
        'Raka brings a calm, thoughtful perspective, while Nadia brings radiant energy and endless creativity. We may have our differences, but together we found a comfortable balance that feels like home.',
      tabCup: '🥤 Signature Cup',
      tabBerry: '🍓 Nadia’s Story',
      tabPastry: '🥐 Raka’s Story',
      sliderMatcha: '🍵 Calm Side (Raka)',
      sliderBerry: 'Cheerful Side (Nadia) 🍓',
      currentBlend: 'Our Blend:',
      cardCupTitle: 'Our Story',
      cardCupSub: 'Two paths, one destination',
      cardBerryTitle: 'Nadia Larasati',
      cardBerrySub: 'Warm & creative',
      cardPastryTitle: 'Raka Pradipta',
      cardPastrySub: 'Calm & caring'
    },
    scene03: {
      sceneTag: 'OUR JOURNEY',
      title: 'HOW OUR STORY BEGAN',
      subtitle:
        'From our very first accidental meeting over a café counter to the lifelong commitment we are making today.'
    },
    scene04: {
      sceneTag: 'A LITTLE NOTE',
      quote: '“WITH YOU, LIFE FEELS LIGHTER AND FULL OF JOY.”',
      desc:
        'Starting as café companions, growing into best friends, and now stepping forward into marriage together.'
    },
    scene05: {
      sceneTag: 'THE COUPLE',
      title: 'GET TO KNOW US',
      swirlBtn: 'Blend Together',
      blendedBtn: 'Together! ✨',
      brideParents: 'First daughter of Mr. Hendra Wijaya & Mrs. Sofia Kartika',
      groomParents: 'Second son of Mr. Surya Mahendra & Mrs. Dewi Anggraini'
    },
    scene06: {
      sceneTag: 'PHOTO GALLERY',
      title: 'MOMENTS ALONG THE WAY',
      subtitle: 'A collection of candid snapshots and cherished memories from our journey together.',
      catAll: 'All',
      catCafe: 'Café Dates',
      catPrewed: 'Pre-Wedding',
      catCandid: 'Candid',
      openMemory: 'View Photo',
      prev: 'Previous',
      next: 'Next'
    },
    scene07: {
      batchTag: 'SAVE THE DATE • 24 OCTOBER 2027',
      organicBadge: 'SAVE THE DATE',
      saveDateEyebrow: 'COUNTING DOWN',
      celebrateSub: 'UNTIL THE WEDDING DAY • ',
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINUTES',
      seconds: 'SECONDS',
      addGoogle: 'ADD TO GOOGLE CALENDAR',
      downloadIcs: 'DOWNLOAD .ICS CALENDAR',
      ingredients: 'WE WOULD LOVE TO CELEBRATE WITH YOU',
      bestServed: 'SUNDAY, 24 OCTOBER 2027 • JAKARTA'
    },
    scene08: {
      sceneTag: 'EVENT DETAILS',
      title: 'WHEN & WHERE',
      subtitle: 'Here is the complete schedule for our holy matrimony and wedding reception.',
      dayDateLabel: 'Day & Date',
      eventTimeLabel: 'Time',
      addressLabel: 'Venue Location',
      openMaps: 'OPEN GOOGLE MAPS',
      addCal: 'ADD TO CALENDAR',
      attireTitle: 'Attire & Dress Code',
      attireSub: 'Soft pastel tones, sage green, or dusty rose:'
    },
    scene09: {
      sceneTag: 'PERSONAL NOTE',
      title: 'TO OUR FAMILY & CLOSE FRIENDS',
      dearLabel: 'Hi',
      notePersonalized:
        '“We are getting married and would be so happy to celebrate this special day with you. Your presence means the world to us.”',
      noteGeneral:
        '“We are getting married and would love to have you celebrate this milestone with us.”',
      noteClosing:
        '“We look forward to seeing you on our wedding day. Your warm prayers and blessings mean everything to us.”',
      withLove: 'Warmly,'
    },
    scene10: {
      sceneTag: 'RSVP',
      title: 'WILL YOU JOIN US? ♡',
      desc: 'Please let us know your attendance so we can welcome you comfortably.',
      demoNotice: 'Demo Mode: Your confirmation will appear live on the wishes board below!',
      nameLabel: 'Full Name',
      namePlaceholder: 'Type your name here...',
      attendLabel: 'Attendance Confirmation',
      attendYes: "YES, I WILL BE THERE! 🍓",
      attendYesSub: 'Attending the wedding',
      attendNo: 'UNABLE TO ATTEND 🍵',
      attendNoSub: 'Sending love and prayers from afar',
      guestsLabel: 'Number of Guests',
      guest1: '1 Person (Solo)',
      guest2: '2 Persons (Couple)',
      guest3: '3 Persons (Family)',
      guest4: '4 Persons (Family)',
      drinkLabel: 'Welcome Drink Choice ☕',
      messageLabel: 'Message or Prayer for the Couple',
      messagePlaceholder: 'Share your warm wishes and prayers for Nadia & Raka...',
      submittingBtn: 'SENDING RSVP...',
      submitYes: 'CONFIRM ATTENDANCE ♡',
      submitNo: 'SEND WISHES ♡',
      errName: 'Please enter your full name (minimum 2 characters).',
      errMsg: 'Please leave a short message or prayer (minimum 5 characters).',
      errDuplicate: (name: string) => `Confirmation for "${name}" has already been received in this session. Thank you!`,
      successMsg: (name: string) => `Thank you so much, ${name}! Your confirmation and wishes have been received. ♡`
    },
    scene11: {
      sceneTag: 'WISHES & PRAYERS',
      title: 'MESSAGES & BLESSINGS',
      desc: 'Every prayer and kind wish from friends and family means so much to both of us.',
      namePlaceholder: 'Your name...',
      wishPlaceholder: 'Write a wish or prayer for Nadia & Raka...',
      pinBtn: 'Send Wish 📌',
      pinFeedback: 'Thank you! Your wish has been posted ✨',
      emptyFeedback: 'Please enter your name and a short wish first ♡'
    },
    scene12: {
      sceneTag: 'SEE YOU SOON',
      happilyEver: 'SEE YOU AT OUR WEDDING CELEBRATION!',
      madeWithLove: 'THANK YOU FOR BEING PART OF OUR STORY.',
      backToTop: 'BACK TO TOP ↑',
      footerTagline: 'Nadia & Raka • 24 October 2027'
    }
  },
  id: {
    header: {
      guest: 'Tamu:',
      testUrlBtn: 'Uji URL Tamu ?to=',
      hideTester: 'Tutup Penguji URL',
      simulateQuery: 'Simulasi Query URL:',
      customGuestPlaceholder: 'Ketik nama tamu...',
      applyBtn: 'Terapkan',
      copyLink: 'Salin Link',
      copied: 'Tersalin!'
    },
    controls: {
      motionReduced: 'Animasi: Minimal',
      motionFull: 'Animasi: Normal',
      musicOn: '♫ MUSIK NYALA',
      musicOff: '♫ MUSIK MATI',
      progressLabel: 'CERITA KAMI'
    },
    hero: {
      langLabel: 'Pilihan Bahasa:',
      invitationFor: 'UNDANGAN SPESIAL UNTUK',
      dear: 'UNTUK',
      introEyebrow: 'KABAR BAHAGIA',
      invitedHeadline: 'KAMI INGIN MERAYAKAN HARI BAHAGIA INI BERSAMAMU',
      matchaTag: 'Matcha yang Menenangkan',
      strawberryTag: 'Stroberi yang Ceria',
      chapterStarts: 'MINGGU, 24 OKTOBER 2027 • JAKARTA',
      openPersonalized: 'BUKA UNDANGAN ♡',
      openGeneral: 'BUKA UNDANGAN ♡',
      skipToDetails: 'Langsung ke Jadwal Acara ↓'
    },
    scene02: {
      sceneTag: 'TENTANG KAMI',
      headingMain: 'DUA KEPRIBADIAN BERBEDA,',
      headingSub: 'SALING MELENGKAPI SATU SAMA LAIN.',
      storyDesc:
        'Raka itu tenang dan membumi, sedangkan Nadia penuh energi dan selalu ceria. Kami punya banyak perbedaan, tapi justru dari situ kami saling melengkapi dan merasa nyaman bersama.',
      tabCup: '🥤 Cangkir Spesial',
      tabBerry: '🍓 Cerita Nadia',
      tabPastry: '🥐 Cerita Raka',
      sliderMatcha: '🍵 Sisi Tenang (Raka)',
      sliderBerry: 'Sisi Ceria (Nadia) 🍓',
      currentBlend: 'Perpaduan Kami:',
      cardCupTitle: 'Kisah Kami',
      cardCupSub: 'Dua cerita jadi satu',
      cardBerryTitle: 'Nadia Larasati',
      cardBerrySub: 'Ceria & kreatif',
      cardPastryTitle: 'Raka Pradipta',
      cardPastrySub: 'Tenang & penuh perhatian'
    },
    scene03: {
      sceneTag: 'PERJALANAN KAMI',
      title: 'BAGAIMANA CERITA INI DIMULAI',
      subtitle:
        'Mulai dari obrolan pertama di kafe sampai akhirnya kami yakin untuk melangkah ke jenjang pernikahan bersama.'
    },
    scene04: {
      sceneTag: 'CERITA SINGKAT',
      quote: '“BERSAMAMU, SEMUANYA TERASA LEBIH MUDAH DAN MENYENANGKAN.”',
      desc:
        'Dari sekadar teman ngobrol, teman cerita, sampai akhirnya jadi teman hidup selamanya.'
    },
    scene05: {
      sceneTag: 'KEDUA MEMPELAI',
      title: 'MENGENAL KAMI LEBIH DEKAT',
      swirlBtn: 'Satukan Cerita',
      blendedBtn: 'Bersama! ✨',
      brideParents: 'Putri pertama dari Bpk. Hendra Wijaya & Ibu Sofia Kartika',
      groomParents: 'Putra kedua dari Bpk. Surya Mahendra & Ibu Dewi Anggraini'
    },
    scene06: {
      sceneTag: 'GALERI FOTO',
      title: 'MOMEN-MOMEN BERSAMA',
      subtitle: 'Beberapa potret perjalanan kami yang ingin kami bagikan denganmu.',
      catAll: 'Semua',
      catCafe: 'Kencan Kafe',
      catPrewed: 'Pre-Wedding',
      catCandid: 'Spontan',
      openMemory: 'Lihat Foto',
      prev: 'Sebelumnya',
      next: 'Selanjutnya'
    },
    scene07: {
      batchTag: 'SAVE THE DATE • 24 OKTOBER 2027',
      organicBadge: 'SIMPAN TANGGALNYA',
      saveDateEyebrow: 'MENGHITUNG HARI',
      celebrateSub: 'MENUJU HARI PERNIKAHAN • ',
      days: 'HARI',
      hours: 'JAM',
      minutes: 'MENIT',
      seconds: 'DETIK',
      addGoogle: 'SIMPAN KE GOOGLE CALENDAR',
      downloadIcs: 'UNDUH KALENDER (.ICS)',
      ingredients: 'KAMI SANGAT SENANG JIKA KAMU BISA HADIR',
      bestServed: 'MINGGU, 24 OKTOBER 2027 • JAKARTA'
    },
    scene08: {
      sceneTag: 'RANGKAIAN ACARA',
      title: 'WAKTU & TEMPAT ACARA',
      subtitle: 'Berikut informasi lengkap acara akad nikah dan resepsi. Semoga memudahkanmu merencanakan kehadiran.',
      dayDateLabel: 'Hari & Tanggal',
      eventTimeLabel: 'Waktu Acara',
      addressLabel: 'Lokasi Acara',
      openMaps: 'BUKA GOOGLE MAPS',
      addCal: 'SIMPAN KE KALENDER',
      attireTitle: 'Dresscode / Nuansa Busana',
      attireSub: 'Nuansa warna pastel, matcha green, atau dusty rose:'
    },
    scene09: {
      sceneTag: 'PESAN HANGAT',
      title: 'UNTUK KELUARGA & SAHABAT',
      dearLabel: 'Hai',
      notePersonalized:
        '“Kami ingin berbagi kabar bahagia ini denganmu. Hari pernikahan kami akan terasa jauh lebih berkesan kalau kamu bisa hadir dan merayakannya bersama kami.”',
      noteGeneral:
        '“Kami ingin berbagi kabar bahagia ini denganmu. Kehadiran dan doamu akan sangat berarti bagi kami di hari bahagia ini.”',
      noteClosing:
        '“Semoga kita bisa bertemu di hari pernikahan nanti. Doa tulusmu sudah berarti banyak buat perjalanan baru kami.”',
      withLove: 'Salam hangat dari kami,'
    },
    scene10: {
      sceneTag: 'KONFIRMASI KEHADIRAN',
      title: 'BISA HADIR? KABARI KAMI, YA! ♡',
      desc: 'Bantu kami mempersiapkan acara dengan mengonfirmasi kehadiranmu lebih awal.',
      demoNotice: 'Mode Demo: Konfirmasimu akan langsung tampil di papan ucapan di bawah!',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Ketik namamu di sini...',
      attendLabel: 'Konfirmasi Kehadiran',
      attendYes: 'YA, SAYA BISA HADIR! 🍓',
      attendYesSub: 'Akan hadir di hari bahagia',
      attendNo: 'BELUM BISA HADIR 🍵',
      attendNoSub: 'Turut mendoakan dari jauh',
      guestsLabel: 'Jumlah Kehadiran',
      guest1: '1 Orang (Sendiri)',
      guest2: '2 Orang (Bersama Pasangan)',
      guest3: '3 Orang (Bersama Keluarga)',
      guest4: '4 Orang (Bersama Keluarga)',
      drinkLabel: 'Pilihan Minuman Selamat Datang ☕',
      messageLabel: 'Pesan & Doa untuk Kami',
      messagePlaceholder: 'Tuliskan ucapan atau doamu untuk Nadia & Raka...',
      submittingBtn: 'MENGIRIM KONFIRMASI...',
      submitYes: 'KIRIM KONFIRMASI KEHADIRAN ♡',
      submitNo: 'KIRIM DOA & UCAPAN ♡',
      errName: 'Mohon masukkan nama lengkap (minimal 2 karakter).',
      errMsg: 'Tuliskan sedikit pesan atau doa untuk kami (minimal 5 karakter).',
      errDuplicate: (name: string) => `Konfirmasi untuk "${name}" sudah terkirim di sesi ini. Terima kasih banyak!`,
      successMsg: (name: string) => `Terima kasih banyak, ${name}! Konfirmasi dan ucapanmu sudah kami terima dan tampil di bawah. ♡`
    },
    scene11: {
      sceneTag: 'DOA & UCAPAN',
      title: 'TITIPAN DOA & HARAPAN',
      desc: 'Setiap doa dan ucapan baik dari teman dan keluarga sangat berarti buat kami berdua.',
      namePlaceholder: 'Namamu...',
      wishPlaceholder: 'Tulis ucapan atau doa buat Nadia & Raka...',
      pinBtn: 'Kirim Ucapan 📌',
      pinFeedback: 'Terima kasih! Ucapanmu berhasil ditempel di papan ✨',
      emptyFeedback: 'Yuk, isi nama dan pesan ucapanmu dulu ya ♡'
    },
    scene12: {
      sceneTag: 'SAMPAI JUMPA',
      happilyEver: 'SAMPAI KETEMU DI HARI PERNIKAHAN KAMI!',
      madeWithLove: 'TERIMA KASIH TELAH MENJADI BAGIAN DARI HARI BAHAGIA KAMI.',
      backToTop: 'KEMBALI KE ATAS ↑',
      footerTagline: 'Nadia & Raka • 24 Oktober 2027'
    }
  }
};
