import React from "react";

const BoxInfo = ({ vote_average, release_date, title }) => {
  return (
    <div className='box-inner-info '>
      <div className='df f-ai-c f-jc-sb'>
        <div className='vote-average'>
          {vote_average ? `${Math.floor(vote_average * 10)}% Match` : "New"}
        </div>
        <div className='relased-date'>{release_date}</div>
      </div>
      <div>
        <div className='title'>{title}</div>
      </div>
    </div>
  );
};

export default BoxInfo;
