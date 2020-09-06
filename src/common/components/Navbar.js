import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar  navbar-dark bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <ul className="nav navbar_nav container">
        <li className="nav-item ">
          <Link className="nav-link text-dark" to="/products/category/clothing">
            Clothing
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/products/category/shoes">
            Shoes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-dark"
            to="/products/category/backpacks"
          >
            Backpacks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/products/category/climbing">
            Climbing
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
