export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export interface IAddToast {
  type: typeof ADD_TOAST;
  payload: IToast;
}

export interface IRemoveToast {
  type: typeof REMOVE_TOAST;
  payload: string;
}

export interface IShowLoading {
  type: typeof SHOW_LOADING;
}

export interface IHideLoading {
  type: typeof HIDE_LOADING;
}

export type AppActionTypes =
  | IAddToast
  | IRemoveToast
  | IShowLoading
  | IHideLoading;

export interface IToast {
  id: string;
  message: string;
  type: 'success' | 'error';
}

export interface IAppState {
  toasts: IToast[];
  loading: boolean;
}
