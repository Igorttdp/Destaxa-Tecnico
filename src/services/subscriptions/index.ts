import { ApiResponse, PostApiRepost } from "@/types/apiResponse";
import { NewSubscriptionData } from "@/app/new/reducer";
import { CreateSubscriptionResponse, SubscriptionContent } from "./types";
import api from "../api";

export const getSubscriptions = async () => {
  const response = await api.get<ApiResponse<SubscriptionContent>>(
    "/subscription"
  );
  return response.data;
};

export const createSubscription = async (data: NewSubscriptionData) => {
  const response = await api.post<PostApiRepost<CreateSubscriptionResponse>>(
    "/subscription",
    data
  );

  return response.data;
};
