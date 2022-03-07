import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slicers/movieSlicer";
import userReducer from "./slicers/userSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});

export default store;
