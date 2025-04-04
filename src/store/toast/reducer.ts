import {ADD_TOAST, REMOVE_TOAST, ToastState} from './types';

const initialState: ToastState = {
  toasts: [],
};

export const toastReducer = (state = initialState, action: any): ToastState => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload),
      };
    default:
      return state;
  }
};
