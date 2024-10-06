import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/logo.png";
// import Globe from "../globe/Globe";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-image" />
            {/* <Globe /> */}
          </a>
        </div>
        {/* <div className="navbar-signin">
          <a href="/signin" className="signin-button">
            Sign In
          </a>
        </div> */}
      </div>
      <style jsx>{`
        .navbar {
        //   position: fixed;
            //   top: 0;
            //   left: 0;
            //   right: 0;
            //   z-index: 10;
            width: 100%;
          background: transparent;
        }
        .navbar-container {
          display: flex;
          justify-content: left;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
        }
        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
        }
        .logo-image {
          height: 3rem;
          width: auto;
          margin-right: 0.5rem;
          border-radius: 0.25rem;
          -mix-blend-mode: antialiased;
        }
        .navbar-signin {
          margin-left: 1.5rem;
        }
        .signin-button {
          background-color: red ;
          color: white;
          font-weight: bold;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          text-decoration: none;
          font-size: 1rem;
        }
        .signin-button:hover {
          background-color: crimson;
        }
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
          .navbar-menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.9);
            padding: 1rem;
          }
          .navbar-menu.active {
            display: flex;
          }
          .navbar-menu li {
            margin: 0.5rem 0;
          }
          .logo-image {
            height: 2rem;
          }

        }
      `}</style>
    </nav>
  );
};

export default Navbar;
