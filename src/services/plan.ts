import { ApiResponse } from "@/types/apiResponse";
import api from "./api";

interface Product {
  final_price: number;
  commission: number;
  plan_product_name: string;
}

interface Plan {
  id: string;
  plan_name: string;
  products: Product[];
}

export const getPlans = async () => {
  const response = await api.get<ApiResponse<Plan>>("/plan");
  return response.data;
};
