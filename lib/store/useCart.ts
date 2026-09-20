import { create } from "zustand";
import { CARE_WAX } from "@/lib/mock-data";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/format";

export type CartItem = {
  id: string;
  productId: string;
  slug: string;
  name: string;
  categoryLabel: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  variant?: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  isCheckoutOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (open?: boolean) => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  addCareWax: () => void;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  isCheckoutOpen: false,
  addItem: (item) => {
    const quantity = item.quantity ?? 1;
    set((state) => {
      const existing = state.items.find((line) => line.id === item.id);
      if (existing) {
        return {
          items: state.items.map((line) =>
            line.id === item.id
              ? { ...line, quantity: line.quantity + quantity }
              : line,
          ),
          isOpen: true,
        };
      }
      return {
        items: [...state.items, { ...item, quantity }],
        isOpen: true,
      };
    });
  },
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((line) => line.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items:
        quantity < 1
          ? state.items.filter((line) => line.id !== id)
          : state.items.map((line) =>
              line.id === id ? { ...line, quantity } : line,
            ),
    })),
  clearCart: () => set({ items: [] }),
  toggleCart: (open) =>
    set((state) => ({ isOpen: open ?? !state.isOpen })),
  openCheckout: () => set({ isOpen: false, isCheckoutOpen: true }),
  closeCheckout: () => set({ isCheckoutOpen: false }),
  addCareWax: () => {
    const existing = get().items.find((line) => line.id === CARE_WAX.id);
    if (existing) {
      get().updateQuantity(existing.id, existing.quantity + 1);
      return;
    }
    get().addItem({
      id: CARE_WAX.id,
      productId: CARE_WAX.id,
      slug: CARE_WAX.slug,
      name: CARE_WAX.name,
      categoryLabel: CARE_WAX.categoryLabel,
      image: CARE_WAX.image,
      price: CARE_WAX.price,
      color: CARE_WAX.variant,
    });
  },
}));

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, line) => sum + line.price * line.quantity, 0);
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, line) => sum + line.quantity, 0);
}

export function getShippingProgress(subtotal: number) {
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const unlocked = remaining === 0 && subtotal > 0;
  const percent =
    subtotal <= 0
      ? 0
      : Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  return { remaining, unlocked, percent, threshold: FREE_SHIPPING_THRESHOLD };
}
