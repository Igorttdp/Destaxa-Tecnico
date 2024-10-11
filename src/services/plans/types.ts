export interface Product {
  id: string;
  final_price: number;
  commission: number;
  plan_product_name: string;
}

export interface Plan {
  id: string;
  plan_name: string;
  products: Product[];
}
