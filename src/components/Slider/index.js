import "./slider.scss";
import Box from "../Box";

const Slider = ({ genre, movies }) => {
  return (
    <section className='slider-section-row'>
      <h3>{genre}</h3>
      <div className='slider-container'>
        <div className='slider-wrapper df f-ai-c'>
          {movies.map((movie, idx) => (
            <Box key={idx} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
