"use client";

import { createContext, ReactNode, useCallback, useReducer } from "react";
import {
  SubscriptionActionKind,
  subscriptionReducer,
  SubscriptionState,
} from "../reducer";
import CustomerForm from "../form/customer";
import Plan from "../form/plan";

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps {
  state: SubscriptionState;
  renderForm: () => JSX.Element | undefined;
  nextStep: () => void;
  previousStep: () => void;
}

export const NewSubscriptionContext = createContext({} as ContextProps);

const NewSubscriptionProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(subscriptionReducer, {
    data: {
      name: null,
      address: null,
      cnpj: null,
      contact: null,
      legalPerson: null,
    },
    step: 0,
  });

  const renderForm = useCallback(() => {
    switch (state.step) {
      case 0:
        return <CustomerForm />;
      case 1:
        return <Plan />;
    }
  }, [state.step]);

  const nextStep = useCallback(() => {
    dispatch({ type: SubscriptionActionKind.NEXT_STEP });
  }, []);

  const previousStep = useCallback(() => {
    dispatch({ type: SubscriptionActionKind.PREVIOUS_STEP });
  }, []);

  return (
    <NewSubscriptionContext.Provider
      value={{ state, renderForm, nextStep, previousStep }}
    >
      {children}
    </NewSubscriptionContext.Provider>
  );
};

export default NewSubscriptionProvider;
