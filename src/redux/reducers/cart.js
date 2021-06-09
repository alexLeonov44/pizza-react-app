const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      let newState = { ...state };
      newState.items = [...state.items, action.payload];
      //если пицца не уникальная добавить к счетчику +1
      for (let i = 0; i < newState.items.length; i++) {
        for (let j = i; j < newState.items.length; j++) {
          if (
            newState.items[i].name === newState.items[j].name &&
            newState.items[i].types === newState.items[j].types &&
            i !== j
          ) {
            newState.items[i].totalCount++;
          }
        }
      }
      //  удалить не уникальные эелементы
      newState.items = newState.items.filter(
        (pizza, index, self) =>
          index === self.findIndex((t) => t.types === pizza.types && t.name === pizza.name),
      );
      
      //set total count
      newState.totalCount = newState.items.reduce(function(sum, pizza) {
        return sum + pizza.totalCount;
      }, 0);
      return newState;
    case 'REMOVE_CART_ITEM': {
    }

    default:
      return state;
  }
};

export default cart;
