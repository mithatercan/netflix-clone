import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/slicers/movieSlicer";
import { v4 as uuid } from "uuid";
import SingleMovie from "../../components/SingleMovie";
import Slider from "../../components/Slider";
import Billboard from "../../components/Billboard";
import "./home.scss";

const HomeView = () => {
  // redux
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      <Billboard />
      {movies &&
        movies.map((movie) => (
          <Slider key={uuid()} genre={movie.genre} movies={movie.movies} />
        ))}

      <SingleMovie />
    </div>
  );
};

export default HomeView;
