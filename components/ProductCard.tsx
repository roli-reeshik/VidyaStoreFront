"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { formatPrice } from "@/lib/format";
import { getProductColorImage, type Product } from "@/lib/mock-data";
import { useCart } from "@/lib/store/useCart";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);
  const [saved, setSaved] = useState(false);
  const [added, setAdded] = useState(false);
  const [color, setColor] = useState(product.colors[0]?.name);
  const colorImage = getProductColorImage(product, color);

  const handleQuickAdd = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    addItem({
      id: `${product.id}-${color ?? "default"}`,
      productId: product.id,
      slug: product.slug,
      name: product.shortName,
      categoryLabel: product.categoryLabel,
      image: colorImage,
      price: product.price,
      color,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
  };

  return (
    <article className="product-card group flex flex-col h-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-square bg-surface-container overflow-hidden shrink-0">
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          <Image
            key={colorImage}
            src={colorImage}
            alt={`${product.name} in ${color ?? "studio finish"}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {product.badge && (
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            <span
              className={`px-2.5 py-0.5 rounded-full font-label-caps text-label-caps shadow-sm ${
                product.badgeTone === "accent"
                  ? "bg-secondary text-on-secondary"
                  : "bg-surface-container-lowest text-on-surface"
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}
        <button
          aria-label="Toggle Wishlist"
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center shadow-sm transition-colors ${
            saved ? "text-error" : "text-on-surface hover:text-error"
          }`}
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setSaved((value) => !value);
          }}
        >
          <Icon name="favorite" className="text-[18px]" filled={saved} />
        </button>
        <div className="absolute inset-x-3 bottom-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <button
            className={`w-full py-2.5 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 shadow-lg transition-colors ${
              added
                ? "bg-secondary text-on-secondary"
                : "bg-primary text-on-primary hover:bg-primary-container"
            }`}
            type="button"
            onClick={handleQuickAdd}
          >
            <Icon
              name={added ? "check" : "add_shopping_cart"}
              className="text-[16px]"
            />
            <span>
              {added ? "Added to Bag" : `Quick Add • ${formatPrice(product.price).replace(".00", "")}`}
            </span>
          </button>
        </div>
      </div>
      <div className="p-space-md flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps mb-1">
            <span>{product.categoryLabel}</span>
            <div className="flex items-center gap-1 text-on-surface">
              <Icon name="star" className="text-secondary text-[14px]" filled />
              <span>
                {product.rating.toFixed(1)} ({product.reviewCount})
              </span>
            </div>
          </div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors min-h-[3.5rem] line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>
        </div>
        <div className="pt-space-md">
          <div className="flex items-center gap-2 mb-space-sm">
            {product.colors.map((swatch) => (
              <button
                key={swatch.name}
                type="button"
                title={swatch.name}
                aria-label={swatch.name}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setColor(swatch.name);
                }}
                className={`w-5 h-5 rounded-full ${
                  color === swatch.name
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-surface-container-lowest"
                    : "hover:ring-2 hover:ring-outline"
                }`}
                style={{ backgroundColor: swatch.hex }}
              />
            ))}
            <span className="font-label-caps text-label-caps text-on-surface-variant ml-1">
              {product.colors.length} {product.colors.length === 1 ? "Finish" : "Finishes"}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-price-hero text-price-hero text-on-surface tabular-price">
              {formatPrice(product.price).replace(".00", "")}
            </span>
            {product.compareAt && (
              <span className="font-body-sm text-body-sm text-on-surface-variant line-through tabular-price">
                {formatPrice(product.compareAt).replace(".00", "")}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
