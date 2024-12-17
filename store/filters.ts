import { create } from "zustand";

interface FilterState {
  pizzaType: number | null;
  priceFrom: number;
  priceTo: number;
  ingredients: string[];
  setPizzaType: (types: number | null) => void;
  setPriceFrom: (price: number) => void;
  setPriceTo: (price: number) => void;
  setIngredients: (ingredients: string[]) => void;
}

const useFilters = create<FilterState>((set) => ({
  pizzaType: null,
  priceFrom: 0,
  priceTo: 1000,
  ingredients: [],
  setPizzaType: (type) => set({ pizzaType: type }),
  setPriceFrom: (price) => set({ priceFrom: price }),
  setPriceTo: (price) => set({ priceTo: price }),
  setIngredients: (ingredients) => set({ ingredients: ingredients }),
}));

export default useFilters;
