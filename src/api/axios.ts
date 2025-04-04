import axios from 'axios';
import Config from 'react-native-config';
import {setupInterceptors} from './interceptors';

const instance = axios.create({
  baseURL: Config.URL_BASE ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

setupInterceptors(instance);

export default instance;
