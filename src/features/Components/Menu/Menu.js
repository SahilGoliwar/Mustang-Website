import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuItem from "./MenuItem";
function Menu() {
  return (
    <div className="menu">
      <div className="menu1__hidden">
        <MenuItem title="Shop" />
        <Link to="/vehicles">
          <MenuItem title="Vehicles" />
        </Link>
        <MenuItem title="History" />
      </div>
      <div className="menu__main">
        <MenuItem title="Specifications" />
        <MenuItem title="Customize" />
        <MenuItem title="Features" />
        <MenuItem title="News" />
        <MenuItem title="Test Drive" />
        <MenuItem title="Find Us" />
        <MenuItem title="Support" />
        <MenuItem title="United States" />
      </div>

      <div className="menu2__hidden">
        <MenuItem title="About Shelby" />
        <MenuItem title="Book Now" />
        <Link to="/login">
          <MenuItem title="Account" />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
