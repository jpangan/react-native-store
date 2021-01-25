import { SliceState } from './state';

export interface ListingsState extends SliceState{}

export interface Product {
  category: string;
  description: string;
  id: number
  image: string;
  price: number;
  title: string;
}