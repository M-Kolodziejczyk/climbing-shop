import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar  navbar-dark bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <ul className="nav navbar_nav container">
        <li className="nav-item ">
          <a className="nav-link text-dark" href="#!">
            Odzież
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#!">
            Buty
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#!">
            Plecaki
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#!">
            Wspinanie
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#!">
            Turytyka
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
