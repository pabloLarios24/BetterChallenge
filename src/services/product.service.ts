import axios from '@/api/axios.ts';
import {IProduct} from '@/types';

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await axios.get('/products');
  return res.data;
};
