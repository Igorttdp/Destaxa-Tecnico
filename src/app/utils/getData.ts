import { localApi } from "@/services/api";
import { GetCustomerResponse } from "@/services/customer/types";
import { SubscriptionContent } from "@/services/subscriptions/types";
import { ApiResponse } from "@/types/apiResponse";

type Contact = GetCustomerResponse["result"]["contact"]

export interface SubscriptionsData extends SubscriptionContent {
  contact: Contact
}

const getData = async () => {
  try {
    const {
      data: { content },
    } = await localApi.get<ApiResponse<SubscriptionContent>>("/subscriptions");

    const promises = content.map(async (el) => {
      const { data } = await localApi.get<GetCustomerResponse["result"]>(
        `/customer?customer_id=${el.subscriber_id}`
      );

      return {
        ...el,
        contact: data.contact,
      };
    });

    const result: SubscriptionsData[] = await Promise.all(promises);

    return { result };
  } catch {
    return {
      result: [] as SubscriptionsData[],
    };
  }
};

export default getData;
