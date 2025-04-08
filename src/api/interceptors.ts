import {AxiosInstance} from 'axios';
import {store} from '@/store';
import {ADD_TOAST} from '@/store/appState/types.ts';
import {TEXTS} from '@/constants';

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        const status = error.response.status;
        let message = TEXTS.messages.generalError;
        switch (status) {
          case 401:
            message = TEXTS.messages.unauthorized;
            break;
          case 404:
            message = TEXTS.messages.notFound;
            break;
          case 500:
            message = TEXTS.messages.serverError;
            break;
        }
        store.dispatch({
          type: ADD_TOAST,
          payload: {
            id: Date.now().toString(),
            type: 'error',
            message,
          },
        });
      } else {
        store.dispatch({
          type: ADD_TOAST,
          payload: {
            id: Date.now().toString(),
            type: 'error',
            message: TEXTS.messages.connectionError,
          },
        });
      }

      return Promise.reject(error);
    },
  );
  axiosInstance.interceptors.request.use(request => {
    // console.log('📤 Request:', {
    //   url: request.url,
    //   method: request.method,
    //   headers: request.headers,
    //   data: request.data,
    // });
    return request;
  });
};
