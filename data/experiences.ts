// ─────────────────────────────────────────────────────────────
// SPLIT EXPERIENCE — Content Config
// Edit this file to update experiences, prices, images, etc.
// ─────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  whatsappNumber: '385992044055', // ← replace with your real number
  siteName: 'Split Experience',
  siteUrl: 'https://splitexperience.com',
};

export type Category = 'explore' | 'adventure' | 'dining' | 'essentials' | 'concierge';

export interface Experience {
  id: string;
  number: string;
  category: Category;
  categoryLabel: string;
  title: string;
  subtitle?: string;
  duration: string;
  location: string;
  price?: string;
  description: string;
  image: string;        // path in /public/images/ or full Unsplash URL
  imageAlt: string;
  ctaLabel?: string;
  whatsappMessage?: string;
  affiliateUrl?: string;
  layout: 'feature' | 'half' | 'third' | 'essential';
}

export const experiences: Experience[] = [
  // ── EXPLORE ──────────────────────────────────────────────
  {
    id: 'blue-cave',
    number: '01',
    category: 'explore',
    categoryLabel: 'Explore',
    title: 'Blue Cave',
    subtitle: '& Hvar Island',
    duration: 'Full Day',
    location: 'Hvar · Vis Island',
    price: 'From €130 per person',
    description:
      'The sea turns luminescent blue inside the cave on Vis Island — a natural phenomenon that stops people mid-sentence. Then Hvar, shown to you the way locals actually experience it: not the main strip.',
    image: '/images/hvar.jpg',
    imageAlt: 'Blue Cave Vis Island Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Blue Cave & Hvar full day tour",
    layout: 'feature',
  },
  {
    id: 'krka',
    number: '02',
    category: 'explore',
    categoryLabel: 'Explore',
    title: 'Krka',
    subtitle: 'National Park',
    duration: 'Half Day',
    location: 'Šibenik Region',
    price: 'From €35 per person',
    description:
      'Swim beneath waterfalls an hour from your door. Untouched Mediterranean woodland, cascades, and none of the tour-bus crowds — we know the right entry point and the right time to go.',
    image: '/images/krka.jpg',
    imageAlt: 'Krka National Park waterfalls Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Krka National Park tour",
    layout: 'feature',
  },
  {
    id: 'private-boat-tour',
    number: '03',
    category: 'explore',
    categoryLabel: 'Explore',
    title: 'Private',
    subtitle: 'Boat Tour',
    duration: 'Half or Full Day',
    location: 'Split Archipelago',
    price: '€500 – €1300 per boat',
    description:
      'Your own skipper, your own route. Hidden coves, swimming stops only locals know, lunch wherever you decide. No schedule but yours.',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Private boat tour Split archipelago Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book a Private Boat Tour",
    layout: 'feature',
  },

  // ── ADVENTURE ────────────────────────────────────────────
  {
    id: 'zipline',
    number: '04',
    category: 'adventure',
    categoryLabel: 'Adventure',
    title: 'Zipline',
    subtitle: 'Split',
    duration: '3 Hours',
    location: 'Split Canyon',
    price: 'From €80 per person',
    description:
      'Seven lines over a canyon. The Adriatic in the distance, the Dalmatian hills below you. No planning — we sort it all.',
    image: '/images/zipline.jpg',
    imageAlt: 'Zipline Split Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Zipline adventure",
    layout: 'half',
  },
  {
    id: 'quad-safari',
    number: '05',
    category: 'adventure',
    categoryLabel: 'Adventure',
    title: 'Quad',
    subtitle: 'Safari',
    duration: '3 Hours',
    location: 'Split Hinterland',
    price: '€80 – €120 per person',
    description:
      'Dust trails through olive groves and stone villages. Sunset from the hills above Split with the whole Dalmatian coast below — on your own machine.',
    image: '/images/quad.jpg',
    imageAlt: 'Quad Safari Split hinterland',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Quad Safari",
    layout: 'half',
  },
  {
    id: 'rafting',
    number: '06',
    category: 'adventure',
    categoryLabel: 'Adventure',
    title: 'Rafting',
    subtitle: 'Cetina River',
    duration: 'Half Day',
    location: 'Cetina River Canyon',
    price: 'From €50 per person',
    description:
      'Cold, clear river water cutting through a limestone canyon inland from the coast. Rapids, jumps off the rocks, and a swim in water so clean you can drink it.',
    image: '/images/rafting.jpg',
    imageAlt: 'Rafting Cetina River Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Rafting trip on the Cetina River",
    layout: 'half',
  },

  // ── DINING ───────────────────────────────────────────────
  {
    id: 'konoba-fetivi',
    number: '07',
    category: 'dining',
    categoryLabel: 'Dining',
    title: 'Konoba',
    subtitle: 'Fetivi',
    duration: 'Evening',
    location: 'Old Town · Split',
    price: undefined,
    description:
      'No printed menu. Just what arrived from the sea that morning, served inside Roman walls. Order whatever they tell you to.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Konoba Fetivi Old Town Split',
    layout: 'half',
  },
  {
    id: 'zoi',
    number: '08',
    category: 'dining',
    categoryLabel: 'Dining',
    title: 'Zoi',
    subtitle: 'Restaurant',
    duration: 'Evening',
    location: 'Modern Split',
    price: undefined,
    description:
      'Dalmatian flavours rethought — technically precise, locally rooted, never pretentious. The dish you\'ll still be talking about at the airport.',
    image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Zoi Restaurant Split',
    layout: 'half',
  },
  {
    id: 'dvor',
    number: '09',
    category: 'dining',
    categoryLabel: 'Dining',
    title: 'Dvor',
    subtitle: 'Terrace',
    duration: 'Sunset & Dinner',
    location: 'Cliff-side · Split',
    price: undefined,
    description:
      'Cliff-side tables, local Plavac Mali, the sea turning gold at dusk. The best seat in Split — and it\'s impossible to get without knowing someone. We know someone.',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=2400&q=85',
    imageAlt: 'Dvor Terrace sunset Split Croatia',
    layout: 'feature',
  },

  // ── ESSENTIALS ───────────────────────────────────────────
  {
    id: 'car-rental',
    number: '10',
    category: 'essentials',
    categoryLabel: 'Essential',
    title: 'Rent',
    subtitle: 'a Car',
    duration: 'Arranged same day',
    location: 'Pick-up from your door',
    price: undefined,
    description:
      'The best beaches in Dalmatia are not on Google Maps. You need wheels. We arrange the right car at a fair price, collected wherever you\'re staying.',
    image: '/images/rentacar.jpg',
    imageAlt: 'Car rental Split Croatia coastal drive',
    ctaLabel: 'Find the best deal',
    affiliateUrl: 'https://www.discovercars.com/?a_aid=antontrumbic&a_bid=4abe6023',
    layout: 'essential',
  },
  {
    id: 'airport-transfer',
    number: '11',
    category: 'essentials',
    categoryLabel: 'Essential',
    title: 'Airport',
    subtitle: 'Transfer',
    duration: 'Meet & Greet',
    location: 'All flights tracked',
    price: undefined,
    description:
      'Someone waiting when you land, name on a board, bags in the boot. Your trip starts the moment the wheels touch down — not at the taxi rank.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Airport transfer Split Croatia',
    ctaLabel: 'Book transfer',
    whatsappMessage: "Hi, I'd like to book an airport transfer in Split",
    layout: 'essential',
  },
];

// Featured picks shown in the scrollable dark section
export const featuredIds = ['blue-cave', 'krka', 'private-boat-tour', 'zipline', 'rafting'];

// Category section definitions
export const categories = [
  {
    id: 'explore',
    label: 'Explore',
    range: '01 – 03',
    tagline: 'The Adriatic seen from water. Day escapes and a boat that\'s yours alone.',
  },
  {
    id: 'adventure',
    label: 'Adventure',
    range: '04 – 06',
    tagline: 'Three ways to see the Dalmatian hinterland — and the rivers running through it.',
  },
  {
    id: 'dining',
    label: 'Dining',
    range: '07 – 09',
    tagline: 'A few places worth knowing about. No reservation needed through us — just go.',
  },
  {
    id: 'essentials',
    label: 'Essentials',
    range: '10 – 11',
    tagline: 'The practical part, sorted before you arrive.',
  },
];
