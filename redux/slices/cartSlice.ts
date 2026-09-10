import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const calculateTotals = (items: CartItem[]) => {
  return items.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity;
      acc.totalAmount += item.price * item.quantity;
      return acc;
    },
    {totalQuantity: 0, totalAmount: 0},
  );
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<CartItem, 'quantity'> & {quantity?: number}>,
    ) => {
      const newItem = action.payload;
      const quantityToAdd = newItem.quantity || 1;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: quantityToAdd,
        });
      } else {
        existingItem.quantity += quantityToAdd;
      }

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{id: string; quantity: number}>,
    ) => {
      const {id, quantity} = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {addToCart, removeFromCart, updateQuantity, clearCart} =
  cartSlice.actions;

export default cartSlice.reducer;
