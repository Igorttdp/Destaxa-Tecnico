import { Subscriptions } from "@/app/components/subscriptions";
import SubscriptionsReport from "./components/subscriptionsReport";

export default function Home() {
  return (
    <div className="max-w-[1144px] w-full m-auto py-[95px]">
      <Subscriptions />
      <SubscriptionsReport />
    </div>
  );
}
