import {
  ADD_TOAST,
  HIDE_LOADING,
  IAddToast,
  IHideLoading,
  IRemoveToast,
  IShowLoading,
  IToast,
  REMOVE_TOAST,
  SHOW_LOADING,
} from './types';

export const addToast = (toast: IToast): IAddToast => ({
  type: ADD_TOAST,
  payload: toast,
});

export const removeToast = (id: string): IRemoveToast => ({
  type: REMOVE_TOAST,
  payload: id,
});

export const showLoading = (): IShowLoading => ({
  type: SHOW_LOADING,
});

export const hideLoading = (): IHideLoading => ({
  type: HIDE_LOADING,
});
