import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { textFieldSx } from "@/utils";

const Address = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <TextField label="CEP" className="w-[139px]" sx={textFieldSx} />
        <TextField label="Logradouro" className="w-[493px]" sx={textFieldSx} />
      </div>

      <div className="flex gap-[18px]">
        <div className="flex gap-[17px]">
          <TextField label="Número" className="w-[149px]" sx={textFieldSx} />
          <TextField
            label="Complemento"
            className="w-[149px]"
            sx={textFieldSx}
          />
        </div>
        <div className="flex gap-[17px]">
          <TextField label="Bairro" className="w-[149px]" sx={textFieldSx} />
          <TextField label="País" className="w-[149px]" sx={textFieldSx} />
        </div>
      </div>

      <div className="flex gap-[18px]">
        <TextField
          label="UF / Estado"
          className="w-[315px]"
          sx={textFieldSx}
          select
        >
          <MenuItem value="SP">São Paulo</MenuItem>
        </TextField>
        <TextField label="Cidade" className="w-[315px]" sx={textFieldSx} select>
          <MenuItem value="SP">São Paulo</MenuItem>
        </TextField>
      </div>
    </div>
  );
};

export default Address;
