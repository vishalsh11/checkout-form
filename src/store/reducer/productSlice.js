import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Iphone 14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.pexels.com/photos/9837428/pexels-photo-9837428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 499.65,
      quantity: 0,
    },
    {
      id: 2,
      name: "Tablet",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.pexels.com/photos/5017187/pexels-photo-5017187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 299.33,
      quantity: 0,
    },
    {
      id: 3,
      name: "Macbook Pro",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 899.45,
      quantity: 0,
    },
    {
      id: 4,
      name: "Nikon DSLR Camera",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 499.65,
      quantity: 0,
    },
    {
      id: 5,
      name: "Lipstick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 499.65,
      quantity: 0,
    },
    {
      id: 6,
      name: "Coach Perfume",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 499.65,
      quantity: 0,
    },
  ],
  total: 0,
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
    resetStore: () => initialState,
  },
});

export const { addItem, removeItem, resetStore } = productSlice.actions;
export default productSlice.reducer;
