let defaultProducts = [
  {
    "id": 0,
    "name": "Apple(s)",
    "price": 0.98,
    "inventory": 3,
    "discount": {
      "description": "Buy One Get One Free",
      "minimum": 2,
      "price": 0.98
    }
  },
  {
    "id": 1,
    "name": "Orange",
    "price": 1.45,
    "inventory": 3,
    "discount": {
      "description": "on sale $1.00",
      "minimum": 1,      
      "price": 1
    }
  },
  {
    "id": 2,
    "name": "Banana",
    "price": 1.15,
    "inventory": 3,
    "discount": {
      "description": "Buy 3 for $2.00",
      "minimum": 3,      
      "price": 2
    }
  }
];

export default defaultProducts;