import { UseFormReturn } from "react-hook-form";
import TextField from "@mui/material/TextField";

import { textFieldErrorSx, textFieldSx } from "@/utils/textFieldStyles";
import { FormType } from "../schemas/customer";

interface LegalPerson {
  form: UseFormReturn<FormType>;
}

const LegalPerson = ({ form }: LegalPerson) => {
  return (
    <div className="flex gap-[23px]">
      <TextField
        defaultValue=""
        {...form.register(`legal_person.full_name`)}
        label="Nome Completo*"
        className="w-[200px]"
        sx={
          form.formState.errors.legal_person &&
          form.formState.errors.legal_person?.full_name
            ? textFieldErrorSx
            : textFieldSx
        }
      />
      <TextField
        defaultValue=""
        {...form.register(`legal_person.document_number`)}
        label="CPF*"
        className="w-[200px]"
        sx={
          form.formState.errors.legal_person &&
          form.formState.errors.legal_person?.document_number
            ? textFieldErrorSx
            : textFieldSx
        }
      />
      <TextField
        defaultValue=""
        {...form.register(`legal_person.email`)}
        label="E-mail*"
        className="w-[200px]"
        sx={
          form.formState.errors.legal_person &&
          form.formState.errors.legal_person?.email
            ? textFieldErrorSx
            : textFieldSx
        }
      />
    </div>
  );
};

export default LegalPerson;
