import { Content } from "@/types";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef<Content>[] = [
  {
    field: "subscription_start_date",
    headerName: "Data",
    width: 90,
    maxWidth: 90,
    align: "center",
  },
  {
    field: "subscription",
    headerName: "Assinatura",
    renderCell: () => <span>PED09009934</span>,
    width: 120,
    maxWidth: 120,
  },
  {
    field: "company_name",
    headerName: "Nome Fantasia",
    width: 160,
    maxWidth: 160,
  },
  {
    field: "legal_person_document_number",
    headerName: "CNPJ",
    valueGetter: (_, row) => row.legal_person.document_number,
    width: 180,
    maxWidth: 180,
  },
  {
    field: "legal_person_name",
    headerName: "Contato",
    valueGetter: (_, row) => row.legal_person.name,
    width: 100,
    maxWidth: 100,
  },
  {
    field: "legal_person_email",
    headerName: "E-mail",
    valueGetter: (_, row) => row.legal_person.email,
    width: 180,
    maxWidth: 180,
  },
  {
    field: "last_subscription",
    headerName: "Última transação",
    valueGetter: (_, row) => row.subscription_start_date,
    width: 120,
    maxWidth: 120,
  },
  {
    field: "subscription_status",
    headerName: "Status",
    width: 90,
    maxWidth: 90,
  },
  {
    field: "action",
    headerName: "Ação",
    renderCell: () => (
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    ),
  },
];
