import { useFieldArray, UseFormReturn } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { textFieldErrorSx, textFieldSx } from "@/utils/textFieldStyles";
import { FormType } from "../schemas/customer";

interface AddressProps {
  form: UseFormReturn<FormType>;
}

const Address = ({ form }: AddressProps) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <TextField
            defaultValue=""
            {...form.register(`address.postal_code`)}
            label="CEP"
            className="w-[139px]"
            sx={
              form.formState.errors.address &&
              form.formState.errors.address?.postal_code
                ? textFieldErrorSx
                : textFieldSx
            }
          />
          <TextField
            defaultValue=""
            {...form.register(`address.street`)}
            label="Logradouro"
            className="w-[493px]"
            sx={
              form.formState.errors.address &&
              form.formState.errors.address?.street
                ? textFieldErrorSx
                : textFieldSx
            }
          />
        </div>

        <div className="flex gap-[18px]">
          <div className="flex gap-[17px]">
            <TextField
              defaultValue=""
              {...form.register(`address.number`)}
              label="Número"
              className="w-[149px]"
              sx={
                form.formState.errors.address &&
                form.formState.errors.address?.number
                  ? textFieldErrorSx
                  : textFieldSx
              }
            />
            <TextField
              defaultValue=""
              {...form.register(`address.complement`)}
              label="Complemento"
              className="w-[149px]"
              sx={
                form.formState.errors.address &&
                form.formState.errors.address?.complement
                  ? textFieldErrorSx
                  : textFieldSx
              }
            />
          </div>
          <div className="flex gap-[17px]">
            <TextField
              defaultValue=""
              {...form.register(`address.neighborhood`)}
              label="Bairro"
              className="w-[149px]"
              sx={
                form.formState.errors.address &&
                form.formState.errors.address?.neighborhood
                  ? textFieldErrorSx
                  : textFieldSx
              }
            />
            <TextField
              defaultValue=""
              {...form.register(`address.country`)}
              label="País"
              className="w-[149px]"
              sx={
                form.formState.errors.address &&
                form.formState.errors.address?.country
                  ? textFieldErrorSx
                  : textFieldSx
              }
            />
          </div>
        </div>

        <div className="flex gap-[18px]">
          <TextField
            defaultValue=""
            {...form.register(`address.state`)}
            label="UF / Estado"
            className="w-[315px]"
            sx={
              form.formState.errors.address &&
              form.formState.errors.address?.state
                ? textFieldErrorSx
                : textFieldSx
            }
            select
          >
            <MenuItem value="SP">São Paulo</MenuItem>
          </TextField>
          <TextField
            defaultValue=""
            {...form.register(`address.city`)}
            label="Cidade"
            className="w-[315px]"
            sx={
              form.formState.errors.address &&
              form.formState.errors.address?.city
                ? textFieldErrorSx
                : textFieldSx
            }
            select
          >
            <MenuItem value="São Paulo">São Paulo</MenuItem>
          </TextField>
        </div>
      </div>
    </div>
  );
};

export default Address;
