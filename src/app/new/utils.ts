import { SubscriptionProducts } from "./reducer";


export const handleProductQuantitySet = (
  products: SubscriptionProducts[],
  product_id: string,
  type: 0 | 1
) => {
  return products.map((product) => {
    if (product.id === product_id) {
      const newQuantity =
        type === 1
          ? product.quantity > 0
            ? product.quantity - 1
            : product.quantity
          : product.quantity + 1;

      const newFinalPrice = product.price * newQuantity;

      return {
        ...product,
        quantity: newQuantity,
        final_price: newFinalPrice,
      };
    } else {
      return product;
    }
  });
};
