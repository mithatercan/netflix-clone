import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./button.scss";
const InfoButton = () => {
  return (
    <button className='cta-button info-button df f-ai-c'>
      <AiOutlineInfoCircle />
      More info
    </button>
  );
};

export default InfoButton;
