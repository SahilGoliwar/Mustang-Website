import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
function Menu() {
  return (
    <div className="menu">
      <div className="menu1__hidden">
        <MenuItem title="Model S" />
        <MenuItem title="Model 3" />
        <MenuItem title="Model X" />
        <MenuItem title="Model Y" />
        <MenuItem title="Solar Roof" />
        <MenuItem title="Solar Panels" />
      </div>
      <div className="menu__main">
        <MenuItem title="Cybertruck" />
        <MenuItem title="Roadster" />
        <MenuItem title="Semi" />
        <MenuItem title="News" />
        <MenuItem title="Existing Inventory" />
        <MenuItem title="Used Inventory" />
        <MenuItem title="Trade-In" />
        <MenuItem title="Test Drive" />
        <MenuItem title="Powerwall" />
        <MenuItem title="Commercial Energy" />
        <MenuItem title="Utilities" />
        <MenuItem title="Charging" />
        <MenuItem title="Find Us" />
        <MenuItem title="Support" />
        <MenuItem title="Investor Relations" />
        <MenuItem title="United States" />
      </div>
      <div className="menu2__hidden">
        <MenuItem title="Shop" />
        <MenuItem title="Account" />
      </div>
    </div>
  );
}

export default Menu;
