"use client";

import { createContext, ReactNode, useCallback, useReducer } from "react";
import {
  SubscriptionActionKind,
  SubscriptionProducts,
  subscriptionReducer,
  SubscriptionState,
} from "../reducer";
import CustomerForm from "../form/customer";
import Plan from "../form/plan";
import { Product } from "@/services/plans/types";

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps {
  state: SubscriptionState;
  renderForm: () => JSX.Element | undefined;
  nextStep: () => void;
  previousStep: () => void;
  setPlanId: (plan_id: string) => void;
  setAutomationId: (automation_id: string) => void;
  setProducts: (api_products: Product[]) => void;
  addProductQuantity: (product_id: string) => void;
  subtractProductQuantity: (product_id: string) => void;
}

export const NewSubscriptionContext = createContext({} as ContextProps);

const NewSubscriptionProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(subscriptionReducer, {
    data: {
      subscriber_id: "",
      automation_id: "",
      plan_id: "",
      start_date: "2024-01-01",
      billing_day: 15,
      grace_days: 10,
      min_permanence_days: 15,
      products: [] as SubscriptionProducts[],
    },
    step: 0,
  } as SubscriptionState);

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

  const setPlanId = useCallback((plan_id: string) => {
    dispatch({
      type: SubscriptionActionKind.SET_PLAN,
      payload: { plan_id },
    });
  }, []);

  const setAutomationId = useCallback((automation_id: string) => {
    dispatch({
      type: SubscriptionActionKind.SET_AUTOMATION,
      payload: { automation_id },
    });
  }, []);

  const setProducts = useCallback((api_products: Product[]) => {
    const products = api_products.map((product) => ({
      ...product,
      price: product.final_price,
      quantity: 1,
    }));

    dispatch({
      type: SubscriptionActionKind.SET_PRODUCTS,
      payload: {
        products,
      },
    });
  }, []);

  const addProductQuantity = useCallback((product_id: string) => {
    dispatch({
      type: SubscriptionActionKind.ADD_PRODUCT_QUANTITY,
      payload: { product_id },
    });
  }, []);

  const subtractProductQuantity = useCallback((product_id: string) => {
    dispatch({
      type: SubscriptionActionKind.SUBTRACT_PRODUCT_QUANTITY,
      payload: { product_id },
    });
  }, []);

  return (
    <NewSubscriptionContext.Provider
      value={{
        state,
        renderForm,
        nextStep,
        previousStep,
        setPlanId,
        setAutomationId,
        setProducts,
        addProductQuantity,
        subtractProductQuantity,
      }}
    >
      {children}
    </NewSubscriptionContext.Provider>
  );
};

export default NewSubscriptionProvider;
