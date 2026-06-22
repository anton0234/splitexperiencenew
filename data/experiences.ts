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
  // Detail page fields (explore + adventure only)
  departs?: string;
  longDescription?: string;
  bring?: string[];
  rules?: string[];
  includes?: string[];
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
    price: '€130 per person',
    description:
      'The sea turns luminescent blue inside the cave on Vis Island — a natural phenomenon that stops people mid-sentence. Then Hvar, shown to you the way locals actually experience it: not the main strip.',
    image: '/images/hvar.jpg',
    imageAlt: 'Blue Cave Vis Island Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Blue Cave & Hvar full day tour",
    layout: 'feature',
    departs: '07:30 AM',
    longDescription: 'The sea inside the Blue Cave on Vis Island turns a supernatural luminescent blue — a natural phenomenon caused by sunlight refracting through an underwater opening. It stops people mid-sentence. After that, Hvar shown to you the way locals actually experience it: narrow stone lanes, a terrace nobody from TripAdvisor has found, cold wine by the water. The day covers five islands — Biševo, Vis, Budikovac lagoon, and Pakleni — with swimming stops along the way. We know the right boat, the right guide, and the right time to arrive at the cave before the crowds.',
    bring: ['Swimsuit and towel', 'Sunscreen, sunglasses, and a hat', 'Light windbreaker or long sleeves — speedboat rides are fast', 'Water shoes — the Blue Lagoon has a rocky bottom', 'Camera or waterproof phone case', 'Snacks and water for the journey'],
    rules: ['No swimming inside the Blue Cave — you view it from the boat', 'Not recommended for pregnant women or people with serious back problems', 'Not recommended for children under 3 years old', 'Tour runs regardless of light rain — cancelled only in severe weather, full refund applies', 'Snorkelling equipment included'],
    includes: ['Speedboat & professional skipper', 'Snorkelling equipment', 'Swimming stops at hidden coves', 'Hvar town visit', 'Pick-up from Split harbour'],
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
    price: '€40 per person',
    description:
      'Swim beneath waterfalls an hour from your door. Untouched Mediterranean woodland, cascades, and none of the tour-bus crowds — we know the right entry point and the right time to go.',
    image: '/images/krka.jpg',
    imageAlt: 'Krka National Park waterfalls Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Krka National Park tour",
    layout: 'feature',
    departs: '07:45 AM',
    longDescription: 'Swim beneath waterfalls an hour from your door. The Krka River has carved a series of cascades through untouched Mediterranean woodland — the kind of place you assumed only existed in films. We know the right entry point, the right time to arrive, and how to avoid the tour-bus rush. A stop in Šibenik on the way back.',
    bring: ['Swimsuit and towel', 'Comfortable walking shoes — pathways can be slippery', 'Sunscreen, sunglasses, and a hat', 'Bottle of water', 'Cash for the National Park entrance fee', 'Camera'],
    rules: ['Swimming permitted in designated areas only (1 June – 30 September)', 'Drones strictly prohibited inside the park — fines and confiscation apply', 'Tour runs in light rain (ponchos provided)', 'National Park entrance fee paid separately on arrival — not included in price', 'No lunch included — options available inside the park and in Šibenik'],
    includes: ['Return transport from Split', 'English-speaking guide', 'Šibenik stop', 'Small group — no tour buses'],
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
    price: '€1000 per boat',
    description:
      'Your own skipper, your own route. Hidden coves, swimming stops only locals know, lunch wherever you decide. No schedule but yours.',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Private boat tour Split archipelago Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book a Private Boat Tour",
    layout: 'feature',
    departs: 'Your choice',
    longDescription: 'Your own skipper, your own route, your own schedule. No group. No compromises. We put you on a private boat with a local who knows every hidden cove, every swimming stop, and every lunch place worth the anchor drop. You decide when to leave, where to go, and how long to stay. Price depends on which boat is available and how long you want it — we\'ll come back to you with options, usually within the hour.',
    bring: ['Swimsuit and towel', 'Sunscreen and sunglasses', 'Light layers for the boat ride', 'Camera', 'Cash or card for food and drinks on shore'],
    rules: ['Maximum 12 guests per boat', 'Route fully customisable — tell us what you want to see', 'Not recommended for pregnant women or those with serious back or neck injuries', 'Skipper and fuel included — food and drinks extra', 'Available March through November'],
    includes: ['Private boat & professional skipper', 'Snorkelling equipment', 'Fuel & marina fees', 'Fully customisable route', 'Up to 12 guests'],
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
    price: '€80 per person',
    description:
      'Seven lines over a canyon. The Adriatic in the distance, the Dalmatian hills below you. No planning — we sort it all.',
    image: '/images/zipline.jpg',
    imageAlt: 'Zipline Split Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Zipline adventure",
    layout: 'half',
    departs: 'Morning',
    longDescription: 'Eight steel cables strung across the Cetina Canyon, the longest running 700 metres at 150 metres above the canyon floor. The Adriatic coast in the distance, the Dalmatian hills below you. No planning required — we sort the transport, the gear, and the guide.',
    bring: ['Sports shoes — trainers or hiking shoes (no sandals or flip-flops)', 'Comfortable, close-fitting clothing', 'At least 1 litre of water', 'Sunscreen', 'Small backpack for your belongings', 'Camera or GoPro'],
    rules: ['Minimum age: 7 years · Maximum weight: 140 kg', 'Participants under 17 must be accompanied by an adult', 'Not suitable for pregnant women or people with serious back injuries', 'Helmet and full harness provided and mandatory throughout', 'Bring any fast-acting medication and inform your guide before the start'],
    includes: ['8-line zipline experience', 'Helmet, harness & full safety gear', 'Professional guide', 'Safety briefing & practice runs'],
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
    price: '€100 per person',
    description:
      'Dust trails through olive groves and stone villages. Sunset from the hills above Split with the whole Dalmatian coast below — on your own machine.',
    image: '/images/quad.jpg',
    imageAlt: 'Quad Safari Split hinterland',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Quad Safari",
    layout: 'half',
    departs: 'Morning / Afternoon',
    longDescription: 'Dust trails through olive groves and stone villages. The kind of landscape that doesn\'t make it onto postcards but stays in your memory. Sunset from the hills above Split with the whole Dalmatian coast laid out below — on your own machine, at your own pace.',
    bring: ['Valid driving licence (Category B)', 'Comfortable, dirt-friendly clothing', 'Closed-toe shoes — no sandals or flip-flops', 'Sunglasses and sunscreen', 'Light jacket — wind gets strong at higher elevation', 'Water'],
    rules: ['Valid driving licence required to drive — passengers from age 12', 'Minimum driver age: 18 years', 'Helmet and safety goggles provided and mandatory', 'Safety briefing and practice laps before departure', 'No alcohol before or during the tour', 'Follow the guide at all times — no overtaking on trails'],
    includes: ['Quad bike', 'Helmet, gloves & safety specs', 'Professional guide', 'Safety briefing & practice laps', 'Photos from the trail'],
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
    price: '€65 per person',
    description:
      'Cold, clear river water cutting through a limestone canyon inland from the coast. Rapids, jumps off the rocks, and a swim in water so clean you can drink it.',
    image: '/images/rafting.jpg',
    imageAlt: 'Rafting Cetina River Croatia',
    ctaLabel: 'Book via WhatsApp',
    whatsappMessage: "Hi, I'd like to book the Rafting trip on the Cetina River",
    layout: 'half',
    departs: 'Morning',
    longDescription: 'Cold, clear river water cutting through a limestone canyon inland from the coast. Ten kilometres of level 2–3 rapids, cliff jumps, and swimming holes in water so clean you can drink it. No experience required. Available April through November.',
    bring: ['Swimsuit', 'Water shoes or old trainers you don\'t mind getting wet', 'Dry clothes and a towel for after', 'Waterproof camera or dry bag for your phone', 'Sunscreen'],
    rules: ['Minimum age: 8 years', 'No previous experience necessary — guides brief everyone before departure', 'Life jacket, paddle, and helmet provided and mandatory throughout', 'No alcohol before or during the rafting', 'Follow guide instructions at all times', 'Available 1 April – end of November'],
    includes: ['Life jacket, helmet & paddle', 'Professional river guide', '10 km rafting route', 'Swimming & cliff jump stops', 'Transport from Split included'],
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
