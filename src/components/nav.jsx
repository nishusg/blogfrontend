import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const Nav = ({ blogs }) => {
  const linkcol = { color: "black" };
  const { length: count } = blogs;
  return (
    <nav className="navbar navbar-expand-lg sticky-top container  navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar {count}</span>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link style={linkcol} className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link style={linkcol} className="nav-link" to="/new">
              New
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
