import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderButtons = ({ parent }) => {
  const [slideCount, setSlideCount] = useState(0);

  const slideRow = (direction) => {
    // view is 100vw and buttons width 4vw each
    const viewWidth = 100;
    const buttonsWidth = 8;

    if (direction === "next" && slideCount < 3) {
      setSlideCount((prev) => prev + 1);
      parent.current.style.transform = `translateX(${
        -(viewWidth - buttonsWidth) * (slideCount + 1)
      }vw)`;
    }

    if (direction === "prev" && slideCount > 0) {
      setSlideCount((prev) => prev - 1);
      parent.current.style.transform = `translateX(${
        -(viewWidth - buttonsWidth) * (slideCount + -1)
      }vw)`;
    }
  };

  return (
    <>
      <button
        className={`slider-button prev-button ${slideCount < 1 && "disabled"}`}
        onClick={() => slideRow("prev")}
      >
        <IoIosArrowBack />
      </button>
      <button
        className={`slider-button next-button ${slideCount > 2 && "disabled"}`}
        onClick={() => slideRow("next")}
      >
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default SliderButtons;
