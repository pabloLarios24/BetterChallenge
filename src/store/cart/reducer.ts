import {
  ADD_TO_CART,
  CartActionTypes,
  CartState,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from './types';

const initialState: CartState = {
  products: [],
};

export const cartReducer = (
  state = initialState,
  action: CartActionTypes,
): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}],
      };
    }

    case INCREMENT_QUANTITY:
      return {
        ...state,
        products: state.products.map(item =>
          item.id === action.payload.productId
            ? {...item, quantity: (item.quantity ?? 0) + 1}
            : item,
        ),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map(item =>
            item.id === action.payload.productId
              ? {...item, quantity: (item.quantity ?? 0) - 1}
              : item,
          )
          .filter(item => (item.quantity ?? 0) > 0),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          item => item.id !== action.payload.productId,
        ),
      };

    default:
      return state;
  }
};
