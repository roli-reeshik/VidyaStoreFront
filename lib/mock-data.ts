export type ProductCategory =
  | "acoustics"
  | "leather"
  | "vessels"
  | "horology"
  | "culinary"
  | "lighting"
  | "optics"
  | "writing";

export type ProductColor = {
  name: string;
  hex: string;
  image?: string;
};

export type ProductReview = {
  author: string;
  role: string;
  rating: number;
  quote: string;
  variant: string;
  verified: boolean;
  ago: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  price: number;
  compareAt?: number;
  images: string[];
  colors: ProductColor[];
  fits?: { name: string; detail: string; price: number }[];
  badge?: string;
  badgeTone?: "accent" | "neutral";
  inventoryBadge?: string;
  stock: number;
  rating: number;
  reviewCount: number;
  sku: string;
  specs: ProductSpec[];
  materials: string;
  shipping: string;
  faq: { q: string; a: string }[];
  reviews: ProductReview[];
  scores: { label: string; value: number }[];
  featured: boolean;
};

export const IMAGES = {
  headphones: "/images/headphones.png",
  leatherBag: "/images/leather-bag.png",
  ceramicVase: "/images/ceramic-vase.png",
  hero: "/images/hero-banner.png",
  avatar: "/images/avatar.png",
  chronograph:
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1400&q=80",
  culinary:
    "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1400&q=80",
  lighting:
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80",
  optics:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1400&q=80",
  writing:
    "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1400&q=80",
  headphonesCream:
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400&q=80",
  headphonesTerracotta:
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=80",
  leatherBlack:
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1400&q=80",
  leatherOlive:
    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1400&q=80",
  leatherTerracotta:
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1400&q=80",
  leatherCream:
    "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1400&q=80",
  ceramicTerracotta:
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=80",
  ceramicBlack:
    "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=1400&q=80",
  watchBlack:
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1400&q=80",
  watchTerracotta:
    "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1400&q=80",
  culinaryTerracotta:
    "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1400&q=80",
  culinaryBlack:
    "https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=1400&q=80",
  lightingBlack:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=80",
  opticsTerracotta:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1400&q=80",
  opticsCream:
    "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1400&q=80",
  writingTerracotta:
    "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=1400&q=80",
  writingCream:
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1400&q=80",
} as const;

const COLOR_FINISHES: Record<ProductCategory, Record<string, string>> = {
  acoustics: {
    "Matte Black": IMAGES.headphones,
    "Warm Cream": IMAGES.headphonesCream,
    Terracotta: IMAGES.headphonesTerracotta,
  },
  leather: {
    Cognac: IMAGES.leatherBag,
    "Matte Black": IMAGES.leatherBlack,
    "Olive Tan": IMAGES.leatherOlive,
    Terracotta: IMAGES.leatherTerracotta,
    "Warm Cream": IMAGES.leatherCream,
  },
  vessels: {
    "Warm Cream": IMAGES.ceramicVase,
    Terracotta: IMAGES.ceramicTerracotta,
    "Matte Black": IMAGES.ceramicBlack,
  },
  horology: {
    "Warm Cream": IMAGES.chronograph,
    "Matte Black": IMAGES.watchBlack,
    Terracotta: IMAGES.watchTerracotta,
  },
  culinary: {
    "Warm Cream": IMAGES.culinary,
    Terracotta: IMAGES.culinaryTerracotta,
    "Matte Black": IMAGES.culinaryBlack,
  },
  lighting: {
    "Warm Cream": IMAGES.lighting,
    "Matte Black": IMAGES.lightingBlack,
  },
  optics: {
    "Matte Black": IMAGES.optics,
    Terracotta: IMAGES.opticsTerracotta,
    "Warm Cream": IMAGES.opticsCream,
  },
  writing: {
    "Matte Black": IMAGES.writing,
    Terracotta: IMAGES.writingTerracotta,
    "Warm Cream": IMAGES.writingCream,
  },
};

export function getProductColorImage(product: Product, colorName?: string): string {
  const name = colorName ?? product.colors[0]?.name;
  const swatch = product.colors.find((color) => color.name === name);
  if (swatch?.image) return swatch.image;
  if (name && COLOR_FINISHES[product.category]?.[name]) {
    return COLOR_FINISHES[product.category][name];
  }
  return product.images[0];
}

export function getProductGallery(product: Product, colorName?: string): string[] {
  const hero = getProductColorImage(product, colorName);
  return [hero, ...product.images.filter((src) => src !== hero)];
}

export const products: Product[] = [
  {
    id: "aura-one",
    slug: "aura-one-headphones",
    name: "AURA One Wireless Headphones",
    shortName: "AURA One Wireless",
    category: "acoustics",
    categoryLabel: "Personal Acoustics",
    description:
      "Noise-cancelling circumaural headphones engineered with titanium diaphragm drivers.",
    longDescription:
      "Every curve and resonance cavity in the AURA One is numerically tuned to eliminate micro-vibrations before soundwaves touch the ear canal. The result is pure, surgical staging identical to mastering room acoustics.",
    price: 380,
    compareAt: 450,
    images: [IMAGES.headphones, IMAGES.hero, IMAGES.ceramicVase, IMAGES.avatar],
    colors: [
      { name: "Matte Black", hex: "#171717" },
      { name: "Warm Cream", hex: "#f5e6d3" },
      { name: "Terracotta", hex: "#c46a3a" },
    ],
    fits: [
      { name: "Circumaural Over-Ear", detail: "Reference Studio (Standard)", price: 380 },
      { name: "Travel Foldable Pack", detail: "+$40 with Pelican Case", price: 420 },
    ],
    badge: "-15% Atelier",
    badgeTone: "accent",
    inventoryBadge: "Only 3 left in stock",
    stock: 3,
    rating: 4.9,
    reviewCount: 148,
    sku: "AUR-001-OBS",
    specs: [
      { label: "Transducer", value: "40mm Custom Electro-Dynamic Beryllium Driver" },
      { label: "Active Cancellation", value: "4-Microphone Hybrid Feedforward & Feedback ANC" },
      { label: "Battery Longevity", value: "38 Hours (ANC On) / 54 Hours (Passive Mode)" },
      { label: "Connectivity", value: "Lossless Bluetooth 5.3 + Qualcomm aptX Adaptive" },
    ],
    materials:
      "Hand-assembled in small batches. Constructed from CNC-machined aircraft grade aluminum 6063-T6, anodized with a low-glare matte finish. The headband cushion uses ethically sourced supple Italian Nappa leather over dual-layer viscoelastic memory foam engineered for zero cranial fatigue during prolonged studio sessions.",
    shipping:
      "All orders include insured carbon-neutral DHL Express delivery. If the acoustic character does not exceed expectations, utilize our prepaid concierge return label within 30 days for a full studio credit or immediate card refund.",
    faq: [
      {
        q: "Can these be driven without a dedicated headphone DAC/Amp?",
        a: "Yes. With an internal impedance curve optimized at 32 Ohms, your phone or laptop will drive them to full dynamic expression without external amplification.",
      },
      {
        q: "Does the package include passive analog cables?",
        a: "Included: 1.5m braided Kevlar 3.5mm-to-3.5mm analog audio cable, 6.35mm studio gold adapter, and a USB-C high-resolution lossless DAC charging cable.",
      },
    ],
    reviews: [
      {
        author: "Marcus Vance",
        role: "Creative Director & Composer, Vance Studios London",
        rating: 5,
        quote:
          "The AURA One is the first wireless monitoring pair I feel confident mixing commercial deliverables on while travelling. The transient response of the custom beryllium drivers isolates percussive micro-details without producing any top-end fatigue. The chassis weight distribution is virtually imperceptible.",
        variant: "Matte Black (Standard Fit)",
        verified: true,
        ago: "Reviewed 4 days ago",
      },
    ],
    scores: [
      { label: "Sound Fidelity", value: 99 },
      { label: "Comfort & Ergonomics", value: 96 },
      { label: "Build Quality", value: 98 },
    ],
    featured: true,
  },
  {
    id: "siena-crossbody",
    slug: "italian-leather-crossbody",
    name: "Italian Leather Crossbody",
    shortName: "Siena Crossbody Bag",
    category: "leather",
    categoryLabel: "Tuscan Leather",
    description:
      "Handcrafted saddle leather with brushed brass hardware and suede lining.",
    longDescription:
      "Vegetable-tanned hides from Santa Croce, hand-burnished edges, and solid brass components. Each Siena bag is cut by Florentine ateliers and aged to a deep cognac patina.",
    price: 420,
    images: [IMAGES.leatherBag, IMAGES.hero, IMAGES.avatar],
    colors: [
      { name: "Cognac", hex: "#8B4513" },
      { name: "Matte Black", hex: "#171717" },
      { name: "Olive Tan", hex: "#556B2F" },
    ],
    badge: "Limited 150",
    badgeTone: "neutral",
    inventoryBadge: "Limited allocation — 12 remaining",
    stock: 12,
    rating: 5.0,
    reviewCount: 86,
    sku: "AUR-214-COG",
    specs: [
      { label: "Hide", value: "Full-grain vegetable-tanned Tuscan cowhide" },
      { label: "Hardware", value: "Solid brushed brass, unlacquered" },
      { label: "Lining", value: "Suede split with cable sleeve" },
      { label: "Dimensions", value: "24 × 16 × 8 cm" },
    ],
    materials:
      "Sourced from the Consorzio Vera Pelle in Scandicci. Edges are hand-painted and burnished through seven finishing passes.",
    shipping:
      "Complimentary white-glove packaging and insured express dispatch. 30-day bespoke returns with concierge pickup.",
    faq: [
      {
        q: "Will the leather darken over time?",
        a: "Yes. Cognac develops a richer patina with light and oils. A 50ml care wax is available as a pairing.",
      },
    ],
    reviews: [
      {
        author: "Julian Vance",
        role: "Design Director, Kinfolk Arch",
        rating: 5,
        quote:
          "A rare triumph of modern industrial discipline and emotional luxury. It ages like bespoke luggage.",
        variant: "Cognac · Brass Accents",
        verified: true,
        ago: "Reviewed 2 weeks ago",
      },
    ],
    scores: [
      { label: "Craftsmanship", value: 98 },
      { label: "Patina Potential", value: 97 },
      { label: "Hardware", value: 95 },
    ],
    featured: true,
  },
  {
    id: "ribbed-vessel",
    slug: "sculptural-ceramic-vase",
    name: "Sculptural Ceramic Vase",
    shortName: "Atelier Ceramic Vessel",
    category: "vessels",
    categoryLabel: "Sculptural Object",
    description:
      "Slip-cast unglazed ceramic stoneware with architectural fluted contours.",
    longDescription:
      "Minimal earthenware stoneware, warm atmospheric luminosity, and tactile ribbed geometry fired in small Kyoto batches.",
    price: 160,
    compareAt: 190,
    images: [IMAGES.ceramicVase, IMAGES.hero],
    colors: [
      { name: "Warm Cream", hex: "#f5e6d3" },
      { name: "Terracotta", hex: "#c46a3a" },
      { name: "Matte Black", hex: "#171717" },
    ],
    badge: "-16% Studio",
    badgeTone: "accent",
    inventoryBadge: "Batch 03 — 8 remaining",
    stock: 8,
    rating: 4.8,
    reviewCount: 64,
    sku: "AUR-308-SND",
    specs: [
      { label: "Clay", value: "Refractory stoneware, slip-cast" },
      { label: "Finish", value: "Unglazed sandstone matte" },
      { label: "Height", value: "28 cm" },
      { label: "Edition", value: "Batch 03 / 120" },
    ],
    materials:
      "Hand-thrown and slip-cast refractory stoneware designed to absorb high-frequency desktop reflections while holding a single stem or standing empty as sculpture.",
    shipping: "Packed in molded pulp with carbon-neutral courier. 30-day returns.",
    faq: [
      {
        q: "Is the vessel watertight?",
        a: "Yes. The interior is sealed; the exterior remains unglazed for tactile ribbing.",
      },
    ],
    reviews: [
      {
        author: "Elena Cho",
        role: "Interior Architect, Atelier Cho",
        rating: 5,
        quote:
          "The ribbing catches afternoon light like travertine. It holds presence without ornament.",
        variant: "Warm Cream · Batch 03",
        verified: true,
        ago: "Reviewed 9 days ago",
      },
    ],
    scores: [
      { label: "Form", value: 97 },
      { label: "Surface", value: 94 },
      { label: "Presence", value: 96 },
    ],
    featured: true,
  },
  {
    id: "travel-portfolio",
    slug: "aura-studio-travel-portfolio",
    name: "Aura Studio Travel Portfolio",
    shortName: "Travel Portfolio",
    category: "leather",
    categoryLabel: "Executive Travel",
    description:
      "Modular document sleeve and device protector in water-resistant technical twill.",
    longDescription:
      "A carbon-composite folio for boards, passports, and a 14-inch notebook. Structured enough for the cabin, quiet enough for the atelier.",
    price: 290,
    images: [IMAGES.hero, IMAGES.leatherBag],
    colors: [
      { name: "Matte Black", hex: "#171717" },
      { name: "Warm Cream", hex: "#f5e6d3" },
    ],
    badge: "New Release",
    badgeTone: "neutral",
    stock: 22,
    rating: 4.9,
    reviewCount: 42,
    sku: "AUR-401-CHR",
    specs: [
      { label: "Shell", value: "Water-resistant technical twill" },
      { label: "Interior", value: "Microfiber + full-grain lining" },
      { label: "Capacity", value: "A4 / 14-inch laptop" },
    ],
    materials: "Carbon-composite panels bonded to vegetable-tanned leather trim.",
    shipping: "Complimentary express over $150. 30-day bespoke returns.",
    faq: [{ q: "Fits a 16-inch laptop?", a: "Optimized for 14-inch. 16-inch is a snug fit without a sleeve." }],
    reviews: [
      {
        author: "Priya Menon",
        role: "Strategy Lead, Helsinki",
        rating: 5,
        quote: "The only folio that looks architectural on a travertine desk and survives the jet bridge.",
        variant: "Charcoal / Onyx",
        verified: true,
        ago: "Reviewed 3 weeks ago",
      },
    ],
    scores: [
      { label: "Organization", value: 95 },
      { label: "Protection", value: 93 },
      { label: "Presence", value: 94 },
    ],
    featured: true,
  },
  {
    id: "audio-folio",
    slug: "cognac-structured-audio-folio",
    name: "Cognac Structured Audio Folio",
    shortName: "Audio Folio",
    category: "leather",
    categoryLabel: "Carrying Atelier",
    description:
      "Vegetable-tanned full-grain cowhide with bespoke interior cable organization sleeves.",
    longDescription:
      "Purpose-built for the AURA One: molded interior, cable channels, and a silent magnetic closure.",
    price: 220,
    images: [IMAGES.leatherBag, IMAGES.headphones],
    colors: [
      { name: "Cognac", hex: "#8B4513" },
      { name: "Matte Black", hex: "#171717" },
    ],
    badge: "Bespoke Leather",
    badgeTone: "neutral",
    stock: 18,
    rating: 4.7,
    reviewCount: 31,
    sku: "AUR-218-FOL",
    specs: [
      { label: "Hide", value: "Vegetable-tanned full-grain cowhide" },
      { label: "Interior", value: "Suede cable organization" },
      { label: "Closure", value: "Silent magnetic" },
    ],
    materials: "Florentine saddle leather with hand-painted edges.",
    shipping: "Complimentary express over $150.",
    faq: [{ q: "Fits Travel Foldable Pack?", a: "Yes. The molded bay accepts both standard and foldable AURA One units." }],
    reviews: [
      {
        author: "Noah Adler",
        role: "Touring Engineer",
        rating: 5,
        quote: "Finally a case that does not announce itself as merch.",
        variant: "Cognac",
        verified: true,
        ago: "Reviewed 1 month ago",
      },
    ],
    scores: [
      { label: "Protection", value: 96 },
      { label: "Craft", value: 95 },
      { label: "Fit", value: 97 },
    ],
    featured: false,
  },
  {
    id: "resonance-diffuser",
    slug: "ribbed-ceramic-resonance-diffuser",
    name: "Ribbed Ceramic Resonance Diffuser",
    shortName: "Resonance Diffuser",
    category: "vessels",
    categoryLabel: "Desktop Living",
    description:
      "Hand-thrown refractory stoneware designed to absorb high-frequency desktop reflections.",
    longDescription:
      "An acoustic decor object: mass, ribbing, and warm clay that quiet a desk without looking like treatment.",
    price: 160,
    images: [IMAGES.ceramicVase],
    colors: [
      { name: "Warm Cream", hex: "#f5e6d3" },
      { name: "Terracotta", hex: "#c46a3a" },
    ],
    badge: "Acoustic Decor",
    badgeTone: "neutral",
    stock: 14,
    rating: 4.6,
    reviewCount: 19,
    sku: "AUR-312-DIF",
    specs: [
      { label: "Mass", value: "2.4 kg refractory stoneware" },
      { label: "Surface", value: "Ribbed unglazed" },
    ],
    materials: "Kyoto-fired stoneware, sanded by hand after bisque.",
    shipping: "Molded pulp packaging, carbon-neutral courier.",
    faq: [{ q: "Scented?", a: "No. It is a dry acoustic object, not an oil diffuser." }],
    reviews: [
      {
        author: "Sofia Berg",
        role: "Mastering Assistant",
        rating: 5,
        quote: "Oddly effective next to nearfields. Looks like sculpture, not foam.",
        variant: "Warm Cream",
        verified: true,
        ago: "Reviewed 5 days ago",
      },
    ],
    scores: [
      { label: "Acoustic Use", value: 91 },
      { label: "Form", value: 96 },
    ],
    featured: false,
  },
  {
    id: "monolith-stand",
    slug: "monolith-sand-cast-stand",
    name: "Monolith Sand-Cast Stand",
    shortName: "Monolith Stand",
    category: "acoustics",
    categoryLabel: "Studio Architecture",
    description:
      "Balanced 1.2kg solid alloy stand that maintains natural tension on the headband springs.",
    longDescription:
      "Sand-cast alloy pedestal for the AURA One. Weight enough to stay, silhouette quiet enough for a travertine shelf.",
    price: 110,
    images: [IMAGES.headphones, IMAGES.hero],
    colors: [
      { name: "Matte Black", hex: "#171717" },
      { name: "Warm Cream", hex: "#f5e6d3" },
    ],
    badge: "Hardware Essential",
    badgeTone: "neutral",
    inventoryBadge: "Only 3 left in stock",
    stock: 3,
    rating: 4.8,
    reviewCount: 27,
    sku: "AUR-510-MON",
    specs: [
      { label: "Mass", value: "1.2 kg sand-cast alloy" },
      { label: "Finish", value: "Low-glare anodized" },
    ],
    materials: "Sand-cast aluminum with a felted contact ring for the headband.",
    shipping: "Complimentary express over $150.",
    faq: [{ q: "Scratch the cups?", a: "The contact surface is felted. Cups never touch metal." }],
    reviews: [
      {
        author: "Kenji Mori",
        role: "Product Designer, Tokyo",
        rating: 5,
        quote: "The stand is the object. Headphones become architecture.",
        variant: "Matte Black",
        verified: true,
        ago: "Reviewed 11 days ago",
      },
    ],
    scores: [
      { label: "Stability", value: 99 },
      { label: "Finish", value: 94 },
    ],
    featured: false,
  },
  {
    id: "weekender-tote",
    slug: "tuscan-weekender-tote",
    name: "Tuscan Weekender Tote",
    shortName: "Weekender Tote",
    category: "leather",
    categoryLabel: "Florentine Atelier",
    description:
      "Overnight carry in full-grain Tuscan hide with a rigid base and silent brass feet.",
    longDescription:
      "A weekend silhouette cut from the same Santa Croce hides as the Siena, scaled for a change of clothes and a folio.",
    price: 580,
    images: [IMAGES.leatherBag, IMAGES.hero],
    colors: [
      { name: "Cognac", hex: "#8B4513" },
      { name: "Matte Black", hex: "#171717" },
      { name: "Terracotta", hex: "#c46a3a" },
    ],
    badge: "Atelier Cut",
    badgeTone: "neutral",
    inventoryBadge: "Only 3 left in stock",
    stock: 3,
    rating: 4.9,
    reviewCount: 21,
    sku: "AUR-240-TOT",
    specs: [
      { label: "Hide", value: "Full-grain vegetable-tanned cowhide" },
      { label: "Base", value: "Rigid board + brass feet" },
      { label: "Volume", value: "28 L" },
    ],
    materials: "Florentine saddle construction, hand-stitched handles.",
    shipping: "White-glove packaging. Complimentary express unlocked at $150.",
    faq: [{ q: "Cabin compliant?", a: "Yes, under most international personal-item limits when lightly packed." }],
    reviews: [
      {
        author: "Amelia Hart",
        role: "Editor, Milan",
        rating: 5,
        quote: "One bag for the weekend edit. The brass feet save every hotel parquet.",
        variant: "Cognac",
        verified: true,
        ago: "Reviewed 8 days ago",
      },
    ],
    scores: [
      { label: "Capacity", value: 93 },
      { label: "Craft", value: 98 },
    ],
    featured: true,
  },
  {
    id: "alabaster-vessel",
    slug: "alabaster-ambient-vessel",
    name: "Alabaster Ambient Vessel",
    shortName: "Alabaster Vessel",
    category: "vessels",
    categoryLabel: "Terra Objects",
    description:
      "A quieter sibling of the ribbed vase — warm alabaster clay, thinner walls, candle-safe.",
    longDescription:
      "Thrown for a single taper or a dry branch. The wall is thin enough to glow, thick enough to stand.",
    price: 95,
    images: [IMAGES.ceramicVase],
    colors: [
      { name: "Warm Cream", hex: "#f5e6d3" },
      { name: "Terracotta", hex: "#c46a3a" },
    ],
    stock: 26,
    rating: 4.5,
    reviewCount: 17,
    sku: "AUR-309-ALB",
    specs: [
      { label: "Clay", value: "Alabaster stoneware" },
      { label: "Height", value: "18 cm" },
    ],
    materials: "Thin-walled stoneware, food-safe glaze on the interior only.",
    shipping: "Ships with the ceramic family. Express over $150.",
    faq: [{ q: "Candle safe?", a: "Yes. Use a taper or a tealight cup; do not pour loose wax." }],
    reviews: [
      {
        author: "Hugo Laurent",
        role: "Set Designer",
        rating: 4,
        quote: "The cream reads like bone in north light. Perfect on a mantel.",
        variant: "Warm Cream",
        verified: true,
        ago: "Reviewed 2 days ago",
      },
    ],
    scores: [
      { label: "Glow", value: 92 },
      { label: "Scale", value: 90 },
    ],
    featured: false,
  },
  {
    id: "arc-chronograph",
    slug: "arc-automatic-chronograph",
    name: "ARC Automatic Chronograph",
    shortName: "ARC Chronograph",
    category: "horology",
    categoryLabel: "Horology & Timepieces",
    description:
      "A 40mm satin-brushed steel chronograph with a warm champagne dial and exhibition caseback.",
    longDescription:
      "The ARC movement is regulated in five positions and finished with Geneva stripes visible through a sapphire exhibition back. The champagne sunburst dial is designed to read as architecture, not ornament.",
    price: 1240,
    compareAt: 1480,
    images: [IMAGES.chronograph, IMAGES.hero],
    colors: [
      { name: "Warm Cream", hex: "#f5e6d3" },
      { name: "Matte Black", hex: "#171717" },
      { name: "Terracotta", hex: "#c46a3a" },
    ],
    badge: "Atelier Calibration",
    badgeTone: "accent",
    inventoryBadge: "Only 3 left in stock",
    stock: 3,
    rating: 4.9,
    reviewCount: 38,
    sku: "AUR-720-ARC",
    specs: [
      { label: "Movement", value: "In-house automatic chronograph, 28,800 vph" },
      { label: "Case", value: "40mm 316L satin-brushed steel, 100m" },
      { label: "Crystal", value: "Domed sapphire, inner AR coating" },
      { label: "Power Reserve", value: "52 hours" },
    ],
    materials:
      "The case is CNC-milled from a single 316L billet, then satin-brushed by hand. The dial is electroplated champagne over a sunburst lathe grain.",
    shipping:
      "Insured carbon-neutral express in a suede-lined instrument case. 30-day bespoke returns with concierge pickup.",
    faq: [
      {
        q: "Is the movement serviceable?",
        a: "Yes. Aura Studio and authorized horologists can service the ARC caliber. First regulation is complimentary within 24 months.",
      },
    ],
    reviews: [
      {
        author: "Helena Park",
        role: "Watch Editor, Independent",
        rating: 5,
        quote:
          "Quietly authoritative. The champagne dial does the work of a gold case without the theatre.",
        variant: "Warm Cream · Steel",
        verified: true,
        ago: "Reviewed 6 days ago",
      },
    ],
    scores: [
      { label: "Regulation", value: 97 },
      { label: "Legibility", value: 95 },
      { label: "Finish", value: 96 },
    ],
    featured: true,
  },
  {
    id: "pour-over-vessel",
    slug: "kyoto-pour-over-set",
    name: "Kyoto Pour-Over Vessel",
    shortName: "Pour-Over Vessel",
    category: "culinary",
    categoryLabel: "Culinary Objects",
    description:
      "A hand-thrown stoneware dripper and sharing carafe calibrated for a 1:16 extraction.",
    longDescription:
      "Thrown in the same Kyoto kiln as our vessels, the pour-over set is a culinary instrument: ribbed interior for even saturation, a low carafe that holds heat without spectacle.",
    price: 185,
    images: [IMAGES.culinary, IMAGES.ceramicVase],
    colors: [
      { name: "Warm Cream", hex: "#f5e6d3" },
      { name: "Terracotta", hex: "#c46a3a" },
      { name: "Matte Black", hex: "#171717" },
    ],
    badge: "Kiln Batch 07",
    badgeTone: "neutral",
    inventoryBadge: "Batch 07 — 11 remaining",
    stock: 11,
    rating: 4.8,
    reviewCount: 29,
    sku: "AUR-630-KYO",
    specs: [
      { label: "Clay", value: "High-fire stoneware, food-safe interior glaze" },
      { label: "Capacity", value: "480 ml carafe / 02 dripper" },
      { label: "Includes", value: "Dripper, carafe, and linen filter cloth" },
    ],
    materials:
      "Exterior remains unglazed for grip and patina. Interior is a satin food-safe glaze fired to 1280°C.",
    shipping: "Molded pulp packaging. Complimentary express over $150.",
    faq: [
      {
        q: "Paper filters?",
        a: "A 02 cone paper filter fits. The linen cloth is included for a fuller body.",
      },
    ],
    reviews: [
      {
        author: "Marco Ibarra",
        role: "Chef, Atelier Norte",
        rating: 5,
        quote:
          "It behaves like cookware, not merch. The cream clay looks correct on a marble pass.",
        variant: "Warm Cream",
        verified: true,
        ago: "Reviewed 12 days ago",
      },
    ],
    scores: [
      { label: "Extraction", value: 94 },
      { label: "Heat Hold", value: 93 },
      { label: "Form", value: 97 },
    ],
    featured: true,
  },
  {
    id: "lumen-pendant",
    slug: "lumen-cast-pendant",
    name: "Lumen Cast Pendant",
    shortName: "Lumen Pendant",
    category: "lighting",
    categoryLabel: "Atmospheric Lighting",
    description:
      "A single-drop alabaster shade on a blackened-steel stem, dimmable to candle warmth.",
    longDescription:
      "The Lumen shade is thin-sliced Spanish alabaster, backlit so the stone reads as skin rather than fixture. The stem is blackened steel with a 2700K–2200K dimming curve.",
    price: 640,
    images: [IMAGES.lighting, IMAGES.hero],
    colors: [
      { name: "Warm Cream", hex: "#f5e6d3" },
      { name: "Matte Black", hex: "#171717" },
    ],
    badge: "Night Edition",
    badgeTone: "accent",
    inventoryBadge: "Only 3 left in stock",
    stock: 3,
    rating: 4.9,
    reviewCount: 24,
    sku: "AUR-540-LUM",
    specs: [
      { label: "Shade", value: "Hand-sliced Spanish alabaster" },
      { label: "Temperature", value: "2700K to 2200K dim-to-warm LED" },
      { label: "Drop", value: "Custom 60–180 cm blackened-steel stem" },
    ],
    materials:
      "Alabaster is selected for even veining and sealed on the inner face only, so the exterior remains mineral to the touch.",
    shipping:
      "White-glove crate with a dedicated lighting concierge for hang height. Complimentary express over $150.",
    faq: [
      {
        q: "Hardwired?",
        a: "Yes. A ceiling canopy and driver are included. A plug-in stem variant is available on request.",
      },
    ],
    reviews: [
      {
        author: "Inès Moreau",
        role: "Lighting Designer, Paris",
        rating: 5,
        quote:
          "The dim curve is the product. At 10% it behaves like a candle against plaster.",
        variant: "Warm Cream · 120 cm",
        verified: true,
        ago: "Reviewed 3 days ago",
      },
    ],
    scores: [
      { label: "Glow", value: 99 },
      { label: "Dimming", value: 98 },
      { label: "Presence", value: 96 },
    ],
    featured: true,
  },
  {
    id: "solum-optics",
    slug: "solum-polarized-optics",
    name: "Solum Polarized Optics",
    shortName: "Solum Optics",
    category: "optics",
    categoryLabel: "Optics",
    description:
      "Acetate frames milled in Mazzucchelli with mineral glass lenses and a warm gold hinge.",
    longDescription:
      "Solum is an optical instrument first: mineral glass, category 3 polarization, and a temple geometry that disappears at the ear. The acetate is Mazzucchelli, polished through twelve baths.",
    price: 320,
    images: [IMAGES.optics, IMAGES.hero],
    colors: [
      { name: "Matte Black", hex: "#171717" },
      { name: "Terracotta", hex: "#c46a3a" },
      { name: "Warm Cream", hex: "#f5e6d3" },
    ],
    badge: "Optical Studio",
    badgeTone: "neutral",
    stock: 16,
    rating: 4.7,
    reviewCount: 51,
    sku: "AUR-810-SOL",
    specs: [
      { label: "Lenses", value: "Mineral glass, polarized category 3, 100% UV" },
      { label: "Frame", value: "Mazzucchelli acetate, 145 mm temple" },
      { label: "Hinge", value: "Solid unlacquered gold-tone brass" },
    ],
    materials:
      "Frames are cut from acetate sheets aged 90 days before polish. Lenses are mineral, not CR-39, for optical neutrality.",
    shipping: "Hard case in vegetable-tanned leather. Complimentary express over $150.",
    faq: [
      {
        q: "Prescription possible?",
        a: "Yes. The optical atelier can cut mineral prescription lenses to the Solum geometry. Lead time is 12 days.",
      },
    ],
    reviews: [
      {
        author: "David Chen",
        role: "Cinematographer",
        rating: 5,
        quote:
          "No color cast on skin. That is rarer than the acetate story suggests.",
        variant: "Matte Black",
        verified: true,
        ago: "Reviewed 1 week ago",
      },
    ],
    scores: [
      { label: "Optics", value: 98 },
      { label: "Comfort", value: 94 },
      { label: "Finish", value: 96 },
    ],
    featured: true,
  },
  {
    id: "folio-pen",
    slug: "folio-reservoir-pen",
    name: "Folio Reservoir Pen",
    shortName: "Folio Pen",
    category: "writing",
    categoryLabel: "Writing Instruments",
    description:
      "A piston-fill fountain pen in turned ebonite with an 18k gold nib ground for a dry line.",
    longDescription:
      "The Folio is turned from German ebonite and fitted with an 18k gold nib ground in-house for a precise, dry architect’s line. The piston is sealed for travel, the section is warm in the hand.",
    price: 275,
    images: [IMAGES.writing, IMAGES.leatherBag],
    colors: [
      { name: "Matte Black", hex: "#171717" },
      { name: "Terracotta", hex: "#c46a3a" },
      { name: "Warm Cream", hex: "#f5e6d3" },
    ],
    badge: "Scriptorium",
    badgeTone: "neutral",
    inventoryBadge: "Limited grind — 7 remaining",
    stock: 7,
    rating: 4.8,
    reviewCount: 33,
    sku: "AUR-910-FOL",
    specs: [
      { label: "Nib", value: "18k gold, extra-fine architect grind" },
      { label: "Fill", value: "Piston reservoir, 1.2 ml" },
      { label: "Barrel", value: "Turned ebonite, 14 mm section" },
    ],
    materials:
      "Ebonite is turned, then hand-polished to a low satin so fingerprints do not announce themselves. The nib is ground after tipping.",
    shipping: "Packed in a cedar sleeve. Complimentary express over $150.",
    faq: [
      {
        q: "Other nibs?",
        a: "Fine, medium, and italic grinds can be specified. Extra-fine architect is the atelier default.",
      },
    ],
    reviews: [
      {
        author: "Claire Fournier",
        role: "Typographer",
        rating: 5,
        quote:
          "The line is disciplined. It writes like a ruling pen that happens to be a fountain pen.",
        variant: "Matte Black · Architect EF",
        verified: true,
        ago: "Reviewed 9 days ago",
      },
    ],
    scores: [
      { label: "Line", value: 98 },
      { label: "Balance", value: 95 },
      { label: "Seal", value: 94 },
    ],
    featured: true,
  },
];

export type StudioCategory = {
  id: ProductCategory;
  label: string;
  filterLabel: string;
  kicker: string;
  badge: string;
  copy: string;
  image: string;
  href: string;
};

export const categories: StudioCategory[] = [
  {
    id: "acoustics",
    label: "Acoustics & Audio",
    filterLabel: "Acoustics",
    kicker: "Category 01",
    badge: "Flagship Series",
    copy: "Custom 40mm beryllium drivers, active ambient suppression, and pure titanium headbands.",
    image: IMAGES.headphones,
    href: "/#featured",
  },
  {
    id: "leather",
    label: "Leather Goods & Carry",
    filterLabel: "Leather",
    kicker: "Category 02",
    badge: "Tuscan Leather",
    copy: "Vegetable-tanned hides from Santa Croce, hand-burnished edges, and solid brass components.",
    image: IMAGES.leatherBag,
    href: "/#featured",
  },
  {
    id: "vessels",
    label: "Living & Sculptural Objects",
    filterLabel: "Vessels",
    kicker: "Category 03",
    badge: "Artisanal Batch",
    copy: "Minimal earthenware stoneware, warm atmospheric luminosity, and tactile ribbed geometry.",
    image: IMAGES.ceramicVase,
    href: "/#featured",
  },
  {
    id: "horology",
    label: "Horology & Timepieces",
    filterLabel: "Horology",
    kicker: "Category 04",
    badge: "Instrument Grade",
    copy: "In-house automatic calibers, champagne sunburst dials, and satin-brushed steel architecture.",
    image: IMAGES.chronograph,
    href: "/#featured",
  },
  {
    id: "culinary",
    label: "Culinary Objects",
    filterLabel: "Culinary",
    kicker: "Category 05",
    badge: "Kiln Service",
    copy: "High-fire stoneware drippers, sharing carafes, and table instruments built for daily ritual.",
    image: IMAGES.culinary,
    href: "/#featured",
  },
  {
    id: "lighting",
    label: "Atmospheric Lighting",
    filterLabel: "Lighting",
    kicker: "Category 06",
    badge: "Night Edition",
    copy: "Alabaster shades and dim-to-warm stems that behave like candlelight against plaster.",
    image: IMAGES.lighting,
    href: "/#featured",
  },
  {
    id: "optics",
    label: "Optics",
    filterLabel: "Optics",
    kicker: "Category 07",
    badge: "Optical Studio",
    copy: "Mineral glass, Mazzucchelli acetate, and polarization tuned for a neutral skin tone.",
    image: IMAGES.optics,
    href: "/#featured",
  },
  {
    id: "writing",
    label: "Writing Instruments",
    filterLabel: "Writing",
    kicker: "Category 08",
    badge: "Scriptorium",
    copy: "Turned ebonite reservoirs and 18k gold nibs ground in-house for a dry architect’s line.",
    image: IMAGES.writing,
    href: "/#featured",
  },
];

export const trendingQueries = [
  "Noise-Cancelling Headphones",
  "Cognac Leather Tote",
  "Automatic Chronograph",
  "Kyoto Pour-Over",
];

export const CARE_WAX = {
  id: "leather-wax",
  slug: "leather-care-wax",
  name: "Leather Care Wax (50ml)",
  categoryLabel: "Preservation",
  variant: "Natural Beeswax · Matte Finish",
  price: 24,
  image: IMAGES.leatherBag,
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((product) =>
    [product.name, product.shortName, product.categoryLabel, product.description, product.sku]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

export function relatedProducts(slug: string, limit = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((product) => product.slug !== slug)
    .sort((a, b) => Number(b.category === current.category) - Number(a.category === current.category))
    .slice(0, limit);
}
