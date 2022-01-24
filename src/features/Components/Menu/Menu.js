import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuItem from "./MenuItem";
function Menu() {
  return (
    <div className="menu">
      <div className="menu__main">
        <MenuItem title="GT500" />
        <MenuItem title="GT500SE" />
        <Link to="/">
          <MenuItem title="GT500KR" />
        </Link>
        <MenuItem title="GT350SE" />
        <MenuItem title="Shelby Super Snake" />
        <MenuItem title="Shelby GT" />
        <MenuItem title="Shelby Wide Body" />
        <MenuItem title="News" />
        <MenuItem title="Test Drive" />
        <MenuItem title="Find Us" />
        <MenuItem title="Support" />
        <MenuItem title="United States" />
      </div>
      <div className="menu1__hidden">
        <MenuItem title="History" />
        <MenuItem title="Specifications" />
        <MenuItem title="Customize" />
        <MenuItem title="Features" />
      </div>
      <div className="menu2__hidden">
        <MenuItem title="Book Now" />
        <Link to="/login">
          <MenuItem title="Account" />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
