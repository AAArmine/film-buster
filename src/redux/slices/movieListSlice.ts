import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieListState {
  data: Movie[];
}

const initialState: MovieListState = {
  data: [],
};

const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    setMovieList: (state, action: PayloadAction<Movie[]>) => {
      state.data = action.payload; 
    },
  },
});

export const { setMovieList } = movieListSlice.actions;

export default movieListSlice.reducer;
