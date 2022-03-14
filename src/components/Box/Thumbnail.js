import { IMAGE_URL } from "../../api/movieConfig";

const Thumbnail = ({ source }) => {
  return source ? (
    <img src={`${IMAGE_URL + source}`} alt='thumbnail' />
  ) : (
    <img src='netflix-empty-box.jpg' alt='thumbnail' />
  );
};

export default Thumbnail;
