const API_KEY = process.env.REACT_APP_API_KEY;

// eslint-disable-next-line no-unused-vars
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

// GENRES URL
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

// MOVIE WITH GENRES

const MOVIE_GENRES = [
  [28, "Action"],
  [12, "Adventure"],
  [16, "Animation"],
  [35, "Comedy"],
  [80, "Crime"],
  [99, "Documentary"],
  [18, "Drama"],
  [10751, "Family"],
  [14, "Fantasy"],
  [36, "History"],
  [27, "Horror"],
  [10402, "Music"],
  [9648, "Mystery"],
  [10749, "Romance"],
  [878, "Science Fiction"],
  [10770, "TV Movie"],
  [53, "Thriller"],
  [10752, "War"],
  [37, "Western"],
];

// MOVIES WITH GENRE
const MOVIE_WITH_GENRE_URL = `${BASE_URL}&with_genres=`;

// MOVIE IMAGE URL
const IMAGE_URL = `https://image.tmdb.org/t/p/original/`;

export {
  API_KEY,
  BASE_URL,
  GENRES_URL,
  MOVIE_GENRES,
  MOVIE_WITH_GENRE_URL,
  IMAGE_URL,
};
