import Image from "next/image";

import { TextField } from "@mui/material";

import SearchIcon from "@/assets/icons/search.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";

const SubscriptionsReport = () => {
  return (
    <div className="mt-40">
      <div>
        <h2 className="font-bold leading-[29.05px] text-2xl mb-8">
          Relatório de Assinaturas
        </h2>

        <div className="flex justify-between items-center">
          <div className="flex gap-[13px]">
            <div className="w-[447px] relative">
              <TextField
                className="w-full [&>div>input]:py-[11px] [&>div>input]:px-4"
                placeholder="Buscar por CNPJ/nome fantasia"
              />
              <Image
                src={SearchIcon}
                alt="Buscar"
                className="absolute right-4 top-[10px]"
              />
            </div>
            <div className="max-w-[235px] relative">
              <TextField
                className="w-full [&>div>input]:py-[11px] [&>div>input]:px-4"
                placeholder="05/03 até 15/05/2024"
              />
              <Image
                src={CalendarIcon}
                alt="Calendário"
                className="absolute top-[10px] right-4"
              />
            </div>
          </div>

          <button className="bg-main py-[11px] px-[14px] rounded text-white">
            Exportar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsReport;
