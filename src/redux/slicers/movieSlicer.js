import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGenres, fetchMovies, fetchMovie } from "../../api/movieApi";

// Extra reducers

export const getGenres = createAsyncThunk("movie/getGenres", async () => {
  const genres = await fetchGenres();
  return genres;
});

export const getMovies = createAsyncThunk("movie/getMovies", async () => {
  const movies = await fetchMovies();
  return movies;
});

export const getMovie = createAsyncThunk("movie/getMovie", async (id) => {
  const movie = await fetchMovie(id);

  return movie;
});

const initialState = {
  movies: [],
  genres: [],
  movie: null,
};

//creates a slice of the store
const moviSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    clearMovie: (state) => {
      state.movie = null;
    },
  },
  extraReducers: {
    [getGenres.fulfilled]: (state, action) => {
      state.genres = action.payload;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { clearMovie } = moviSlice.actions;
export default moviSlice.reducer;
