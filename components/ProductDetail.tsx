"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { formatPrice } from "@/lib/format";
import { IMAGES, relatedProducts, type Product } from "@/lib/mock-data";
import { useCart } from "@/lib/store/useCart";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const addItem = useCart((state) => state.addItem);
  const [imageIndex, setImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [color, setColor] = useState(product.colors[0]?.name ?? "Matte Black");
  const [fitIndex, setFitIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [openSpec, setOpenSpec] = useState("spec-1");
  const [toast, setToast] = useState<string | null>(null);

  const unitPrice = product.fits?.[fitIndex]?.price ?? product.price;
  const total = unitPrice * qty;
  const companions = relatedProducts(product.slug, 3);
  const savings = product.compareAt ? product.compareAt - product.price : 0;

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3500);
  };

  const addCurrent = () => {
    addItem({
      id: `${product.id}-${color}-${fitIndex}`,
      productId: product.id,
      slug: product.slug,
      name: product.shortName,
      categoryLabel: product.categoryLabel,
      image: product.images[0],
      price: unitPrice,
      quantity: qty,
      color,
      variant: product.fits?.[fitIndex]?.name,
    });
    showToast(`${qty}x ${product.shortName} (${color}) — ${formatPrice(total)}`);
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className={`fixed top-24 right-6 z-50 flex items-center gap-space-md p-space-md rounded-xl bg-primary text-on-primary shadow-2xl transition-all duration-500 ${
          toast
            ? "translate-y-0 opacity-100"
            : "translate-y-[-120%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed">
          <Icon name="check_circle" className="text-[24px]" />
        </div>
        <div>
          <h5 className="font-label-lg text-label-lg text-on-primary">Added to Atelier Bag</h5>
          <p className="font-body-sm text-body-sm text-on-primary-container">{toast}</p>
        </div>
      </div>

      <section className="max-w-studio mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-space-lg w-full">
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-space-xs text-label-md font-label-md text-on-surface-variant mb-space-lg overflow-x-auto whitespace-nowrap"
        >
          <Link className="hover:text-on-surface transition-colors" href="/">
            Home
          </Link>
          <Icon name="chevron_right" className="text-[14px] text-outline-variant" />
          <Link className="hover:text-on-surface transition-colors" href="/#categories">
            {product.categoryLabel}
          </Link>
          <Icon name="chevron_right" className="text-[14px] text-outline-variant" />
          <span className="text-on-surface font-semibold">{product.shortName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-low/80 via-transparent to-surface-container-high/40 pointer-events-none" />
              <div className="absolute top-space-md left-space-md z-10 flex flex-wrap gap-space-xs">
                {product.badge && (
                  <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-wider uppercase shadow-sm">
                    {product.badge}
                  </span>
                )}
                {product.inventoryBadge && (
                  <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-caps text-label-caps tracking-wider uppercase shadow-sm">
                    {product.inventoryBadge}
                  </span>
                )}
              </div>
              <div className="absolute top-space-md right-space-md z-10 flex items-center gap-space-xs">
                <button
                  aria-label="Toggle Magnifier"
                  className="w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface shadow-md hover:scale-105 flex items-center justify-center"
                  type="button"
                  onClick={() => setZoomed((value) => !value)}
                >
                  <Icon name={zoomed ? "zoom_out" : "zoom_in"} className="text-[20px]" />
                </button>
              </div>
              <div className="relative w-full h-full overflow-hidden cursor-crosshair flex items-center justify-center p-4">
                <Image
                  alt={product.name}
                  src={product.images[imageIndex]}
                  fill
                  priority
                  className={`object-contain transition-transform duration-500 ease-out ${
                    zoomed ? "scale-150" : "scale-100"
                  }`}
                />
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/80 backdrop-blur text-on-surface font-label-caps text-[10px] tracking-widest uppercase">
                  Figure 0{imageIndex + 1} // Studio Angle
                </span>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface-container-lowest/80 backdrop-blur text-on-surface-variant font-label-caps text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span>360° Studio Scan Ready</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-space-sm">
              {product.images.map((src, index) => (
                <button
                  key={src + index}
                  type="button"
                  onClick={() => setImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden bg-surface-container-lowest shadow-sm p-1.5 ${
                    imageIndex === index
                      ? "bg-surface-container-high"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={src} alt={`${product.name} angle ${index + 1}`} fill className="object-cover rounded" />
                </button>
              ))}
            </div>

            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <Icon name="graphic_eq" className="text-[24px]" />
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Harmonic Distortion
                  </p>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    &lt; 0.05% THD @ 1kHz
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                <div className="flex flex-col items-end">
                  <span className="font-label-caps text-[10px] text-on-surface-variant">
                    FLAT CURVE PROFILE
                  </span>
                  <span className="font-label-md text-label-md text-secondary font-semibold">
                    10Hz – 45,000Hz
                  </span>
                </div>
                <svg className="w-28 h-8 text-secondary" fill="none" viewBox="0 0 120 32">
                  <path
                    d="M0 24C15 24 25 18 35 15C45 12 55 12 65 14C75 16 85 10 95 8C105 6 115 14 120 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <circle cx="95" cy="8" fill="currentColor" r="3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-[155px]">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-secondary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon key={index} name="star" className="text-[18px]" filled />
                    ))}
                  </div>
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                    {product.rating.toFixed(1)}
                  </span>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary underline decoration-outline-variant underline-offset-4 ml-1"
                    href="#reviews-anchor"
                  >
                    ({product.reviewCount} verified reviews)
                  </a>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">
                  SKU: {product.sku}
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg tracking-tight text-on-surface font-bold mt-1">
                {product.name}
              </h1>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <div className="flex items-baseline gap-space-md flex-wrap">
                <span className="font-display-hero-mobile text-display-hero-mobile font-bold text-on-surface tracking-tight tabular-price">
                  {formatPrice(total)}
                </span>
                {product.compareAt && (
                  <span className="font-headline-md text-headline-md text-on-surface-variant line-through decoration-outline tabular-price">
                    {formatPrice(product.compareAt)}
                  </span>
                )}
                {savings > 0 && (
                  <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps font-bold uppercase tracking-wider">
                    Save {formatPrice(savings)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-space-xs pt-space-xs text-body-sm font-body-sm text-on-surface-variant">
                <Icon name="payments" className="text-[18px] text-secondary" />
                <span>
                  Or 4 interest-free installments of{" "}
                  <strong className="text-on-surface font-semibold tabular-price">
                    {formatPrice(unitPrice / 4)}
                  </strong>{" "}
                  with Klarna or Afterpay
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    Finish
                  </span>
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                    {color}
                  </span>
                </div>
                <div className="flex items-center gap-space-md mt-1">
                  {product.colors.map((swatch) => (
                    <button
                      key={swatch.name}
                      aria-label={swatch.name}
                      title={swatch.name}
                      type="button"
                      onClick={() => setColor(swatch.name)}
                      className={`w-9 h-9 rounded-full transition-transform hover:scale-105 shadow-sm ${
                        color === swatch.name
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-surface-container-lowest"
                          : ""
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    />
                  ))}
                </div>
              </div>

              {product.fits && (
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    Acoustic Fit Configuration
                  </span>
                  <div className="grid grid-cols-2 gap-space-xs mt-1">
                    {product.fits.map((fit, index) => (
                      <button
                        key={fit.name}
                        type="button"
                        onClick={() => setFitIndex(index)}
                        className={`px-space-md py-3 rounded-lg font-label-lg text-label-lg text-left flex flex-col justify-between h-16 ${
                          fitIndex === index
                            ? "bg-primary text-on-primary shadow-sm"
                            : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        <span className="font-semibold">{fit.name}</span>
                        <span className="text-[11px] opacity-80">{fit.detail}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-space-sm p-2.5 rounded-lg bg-surface-container-low text-on-surface mt-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                </span>
                <span className="font-label-md text-label-md font-medium text-on-surface">
                  In Stock —{" "}
                  <strong className="font-semibold text-secondary">
                    {product.inventoryBadge ?? `${product.stock} units remaining`}
                  </strong>
                </span>
              </div>

              <div className="flex flex-col gap-space-sm pt-space-xs">
                <div className="flex items-center gap-space-sm">
                  <div className="flex items-center rounded-lg bg-surface-container-low p-1 h-12">
                    <button
                      aria-label="Decrease quantity"
                      className="w-10 h-full flex items-center justify-center rounded text-on-surface hover:bg-surface-container-lowest font-bold text-[18px]"
                      type="button"
                      onClick={() => setQty((value) => Math.max(1, value - 1))}
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-label-lg text-label-lg font-semibold tabular-price">
                      {qty}
                    </span>
                    <button
                      aria-label="Increase quantity"
                      className="w-10 h-full flex items-center justify-center rounded text-on-surface hover:bg-surface-container-lowest font-bold text-[18px]"
                      type="button"
                      onClick={() => setQty((value) => value + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="flex-1 h-12 px-space-lg rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all active:scale-[0.99] flex items-center justify-center gap-space-sm shadow-md font-label-lg text-label-lg"
                    type="button"
                    onClick={addCurrent}
                  >
                    <Icon name="local_mall" className="text-[20px]" />
                    <span>Add to Atelier Bag — {formatPrice(total)}</span>
                  </button>
                </div>
                <button
                  className="w-full h-12 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container flex items-center justify-center gap-space-xs font-label-lg text-label-lg shadow-sm"
                  type="button"
                  onClick={addCurrent}
                >
                  <Icon name="bolt" className="text-[20px]" />
                  <span>Express Checkout with Apple Pay</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-space-xs pt-space-sm text-center">
                <MiniTrust icon="flight_takeoff" label="Free 2-Day Air" />
                <MiniTrust icon="verified" label="30-Day Trial" />
                <MiniTrust icon="shield_with_heart" label="2-Yr Warranty" />
              </div>
            </div>

            <Accordion
              id="spec-1"
              title="Acoustic Architecture & Specs"
              open={openSpec === "spec-1"}
              onToggle={() => setOpenSpec(openSpec === "spec-1" ? "" : "spec-1")}
            >
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-2 gap-space-sm py-2 border-b border-surface-container-high/30 last:border-0"
                >
                  <span className="font-medium text-on-surface">{spec.label}:</span>
                  <span>{spec.value}</span>
                </div>
              ))}
            </Accordion>
            <Accordion
              id="spec-2"
              title="Materials & Craftsmanship"
              open={openSpec === "spec-2"}
              onToggle={() => setOpenSpec(openSpec === "spec-2" ? "" : "spec-2")}
            >
              <p>{product.materials}</p>
            </Accordion>
            <Accordion
              id="spec-3"
              title="Shipping & Complimentary Returns"
              open={openSpec === "spec-3"}
              onToggle={() => setOpenSpec(openSpec === "spec-3" ? "" : "spec-3")}
            >
              <p>{product.shipping}</p>
            </Accordion>
            <Accordion
              id="spec-4"
              title="Frequently Asked Questions"
              open={openSpec === "spec-4"}
              onToggle={() => setOpenSpec(openSpec === "spec-4" ? "" : "spec-4")}
            >
              {product.faq.map((item) => (
                <div key={item.q}>
                  <p className="font-medium text-on-surface">{item.q}</p>
                  <p className="mb-2">{item.a}</p>
                </div>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="my-space-xl rounded-xl overflow-hidden bg-primary-container text-on-primary shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-space-lg lg:p-space-xl flex flex-col gap-space-md z-10">
              <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-caps text-label-caps tracking-widest uppercase w-max">
                Architectural Precision
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg tracking-tight text-on-primary">
                {product.longDescription}
              </h2>
              <div className="flex items-center gap-space-md pt-space-xs">
                <Stat value="0.05%" label="Linear Distortion" />
                <div className="w-px h-10 bg-on-primary-container/20" />
                <Stat value="45 kHz" label="High-Freq Extension" />
                <div className="w-px h-10 bg-on-primary-container/20" />
                <Stat value="-42 dB" label="ANC Noise Floor" />
              </div>
            </div>
            <div className="lg:col-span-6 h-80 lg:h-[460px] relative overflow-hidden">
              <Image
                alt="AURA Studio Atmospheric Architecture"
                src={IMAGES.hero}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary-container via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="py-space-md w-full" id="reviews-anchor">
          <div className="flex items-center justify-between mb-space-md">
            <div>
              <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                Soundstage Verification
              </span>
              <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mt-1">
                From The Creative Vanguard
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
              {product.reviews[0] && (
                <>
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container-high">
                          <Image src={IMAGES.avatar} alt={product.reviews[0].author} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                              {product.reviews[0].author}
                            </h4>
                            {product.reviews[0].verified && (
                              <Icon name="verified" className="text-[16px] text-secondary" filled />
                            )}
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {product.reviews[0].role}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-secondary">
                        {Array.from({ length: product.reviews[0].rating }).map((_, index) => (
                          <Icon key={index} name="star" className="text-[18px]" filled />
                        ))}
                      </div>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mt-2 italic">
                      “{product.reviews[0].quote}”
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md pt-space-xs border-t border-surface-container-high/30">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-secondary" /> Verified Purchase —{" "}
                      {product.reviews[0].variant}
                    </span>
                    <span>{product.reviews[0].ago}</span>
                  </div>
                </>
              )}
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Studio Staging Score
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display-hero text-display-hero-mobile lg:text-display-hero font-bold text-on-surface leading-none">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface-variant">
                    / 5.0
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Based on {product.reviewCount} verified patrons.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {product.scores.map((score) => (
                  <div key={score.label}>
                    <div className="flex items-center justify-between font-label-md text-label-md text-on-surface">
                      <span>{score.label}</span>
                      <span className="font-semibold">{score.value}%</span>
                    </div>
                    <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-secondary h-full rounded-full"
                        style={{ width: `${score.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-xl pb-space-lg">
          <div className="flex items-center justify-between mb-space-md">
            <div>
              <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                Acoustic Ecosystem
              </span>
              <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mt-1">
                Frequently Paired Artifacts
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {companions.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <Link href={`/products/${item.slug}`} className="aspect-square w-full relative bg-surface-container-low overflow-hidden">
                  <Image
                    alt={item.name}
                    src={item.images[0]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-space-md flex flex-col justify-between flex-1 gap-space-sm">
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      {item.categoryLabel}
                    </p>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                      {item.name}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-price-card text-price-card font-bold text-on-surface tabular-price">
                      {formatPrice(item.price)}
                    </span>
                    <button
                      className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-primary hover:text-on-primary transition-colors font-label-md text-label-md font-semibold"
                      type="button"
                      onClick={() => {
                        addItem({
                          id: `${item.id}-${item.colors[0]?.name ?? "default"}`,
                          productId: item.id,
                          slug: item.slug,
                          name: item.shortName,
                          categoryLabel: item.categoryLabel,
                          image: item.images[0],
                          price: item.price,
                          color: item.colors[0]?.name,
                        });
                        showToast(`Added 1x ${item.shortName} — ${formatPrice(item.price)}`);
                      }}
                    >
                      + Quick Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Accordion({
  id,
  title,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
      <button
        className="w-full p-space-md flex items-center justify-between text-left font-headline-sm text-headline-sm text-on-surface"
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{title}</span>
        <Icon
          name="expand_more"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          id={id}
          className="px-space-md pb-space-md flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant"
        >
          {children}
        </div>
      )}
    </div>
  );
}

function MiniTrust({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="p-2 rounded-lg bg-surface-container-low flex flex-col items-center gap-1">
      <Icon name={icon} className="text-secondary text-[20px]" />
      <span className="font-label-caps text-[10px] text-on-surface font-semibold uppercase leading-tight">
        {label}
      </span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-headline-md text-headline-md text-secondary-fixed">{value}</span>
      <span className="font-label-caps text-label-caps text-on-primary-container">{label}</span>
    </div>
  );
}
