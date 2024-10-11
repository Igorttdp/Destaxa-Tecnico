import { useMemo } from "react";

import Image from "next/image";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { textFieldSx } from "@/utils/textFieldStyles";

import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { Plan } from "@/services/plans/types";
import Products from "./products";
import useNewSubscriptionProvider from "../../context/useNewSubscriptionProvider";

interface PlanItemsProps {
  plan: Plan;
}

const intl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const PlanItems = ({ plan }: PlanItemsProps) => {
  const {
    state: {
      data: { products },
    },
  } = useNewSubscriptionProvider();

  const comissions = useMemo(
    () => products.reduce((acc, cv) => acc + cv.commission, 0),
    [products]
  );

  const total = useMemo(
    () => products.reduce((acc, cv) => acc + cv.final_price, 0),
    [products]
  );

  return (
    <Accordion
      className="!mt-[23px] !mb-6 !bg-[#F8F8F8] !shadow-none"
      defaultExpanded
    >
      <AccordionSummary
        className="!border-[#00B9B5] !border !border-solid m-0 !h-[54px] !min-h-0 [&>*]:!m-0 !rounded-t [&>div]:!justify-between [&>div]:!items-center"
        expandIcon={<Image src={ChevronDownIcon} alt="Seta" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <span>{plan.plan_name}</span>
      </AccordionSummary>
      <AccordionDetails className="!rounded-b !pr-[18px] !pl-5 !pt-[23px]">
        <div className="flex gap-[14.84px] items-center">
          <TextField
            label="Selecionar funcionalidade"
            className="w-[509.08px]"
            select
            sx={textFieldSx}
            defaultValue={"f"}
          >
            <MenuItem value="f">Funcionalidade</MenuItem>
          </TextField>

          <button className="bg-transparent border border-[#00B9B5] text-[#00B9B5] hover:bg-[#00B9B5] hover:text-white transition-colors leading-[22.4px] font-bold w-[131px] px-[27.5px] py[10px] rounded h-[42px]">
            Adicionar
          </button>
        </div>

        <Products />

        <div className="flex justify-end gap-6 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-xs leading-[14.52px]">Comissão</span>
            <span className="font-bold leading-[22.4px] text-[#691F74]">
              {intl.format(comissions)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs leading-[14.52px]">
              Total da assinatura
            </span>
            <span className="font-bold leading-[22.4px] text-[#691F74]">
              {intl.format(total)}
            </span>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default PlanItems;
