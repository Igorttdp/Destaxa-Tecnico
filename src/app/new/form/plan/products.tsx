"use client";

import Image from "next/image";

import useNewSubscriptionProvider from "../../context/useNewSubscriptionProvider";

import TrashIcon from "@/assets/icons/trash.svg";
import PlusIcon from "@/assets/icons/plusBtn.svg";
import MinusIcon from "@/assets/icons/minusBtn.svg";

const intl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const Products = () => {
  const {
    state: {
      data: { products: data },
    },
    addProductQuantity,
    subtractProductQuantity,
  } = useNewSubscriptionProvider();

  return (
    <ul className="flex flex-col gap-4 mt-[29.94px]">
      {data.map((product) => (
        <li key={product.id} className="flex gap-[27px]">
          <div className="w-[608px] pt-[15px] pr-[7px] pb-3 pl-5 flex items-center justify-between border border-[#00B9B533] rounded">
            <div className="flex gap-[27px] items-end">
              <div className="flex flex-col">
                <span className="text-[8px] leading-[9.68px]">
                  {product.plan_product_name}
                </span>
                <h3 className="text-base leading-[22.4px] font-bold">
                  {product.plan_product_name}
                </h3>
              </div>
              <div className="bg-[#00B9B51A] text-[#00B9B5] text-[8px] leading-[9.68px] px-2 py-1 rounded-[30px]">
                Ciclo 1
              </div>
            </div>

            <div className="flex">
              <div className="w-[50px] h-[41px] rounded border border-[#CCCCCC] mr-[28px] grid grid-cols-[32px,_1fr]">
                <div className="flex items-center justify-center border-r">
                  <span>{product.quantity}</span>
                </div>
                <div className="flex flex-col justify-start h-full">
                  <button
                    type="button"
                    onClick={() => addProductQuantity(product.id)}
                    className="border-b h-[20.5px] flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <Image src={PlusIcon} alt="Adicionar" />
                  </button>
                  <button
                    type="button"
                    onClick={() => subtractProductQuantity(product.id)}
                    className="h-[20.5px] flex items-center justify-center hover:bg-neutral-200 transition-colors disabled:bg-neutral-300"
                    disabled={product.quantity === 0}
                  >
                    <Image src={MinusIcon} alt="Remover" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end mr-9">
                <span className="text-[8px] leading-[9.68px] text-[#00B9B5]">
                  Unidade
                </span>
                <span className="leading-[22.4px] font-bold">
                  {intl.format(product.price)}
                </span>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[8px] leading-[9.68px] text-[#00B9B5]">
                  Total
                </span>
                <span className="leading-[22.4px] font-bold">
                  {intl.format(product.final_price)}
                </span>
              </div>
            </div>
          </div>

          <Image src={TrashIcon} alt="Excluir" />
        </li>
      ))}
    </ul>
  );
};

export default Products;
