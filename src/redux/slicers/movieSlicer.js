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
  movie: {},
};

//creates a slice of the store
const moviSlice = createSlice({
  name: "movie",
  initialState: initialState,
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

export default moviSlice.reducer;
