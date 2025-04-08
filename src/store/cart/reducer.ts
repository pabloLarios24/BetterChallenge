import {
  ADD_TO_CART_SUCCESS,
  CartActionTypes,
  DECREMENT_QUANTITY_SUCCESS,
  ICartState,
  INCREMENT_QUANTITY_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
} from './types';

const initialState: ICartState = {
  products: [],
};

export const cartReducer = (
  state = initialState,
  action: CartActionTypes,
): ICartState => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      console.log('ADD_TO_CART_SUCCESS', action.payload);
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}],
      };
    }

    case INCREMENT_QUANTITY_SUCCESS:
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id !== action.payload) {
            return item;
          }
          return {...item, quantity: (item.quantity ?? 0) + 1};
        }),
      };

    case DECREMENT_QUANTITY_SUCCESS:
      return {
        ...state,
        products: state.products
          .map(item => {
            if (item.id !== action.payload) {
              return item;
            }
            const newQuantity = (item.quantity ?? 0) - 1;
            return {...item, quantity: newQuantity};
          })
          .filter(item => (item.quantity ?? 0) > 0),
      };

    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};
