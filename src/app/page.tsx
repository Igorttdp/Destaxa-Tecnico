import { Subscriptions } from "@/app/components/subscriptions";
import SubscriptionsReport from "./components/subscriptionsReport";
import useHome from "./hook/useHome";

export default async function Home() {
  const { content } = await useHome();

  return (
    <div className="max-w-[1144px] w-full m-auto py-[95px]">
      <Subscriptions />
      <SubscriptionsReport data={content} />
    </div>
  );
}
