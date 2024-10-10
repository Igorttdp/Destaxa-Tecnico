import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import SubscriptionsViewModel from "../viewModel/subscriptionsViewModel";
import { SubscriptionContent } from "@/services/subscriptions";
import PlusCircleIcon from "@/assets/icons/plus-circle.svg";
import EditIcon from "@/assets/icons/edit.svg";
import XCircleIcon from "@/assets/icons/x-circle.svg";
import Image from "next/image";

interface SubscriptionTable {
  data: SubscriptionContent[];
}

export const SubscriptionTable = ({ data }: SubscriptionTable) => {
  return (
    <TableContainer component={Paper} className="!shadow-none border border-[#F8F8F8] rounded">
      <Table>
        <TableHead className="bg-[#F8F8F8]">
          <TableRow>
            <TableCell className="!text-[12px] !text-center !border-0">
              Data
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              Assinatura
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              Nome Fantasia
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              CNPJ
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              Contato
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              E-mail
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              Última transação
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              Status
            </TableCell>
            <TableCell className="!text-[12px] !text-center !border-0">
              Ação
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((subs) => {
            const viewModel = new SubscriptionsViewModel(subs);

            return (
              <TableRow key={Date.now()} className="even:bg-[#F8F8F8]">
                <TableCell className="!text-[12px] !text-center !border-0">
                  {viewModel.getSubscriptionDate()}
                </TableCell>
                <TableCell className="!text-[12px] !text-center !border-0">
                  PED09009934
                </TableCell>
                <TableCell className="!text-[12px] !text-center !border-0">
                  {subs.company_name}
                </TableCell>
                <TableCell className="!text-[12px] !text-center !border-0">
                  {viewModel.getCNPJ()}
                </TableCell>
                <TableCell className="!text-[12px] !text-center !border-0">
                  Mauro Couto
                </TableCell>
                <TableCell className="!text-[12px] !text-center !border-0">
                  mauro@cliente.com.br
                </TableCell>
                <TableCell className="!text-[12px] !text-center !border-0">
                  {viewModel.getSubscriptionDate()}
                </TableCell>
                <TableCell className="!text-[12px] !text-center !border-0">
                  {subs.subscription_status}
                </TableCell>
                <TableCell className="!flex !items-center !justify-center !gap-2 !border-0">
                  <Image
                    src={PlusCircleIcon}
                    alt="Adicionar"
                    className="cursor-pointer"
                  />
                  <Image
                    src={EditIcon}
                    alt="Editar"
                    className="cursor-pointer"
                  />
                  <Image
                    src={XCircleIcon}
                    alt="Excluir"
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
