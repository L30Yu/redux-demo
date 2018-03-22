export const addProductToBasket = (productId, count) => ({
  type: "ADD_PRODUCT_TO_BASKET",
  productId,
  count
});

export const removeProductFromBasket = (productId, count) => ({
  type: "REMOVE_PRODUCT_FROM_BASKET",
  productId,
  count
});
