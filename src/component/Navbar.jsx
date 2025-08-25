import React from "react";
import { NavLink } from "react-router-dom";
// import SignUp from "./Signup";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h2 className="text-warning">D-Mart</h2>
          </NavLink>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-warning" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-warning" to="/Product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-warning" to="/Order">
                  Order
                </NavLink>
              </li>
            </ul>
              <NavLink className="nav-link text-white" to="/Signup">
                <button className="btn btn-outline-warning">Sign up</button>
              </NavLink>
              <NavLink className="nav-link text-white mx-3" to="/Login">
                <button className="btn btn-outline-primary">Login</button>
              </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
