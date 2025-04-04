import {AxiosInstance} from 'axios';
import {store} from '@/store';
import {ADD_TOAST} from '@/store/toast/types.ts';

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        const status = error.response.status;
        let message = 'Error inesperado';
        switch (status) {
          case 401:
            message = 'No autorizado. Por favor inicia sesión';
            break;
          case 500:
            message = 'Error del servidor. Intenta más tarde';
            break;
          default:
            message = 'Algo salió mal, intenta nuevamente';
        }
        store.dispatch({
          type: ADD_TOAST,
          payload: {
            id: Date.now(),
            type: 'error',
            message,
          },
        });
      } else {
        store.dispatch({
          type: ADD_TOAST,
          payload: {
            id: Date.now(),
            type: 'error',
            message: 'Error de red. Verifica tu conexión',
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
