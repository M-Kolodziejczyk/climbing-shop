import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const logoContainer = {
    maxHeight: "150px"
  };

  const searchIcon = {
    top: "8px",
    right: "5px",
    color: "#!495057",
    fontSize: "22px"
  };

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setUser(props.user);
    setIsAuthenticated(props.isAuthenticated);
  }, [props.user, props.isAuthenticated]);

  return (
    <div className="container">
      <div className="d-flex flex-row  justify-content-between align-items-center">
        <div style={logoContainer} className="d-flex col-2">
          <img
            src="https://climbing-shop.s3-eu-west-1.amazonaws.com/mountain-logo.svg"
            className="mw-100"
            alt="Logo img"
          />
        </div>
        <div className="col-3 ">
          <h3 className="">Climbing Shop</h3>
        </div>
        <div className="col-4">
          <form className="position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <i
              style={searchIcon}
              className="fas fa-search position-absolute"
            ></i>
          </form>
        </div>
        <div className="col-2">
          <div className="dropdown">
            <i className="fas fa-user mr-2"></i>
            {isAuthenticated ? (
              <Fragment>
                <button
                  className="btn btn-lg btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user["custom:firstName"]}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                  <a
                    onClick={props.signOut}
                    className="dropdown-item"
                    href="#!"
                  >
                    Log Out
                  </a>
                </div>
              </Fragment>
            ) : (
              <Link className="btn btn-light btn-lg" to="/signin" type="button">
                Log in
              </Link>
            )}
          </div>
        </div>
        <div className="col-1">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
