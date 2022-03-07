import { IMAGE_URL } from "../../api/movieConfig";
import { ImPlay3 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import "./box.scss";
const Box = ({ movie }) => {
  return (
    <div class='box-container'>
      <div class='box-wrapper'>
        <img src={`${IMAGE_URL}${movie.backdrop_path}`} alt='poster' />
        <div class='box-buttons '>
          <div className='box-buttons-inner df f-ai-c  f-jc-sb'>
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
          <div className='box-buttons-info '>
            <div className='df f-ai-c f-jc-sb'>
              <div className='vote-average'>
                {movie.vote_average
                  ? `${Math.floor(movie.vote_average * 10)}% Match`
                  : "New"}
              </div>
              <div className='relased-date'>{movie.release_date}</div>
            </div>
            <div>
              <div className='title'>{movie.title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
