import {AxiosInstance} from 'axios';

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        const status = error.response.status;

        switch (status) {
          case 401:
            console.warn('No autorizado, redirige a login si aplica');
            break;
          case 500:
            console.error('Error del servidor');
            break;
          default:
            console.warn('Error genérico');
        }
      } else {
        console.warn('Error de red, revisa tu conexión');
      }

      return Promise.reject(error);
    },
  );
  // Log de request
  axiosInstance.interceptors.request.use(request => {
    console.log('📤 Request:', {
      url: request.url,
      method: request.method,
      headers: request.headers,
      data: request.data,
    });
    return request;
  });
};
