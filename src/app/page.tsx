import { Subscriptions } from "@/app/components/subscriptions";
import SubscriptionsReport from "./components/subscriptionsReport";
import getData from "./utils/getData";

export default async function Home() {
  const { result } = await getData();

  return (
    <div className="max-w-[1144px] w-full m-auto py-[95px]">
      <Subscriptions />
      <SubscriptionsReport data={result} />
    </div>
  );
}
