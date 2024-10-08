import { Content } from "@/types";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef<Content>[] = [
    {
        field: "subscription_start_date",
        headerName: "Data"
    },
    {
        field: ""
    }
]