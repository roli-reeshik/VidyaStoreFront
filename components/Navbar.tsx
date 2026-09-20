"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { SearchModal } from "@/components/SearchModal";
import { IMAGES, trendingQueries } from "@/lib/mock-data";
import { formatPrice } from "@/lib/format";
import {
  getCartCount,
  getCartSubtotal,
  useCart,
} from "@/lib/store/useCart";

const NAV_LINKS = [
  { href: "/#featured", label: "Shop All" },
  { href: "/#categories", label: "Categories" },
  { href: "/#featured", label: "Best Sellers" },
  { href: "/#featured", label: "New Arrivals" },
  { href: "/#manifesto", label: "About Studio" },
];

export function Navbar() {
  const pathname = usePathname();
  const items = useCart((state) => state.items);
  const toggleCart = useCart((state) => state.toggleCart);
  const [searchOpen, setSearchOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const count = getCartCount(items);
  const subtotal = getCartSubtotal(items);

  useEffect(() => {
    if (count === 0) return;
    setPulse(true);
    const timer = window.setTimeout(() => setPulse(false), 420);
    return () => window.clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-header">
        <div className="bg-primary-container text-on-primary px-margin flex items-center justify-between text-label-caps font-label-caps h-9 tracking-wider">
          <div className="flex items-center gap-space-xs min-w-0">
            <span className="text-secondary-fixed font-bold">AURA EXCLUSIVE:</span>
            <span className="truncate">
              Complimentary Worldwide Express Shipping on Orders Over $150 — Code: FREESHIP
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <button
              className="flex items-center gap-space-xs text-on-primary hover:text-secondary-fixed transition-colors font-label-caps text-label-caps"
              type="button"
            >
              <span>USD ($)</span>
              <Icon name="expand_more" className="text-[14px]" />
            </button>
            <span className="text-outline-variant">|</span>
            <a
              className="text-on-primary hover:text-secondary-fixed transition-colors"
              href="#concierge"
            >
              Client Concierge
            </a>
          </div>
        </div>
        <div className="max-w-studio mx-auto px-margin h-16 flex items-center justify-between gap-gutter">
          <Link href="/" className="flex items-center gap-space-md min-w-0">
            <Logo className="h-8 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-space-lg h-full">
            {NAV_LINKS.map((link, index) => {
              const active = pathname === "/" && index === 0;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    active
                      ? "transition-colors py-space-sm text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg py-space-sm"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-space-md">
            <button
              className="hidden md:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors"
              type="button"
              onClick={() => setSearchOpen(true)}
            >
              <Icon name="search" className="text-[18px]" />
              <span className="font-body-sm text-body-sm">Search catalogue</span>
              <kbd className="ml-space-xs font-label-caps text-label-caps px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                ⌘K
              </kbd>
            </button>
            <button
              className="md:hidden p-2 text-on-surface-variant"
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Icon name="search" className="text-[22px]" />
            </button>
            <a
              className="relative p-2 text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
              href="#wishlist"
              aria-label="Wishlist"
            >
              <Icon name="favorite" className="text-[22px]" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-on-secondary rounded-full flex items-center justify-center font-label-caps text-[9px] leading-none">
                2
              </span>
            </a>
            <button
              className={`flex items-center gap-space-xs px-space-md py-2 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all ${
                pulse ? "scale-105" : "scale-100"
              }`}
              type="button"
              onClick={() => toggleCart(true)}
            >
              <Icon name="local_mall" className="text-[20px]" />
              <span className="hidden sm:inline font-label-lg text-label-lg tabular-price">
                {formatPrice(subtotal)}
              </span>
              <span
                className={`px-1.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-caps text-[10px] leading-none ${
                  pulse ? "animate-pulse" : ""
                }`}
              >
                {count}
              </span>
            </button>
            <div className="hidden sm:block pl-space-xs">
              <Image
                alt="Profile"
                src={IMAGES.avatar}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-high"
              />
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low px-margin py-2">
          <div className="max-w-studio mx-auto flex items-center gap-space-md overflow-x-auto">
            <span className="font-label-caps text-label-caps text-on-surface-variant whitespace-nowrap">
              Trending Inquiries:
            </span>
            <div className="flex items-center gap-space-xs">
              {trendingQueries.map((query) => (
                <button
                  key={query}
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all shadow-[0_1px_4px_rgba(0,0,0,0.02)] whitespace-nowrap"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
