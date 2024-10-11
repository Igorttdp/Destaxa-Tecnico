import { LegalPerson } from "../subscriptions/types";

export interface CreateCustomerResponse {
  id: string;
  document: string;
  trade_name: string;
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    country: string;
    postal_code: string;
  }[];
  legal_person: LegalPerson;
}

export interface GetCustomerResponse {
  result: {
    id: string;
    document: string;
    name: string;
    trade_name: string;
    address: {
      street: string;
      number: string;
      complement: string;
      country: string;
      postal_code: string;
      city: {
        id: string;
        name: string;
      };
      state: {
        name: string;
        description: string;
        id: string;
      };
    };
    contact: {
      id: string;
      department: string;
      contact_name: string;
      email: string;
      phone_code: string;
      phone_number: string;
    }[];
    legal_person: LegalPerson[];
    business_activity: {
      cnae: string;
      description: string;
    }[];
  };
}
