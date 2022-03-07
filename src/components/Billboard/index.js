import React from "react";
import { ImPlay3 } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./billboard.scss";

const Billboard = () => {
  return (
    <div className='billboard'>
      <img
        src='https://occ-0-4609-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTqoOs1JWzL_FGHKxzpLTeFJbj-Tae14BGPzWXh0p13w73EMXo8hTf3AduGMB7xtVp9GaTslXRm7DkXdlZ134Ftqnl_Z.webp?r=2d3'
        alt='billboard'
        className='billboard-hero-image'
      />
      <div className='billboard-content df f-ai-c'>
        <div className='billboard-content-wrapper'>
          <img
            src='https://occ-0-4609-2774.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcgq5tyQQ-MYQF_ZGuJR7EptZ6dE3zHP2rl4CWPc3_7Z6kRPHDaicpEJ5dLjxmrEXhOOofYWPUKtT3ouE4f-KLNMiMvZDmKpxSGL9_8VWNxxWwNCHNenZEzT8QRfZKOrLAhGzTFO-M4FKFdIqG2C40AlWtsCYGaesPWCIJxB34td.webp?r=d45'
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
