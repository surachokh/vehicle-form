import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  specificVehicle: null,
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    STORE_VEHICLES: (state, action) => {
      state.value = action.payload;
    },
    STORE_VEHICLE: (state, action) => {
      state.specificVehicle = action.payload;
    },
  },
});

export const { STORE_VEHICLES, STORE_VEHICLE } = vehicleSlice.actions;

export default vehicleSlice.reducer;
