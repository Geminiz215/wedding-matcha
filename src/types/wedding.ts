export interface CouplePerson {
  nickname: string;
  fullName: string;
  parents: string;
  flavorTitle: string;
  flavorTag: string;
  personality: string;
  traits: string[];
  photo?: string;
}

export interface CoupleConfig {
  coupleHeroPhoto?: string;
  bride: CouplePerson;
  groom: CouplePerson;
}

export interface EventDetail {
  title: string;
  subtitle: string;
  dayDate: string;
  time: string;
  startISO: string;
  endISO: string;
  venueName: string;
  address: string;
  mapsUrl: string;
  note: string;
}

export interface EventsConfig {
  akad: EventDetail;
  resepsi: EventDetail;
}

export interface TimelineStoryItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  recipeNote: string;
  stamp: string;
  rotation: string;
  accent: 'matcha' | 'strawberry' | 'cream' | 'both';
  illustrationType: 'cup' | 'strawberry' | 'pastry';
}

export type GallerySceneType =
  | 'cafe-table'
  | 'greenhouse'
  | 'bakery'
  | 'window'
  | 'picnic'
  | 'proposal';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Café Dates' | 'Pre-Wedding' | 'Candid' | string;
  aspect: 'portrait' | 'landscape' | 'square';
  date: string;
  caption: string;
  bgGradient: string;
  sticker: string;
  rotation: string;
  sceneType: GallerySceneType;
  imageUrl?: string;
}

export interface WishItem {
  id: string;
  name: string;
  attendance: string;
  guests: number;
  drink: string;
  message: string;
  timestamp: string;
  color: 'pink' | 'green' | 'cream';
}

export interface WeddingConfig {
  couple: CoupleConfig;
  weddingDateISO: string;
  weddingDateDisplay: string;
  weddingDayDisplay: string;
  timezone: string;
  hashtag: string;
  events: EventsConfig;
  storyTimeline: TimelineStoryItem[];
  gallery: GalleryItem[];
  initialWishes: WishItem[];
}

export interface GuestData {
  name: string;
  isPersonalized: boolean;
  sourceParam: string;
  rawQuery: string;
}

export interface RsvpFormData {
  name: string;
  attendance: string;
  guests: string;
  drink: string;
  message: string;
}
