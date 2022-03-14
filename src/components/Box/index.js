import { useNavigate } from "react-router-dom";
import BoxButtons from "./BoxButtons";
import BoxInfo from "./BoxInfo";
import Thumbnail from "./Thumbnail";
import "./box.scss";

const Box = ({ movie }) => {
  const navigate = useNavigate();
  // get id query

  const handleClick = () => {
    navigate("/browse?id=" + movie.id);
  };

  return (
    <div onClick={handleClick} class='box-container'>
      <div class='box-wrapper'>
        <Thumbnail source={movie.backdrop_path} />
        <div class='box-inner'>
          <BoxButtons />
          <BoxInfo
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        </div>
      </div>
    </div>
  );
};

export default Box;
