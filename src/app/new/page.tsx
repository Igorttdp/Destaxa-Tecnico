import Background from "@/assets/background.png";
import Image from "next/image";
import Header from "./components/header";
import NewSubscriptionProvider from "./context";
import Stepper from "./components/stepper";
import NewSubscriptionForm from "./form";

const NewSubscription = () => {
  return (
    <NewSubscriptionProvider>
      <div className="grid grid-cols-[697px,_432px] gap-[83px] justify-center my-[55px]">
        <div>
          <Header />
          <Stepper />
          <NewSubscriptionForm />
        </div>

        <Image src={Background} alt="Imagem" />
      </div>
    </NewSubscriptionProvider>
  );
};

export default NewSubscription;
