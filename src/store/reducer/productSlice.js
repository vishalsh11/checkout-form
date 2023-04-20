import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Iphone 14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/03/02/24/iphone-12-pro-5883473_1280.jpg",
      price: 499.65,
      quantity: 1,
    },
    {
      id: 2,
      name: "Tablet",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.pixabay.com/photo/2014/11/12/15/48/ebook-528463_1280.jpg",
      price: 299.33,
      quantity: 1,
    },
    {
      id: 3,
      name: "Macbook Pro",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cdn.pixabay.com/photo/2015/11/09/14/43/laptop-1035345_1280.jpg",
      price: 899.45,
      quantity: 1,
    },
  ],
  total: 1698.43,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.total -= item.price;
      }
    },
  },
});

export const { addItem, removeItem } = productSlice.actions;
export default productSlice.reducer;
