import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logout from "../../pages/Logout"




function Nav() {
  return (



    <nav className="navbar navbar-expand-lg navbar-light bg-light border-0">
      <Link className="navbar-brand" to="/">
        <img src="icon.png" width="40px" alt="logo"></img> FindMore
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={
                  window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/faqs"
              className={
                window.location.pathname === "/faqs"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              FAQs
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/register"
              className={
                window.location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Register
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/collections"
              className={
                window.location.pathname === "/collections"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Collections
            </Link>
          </li>

           <li className="nav-item justify-content-right">
            <Link
              to="/logout"
              className={
                window.location.pathname === "/logout"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Logout
            </Link>
          </li> 
{/* 
          <li>
            <Logout onClick>
              
          </Logout>

          </li> */}
        </ul>
      </div>
    </nav>
  );
}


  

export default Nav;