import { ApiResponse } from "@/types/apiResponse";
import api from "../api";
import { Plan } from "./types";

export const getPlans = async () => {
  const productsIds = [
    "ee622743-5a86-4fee-add8-13bea32204a2",
    "a2e3a053-637d-414b-a0fa-b2dbee70e588",
    "425dd552-40a4-449e-9bf5-fc6777956bb8",
  ];

  const { data } = await api.get<ApiResponse<Plan>>("/plan");

  const response = {
    ...data,
    content: data.content.map((plan) => {
      return {
        ...plan,
        products: plan.products.map((el, index) => ({
          ...el,
          id: productsIds[index],
        })),
      };
    }),
  } as const satisfies ApiResponse<Plan>;

  return response;
};
