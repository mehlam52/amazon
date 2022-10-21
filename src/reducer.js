export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not on basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
      break;

    default:
      break;
  }
};

export default reducer;
