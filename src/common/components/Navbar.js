import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar  navbar-dark bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <ul className="nav navbar_nav container">
        <li className="nav-item ">
          <a className="nav-link text-dark" href="/products/category/clothing">
            Clothing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/products/category/shoes">
            Shoes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/products/category/backpacks">
            Backpacks
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/products/category/climbing">
            Climbing
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
