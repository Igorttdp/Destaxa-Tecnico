import Image from "next/image";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import PlusSquareIcon from "@/assets/icons/plus-square.svg";
import { textFieldSx } from "@/utils/textFieldStyles";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <TextField
            label="Cliente"
            className="w-[139px]"
            sx={textFieldSx}
            select
          >
            <MenuItem value="r">Responsável</MenuItem>
            <MenuItem value="c">Comercial</MenuItem>
            <MenuItem value="f">Financeiro</MenuItem>
            <MenuItem value="s">Suporte</MenuItem>
          </TextField>
          <TextField
            label="Nome do contato"
            className="w-[143px]"
            sx={textFieldSx}
          />
          <TextField label="Telefone" className="w-[146px]" sx={textFieldSx} />
          <TextField label="E-mail" className="w-[196px]" sx={textFieldSx} />
        </div>
      </div>
      <button type="button" className="mt-[24.5px] text-[#00B9B5] border border-[#00B9B5] rounded px-[19px] py-[8.5px] flex gap-[10px]">
        <span className="font-bold leading-[22.4px]">
          Adicionar novo contato
        </span>
        <Image src={PlusSquareIcon} alt="Adicionar" />
      </button>
    </>
  );
};

export default Contact;
