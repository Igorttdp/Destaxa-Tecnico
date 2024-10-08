interface Pageable {
  sort: Sort[];
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  direction: string;
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  ascending: boolean;
  descending: boolean;
}

interface LegalPerson {
  name: string;
  document_number: string;
  email: string;
}

export interface Content {
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

interface SubscriptionsResponse {
  pageable: Pageable;
  sort: Sort[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;

  content: Content[];
}

export default SubscriptionsResponse;
