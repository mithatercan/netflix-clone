import React from "react";
import PlayButton from "../Billboard/PlayButton";
import { IoVolumeMuteOutline } from "react-icons/io5";

import { IMAGE_URL } from "../../api/movieConfig";
const Billboard = ({ movie }) => {
  return (
    <div className='single-movie__content--billboard'>
      <img
        className='thumbnail'
        src={IMAGE_URL + movie?.backdrop_path}
        alt=''
      />

      {movie.images?.logos[0]?.file_path && (
        <img
          className='logo'
          src={IMAGE_URL + movie.images?.logos[0]?.file_path}
          alt=''
        />
      )}

      <div className='buttons df f-jc-sb f-ai-c'>
        <PlayButton />
        <IoVolumeMuteOutline className='volume' />
      </div>
    </div>
  );
};

export default Billboard;
