import { PostApiRepost } from "@/types/apiResponse";
import { FormType as CreateCustomerData } from "@/app/new/form/schemas/customer";
import api from "../api";
import { CreateCustomerResponse, GetCustomerResponse } from "./types";

export const getCustomer = async (customer_id: string) => {
  const { data } = await api.get<GetCustomerResponse>(
    `/customer?customer_id=${customer_id}`
  );
  return data.result;
};

export const createCustomer = async (data: CreateCustomerData) => {
  const response = await api.post<PostApiRepost<CreateCustomerResponse>>(
    "/customer",
    data
  );
  return response.data;
};
