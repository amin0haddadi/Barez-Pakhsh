import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Hotel } from "@/types";

interface BasketItem extends Hotel {
  checkIn: Date;
  checkOut: Date;
  addedAt: string;
}

interface BasketState {
  items: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (hotelId: string) => void;
  clearBasket: () => void;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set) => ({
      items: [],
      addToBasket: (item) =>
        set((state) => ({
          items: [
            ...state.items,
            { ...item, addedAt: new Date().toISOString() },
          ],
        })),
      removeFromBasket: (hotelId) =>
        set((state) => ({
          items: state.items.filter(
            (item, index, self) =>
              self.findIndex((i) => i.id.toString() === hotelId) !== index ||
              item.id.toString() !== hotelId
          ),
        })),
      clearBasket: () => set({ items: [] }),
    }),
    {
      name: "hotel-basket",
    }
  )
);
