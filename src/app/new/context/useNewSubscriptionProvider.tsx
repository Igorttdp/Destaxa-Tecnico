import { useContext } from "react";
import { NewSubscriptionContext } from ".";

const useNewSubscriptionProvider = () => {
  const context = useContext(NewSubscriptionContext);

  if (!context) {
    throw new Error(
      "'useNewSubscriptionProvider' deve conter 'NewSubscriptionContext'"
    );
  }

  return context;
};

export default useNewSubscriptionProvider;
