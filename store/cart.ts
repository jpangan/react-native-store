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
  totalPrice: number;
};

const initialState: CartProps = {
  items: [],
  count: 0,
  totalPrice: 0
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

      state.totalPrice = state.items.reduce(
        (totalPrice, item) => totalPrice + item.price * item.quantity,
        0
      );
    },
    reduceQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        state.count -= 1;
        state.totalPrice = [...state.items].reduce(
          (totalPrice, item) => totalPrice + item.price * item.quantity,
          0
        );
      }
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.items.splice(index, 1);

        state.totalPrice = [...state.items].reduce(
          (totalPrice, item) => totalPrice + item.price * item.quantity,
          0
        );

        state.count = [...state.items].reduce(
          (value, item) => value + item.quantity,
          0
        );
      }
    }
  },
  extraReducers: {}
});

export const { addToCart, removeFromCart, reduceQuantity } = cartSlice.actions;

export default cartSlice.reducer;
