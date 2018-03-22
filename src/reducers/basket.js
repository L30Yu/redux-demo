const Basket = (state = {order: []}, action) => {
  let order = [...state.order];
  let product = order.find(product => product.id === action.productId)
  if(product == null){
    product = {id: action.productId, count: 0};    
    order[order.length] = product;
  }
  switch (action.type) {
    case "ADD_PRODUCT_TO_BASKET":      
      product.count += action.count;
      return {
        ...state,
        order : order.filter(x => x.count > 0)
      };
    case "REMOVE_PRODUCT_FROM_BASKET":
      product.count -= action.count;
      return {
        ...state,
        order : order.filter(x => x.count > 0)
      };
    default:
      return state;
  }
};

export default Basket;
