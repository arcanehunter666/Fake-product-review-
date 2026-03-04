import { Package, Review } from './types';

const COUNTRIES = [
  "Japan", "Italy", "India", "France", "Brazil", 
  "Australia", "Egypt", "Mexico", "Norway", "Thailand"
];

const THEMES = [
  ["Cherry Blossom Tour", "Tokyo City Escape", "Kyoto Temples Trail", "Mount Fuji Hike", "Osaka Food Safari"],
  ["Amalfi Coast Cruise", "Rome Colosseum Explorer", "Tuscany Wine & Dine", "Venice Gondola Weekend", "Sicily Heritage Trail"],
  ["Rajasthan Royal Tour", "Kerala Backwaters", "Himalayan Trekking", "Goa Beach Escape", "Golden Triangle Heritage"],
  ["Paris Romantic Escape", "Loire Valley Châteaux", "French Riviera Getaway", "Bordeaux Wine Trail", "Mont Blanc Alpine Adventure"],
  ["Amazon Jungle Expedition", "Rio Carnival Experience", "Iguazu Falls Trek", "Pantanal Wildlife Safari", "Salvador Cultural Immersion"],
  ["Great Barrier Reef Dive", "Sydney Harbour Explorer", "Outback Desert Adventure", "Great Ocean Road Drive", "Tasmania Wilderness Trail"],
  ["Nile River Cruise", "Pyramids of Giza Discovery", "Luxor Temples Journey", "Red Sea Snorkeling", "Cairo City Mosaic"],
  ["Yucatan Mayan Ruins", "Mexico City Art Tour", "Oaxaca Cultural Trail", "Tulum Beach Retreat", "Copper Canyon Rail Journey"],
  ["Northern Lights Chase", "Norwegian Fjords Cruise", "Bergen City Walk", "Tromsø Arctic Safari", "Lofoten Islands Hike"],
  ["Bangkok Temple Hopping", "Chiang Mai Elephant Sanctuary", "Phuket Island Escape", "Krabi Rock Climbing", "Ayutthaya History Trail"]
];

export const PACKAGES: Package[] = COUNTRIES.flatMap((country, cIdx) => 
  THEMES[cIdx].map((theme, pIdx) => ({
    id: `${country.toLowerCase().replace(/\s/g, '-')}-${pIdx + 1}`,
    country,
    packageName: theme,
    duration: `${5 + pIdx} Days / ${4 + pIdx} Nights`,
    price: 1200 + (pIdx * 300) + (cIdx * 100),
    rating: 4 + (Math.random() * 1),
    reviewCount: 20 + Math.floor(Math.random() * 200),
    imageUrl: `https://picsum.photos/seed/${country}${pIdx}/800/500`,
    highlights: ["Guided Local Tours", "Premium Accommodation", "Cultural Immersion"],
    description: `Discover the wonders of ${country} with our ${theme}. A perfect blend of adventure and relaxation.`
  }))
);

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-001",
    packageId: PACKAGES[0].id,
    userName: "Sarah Mitchell",
    userEmail: "sarah.m@gmail.com",
    ipAddress: "192.168.1.45",
    rating: 5,
    headline: "Absolutely unforgettable experience!",
    body: "The cherry blossoms were beyond anything I could have imagined. Our guide was incredibly knowledgeable and the ryokan stay was the highlight of my trip. Would recommend this to anyone visiting Japan in spring.",
    submittedAt: "2024-03-15",
    status: "approved",
    flagReasons: [],
    pipelineResults: {
      step1: { passed: true, detail: "Headline and body sentiments are consistently positive." },
      step2: { passed: true, detail: "No brand bias pattern detected for this user." },
      step3: { passed: true, detail: "IP address shows no coordinated promotion activity." },
      step4: { passed: true, detail: "First review by this user for this package." },
      step5: { passed: true, detail: "Cosine similarity with existing reviews is 0.12 (below threshold)." },
      step6: { passed: true, detail: "LSA score indicates coherent, meaningful content." }
    }
  },
  {
    id: "rev-002",
    packageId: PACKAGES[0].id,
    userName: "TravelBot99",
    userEmail: "bot99@tempmail.com",
    ipAddress: "10.0.0.77",
    rating: 5,
    headline: "Best tour ever!!!",
    body: "best tour best tour best tour great amazing wonderful",
    submittedAt: "2024-03-16",
    status: "flagged",
    flagReasons: ["Meaningless/repetitive text detected", "Near-duplicate content found"],
    pipelineResults: {
      step1: { passed: true, detail: "Sentiment is loosely consistent." },
      step2: { passed: true, detail: "No single-user brand bias detected." },
      step3: { passed: true, detail: "IP has no prior coordinated activity." },
      step4: { passed: true, detail: "First review for this package by this user." },
      step5: { passed: false, detail: "Cosine similarity of 0.91 detected with review rev-001. Threshold exceeded." },
      step6: { passed: false, detail: "LSA analysis found extremely low semantic coherence. Text appears meaningless or bot-generated." }
    }
  }
];
