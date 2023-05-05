import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: [],
  filtered: {},
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    getCities: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;

      // state.city = city;
      // state.country = country;
    },

    getCitiesById: (state, action) => {
      if (state.data.length > 0) {
        state.filtered = state.data.find((city) => city._id === action.payload);
        state.isLoading = false;
      }
    },
  },
});

export const { getCities, getCitiesById } = citiesSlice.actions;

export default citiesSlice.reducer;
