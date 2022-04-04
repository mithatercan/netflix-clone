import React from "react";
import BoxInfo from "../Box/BoxInfo";

const Info = ({ movie }) => {
  return (
    <div className='single-movie__content--info df '>
      <div>
        <BoxInfo
          vote_average={movie.vote_average}
          release_date={movie.release_date}
        />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Info;
