"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { CARE_WAX } from "@/lib/mock-data";
import { formatPrice } from "@/lib/format";
import {
  getCartCount,
  getCartSubtotal,
  getShippingProgress,
  useCart,
} from "@/lib/store/useCart";

export function CartDrawer() {
  const {
    items,
    isOpen,
    toggleCart,
    removeItem,
    updateQuantity,
    clearCart,
    openCheckout,
    addCareWax,
  } = useCart();
  const [promoOpen, setPromoOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const count = getCartCount(items);
  const subtotal = getCartSubtotal(items);
  const shipping = getShippingProgress(subtotal);
  const waxInCart = items.some((item) => item.id === CARE_WAX.id);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => toggleCart(false)}
      />
      <aside
        aria-labelledby="cart-heading"
        aria-modal="true"
        role="dialog"
        className={`fixed top-0 right-0 bottom-0 z-[65] w-full sm:w-[460px] bg-surface-container-lowest shadow-level3 flex flex-col justify-between transition-transform duration-300 ease-out overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-surface-container-lowest px-space-md pt-space-md pb-space-sm shadow-sm flex flex-col gap-space-sm z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <Icon name="local_mall" className="text-secondary text-[24px]" />
              <h2
                className="font-headline-sm text-headline-sm text-on-surface"
                id="cart-heading"
              >
                Your Shopping Bag
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps">
                {count} {count === 1 ? "Item" : "Items"}
              </span>
            </div>
            <div className="flex items-center gap-space-sm">
              {items.length > 0 && (
                <button
                  className="font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors underline-offset-2 hover:underline"
                  type="button"
                  onClick={clearCart}
                >
                  Clear all
                </button>
              )}
              <button
                aria-label="Close cart"
                className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
                type="button"
                onClick={() => toggleCart(false)}
              >
                <Icon name="close" className="text-[20px]" />
              </button>
            </div>
          </div>
          <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-label-md font-label-md">
              <div className="flex items-center gap-1.5 text-secondary">
                <Icon name="verified" className="text-[18px]" />
                <span className="font-semibold">
                  {subtotal === 0
                    ? `Add ${formatPrice(shipping.threshold)} for complimentary express`
                    : shipping.unlocked
                      ? "Complimentary Express Shipping unlocked!"
                      : `You are ${formatPrice(shipping.remaining)} away from Complimentary Express Delivery!`}
                </span>
              </div>
              <span className="text-on-surface font-semibold tabular-price">
                {formatPrice(subtotal)} / {formatPrice(shipping.threshold)}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden relative">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${shipping.percent}%` }}
              />
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
              <Icon name="flight_takeoff" className="text-[14px]" />
              Worldwide 2-3 day express dispatch with priority customs clearance.
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-space-md py-space-sm space-y-space-md">
          {items.length === 0 && (
            <div className="py-space-xl text-center">
              <p className="font-headline-sm text-headline-sm text-on-surface">
                Your bag is empty
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Add a signature edition to begin checkout.
              </p>
            </div>
          )}
          {items.map((item) => (
            <div
              key={item.id}
              className="group p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex gap-space-md relative"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-container-lowest flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-space-xs">
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">
                      {item.categoryLabel}
                    </p>
                    <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                      {item.name}
                    </h4>
                    {(item.color || item.variant) && (
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {[item.color, item.variant].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  <button
                    className="text-on-surface-variant hover:text-error transition-colors p-1"
                    title="Remove item"
                    type="button"
                    onClick={() => removeItem(item.id)}
                  >
                    <Icon name="delete_outline" className="text-[18px]" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-space-xs">
                  <div className="inline-flex items-center bg-surface-container-lowest rounded-lg p-0.5 shadow-sm">
                    <button
                      className="w-6 h-6 flex items-center justify-center text-on-surface hover:bg-surface-container-high rounded text-sm font-semibold"
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="qty-val px-2 text-label-md font-label-md text-on-surface tabular-price">
                      {item.quantity}
                    </span>
                    <button
                      className="w-6 h-6 flex items-center justify-center text-on-surface hover:bg-surface-container-high rounded text-sm font-semibold"
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface tabular-price">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="p-space-sm rounded-xl bg-surface-container-high flex items-center justify-between gap-space-sm shadow-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary flex-shrink-0">
                <Icon name="sanitizer" className="text-[24px]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-label-caps text-[10px] uppercase font-bold text-secondary">
                    Frequently Paired
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </div>
                <h5 className="font-label-lg text-label-lg text-on-surface truncate">
                  {CARE_WAX.name}
                </h5>
                <span className="font-label-md text-label-md text-on-surface-variant font-semibold">
                  +{formatPrice(CARE_WAX.price)}
                </span>
              </div>
            </div>
            <button
              className={`px-3 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1 flex-shrink-0 ${
                waxInCart
                  ? "bg-secondary text-on-secondary opacity-80"
                  : "bg-primary text-on-primary hover:bg-primary-container"
              }`}
              type="button"
              disabled={waxInCart}
              onClick={addCareWax}
            >
              <Icon name={waxInCart ? "check" : "add"} className="text-[16px]" />
              <span>{waxInCart ? "Added" : "Add"}</span>
            </button>
          </div>

          <div className="p-space-sm rounded-xl bg-surface-container-lowest flex items-center gap-space-sm text-on-surface-variant">
            <Icon name="shield" className="text-secondary text-[20px]" />
            <div className="text-body-sm font-body-sm leading-tight">
              <span className="font-semibold text-on-surface">
                30-Day Bespoke Guarantee:
              </span>{" "}
              Complimentary concierge return pickup included with all boutique orders.
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md shadow-2xl flex flex-col gap-space-sm z-10">
          <div className="w-full">
            <button
              className="w-full flex items-center justify-between text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface py-1"
              type="button"
              onClick={() => setPromoOpen((value) => !value)}
            >
              <span className="flex items-center gap-1">
                <Icon name="local_offer" className="text-[16px]" />
                <span>ADD PROMO CODE / GIFT VOUCHER</span>
              </span>
              <Icon
                name="expand_more"
                className={`text-[18px] transition-transform ${promoOpen ? "rotate-180" : ""}`}
              />
            </button>
            {promoOpen && (
              <div className="pt-2 flex items-center gap-2">
                <input
                  className="w-full h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary uppercase"
                  placeholder="FREESHIP or VIP20"
                  value={promo}
                  onChange={(event) => setPromo(event.target.value)}
                />
                <button
                  className="h-9 px-4 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold"
                  type="button"
                  onClick={() => setPromoApplied(promo.trim().length > 0)}
                >
                  {promoApplied ? "Applied!" : "Apply"}
                </button>
              </div>
            )}
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-body-sm font-body-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span className="text-on-surface font-semibold tabular-price">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between text-body-sm font-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span>Shipping</span>
                {shipping.unlocked && (
                  <span className="px-1.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold">
                    COMPLIMENTARY
                  </span>
                )}
              </span>
              <span
                className={`font-semibold ${shipping.unlocked ? "text-secondary" : "text-on-surface"}`}
              >
                {shipping.unlocked || subtotal === 0
                  ? "FREE ($0.00)"
                  : "Calculated at $150"}
              </span>
            </div>
            <div className="flex justify-between text-body-sm font-body-sm text-on-surface-variant">
              <span>Estimated Sales Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between items-baseline pt-2">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Estimated Total
              </span>
              <div className="text-right">
                <span className="font-headline-lg text-headline-lg text-on-surface tabular-price">
                  {formatPrice(subtotal)}
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant ml-1">
                  USD
                </span>
              </div>
            </div>
          </div>
          <button
            className="w-full py-3.5 px-space-md rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg transition-all flex items-center justify-center gap-space-xs shadow-md disabled:opacity-40"
            type="button"
            disabled={items.length === 0}
            onClick={openCheckout}
          >
            <Icon name="lock" className="text-[18px]" />
            <span>Proceed to Checkout</span>
            <span className="text-on-primary-container font-normal">·</span>
            <span className="font-bold tabular-price">{formatPrice(subtotal)}</span>
          </button>
          <div className="flex flex-col gap-1.5 pt-1">
            <div className="flex items-center gap-2 text-center text-label-caps text-on-surface-variant font-label-caps justify-center">
              <span className="h-px bg-surface-container flex-1" />
              <span>INSTANT EXPRESS CHECKOUT</span>
              <span className="h-px bg-surface-container flex-1" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                aria-label="Apple Pay"
                className="h-10 rounded-lg bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center font-bold shadow-sm text-on-surface"
                type="button"
                onClick={openCheckout}
              >
                <span className="font-headline-sm tracking-tighter">Pay</span>
              </button>
              <button
                aria-label="Google Pay"
                className="h-10 rounded-lg bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center font-semibold shadow-sm text-on-surface"
                type="button"
                onClick={openCheckout}
              >
                <span className="font-headline-sm tracking-tight">
                  <span className="text-secondary font-bold">G</span>Pay
                </span>
              </button>
              <button
                aria-label="Shop Pay"
                className="h-10 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container flex items-center justify-center font-bold tracking-tight shadow-sm"
                type="button"
                onClick={openCheckout}
              >
                <span className="font-label-lg italic">
                  shop<span className="not-italic font-bold">Pay</span>
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-space-sm text-[11px] text-on-surface-variant pt-1 font-label-md">
            <span className="flex items-center gap-1">
              <Icon name="verified_user" className="text-[14px] text-secondary" />
              <span>256-Bit SSL Encrypted</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Icon name="eco" className="text-[14px] text-secondary" />
              <span>Carbon Neutral Logistics</span>
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
