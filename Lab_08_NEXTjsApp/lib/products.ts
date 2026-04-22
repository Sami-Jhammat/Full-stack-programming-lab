export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  details: string;
  rating: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    description: "Premium sound quality with 30-hour battery life and active noise cancellation.",
    price: 249,
    image: "🎧",
    category: "Electronics",
    details:
      "Experience crystal-clear audio with industry-leading noise cancellation. These headphones feature a 30-hour rechargeable battery, foldable design, and built-in microphone for hands-free calls. Compatible with Bluetooth 5.0 devices.",
    rating: 4.8,
    stock: 14,
  },
  {
    id: 2,
    title: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical keyboard with tactile switches for the ultimate gaming experience.",
    price: 129,
    image: "⌨️",
    category: "Gaming",
    details:
      "Built with premium Cherry MX switches, this keyboard delivers unparalleled tactile feedback. The full RGB lighting supports 16.8 million colors. Anti-ghosting technology ensures every keystroke is registered, even during intense gaming sessions.",
    rating: 4.6,
    stock: 28,
  },
  {
    id: 3,
    title: "Smart Fitness Tracker Watch",
    description: "Track your health metrics, sleep, steps, and heart rate with this stylish smartwatch.",
    price: 89,
    image: "⌚",
    category: "Wearables",
    details:
      "Monitor heart rate 24/7, track sleep patterns, and count steps with precision sensors. Waterproof up to 50m, compatible with iOS and Android. Includes GPS, 7-day battery life, and over 20 sport modes.",
    rating: 4.5,
    stock: 42,
  },
  {
    id: 4,
    title: "4K Webcam with Ring Light",
    description: "Professional-grade 4K webcam with built-in ring light, perfect for streaming and video calls.",
    price: 179,
    image: "📷",
    category: "Electronics",
    details:
      "Capture every detail in stunning 4K resolution at 30fps. The adjustable ring light ensures perfect lighting in any environment. Features autofocus, wide-angle lens, and dual noise-cancelling microphones. Plug-and-play USB-C connection.",
    rating: 4.7,
    stock: 9,
  },
  {
    id: 5,
    title: "Ergonomic Office Chair",
    description: "Lumbar support, adjustable armrests, and breathable mesh for all-day comfort.",
    price: 399,
    image: "🪑",
    category: "Furniture",
    details:
      "Designed by ergonomics experts, this chair features 3D adjustable armrests, a flexible lumbar support system, and a breathable mesh back. Supports up to 300 lbs. Perfect for long work-from-home sessions.",
    rating: 4.9,
    stock: 7,
  },
  {
    id: 6,
    title: "Portable Bluetooth Speaker",
    description: "360° surround sound, IPX7 waterproof, and 24-hour playtime in a compact form factor.",
    price: 69,
    image: "🔊",
    category: "Audio",
    details:
      "Enjoy rich, room-filling sound wherever you go. Fully waterproof and dustproof (IPX7 rated). Pairs instantly via Bluetooth 5.0 and includes a built-in mic for hands-free calls. The battery lasts up to 24 hours on a single charge.",
    rating: 4.4,
    stock: 55,
  },
];
