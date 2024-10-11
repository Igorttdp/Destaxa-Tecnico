export interface LegalPerson {
  full_name: string;
  document_number: string;
  email: string;
}

export interface SubscriptionContent {
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
}

export interface PostProductResponse {
  id: string;
  status: string;
  description: string;
  name: string;
  price_period: string;
}

export interface PostSubscriptionResponse {
  id: string;
  billing_day: number;
  end_date: string;
  start_date: string;
  income: {};
  number: number;
  status: string;
}

export interface CreateSubscriptionResponse {
  subscription: PostSubscriptionResponse;
  products: PostProductResponse[];
}
