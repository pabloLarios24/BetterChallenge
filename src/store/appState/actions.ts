import {
  ADD_TOAST,
  HIDE_LOADING,
  IToast,
  REMOVE_TOAST,
  SHOW_LOADING,
} from './types';

export const addToast = (toast: IToast) => ({
  type: ADD_TOAST,
  payload: toast,
});

export const removeToast = (id: string) => ({
  type: REMOVE_TOAST,
  payload: id,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});
