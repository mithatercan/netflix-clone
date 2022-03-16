import React, { useRef } from "react";
import SliderButtons from "./SliderButtons";
import Box from "../Box";
import "./slider.scss";

const Slider = ({ genre, movies }) => {
  const slider = useRef();

  return (
    <section className='slider-section-row'>
      <h3>{genre}</h3>
      <div className='slider-container'>
        <div ref={slider} className='slider-wrapper df f-ai-c'>
          {movies.map((movie, idx) => (
            <Box key={idx} movie={movie} />
          ))}
        </div>
        <SliderButtons parent={slider} />
      </div>
    </section>
  );
};

export default Slider;
