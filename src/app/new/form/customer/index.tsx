"use client";

import Image from "next/image";

import { useForm, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import HelpCircleIcon from "@/assets/icons/help-circle.svg";

import useNewSubscriptionProvider from "../../context/useNewSubscriptionProvider";
import FormWarning from "../../components/formWarning";
import { textFieldSx } from "@/utils/textFieldStyles";
import Contact from "./contact";
import Address from "./address";

const CustomerForm = () => {
  const { nextStep } = useNewSubscriptionProvider();

  const { control } = useForm();

  return (
    <form id="form" onSubmit={nextStep}>
      <div className="flex gap-[9.79px]">
        <Controller
          control={control}
          name="cnpj"
          render={({ field }) => (
            <TextField
              {...field}
              label="CNPJ*"
              className="w-[236.61px]"
              sx={textFieldSx}
            />
          )}
        />
        <Controller
          control={control}
          name="cnpj"
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome Fantasia"
              className="w-[430px]"
              sx={textFieldSx}
            />
          )}
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

          <Contact />

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

          <Address />
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
          <div className="flex gap-[23px]">
            <TextField
              label="Nome Completo*"
              className="w-[200px]"
              sx={textFieldSx}
            />
            <TextField label="CPF*" className="w-[200px]" sx={textFieldSx} />
            <TextField label="E-mail*" className="w-[200px]" sx={textFieldSx} />
          </div>
        </AccordionDetails>
      </Accordion>
    </form>
  );
};

export default CustomerForm;
