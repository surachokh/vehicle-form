import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    STORE_CUSTOMERS: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { STORE_CUSTOMERS } = customerSlice.actions;

export default customerSlice.reducer;
