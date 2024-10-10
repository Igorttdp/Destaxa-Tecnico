import { LegalPerson } from "@/services/subscriptions";

interface SubscriptionData {
  cnpj: string | null;
  name: string | null;
  contact: {
    customer: string;
    name: string;
    cellphone: string;
    email: string;
  } | null;
  address: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    country: string;
    state: string;
    city: string;
  } | null;
  legalPerson: LegalPerson | null;
}

export enum SubscriptionActionKind {
  NEXT_STEP,
  PREVIOUS_STEP,
}

export interface SubscriptionAction {
  type: SubscriptionActionKind;
  payload?: Partial<SubscriptionState>;
}

export interface SubscriptionState {
  data: SubscriptionData;
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
    default:
      return state;
  }
};
