"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { formatPrice } from "@/lib/format";
import { searchProducts } from "@/lib/mock-data";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchProducts(query), [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => window.clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-28 w-full max-w-2xl px-margin">
        <div className="rounded-xl bg-surface-container-lowest shadow-level2 overflow-hidden">
          <div className="flex items-center gap-3 px-space-md py-3 border-b border-outline-variant/30">
            <Icon name="search" className="text-[20px] text-on-surface-variant" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the atelier catalogue"
              className="flex-1 bg-transparent font-body-md text-body-md text-on-surface outline-none placeholder:text-on-surface-variant"
            />
            <kbd className="font-label-caps text-label-caps px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
              ESC
            </kbd>
          </div>
          <div className="max-h-[420px] overflow-y-auto p-space-sm">
            {results.length === 0 ? (
              <p className="px-space-sm py-space-lg font-body-sm text-body-sm text-on-surface-variant">
                No artifacts match “{query}”.
              </p>
            ) : (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-space-md p-space-sm rounded-lg hover:bg-surface-container-low transition-colors"
                >
                  <div className="relative w-14 h-14 rounded-md overflow-hidden bg-surface-container">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-label-caps text-label-caps text-on-surface-variant">
                      {product.categoryLabel}
                    </p>
                    <p className="font-label-lg text-label-lg text-on-surface truncate">
                      {product.name}
                    </p>
                  </div>
                  <span className="font-price-card text-price-card tabular-price">
                    {formatPrice(product.price)}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
