import { Subscriptions } from "@/app/components/subscriptions";
import SubscriptionsReport from "./components/subscriptionsReport";
import { localApi } from "@/services/api";
import { ApiResponse } from "@/types/apiResponse";
import { SubscriptionContent } from "@/services/subscriptions";

export default async function Home() {
  const {
    data: { content },
  } = await localApi.get<ApiResponse<SubscriptionContent>>("/subscriptions");

  return (
    <div className="max-w-[1144px] w-full m-auto py-[95px]">
      <Subscriptions />
      <SubscriptionsReport data={content} />
    </div>
  );
}
