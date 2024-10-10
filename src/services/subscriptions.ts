import api from "./api";

export interface LegalPerson {
  name: string;
  document_number: string;
  email: string;
}

interface SubscriptionContent {
  is_bag: boolean;
  id: string;
  subscriber_id: string;
  subscription_number: number;
  subscription_status: string;
  subscription_start_date: string;
  plan_id: string;
  plan_name: string;
  company_name: string;
  company_document: string;
  legal_person: LegalPerson;
}

export const getSubscriptions = async () => {
  const response = await api.get<SubscriptionContent>("/subscription");
  return response.data;
};
