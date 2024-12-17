import instance from "../lib/axiosInstance";

export const fetchCart = async (): Promise<any[]> => {
  try {
    const response = await instance.get("/cart");
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const updateCartItemQuantity = async (
  itemId: string,
  quantity: number
): Promise<any> => {
  try {
    const response = await instance.patch(`/cart/${itemId}`, { quantity });
    return response.data;
  } catch (error) {
    console.log("Error updating cart item quantity:", error);
  }
};
export const removeCartItem = async (itemId: string): Promise<any> => {
  try {
    const response = await instance.delete(`/cart/${itemId}`);
    return response.data;
  } catch (error) {
    console.log("Error removing cart item:", error);
  }
};
export const addToCart = async (
  productItemId: string,
  ingredients: string[]
): Promise<any> => {
  try {
    const response = await instance.post("/cart", {
      productItemId,
      ingredients,
    });
    return response.data;
  } catch (error) {
    console.log("Error adding item to cart:", error);
  }
};
