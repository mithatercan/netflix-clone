import React from "react";
import { useSearchParams } from "react-router-dom";
import "./single-movie.scss";

const SingleMovie = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");

  return (
    <div className={`single-movie ${movieId && "opened"}`}>
      <div className='single-movie__content'>{movieId}</div>
    </div>
  );
};

export default SingleMovie;
