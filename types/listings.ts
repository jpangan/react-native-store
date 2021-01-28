import { SliceState } from './state';

export interface ListingsState extends SliceState {
  page: number;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}
