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

export type ApiResponse<T> = {
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
  content: T[];
};

export type PostApiRepost<T> = {
  result: T;
};
