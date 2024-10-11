import { localApi } from "@/services/api";
import { SubscriptionContent } from "@/services/subscriptions/types";
import { ApiResponse } from "@/types/apiResponse";

const useHome = async () => {
  try {
    const {
      data: { content },
    } = await localApi.get<ApiResponse<SubscriptionContent>>("/subscriptions");

    return { content };
  } catch (err) {
    return {
      content: [] as SubscriptionContent[],
    };
  }
};

export default useHome;
