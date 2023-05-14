import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
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
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    getCitiesById: (state, action) => {
      if (state.data.length > 0) {
        state.filtered = state.data.find((city) => city._id === action.payload);
        state.isLoading = false;
      }
    },
  },
});

export const { getCities, getCitiesById, setLoading } = citiesSlice.actions;

export default citiesSlice.reducer;
