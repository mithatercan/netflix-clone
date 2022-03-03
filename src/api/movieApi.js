import axios from "axios";
import * as config from "./movieConfig";

const fetchMovies = () => {
  return Promise.all(
    config.MOVIE_GENRES.map((genre) =>
      axios.get(config.MOVIE_WITH_GENRE_URL + genre[0])
    )
  ).then((results) => {
    return results;
  });
};

const fetchMovie = (id) => {
  return axios
    .get(`${config.BASE_URL}&with_genres=${id}`)
    .then((result) => result.data.results);
};

const fetchGenres = () => {
  return axios.get(config.GENRES_URL).then((result) => result.data.genres);
};

export { fetchMovies, fetchMovie, fetchGenres };
