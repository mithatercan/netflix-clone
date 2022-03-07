import axios from "axios";
import {
  MOVIE_GENRES,
  BASE_URL,
  GENRES_URL,
  MOVIE_WITH_GENRE_URL,
} from "./movieConfig";

const fetchMovies = async () => {
  const data = await Promise.all(
    MOVIE_GENRES.map(async (genre) => {
      const response = await axios.get(MOVIE_WITH_GENRE_URL + genre.code);
      return {
        genre: genre.name,
        movies: response.data.results,
      };
    })
  );
  return data;
};

const fetchMovie = (id) => {
  return axios
    .get(`${BASE_URL}&with_genres=${id}`)
    .then((result) => result.data.results);
};

const fetchGenres = () => {
  return axios.get(GENRES_URL).then((result) => result.data.genres);
};

export { fetchMovies, fetchMovie, fetchGenres };
