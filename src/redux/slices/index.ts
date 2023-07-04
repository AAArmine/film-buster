import { combineReducers } from "@reduxjs/toolkit";
import movieListReducer from "./movieListSlice";

const rootReducer = combineReducers({
  movieList: movieListReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
