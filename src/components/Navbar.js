import React from 'react'
import {Link} from "react-router-dom";

const Navbar = ({id, auth}) => {
  console.log("auth", auth);
  const {user, isAuth} = auth;
  return (
    <nav id={id ? id : ""} className="navbar is-fresh is-transparent no-shadow" role="navigation"
         aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <div className="title">Servicio</div>
          </Link>

          <Link to="/" className="navbar-item is-hidden-desktop is-hidden-tablet">
            <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: 'visible'}}>
              <svg width="1000px" height="1000px">
                <path className="path1"
                      d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"/>
                <path className="path2" d="M 300 500 L 700 500"/>
                <path className="path3"
                      d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"/>
              </svg>
              <button id="menu-icon-trigger" className="menu-icon-trigger"/>
            </div>
          </Link>

          <Link to="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbar-menu">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </Link>
        </div>

        <div id="navbar-menu" className="navbar-menu is-static">
          <div className="navbar-start">
            <Link to="/" className="navbar-item is-hidden-mobile">
              <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: 'visible'}}>
                <svg width="1000px" height="1000px">
                  <path className="path1"
                        d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"/>
                  <path className="path2" d="M 300 500 L 700 500"/>
                  <path className="path3"
                        d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"/>
                </svg>
                <button id="menu-icon-trigger" className="menu-icon-trigger"/>
              </div>
            </Link>
          </div>

          <div className="navbar-end">
            {user && <div className="navbar-item is-secondary user-welcome">Welcome, {user.fullName}</div>}
            <Link to="/" className="navbar-item is-secondary">
              Home
            </Link>
            <Link to="/faq" className="navbar-item is-secondary">
              Faq
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/" className="navbar-link">
                Services
              </Link>

              <div className="navbar-dropdown">
                <Link to="/" className="navbar-item">
                  Dropdown item
                </Link>
                <Link to="/" className="navbar-item">
                  Dropdown item
                </Link>
                <Link to="/" className="navbar-item">
                  Dropdown item
                </Link>
              </div>
            </div>
            {isAuth && <Link to="/"><span className="button signup-button is-danger rounded raised">Log Out</span></Link>}
            {!isAuth && (
              <>
                <Link to="/login" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                  <span>Sign In</span>
                </Link>
                <Link to="/register" className="navbar-item">
                  <span className="button signup-button rounded secondary-btn raised">Sign up</span>
                </Link>
              </>
            )
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar