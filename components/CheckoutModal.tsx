"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { formatPrice } from "@/lib/format";
import {
  getCartCount,
  getCartSubtotal,
  useCart,
} from "@/lib/store/useCart";

const TAX_RATE = 0.0708;

export function CheckoutModal() {
  const { items, isCheckoutOpen, closeCheckout, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [promo, setPromo] = useState("");
  const [promoMsg, setPromoMsg] = useState(false);
  const [email, setEmail] = useState("alexander.vane@luxurydesign.io");
  const [firstName, setFirstName] = useState("Alexander");
  const [lastName, setLastName] = useState("Vane");
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  const subtotal = getCartSubtotal(items);
  const count = getCartCount(items);
  const tax = subtotal * TAX_RATE;
  const total = Math.max(0, subtotal + shippingCost + tax - discount);

  const orderId = useMemo(
    () => `AUR-${Math.floor(80000 + (subtotal % 9000))}`,
    [subtotal],
  );

  const resetAndClose = () => {
    setSuccess(false);
    setSubmitting(false);
    closeCheckout();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setConfirmedTotal(total);
      setSubmitting(false);
      setSuccess(true);
      clearCart();
    }, 700);
  };

  if (!isCheckoutOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto">
      <button
        type="button"
        aria-label="Close checkout"
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={resetAndClose}
      />
      <div className="relative min-h-full flex items-center justify-center p-margin">
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative w-full max-w-6xl bg-surface-container-lowest text-on-surface rounded-xl shadow-2xl overflow-hidden">
          <div className="px-6 py-4 sm:px-10 bg-surface-container-low flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span className="font-headline-sm tracking-widest text-primary font-bold uppercase text-base sm:text-lg">
                  AURA STUDIO
                </span>
              </div>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <span className="font-label-caps text-on-surface-variant uppercase tracking-wider hidden sm:inline-block">
                Atelier Checkout
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface text-label-md font-label-md">
                <Icon name="lock" className="text-sm text-secondary" filled />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <button
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-primary-fixed hover:bg-primary text-label-md font-label-md transition-colors"
                type="button"
                onClick={() => setSuccess((value) => !value)}
              >
                <Icon name="swap_horiz" className="text-sm" />
                <span>{success ? "Demo: Checkout View" : "Demo: Success State"}</span>
              </button>
              <button
                type="button"
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center"
                onClick={resetAndClose}
              >
                <Icon name="close" className="text-[18px]" />
              </button>
            </div>
          </div>

          {!success ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-on-surface-variant text-label-caps">
                      Express Checkout
                    </span>
                    <span className="font-label-md text-secondary font-medium">
                      Instant 1-Click
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      className="h-12 bg-primary text-on-primary hover:bg-surface-tint rounded-lg flex items-center justify-center shadow-sm font-label-lg font-semibold gap-1.5"
                      type="button"
                      onClick={() => {
                        setConfirmedTotal(total);
                        setSuccess(true);
                        clearCart();
                      }}
                    >
                      <Icon name="desktop_mac" className="text-base" />
                      <span className="tracking-tight">Pay</span>
                    </button>
                    <button
                      className="h-12 bg-secondary text-on-secondary hover:bg-secondary-container rounded-lg flex items-center justify-center shadow-sm font-label-lg font-bold"
                      type="button"
                      onClick={() => {
                        setConfirmedTotal(total);
                        setSuccess(true);
                        clearCart();
                      }}
                    >
                      shop<span className="text-secondary-fixed">Pay</span>
                    </button>
                    <button
                      className="h-12 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg flex items-center justify-center shadow-sm font-label-lg font-bold italic"
                      type="button"
                      onClick={() => {
                        setConfirmedTotal(total);
                        setSuccess(true);
                        clearCart();
                      }}
                    >
                      <span className="text-secondary">Pay</span>
                      <span>Pal</span>
                    </button>
                  </div>
                  <div className="relative flex items-center justify-center py-2 mt-2">
                    <div className="w-full h-px bg-surface-container-highest absolute" />
                    <span className="relative bg-surface-container-lowest px-4 font-label-caps text-on-surface-variant uppercase tracking-widest text-[10px]">
                      Or Continue With Card
                    </span>
                  </div>
                </div>

                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">
                          1
                        </span>
                        Contact Information
                      </h3>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Already an atelier member?{" "}
                        <a className="text-secondary underline font-medium" href="#">
                          Sign In
                        </a>
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-on-surface-variant" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        className="h-12 px-4 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                        id="email"
                        required
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer pt-1">
                      <input
                        defaultChecked
                        className="mt-1 rounded accent-primary h-4 w-4"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Send me exclusive previews of seasonal atelier drops and private invitations.
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">
                        2
                      </span>
                      Shipping Destination
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Field label="First Name" id="first-name" value={firstName} onChange={setFirstName} />
                      <Field label="Last Name" id="last-name" value={lastName} onChange={setLastName} />
                    </div>
                    <Field label="Street Address" id="address" defaultValue="742 Evergreen Promenade" />
                    <div className="grid grid-cols-3 gap-3">
                      <Field label="Apt / Suite" id="suite" defaultValue="Penthouse 4B" />
                      <Field label="City" id="city" defaultValue="Tribeca" />
                      <Field label="Postal Code" id="zip" defaultValue="10013" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-on-surface-variant" htmlFor="country">
                          Country
                        </label>
                        <select
                          className="h-12 px-4 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                          id="country"
                          defaultValue="United States"
                        >
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>France</option>
                          <option>Japan</option>
                          <option>Germany</option>
                        </select>
                      </div>
                      <Field label="State / Region" id="state" defaultValue="New York" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">
                        3
                      </span>
                      Delivery Logistics
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="relative flex flex-col p-4 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2.5">
                            <input
                              checked={shippingCost === 0}
                              className="accent-primary h-4 w-4"
                              name="shipping_tier"
                              type="radio"
                              onChange={() => setShippingCost(0)}
                            />
                            <span className="font-label-lg text-label-lg font-bold text-on-surface">
                              Express Courier
                            </span>
                          </div>
                          <span className="font-label-caps text-secondary font-bold text-[10px] bg-secondary/10 px-2 py-0.5 rounded-full">
                            FREE
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pl-6">
                          Dispatched with temperature-controlled packaging. 2-3 business days.
                        </p>
                      </label>
                      <label className="relative flex flex-col p-4 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2.5">
                            <input
                              checked={shippingCost === 15}
                              className="accent-primary h-4 w-4"
                              name="shipping_tier"
                              type="radio"
                              onChange={() => setShippingCost(15)}
                            />
                            <span className="font-label-lg text-label-lg font-bold text-on-surface">
                              Next-Day Atelier
                            </span>
                          </div>
                          <span className="font-label-lg text-label-lg font-bold text-on-surface">
                            $15.00
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pl-6">
                          Signature on delivery, direct dedicated dispatch carrier.
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">
                          4
                        </span>
                        Secure Payment
                      </h3>
                      <div className="flex items-center gap-1.5">
                        {["VISA", "MC", "AMEX"].map((brand) => (
                          <span
                            key={brand}
                            className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-[10px] font-bold"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-on-surface-variant" htmlFor="card-num">
                          Card Number
                        </label>
                        <div className="relative flex items-center">
                          <input
                            className="w-full h-12 pl-4 pr-12 rounded-lg bg-surface-container-lowest text-on-surface font-body-md tracking-wider focus:outline-none focus:ring-2 focus:ring-primary"
                            id="card-num"
                            required
                            defaultValue="•••• •••• •••• 9012"
                          />
                          <span className="absolute right-3.5">
                            <Icon name="credit_card" className="text-secondary text-xl" />
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Expiry" id="card-expiry" defaultValue="08 / 28" />
                        <Field label="CVV / CVC" id="card-cvv" defaultValue="749" type="password" />
                      </div>
                      <Field
                        label="Cardholder Full Name"
                        id="card-name"
                        defaultValue="Alexander Vane"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1">
                    <TrustChip icon="verified_user" label="PCI Level 1" />
                    <TrustChip icon="shield_locked" label="VeriSign Safe" />
                    <TrustChip icon="published_with_changes" label="30-Day Bespoke" />
                  </div>

                  <button
                    className="w-full h-14 bg-primary text-on-primary hover:bg-surface-tint rounded-lg font-headline-sm text-headline-sm flex items-center justify-center gap-3 shadow-lg disabled:opacity-70"
                    type="submit"
                    disabled={submitting || items.length === 0}
                  >
                    {submitting ? (
                      <>
                        <span className="inline-block h-5 w-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                        <span>Authorizing Atelier Payment...</span>
                      </>
                    ) : (
                      <>
                        <span>Complete Order</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-surface-tint" />
                        <span className="tabular-price">{formatPrice(total)} USD</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="lg:col-span-5 bg-surface-container-low p-6 sm:p-10 flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between pb-3">
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      Order Summary
                    </h3>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                      {count} Items
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-lowest shadow-sm"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                          <span className="absolute top-1 right-1 bg-primary text-on-primary font-label-caps text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-headline-sm text-sm font-semibold truncate text-on-surface">
                            {item.name}
                          </h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {item.color ?? item.variant}
                          </p>
                        </div>
                        <span className="font-price-card text-price-card text-on-surface font-semibold tabular-price">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <input
                      className="flex-1 h-11 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary uppercase tracking-wider"
                      placeholder="Promo code or gift voucher"
                      value={promo}
                      onChange={(event) => setPromo(event.target.value)}
                    />
                    <button
                      className="px-5 h-11 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold"
                      type="button"
                      onClick={() => {
                        if (!promo.trim()) return;
                        setDiscount(subtotal * 0.1);
                        setPromoMsg(true);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                  {promoMsg && (
                    <div className="text-xs text-secondary font-medium -mt-4 pl-1">
                      Voucher applied: 10% Member Privilege
                    </div>
                  )}
                  <div className="flex flex-col gap-3 pt-4 bg-surface-container-lowest p-5 rounded-xl">
                    <Row label={`Subtotal (${count} artifacts)`} value={formatPrice(subtotal)} />
                    <div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1.5">
                        Shipping
                        <Icon name="eco" className="text-xs text-secondary" filled />
                      </span>
                      <span
                        className={
                          shippingCost === 0
                            ? "text-secondary font-semibold"
                            : "text-on-surface font-medium"
                        }
                      >
                        {shippingCost === 0
                          ? "FREE (Express)"
                          : `${formatPrice(shippingCost)} (Next-Day)`}
                      </span>
                    </div>
                    <Row label="Estimated Sales Tax (NY 7.08%)" value={formatPrice(tax)} />
                    {discount > 0 && <Row label="Member Privilege" value={`−${formatPrice(discount)}`} />}
                    <div className="pt-3 mt-1 flex justify-between items-baseline">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Total
                        </span>
                        <span className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider">
                          Including all Duties & Taxes
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-price-hero text-price-hero text-primary font-bold tracking-tight tabular-price">
                          {formatPrice(total)}
                        </span>
                        <span className="block font-label-caps text-on-surface-variant text-[11px]">
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/5 flex items-start gap-3">
                    <Icon name="workspace_premium" className="text-secondary text-xl" />
                    <div>
                      <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                        Atelier Guarantee
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Complimentary express delivery, white-glove packaging, and direct support from our studio specialists.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-8 text-center lg:text-left text-on-surface-variant font-label-caps text-[10px] uppercase tracking-widest flex items-center justify-between">
                  <span>AURA STUDIO • NYC • PARIS • TOKYO</span>
                  <span>EST. 2024</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 sm:p-16 lg:p-20 text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-xl">
                  <Icon name="check_circle" className="text-4xl" filled />
                </div>
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary" />
                </span>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-caps text-xs tracking-widest uppercase font-bold mb-3">
                Payment Verified • Order Confirmed
              </span>
              <h2 className="font-headline-lg text-headline-lg sm:text-display-hero-mobile text-primary font-bold tracking-tight">
                Thank You, {firstName}!
              </h2>
              <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant mt-2 mb-8">
                Your order <span className="font-semibold text-on-surface">#{orderId}</span> has
                been placed. Our master craftspeople in Brooklyn are preparing your items with
                white-glove packaging.
              </p>
              <div className="w-full max-w-2xl bg-surface-container-low rounded-2xl p-6 sm:p-8 text-left mb-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6">
                  <div>
                    <span className="font-label-caps text-on-surface-variant text-[11px] uppercase">
                      Estimated Arrival
                    </span>
                    <p className="font-headline-sm text-sm font-semibold text-on-surface mt-1">
                      Thursday, Oct 24
                    </p>
                    <span className="font-body-sm text-body-sm text-secondary">
                      {shippingCost === 0 ? "Express Courier" : "Next-Day Atelier"}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-on-surface-variant text-[11px] uppercase">
                      Destination
                    </span>
                    <p className="font-headline-sm text-sm font-semibold text-on-surface mt-1">
                      {firstName} {lastName}
                    </p>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate block">
                      742 Evergreen, Penthouse 4B
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-on-surface-variant text-[11px] uppercase">
                      Payment
                    </span>
                    <p className="font-headline-sm text-sm font-semibold text-on-surface mt-1">
                      •••• 9012
                    </p>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Total: {formatPrice(confirmedTotal || total)} USD
                    </span>
                  </div>
                </div>
                <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-surface-container">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Confirmation sent to {email}
                  </span>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span>Packaging in Studio</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
                <button
                  className="flex-1 min-w-[160px] h-12 bg-primary text-on-primary hover:bg-surface-tint rounded-lg font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow"
                  type="button"
                  onClick={() =>
                    window.alert(
                      `Tracking initialized: Tracking code #${orderId} dispatched via DHL White-Glove Atelier Logistics.`,
                    )
                  }
                >
                  <Icon name="local_shipping" className="text-lg" />
                  <span>Track Order</span>
                </button>
                <button
                  className="flex-1 min-w-[160px] h-12 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2"
                  type="button"
                  onClick={resetAndClose}
                >
                  <Icon name="arrow_back" className="text-lg" />
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  defaultValue,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  id: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-on-surface-variant" htmlFor={id}>
        {label}
      </label>
      <input
        className="h-12 px-4 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
        id={id}
        type={type}
        required
        {...(onChange
          ? { value, onChange: (event) => onChange(event.target.value) }
          : { defaultValue })}
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant">
      <span>{label}</span>
      <span className="text-on-surface font-medium tabular-price">{value}</span>
    </div>
  );
}

function TrustChip({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
      <Icon name={icon} className="text-sm text-secondary" />
      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
        {label}
      </span>
    </div>
  );
}
