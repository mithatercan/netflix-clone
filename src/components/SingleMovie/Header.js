import { IoMdCloseCircle } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { clearMovie } from "../../redux/slicers/movieSlicer";
import { useDispatch } from "react-redux";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = ({ parent }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const dispatch = useDispatch();

  useOutsideClick(parent, () => {
    if (movieId) close();
  });

  const close = () => {
    setSearchParams({});
    document.body.style.overflowY = "scroll";
    setTimeout(() => {
      dispatch(clearMovie());
    }, 400);
  };

  return (
    <div className='single-movie__content-top df f-ai-c f-jc-sb'>
      <img className='logo' src='logo.png' alt='logo' />
      <button className='close-button' onClick={close}>
        <IoMdCloseCircle />
      </button>
    </div>
  );
};

export default Header;
