import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logoImg"
            src="https://www.seekpng.com/png/full/413-4130165_shelby-logo-vector-shelby-mustang-cobra-logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">History</Link>
        <Link to="/">Specifications</Link>
        <Link to="/">Customize</Link>
        <Link to="/">Features</Link>
      </div>
      <div className="header__right">
        <Link to="/" className={isMenuOpen && "header__link--hidden"}>
          Book Now
        </Link>
        <Link to="/login" className={isMenuOpen && "header__link--hidden"}>
          Account
        </Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
