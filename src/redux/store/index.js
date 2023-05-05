import { configureStore } from "@reduxjs/toolkit";
import citiesSlice from "../slice/cities/citiesSlice";

export const store = configureStore({
  reducer: {
    cities: citiesSlice,
  },
});
