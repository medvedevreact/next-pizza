import instance from "../lib/axiosInstance";

export const fetchCart = async (): Promise<any[]> => {
  try {
    const response = await instance.get("/cart");
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
