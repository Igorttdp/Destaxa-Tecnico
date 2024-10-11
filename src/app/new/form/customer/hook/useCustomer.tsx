import { useMutation } from "@tanstack/react-query";

import useNewSubscriptionProvider from "@/app/new/context/useNewSubscriptionProvider";
import { CreateCustomerResponse } from "@/services/customer/types";
import { localApi } from "@/services/api";
import { PostApiRepost } from "@/types/apiResponse";
import { FormType as CreateCustomerData } from "../../schemas/customer";

interface UseCustomerProps {
  toggleSnackbarError: () => void;
}

const useCustomer = ({
  toggleSnackbarError,
}: UseCustomerProps) => {
  const { nextStep, setSubscriberId } = useNewSubscriptionProvider();

  const { mutateAsync: createCustomerMutate, isPending } = useMutation({
    mutationKey: ["createCustomer"],
    mutationFn: (data: CreateCustomerData) =>
      localApi.post<PostApiRepost<CreateCustomerResponse>>("/customer", data),
    onSuccess: (response) => {
      setSubscriberId(response.data.result.id);
      nextStep();
    },
    onError: () => {
      toggleSnackbarError();
    },
  });

  return { createCustomerMutate, isPending };
};

export default useCustomer;
