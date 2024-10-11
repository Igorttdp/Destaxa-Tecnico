"use client";

import Image from "next/image";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import HelpCircleIcon from "@/assets/icons/help-circle.svg";
import { textFieldErrorSx, textFieldSx } from "@/utils/textFieldStyles";
import FormWarning from "../../components/formWarning";
import { FormType, schema } from "../schemas/customer";
import Contact from "./contact";
import Address from "./address";
import LegalPerson from "./legalPerson";
import useCustomer from "./hook/useCustomer";
import { useState } from "react";
import Loader from "@/components/loader";

export const initialContactValues = {
  contact_name: "",
  department: "",
  email: "",
  phone_code: "99",
  phone_number: "",
};

const initialAdressValues = {
  city: "",
  complement: "",
  country: "",
  neighborhood: "",
  number: "",
  postal_code: "",
  state: "",
  street: "",
};

const initialLegalPersonValues = {
  full_name: "",
  document_number: "",
  email: "",
};

const CustomerForm = () => {
  const [isSnackbarErrorOpen, setIsSnackbarErrorOpen] = useState(false);

  const toggleSnackbarError = () =>
    setIsSnackbarErrorOpen(!isSnackbarErrorOpen);

  const { createCustomerMutate, isPending } = useCustomer({
    toggleSnackbarError,
  });

  const form = useForm<FormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      contacts: [initialContactValues],
      address: initialAdressValues,
      legal_person: initialLegalPersonValues,
    },
  });

  const handleFormSubmit = async (data: FormType) => {
    await createCustomerMutate(data);
  };

  return (
    <>
      <Loader
        className={
          isPending
            ? "flex fixed top-0 left-0 bg-black/20 z-50 [&>span]:font-bold"
            : "hidden"
        }
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnackbarErrorOpen}
        onClose={toggleSnackbarError}
        autoHideDuration={6000}
      >
        <Alert
          onClose={toggleSnackbarError}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Ocorreu um erro. Tente novamente.
        </Alert>
      </Snackbar>

      <form id="form" onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="flex gap-[9.79px]">
          <TextField
            defaultValue=""
            {...form.register("document")}
            label="CNPJ*"
            className="w-[236.61px]"
            sx={form.formState.errors.document ? textFieldErrorSx : textFieldSx}
          />

          <TextField
            defaultValue=""
            {...form.register("trade_name")}
            label="Nome Fantasia"
            className="w-full"
            sx={
              form.formState.errors.trade_name ? textFieldErrorSx : textFieldSx
            }
          />
        </div>

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
            <span>Contatos e Endereço</span>

            <FormWarning className="pr-6" />
          </AccordionSummary>
          <AccordionDetails className="!rounded-b !px-4 !pt-[23px] !pb-[19px]">
            <h6 className="border-b text-[#CCCCCC] text-xs leading-[14.52px] mb-6">
              Contatos
            </h6>

            <Contact form={form} />

            <div className="bg-[#00B9B51A] flex items-center gap-[10px] rounded mt-6 p-3 border-[#00B9B5] border">
              <Image src={HelpCircleIcon} alt="Ajuda" />
              <p className="text-[#00B9B5] text-xs leading-[14.52px]">
                Qual a importância desses contatos para o andamento do fluxo
                onboarding?
              </p>
            </div>

            <h6 className="border-b text-[#CCCCCC] text-xs leading-[14.52px] mt-6 mb-8">
              Endereço
            </h6>

            <Address form={form} />
          </AccordionDetails>
        </Accordion>

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
            <span>Representante Legal</span>
            <FormWarning className="pr-6" />
          </AccordionSummary>
          <AccordionDetails className="!rounded-b !px-4 !pb-[37px] !pt-8">
            <LegalPerson form={form} />
          </AccordionDetails>
        </Accordion>
      </form>
    </>
  );
};

export default CustomerForm;
