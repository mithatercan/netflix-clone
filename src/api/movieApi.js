import axios from "axios";
import {
  MOVIE_GENRES,
  GENRES_URL,
  MOVIE_WITH_GENRE_URL,
  MOVIE_URL,
  API_QUERY,
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

const fetchMovie = async (id) => {
  const response = await axios.get(`${MOVIE_URL + id + API_QUERY}`);
  console.log(response.data);
  return response.data;
};

const fetchGenres = async () => {
  const reponse = await axios.get(GENRES_URL);
  return reponse.data.genres;
};

export { fetchMovies, fetchMovie, fetchGenres };
