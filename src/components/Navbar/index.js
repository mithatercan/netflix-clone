import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoNotifications, IoSearchSharp } from "react-icons/io5";
import useOutsideClick from "../../hooks/useOutsideClick";
import "./navbar.scss";

const Navbar = () => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const inputContainer = useRef(null);
  const searchInput = useRef(null);

  useOutsideClick(inputContainer, () => {
    setIsSearchOpened(false);
  });

  const openSearch = () => {
    setIsSearchOpened(true);
    searchInput.current.focus();
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "scrolled"}`}>
      <nav className='df f-ai-c f-jc-sb'>
        <div className='navbar-left-side df f-ai-c'>
          <div className='burger-menu'>
            <AiOutlineMenu />
          </div>
          <div className='logo'>
            <a href='/'>
              <img src='logo.png' alt='' />
            </a>
          </div>
          <ul className='navbar-links df f-ai-c'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className='navbar-right-side df f-ai-c'>
          <div className='mobile-view-icons'>
            <input type='search' name='search' placeholder='Search' />
          </div>
          <div className='desktop-view-icons df f-ai-c'>
            <div
              ref={inputContainer}
              className={`search icon df f-ai-c ${isSearchOpened && "opened"}`}
            >
              <IoSearchSharp onClick={openSearch} />
              <input
                ref={searchInput}
                type='text'
                name='search'
                placeholder='Titles,people,genres'
              />
            </div>
            <div className='notification icon'>
              <IoNotifications />
            </div>
            <div className='avatar icon'>
              <img src='avatar.jpg' alt='avatar' />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
