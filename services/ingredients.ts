import instance from "../lib/axiosInstance";

export interface Ingredient {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchIngredients = async (): Promise<Ingredient[]> => {
  try {
    const response = await instance.get("/ingredients");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
