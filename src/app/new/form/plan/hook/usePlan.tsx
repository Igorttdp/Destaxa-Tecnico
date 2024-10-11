import { useRouter } from "next/router";

import { useMutation, useQuery } from "@tanstack/react-query";

import { Plan } from "@/services/plans/types";
import { localApi } from "@/services/api";
import { ApiResponse } from "@/types/apiResponse";
import { Automation } from "@/services/automations/types";
import { NewSubscriptionData } from "@/app/new/reducer";

interface UsePĺanProps {
  toggleSnackbarError: () => void;
  toggleSnackbarSuccess: () => void;
}

const usePlan = ({ toggleSnackbarError }: UsePĺanProps) => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["getPlans"],
    queryFn: () => localApi.get<ApiResponse<Plan>>("/plans"),
  });

  const { data: automationsData } = useQuery({
    queryKey: ["getAutomations"],
    queryFn: () => localApi.get<Automation[]>("/automations"),
  });

  const { mutateAsync: createSubscriptionMutate } = useMutation({
    mutationKey: ["createSubscription"],
    mutationFn: (data: NewSubscriptionData) =>
      localApi.post("/subscriptions", data),
    onSuccess: () => {
      setTimeout(() => router.push("/"), 6000);
    },
    onError: () => {
      toggleSnackbarError();
    },
  });

  return {
    data: data?.data.content || [],
    automationsData: automationsData?.data || [],
    createSubscriptionMutate,
  };
};

export default usePlan;
