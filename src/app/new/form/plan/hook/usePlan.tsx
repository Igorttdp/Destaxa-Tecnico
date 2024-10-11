import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Plan } from "@/services/plans/types";
import { localApi } from "@/services/api";
import { ApiResponse } from "@/types/apiResponse";
import { Automation } from "@/services/automations/types";
import { NewSubscriptionData } from "@/app/new/reducer";

interface UsePlanProps {
  toggleSnackbarError: () => void;
  toggleSnackbarSuccess: () => void;
}

const usePlan = ({
  toggleSnackbarError,
  toggleSnackbarSuccess,
}: UsePlanProps) => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["getPlans"],
    queryFn: () => localApi.get<ApiResponse<Plan>>("/plans"),
  });

  const { data: automationsData } = useQuery({
    queryKey: ["getAutomations"],
    queryFn: () => localApi.get<Automation[]>("/automations"),
  });

  const { mutateAsync: createSubscriptionMutate, isPending } = useMutation({
    mutationKey: ["createSubscription"],
    mutationFn: (data: NewSubscriptionData) =>
      localApi.post("/subscriptions", data),
    onSuccess: () => {
      toggleSnackbarSuccess();
      setTimeout(() => router.push("/"), 4000);
    },
    onError: () => {
      toggleSnackbarError();
    },
  });

  return {
    data: data?.data.content || [],
    automationsData: automationsData?.data || [],
    createSubscriptionMutate,
    isPending,
  };
};

export default usePlan;
