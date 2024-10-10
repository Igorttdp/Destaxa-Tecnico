import Image from "next/image";
import { MenuItem, Pagination, TextField } from "@mui/material";

import SearchIcon from "@/assets/icons/search.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import { SubscriptionTable } from "./subscriptionTable";

const SubscriptionsReport = () => {
  return (
    <div className="mt-40">
      <div className="mb-8">
        <h2 className="font-bold leading-[29.05px] text-2xl mb-8">
          Relatório de Assinaturas
        </h2>

        <div className="flex justify-between items-center mb-8">
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

      <div>

        <SubscriptionTable data={[]} />

        <div className="flex justify-between items-center mt-8">
          <TextField
            label="Quantidade de itens por página"
            defaultValue="20"
            select
            className="w-[241px]"
            sx={{
              ".MuiSelect-select": {
                padding: "12px 16px",
                borderColor: "#CCCCCC",
              },
              ".MuiInputLabel-root": {
                color: "#CCCCCC",
              },
            }}
          >
            <MenuItem value="20">20 de 40</MenuItem>
          </TextField>

          <Pagination
            count={4}
            variant="outlined"
            shape="rounded"
            sx={{
              ".MuiPaginationItem-previousNext": {
                border: "0",
              },
              ".Mui-selected.MuiPaginationItem-page, .Mui-selected.MuiPaginationItem-page:hover, .MuiPaginationItem-page:hover":
                {
                  fontSize: 16,
                  background: "#00B9B5BF",
                  color: "white",
                },
              ".MuiPaginationItem-page": {
                alignItems: "center",
                fontSize: 16,
                borderColor: "#00B9B5BF",
                color: "#00B9B5BF",
                width: 39,
                height: 42,
                borderRadius: "8px",
                padding: "16px",
              },
              ".MuiPaginationItem-icon": {
                fill: "#00B9B5BF",
              },
              fontFamily: "inherit !important",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsReport;
