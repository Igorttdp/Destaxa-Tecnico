import { ApiResponse } from "@/types/apiResponse";
import api from "./api";

export interface Product {
  final_price: number;
  commission: number;
  plan_product_name: string;
}

export interface Plan {
  id: string;
  plan_name: string;
  products: Product[];
}

export const getPlans = async () => {
  const response = await api.get<ApiResponse<Plan>>("/plan");
  return response.data;
};
