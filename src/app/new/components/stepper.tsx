"use client";

import Image from "next/image";

import Icon from "@/assets/steper-icon.png";
import useNewSubscriptionProvider from "../context/useNewSubscriptionProvider";
import { cn } from "@/lib/utils";

export const Stepper = () => {
  const {
    state: { step },
  } = useNewSubscriptionProvider();

  return (
    <div className={cn("pl-6 flex items-center gap-2 mb-[79px]", step === 1 && "mb-10")}>
      <div
        className={cn(
          "p-4 flex flex-col justify-center items-center gap-2",
          step < 0 && "opacity-50"
        )}
      >
        <Image src={Icon} alt="Icone" />
        <span className="text-center">
          Dados <br /> do cliente
        </span>
      </div>

      <div className="w-[58.5px] h-[1px] bg-[#CCCCCC]" />

      <div
        className={cn(
          "p-4 flex flex-col justify-center items-center gap-2",
          step < 1 && "opacity-50"
        )}
      >
        <Image src={Icon} alt="Icone" />
        <span className="text-center">
          Dados <br /> do cliente
        </span>
      </div>

      <div className="w-[58.5px] h-[1px] bg-[#CCCCCC]" />

      <div
        className={cn(
          "p-4 flex flex-col justify-center items-center gap-2",
          step < 2 && "opacity-50"
        )}
      >
        <Image src={Icon} alt="Icone" />
        <span className="text-center">
          Dados <br /> do cliente
        </span>
      </div>

      <div className="w-[58.5px] h-[1px] bg-[#CCCCCC]" />

      <div
        className={cn(
          "p-4 flex flex-col justify-center items-center gap-2",
          step < 3 && "opacity-50"
        )}
      >
        <Image src={Icon} alt="Icone" />
        <span className="text-center">
          Dados <br /> do cliente
        </span>
      </div>
    </div>
  );
};

export default Stepper;
