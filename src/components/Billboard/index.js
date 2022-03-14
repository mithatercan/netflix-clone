import React from "react";
import { ImPlay3 } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./billboard.scss";

const Billboard = () => {
  return (
    <div className='billboard'>
      <img
        src='billboard-hero.png'
        alt='billboard'
        className='billboard-hero-image'
      />
      <div className='billboard-content df f-ai-c'>
        <div className='billboard-content-wrapper'>
          <img
            src='billboard-thumbnail.png'
            alt='thumbnail'
            className='billboard-content-thumbnail'
          />
          <p className='billboard-content-text'>
            A notorious gang in 1919 Birmingham, England, is led by the fierce
            Tommy Shelby, a crime boss set on moving up in the world no matter
            the cost.
          </p>
          <div className='billboard-content-buttons df f-ai-c'>
            <button className='play-button df f-ai-c'>
              <ImPlay3 />
              Play
            </button>
            <button className='info-button df f-ai-c'>
              <AiOutlineInfoCircle />
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
