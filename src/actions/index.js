let nextProductId = 4;

export const addProduct = (name, description, cost) => ({
  type: "ADD_PRODUCT",
  id: nextProductId++,
  name,
  description,
  cost
});

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
