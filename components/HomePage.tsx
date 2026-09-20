"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { categories, IMAGES, products, type ProductCategory } from "@/lib/mock-data";

const FILTERS: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All Highlights" },
  ...categories.map((category) => ({
    id: category.id,
    label: category.filterLabel,
  })),
];

export function HomePage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const catalog = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  );

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-surface-container-high py-2 px-margin">
        <div className="max-w-studio mx-auto flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-label-caps text-label-caps">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="tracking-widest uppercase">
              Atelier Edition 2025 // Global Allocation Active
            </span>
          </div>
          <div className="hidden md:flex items-center gap-space-lg">
            <span>Handcrafted in Florence & Kyoto</span>
            <span>•</span>
            <span>Complimentary Bespoke Packaging Included</span>
            <span>•</span>
            <a
              className="text-on-surface hover:text-secondary transition-colors underline underline-offset-4"
              href="#featured"
            >
              Explore Seasonal Release
            </a>
          </div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div className="max-w-studio mx-auto px-margin py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col justify-center z-10 space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-caps text-label-caps w-fit shadow-sm">
              <Icon name="auto_awesome" className="text-[14px]" />
              <span>Spring / Summer 2025 Atelier</span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero tracking-tight text-on-surface uppercase leading-[1.08]">
              Form Follows <br />
              <span className="text-secondary italic font-serif">Sensation.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Precision-engineered lifestyle essentials, acoustical audio gear, and handcrafted
              full-grain leather goods designed for timeless refinement.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-primary-container hover:shadow-xl transition-all duration-300"
                href="#featured"
              >
                <span>Shop Collection</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-sm px-space-lg py-3.5 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors shadow-sm"
                href="#categories"
              >
                <span>Explore Categories</span>
                <Icon name="category" className="text-[18px]" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-space-md pt-space-md">
              <Metric value="0.02%" label="Harmonic Distortion" />
              <Metric value="100%" label="Full-Grain Tuscan" />
              <Metric value="4.96/5" label="Collector Rating" />
            </div>
          </div>
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full rounded-2xl overflow-hidden bg-surface-container shadow-2xl group h-[460px] lg:h-[540px]">
              <Image
                alt="High-end architectural luxury product campaign banner"
                src={IMAGES.hero}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent flex flex-col justify-end p-space-lg text-on-primary">
                <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider">
                  Curated Ensemble No. 04
                </span>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-headline-sm text-headline-sm font-semibold">
                      Travertine & Carbon Composite
                    </p>
                    <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
                      Studio Campaign captured in Milan, Italy
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-lowest/20 backdrop-blur-md">
                    <Icon name="filter_center_focus" className="text-[20px]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface-container-low py-space-md">
          <div className="max-w-studio mx-auto px-margin grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <Badge icon="local_shipping" title="Complimentary Express" copy="Global Courier Delivery" />
            <Badge icon="eco" title="Carbon Neutral Delivery" copy="100% Verified Emissions Offsets" />
            <Badge icon="verified" title="Lifetime Craftsmanship" copy="Bespoke Guarantee & Repair" />
            <Badge icon="support_agent" title="24/7 Concierge" copy="Personalized Advisor Support" />
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface" id="categories">
        <div className="max-w-studio mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                Architectural Disciplines
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mt-1">
                Curated Core Categories
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0">
              Eight atelier disciplines — from acoustics and Tuscan leather to horology, culinary
              objects, and atmospheric light — complete a single environment.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter items-stretch">
            {categories.map((category) => (
              <a
                key={category.id}
                className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                href="#featured"
                onClick={() => setFilter(category.id)}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container shrink-0">
                  <Image
                    alt={category.label}
                    src={category.image}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 lg:top-4 lg:left-4 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-caps text-label-caps shadow-sm">
                    {category.badge}
                  </span>
                </div>
                <div className="p-space-md lg:p-space-lg flex flex-col justify-between flex-1 min-h-0 bg-surface-container-lowest">
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      {category.kicker}
                    </span>
                    <h3 className="font-headline-sm lg:font-headline-md text-headline-sm lg:text-headline-md text-on-surface mt-1 min-h-[2.75rem] lg:min-h-[4rem] line-clamp-2">
                      {category.label}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-3">
                      {category.copy}
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between text-secondary font-label-lg text-label-lg group-hover:translate-x-1 transition-transform">
                    <span>Discover Category</span>
                    <Icon name="arrow_forward" className="text-[18px]" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface-container-low" id="featured">
        <div className="max-w-studio mx-auto px-margin">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                Seasonal Artifacts
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mt-1">
                Signature Editions
              </h2>
            </div>
            <div className="flex items-center gap-space-sm mt-3 sm:mt-0 flex-wrap">
              {FILTERS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all ${
                    filter === tab.id
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter items-stretch">
            {catalog.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface-container-lowest" id="manifesto">
        <div className="max-w-studio mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container h-[500px]">
                <Image
                  alt="Craftsmanship Detail of Tuscan Leather"
                  src={IMAGES.leatherBag}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-space-md bg-surface-container-lowest/90 backdrop-blur-xl rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-label-lg">
                      01
                    </span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface">
                        Material Provenance: Scandicci
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Traceable raw materials certified by the Consorzio Vera Pelle
                      </p>
                    </div>
                  </div>
                  <Icon name="verified_user" className="text-secondary" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center space-y-space-md">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                The Studio Manifesto
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Engineered for the Senses.
                <br />
                Built for Generations.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                At AURA STUDIO, we eliminate the unnecessary until only pure tactile utility remains.
                Our team bridges the micro-millimeter tolerance of precision electroacoustics with
                the century-old vegetable tanning rituals of northern Tuscany.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="p-space-md rounded-xl bg-surface-container-low">
                  <div className="flex items-center gap-2 text-secondary mb-1">
                    <Icon name="precision_manufacturing" className="text-[20px]" />
                    <span className="font-label-caps text-label-caps uppercase">
                      Acoustic Purity
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Custom tuned soundstage calibrated in anechoic chambers in Stockholm.
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low">
                  <div className="flex items-center gap-2 text-secondary mb-1">
                    <Icon name="architecture" className="text-[20px]" />
                    <span className="font-label-caps text-label-caps uppercase">
                      Structural Integrity
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Grade 5 titanium screws, solid brass clips, and carbon fiber reinforcement.
                  </p>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2">
                <div className="flex items-center gap-1 text-secondary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="star" className="text-[16px]" filled />
                  ))}
                </div>
                <p className="font-body-md text-body-md italic text-on-surface">
                  “A rare triumph of modern industrial discipline and emotional luxury. The AURA One
                  outperforms studio reference cans while aging like bespoke luggage.”
                </p>
                <div className="flex items-center justify-between text-on-surface-variant pt-1 font-label-md text-label-md">
                  <span className="font-semibold text-on-surface">
                    Julian Vance • Design Director, Kinfolk Arch
                  </span>
                  <span>Verified Patron</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-space-sm rounded-lg bg-surface-container-low">
      <span className="block font-headline-md text-headline-md text-on-surface font-bold">
        {value}
      </span>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
        {label}
      </span>
    </div>
  );
}

function Badge({ icon, title, copy }: { icon: string; title: string; copy: string }) {
  return (
    <div className="flex items-center gap-space-sm">
      <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
        <Icon name={icon} className="text-[20px]" />
      </div>
      <div>
        <p className="font-label-md text-label-md font-semibold text-on-surface">{title}</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{copy}</p>
      </div>
    </div>
  );
}
