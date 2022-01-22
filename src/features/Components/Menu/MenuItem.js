import React from "react";
import "./MenuItem.css";

function MenuItem({ title }) {
  return (
    <div className="menuItem">
      <p>{title}</p>
    </div>
  );
}

export default MenuItem;
