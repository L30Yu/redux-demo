const defaultProducts = [
  {
    id: 0,
    name: "Apple(s)",
    cost: 0.98,
    inventory: 3
  },
  {
    id: 1,
    name: "Orange",
    cost: 1.45,
    inventory: 3
  },
  {
    id: 2,
    name: "Banana",
    cost: 1.15,
    inventory: 3
  }
];

const products = (state = defaultProducts, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          cost: action.cost,
          description: action.description
        }
      ];
    default:
      return state;
  }
};

export default products;
