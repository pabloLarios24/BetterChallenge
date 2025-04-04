import {ADD_TOAST, REMOVE_TOAST, Toast} from './types';

export const addToast = (toast: Toast) => ({
  type: ADD_TOAST,
  payload: toast,
});

export const removeToast = (id: string) => ({
  type: REMOVE_TOAST,
  payload: id,
});
