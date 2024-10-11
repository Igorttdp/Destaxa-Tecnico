import { localApi } from "@/services/api";
import { createSubscription } from "@/services/subscriptions";
import { useMutation } from "@tanstack/react-query";
import { NewSubscriptionData } from "../../reducer";

const useNewSubscriptionForm = () => {
  const { mutateAsync: createSubscriptionMutate } = useMutation({
    mutationKey: ["createSubscription"],
    mutationFn: (data: NewSubscriptionData) =>
      localApi.post("/subscriptions", data),
    onSuccess: () => {
      console.log("deu bom");
    },
    onError: () => {
      console.log("Deu erro");
    },
  });

  return {
    createSubscriptionMutate,
  };
};

export default useNewSubscriptionForm;
