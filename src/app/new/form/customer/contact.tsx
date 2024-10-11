import Image from "next/image";

import { useFieldArray, UseFormReturn } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import PlusSquareIcon from "@/assets/icons/plus-square.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { textFieldErrorSx, textFieldSx } from "@/utils/textFieldStyles";
import { FormType } from "../schemas/customer";
import { initialContactValues } from ".";

interface ContactProps {
  form: UseFormReturn<FormType>;
}

const Contact = ({ form }: ContactProps) => {
  const { fields, append, remove } = useFieldArray({
    name: "contacts",
    control: form.control,
    rules: {
      minLength: 1,
    },
  });

  return (
    <>
      <ul className="flex flex-col gap-6">
        {fields.map((field, index) => (
          <li key={field.id} className="flex gap-2">
            <TextField
              defaultValue=""
              {...form.register(`contacts.${index}.department`)}
              label="Cliente"
              className="w-[139px]"
              sx={
                form.formState.errors.contacts &&
                form.formState.errors.contacts[index]?.department
                  ? textFieldErrorSx
                  : textFieldSx
              }
              select
            >
              <MenuItem value="RESPONSAVEL">Responsável</MenuItem>
              <MenuItem value="COMERCIAL">Comercial</MenuItem>
              <MenuItem value="FINANCEIRO">Financeiro</MenuItem>
              <MenuItem value="SUPORTE">Suporte</MenuItem>
            </TextField>
            <TextField
              defaultValue=""
              {...form.register(`contacts.${index}.contact_name`)}
              label="Nome do contato"
              className="w-[143px]"
              sx={
                form.formState.errors.contacts &&
                form.formState.errors.contacts[index]?.department
                  ? textFieldErrorSx
                  : textFieldSx
              }
            />
            <TextField
              defaultValue=""
              {...form.register(`contacts.${index}.phone_number`)}
              label="Telefone"
              className="w-[146px]"
              sx={
                form.formState.errors.contacts &&
                form.formState.errors.contacts[index]?.phone_number
                  ? textFieldErrorSx
                  : textFieldSx
              }
            />
            <TextField
              defaultValue=""
              {...form.register(`contacts.${index}.email`)}
              label="E-mail"
              className="w-[196px]"
              sx={
                form.formState.errors.contacts &&
                form.formState.errors.contacts[index]?.email
                  ? textFieldErrorSx
                  : textFieldSx
              }
            />
            <button
              type="button"
              className="disabled:opacity-50 transition-opacity"
              disabled={fields.length === 1}
              onClick={() => remove(index)}
            >
              <Image
                src={TrashIcon}
                alt="Excluir item"
                width={24}
                height={24}
              />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-[24.5px] text-[#00B9B5] border border-[#00B9B5] rounded px-[19px] py-[8.5px] flex gap-[10px]"
        onClick={() => append(initialContactValues)}
      >
        <span className="font-bold leading-[22.4px]">
          Adicionar novo contato
        </span>
        <Image src={PlusSquareIcon} alt="Adicionar" />
      </button>
    </>
  );
};

export default Contact;
