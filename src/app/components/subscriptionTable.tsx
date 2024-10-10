import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

interface SubscriptionTableProps {
  data: [];
}

export const SubscriptionTable = ({ data }: SubscriptionTableProps) => {
  return (
    <TableContainer component={Paper} className="shadow-none">
      <Table>
        <TableHead className="bg-[#F8F8F8]">
          <TableRow>
            <TableCell className="text-[12px] text-center border-0">
              Data
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              Assinatura
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              Nome Fantasia
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              CNPJ
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              Contato
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              E-mail
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              Última transação
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              Status
            </TableCell>
            <TableCell className="text-[12px] text-center border-0">
              Ação
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(() => (
            <TableRow key={Date.now()} className="even:bg-[#F8F8F8]">
              <TableCell className="text-[12px] text-center border-0">
                23/03/2023
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                PED09009934
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                Empresa Eireli Ltda
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                0099339944/0001-33
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                Mauro Couto
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                mauro@cliente.com.br
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                23/03/2023
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                Concluído
              </TableCell>
              <TableCell className="text-[12px] text-center border-0">
                Ação
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
