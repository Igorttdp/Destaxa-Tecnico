import Image from "next/image";

import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuItem from "@mui/material/MenuItem";

import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { textFieldSx } from "@/utils";
import Products from "./products";

const Plan = () => {
  return (
    <div>
      <Accordion
        className="mt-[23px] mb-6 bg-[#F8F8F8] shadow-none"
        defaultExpanded
      >
        <AccordionSummary
          className="border-[#00B9B5] border border-solid m-0 !h-[54px] !min-h-0 [&>*]:!m-0 rounded-t [&>div]:justify-between [&>div]:items-center"
          expandIcon={<Image src={ChevronDownIcon} alt="Seta" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span>Plano DTX</span>
        </AccordionSummary>
        <AccordionDetails className="rounded-b px-4 pt-[23px]">
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
                R$ 140,00
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs leading-[14.52px]">
                Total da assinatura
              </span>
              <span className="font-bold leading-[22.4px] text-[#691F74]">
                R$ 240,00
              </span>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <p className="leading-[22.4px] mt-8 mb-6">
        Selecione a automação desejada para este cliente:
      </p>

      <TextField
        label="Automação*"
        className="w-[509.08px]"
        select
        sx={textFieldSx}
        defaultValue={"y"}
      >
        <MenuItem value="y">Automação Y</MenuItem>
      </TextField>
    </div>
  );
};

export default Plan;
