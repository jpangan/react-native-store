import { createSlice } from '@reduxjs/toolkit';

type CartItemProps = {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
};

type CartProps = {
  items: Array<CartItemProps>;
  count: number;
};

const initialState: CartProps = {
  items: [],
  count: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
      state.count += 1;
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item.quantity >= 1) {
        item.quantity = item.quantity - 1;
      } else {
        state.items.splice(item.id, 1);
      }
    }
  },
  extraReducers: {}
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
