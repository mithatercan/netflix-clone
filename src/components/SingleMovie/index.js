import React, { useEffect, useRef } from "react";
import { getMovie } from "../../redux/slicers/movieSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "./Header";
import Billboard from "./Billboard";
import Info from "./Content";
import "./single-movie.scss";

const SingleMovie = () => {
  const [searchParams] = useSearchParams();
  const movie = useSelector((state) => state.movie.movie);
  const movieId = searchParams.get("id");
  const movieRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      document.body.style.overflowY = "hidden";
      dispatch(getMovie(movieId));
    }
  }, [movieId, dispatch]);

  return (
    <div className={`single-movie ${movieId && "opened"}`}>
      {movie && (
        <div ref={movieRef} className='single-movie__content'>
          <Header parent={movieRef} />
          <div>
            <Billboard movie={movie} />
            <Info movie={movie} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
