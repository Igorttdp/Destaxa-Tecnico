import { ApiResponse } from "@/types/apiResponse";
import api from "../api";
import { Automation } from "./types";

export const getAutomations = async () => {
  const response = await api.get<ApiResponse<Automation>>("/automations");
  return response.data;
};
