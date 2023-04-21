import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">ProgBr</Link>
      </h1>
      
      <ul className="menu">
        <li>
          <Link to="/aulas">Aulas</Link>
        </li>
        <li>
            <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </div>
  );
};
