import Image from "next/image";
import Link from "next/link";

import Plus from "@/assets/icons/plus.svg";

export const Subscriptions = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold leading-[29.05px] text-2xl">
          Minhas assinaturas
        </h2>
        <Link
          href={"/new"}
          className="bg-main rounded flex gap-[10px] px-4 py-[10px] text-white w-fit h-fit font-bold leading-[22.4px]"
        >
          <Image src={Plus} alt="Nova assinatura" />
          <span>Nova assinatura</span>
        </Link>
      </div>
      <div className="mt-8 flex gap-2">
        <div className="w-[215px] h-[121px] text-white bg-gradient-to-b from-[#40BFB3] to-[#067775] flex flex-col justify-between border rounded-lg px-6 py-[14.5px] border-[#CCCCCC]">
          <h4 className="font-bold leading-[22.4px]">
            Onboarding em <br /> andamento com <br /> time Destaxa
          </h4>
          <span className="leading-[22.4px]">12</span>
        </div>
        <div className="w-[215px] h-[121px] flex flex-col justify-between border rounded-lg px-6 py-[19.5px] border-[#CCCCCC]">
          <h4 className="font-bold leading-[22.4px]">
            Assinaturas <br /> Ativas
          </h4>
          <span className="leading-[22.4px]">45</span>
        </div>
        <div className="w-[215px] h-[121px] flex flex-col justify-between border rounded-lg px-6 py-[19.5px] border-[#CCCCCC]">
          <h4 className="font-bold leading-[22.4px]">
            Assinaturas <br /> Canceladas
          </h4>
          <span className="leading-[22.4px]">45</span>
        </div>
        <div className="w-[215px] h-[121px] flex flex-col justify-between border rounded-lg px-6 py-[19.5px] border-[#CCCCCC]">
          <h4 className="font-bold leading-[22.4px]">
            Assinaturas <br /> Declinadas
          </h4>
          <span className="leading-[22.4px]">45</span>
        </div>
      </div>
    </div>
  );
};
