export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error';
}

export interface ToastState {
  toasts: Toast[];
}

export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';
