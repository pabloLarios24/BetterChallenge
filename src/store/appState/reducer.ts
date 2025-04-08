import {
  ADD_TOAST,
  AppActionTypes,
  HIDE_LOADING,
  IAppState,
  REMOVE_TOAST,
  SHOW_LOADING,
} from './types';

const initialState: IAppState = {
  toasts: [],
  loading: false,
};

export const appStateReducer = (
  state = initialState,
  action: AppActionTypes,
): IAppState => {
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
    case SHOW_LOADING:
      return {...state, loading: true};
    case HIDE_LOADING:
      return {...state, loading: false};
    default:
      return state;
  }
};
