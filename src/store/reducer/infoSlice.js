import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipping: {},
  billing: {},
  payment: {},
};

const infoSlice = createSlice({
  name: "orderinfo",
  initialState,
  reducers: {
    saveOrderInformation: (state, action) => {
      state.shipping = action.payload.shipping;
      state.billing = action.payload.billing;
      state.payment = action.payload.payment;
    },
  },
});

export const { saveOrderInformation } = infoSlice.actions;
export default infoSlice.reducer;
