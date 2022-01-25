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
            src="https://allcarbrandslist.com/wp-content/uploads/2021/01/Shelby-Emblem.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/">Shop</Link>
        <Link to="/">History</Link>
        <Link to="/">About Shelby</Link>
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
