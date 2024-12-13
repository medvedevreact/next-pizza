import { fetchCart } from "@/services/cart";
import { create } from "zustand";

type CartFrontendItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  type?: number | null;
  ingredients?: any;
};

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartFrontendItem[];

  /* Получение товаров из корзины */
  fetchCartItems: () => Promise<void>;

  /* Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Запрос на добавление товара в корзину */
  addCartItem: (values: any) => Promise<void>;

  /* Запрос на удаление товара из корзины */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await fetchCart();

      const transformedItems: CartFrontendItem[] = data.items.map((item) => {
        const ingredientPrice = item.ingredients.reduce(
          (sum, ingredient) => sum + ingredient.price,
          0
        );
        const totalPrice =
          (item.productItem.price + ingredientPrice) * item.quantity;

        return {
          id: item.id,
          quantity: item.quantity,
          name: item.productItem.product.name,
          imageUrl: item.productItem.product.imageUrl,
          price: totalPrice,
          pizzaSize: item.productItem.size,
          type: item.productItem.pizzaType,
          ingredients: item.ingredients,
        };
      });

      const totalAmount = transformedItems.reduce(
        (sum, item) => sum + item.price,
        0
      );

      set({ items: transformedItems, totalAmount });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {},
  updateItemQuantity: async (id: number, quantity: number) => {},
  addCartItem: async (values: any) => {},
}));
