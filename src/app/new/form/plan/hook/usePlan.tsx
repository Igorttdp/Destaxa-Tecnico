import { useQuery } from "@tanstack/react-query";

import { Plan } from "@/services/plans/types";
import { localApi } from "@/services/api";
import { ApiResponse } from "@/types/apiResponse";
import { Automation } from "@/services/automations/types";

const usePlan = () => {
  const { data } = useQuery({
    queryKey: ["getPlans"],
    queryFn: () => localApi.get<ApiResponse<Plan>>("/plans"),
  });

  const { data: automationsData } = useQuery({
    queryKey: ["getAutomations"],
    queryFn: () => localApi.get<Automation[]>("/automations"),
  });


  return {
    data: data?.data.content || [],
    automationsData: automationsData?.data || [],
  };
};

export default usePlan;
