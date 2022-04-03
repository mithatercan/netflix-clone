import React from "react";
import { ImPlay3 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import "./box-buttons.scss";
const BoxButtons = () => {
  return (
    <div className='box-inner-buttons df f-ai-c  f-jc-sb'>
      <div className='left-side df f-ai-c'>
        <ImPlay3 />
        <AiOutlinePlus />
        <BiLike />
        <BiDislike />
      </div>
      <div className='right-side'>
        <FiChevronDown />
      </div>
    </div>
  );
};

export default BoxButtons;
