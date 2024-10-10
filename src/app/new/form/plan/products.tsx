"use client";

import TrashIcon from "@/assets/icons/trash.svg";
import { Product } from "@/services/plan";
import Image from "next/image";

interface ProductsProps {
  data: Product[];
}

const intl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const Products = ({ data }: ProductsProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-[29.94px]">
      {data.map((product, index) => (
        <li key={product.plan_product_name + index} className="flex gap-[27px]">
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

            <div className="flex flex-col items-end">
              <span className="text-[8px] leading-[9.68px] text-[#00B9B5]">
                Total
              </span>
              <span className="leading-[22.4px] font-bold">
                {intl.format(product.final_price)}
              </span>
            </div>
          </div>

          <Image src={TrashIcon} alt="Excluir" />
        </li>
      ))}
    </ul>
  );
};

export default Products;
