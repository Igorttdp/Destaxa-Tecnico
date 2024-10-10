import { ApiResponse } from "@/types/apiResponse";
import api from "./api";

export interface Automation {
  id: string;
  app_name: string;
}

export const getAutomations = async () => {
  const response = await api.get<ApiResponse<Automation>>("/automations");
  return response.data;
};
