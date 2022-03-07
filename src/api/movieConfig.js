const API_KEY = process.env.REACT_APP_API_KEY;

// MOVIE GENRES

const MOVIE_GENRES = [
  {
    code: 28,
    name: "Action",
  },
  {
    code: 12,
    name: "Adventure",
  },
  {
    code: 16,
    name: "Animation",
  },
  {
    code: 35,
    name: "Comedy",
  },
  {
    code: 80,
    name: "Crime",
  },

  {
    code: 99,
    name: "Documentary",
  },
  {
    code: 18,
    name: "Drama",
  },
  {
    code: 14,
    name: "Fantasy",
  },

  {
    code: 36,
    name: "History",
  },
  {
    code: 27,
    name: "Horror",
  },
  {
    code: 10749,
    name: "Romance",
  },
  {
    code: 878,
    name: "Science Fiction",
  },
];

// eslint-disable-next-line no-unused-vars
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

// GENRES URL
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

// MOVIES WITH GENRE
const MOVIE_WITH_GENRE_URL = `${BASE_URL}&with_genres=`;

// MOVIE IMAGE URL
const IMAGE_URL = `https://image.tmdb.org/t/p/original`;

// SEARCH URL
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;

// MOVIE
const MOVIE_URL = `https://api.themoviedb.org/3/movie/`;

export {
  API_KEY,
  BASE_URL,
  GENRES_URL,
  MOVIE_GENRES,
  MOVIE_WITH_GENRE_URL,
  MOVIE_URL,
  IMAGE_URL,
  SEARCH_URL,
};
