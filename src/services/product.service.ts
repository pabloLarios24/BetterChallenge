import axios from '@/api/axios.ts';
import {Product} from '@/types';

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get('/products');
  return res.data;
};
