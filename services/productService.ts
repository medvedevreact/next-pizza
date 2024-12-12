import instance from "../lib/axiosInstance";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export const fetchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await instance.get("/products", {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
