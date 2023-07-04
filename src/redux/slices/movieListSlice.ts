import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateValue = any;
const initialState: initialStateValue = [];

export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    movieList: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
});

export const { movieList } = movieListSlice.actions;

export default movieListSlice.reducer;
