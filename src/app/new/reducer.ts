// import { LegalPerson } from "@/services/subscriptions";

import { Product } from "@/services/plans/types";
import { handleProductQuantitySet } from "./utils";

// interface SubscriptionData {
//   cnpj: string | null;
//   name: string | null;
//   contact: {
//     customer: string;
//     name: string;
//     cellphone: string;
//     email: string;
//   } | null;
//   address: {
//     cep: string;
//     street: string;
//     number: string;
//     complement: string;
//     neighborhood: string;
//     country: string;
//     state: string;
//     city: string;
//   } | null;
//   legalPerson: LegalPerson | null;
// }

export interface SubscriptionProducts extends Product {
  price: number;
  quantity: number;
}

export interface NewSubscriptionData {
  subscriber_id: string;
  automation_id: string;
  plan_id: string;
  start_date: string;
  billing_day: number;
  grace_days: number;
  min_permanence_days: number;
  products: Array<SubscriptionProducts>;
}

interface PayloadProps {
  subscriber_id: string;
  automation_id: string;
  plan_id: string;
  product_id: string;
  products: Array<SubscriptionProducts>;
}

export enum SubscriptionActionKind {
  NEXT_STEP,
  PREVIOUS_STEP,
  SET_CUSTOMER_ID,
  SET_PLAN,
  SET_PRODUCTS,
  SET_AUTOMATION,
  ADD_PRODUCT_QUANTITY,
  SUBTRACT_PRODUCT_QUANTITY,
}

export interface SubscriptionAction {
  type: SubscriptionActionKind;
  payload?: Partial<PayloadProps>;
}

export interface SubscriptionState {
  data: NewSubscriptionData;
  step: number;
}

export const subscriptionReducer = (
  state: SubscriptionState,
  action: SubscriptionAction
) => {
  const { type, payload } = action;

  switch (type) {
    case SubscriptionActionKind.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case SubscriptionActionKind.PREVIOUS_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    case SubscriptionActionKind.SET_CUSTOMER_ID:
      return {
        ...state,
        data: {
          ...state.data,
          subscriber_id: payload!.subscriber_id ?? ""
        }
      }
    case SubscriptionActionKind.SET_PLAN:
      return {
        ...state,
        data: {
          ...state.data,
          plan_id: payload!.plan_id ?? "",
        },
      };
    case SubscriptionActionKind.SET_AUTOMATION:
      return {
        ...state,
        data: {
          ...state.data,
          automation_id: payload!.automation_id ?? "",
        },
      };
    case SubscriptionActionKind.SET_PRODUCTS:
      return {
        ...state,
        data: {
          ...state.data,
          products: payload!.products ?? [],
        },
      };
    case SubscriptionActionKind.ADD_PRODUCT_QUANTITY:
      return {
        ...state,
        data: {
          ...state.data,
          products: handleProductQuantitySet(
            state.data.products,
            payload?.product_id || "",
            0
          ),
        },
      };
    case SubscriptionActionKind.SUBTRACT_PRODUCT_QUANTITY:
      return {
        ...state,
        data: {
          ...state.data,
          products: handleProductQuantitySet(
            state.data.products,
            payload?.product_id || "",
            1
          ),
        },
      };
    default:
      return state;
  }
};
