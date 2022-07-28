import React, { useEffect, useState } from "react";
import {Route, Link, Routes, useLocation} from 'react-router-dom';

function Navigation(props) {

  const location = useLocation();
  var [pathh, setPathh] = useState('');

  useEffect(()=>{    
    setPathh(location.pathname);
    console.log(location.pathname)
  }, [])

  return (    
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/logo.png" alt="XharpTech Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={(props.path=='/') ? 'activee nav-link' : 'nav-link'} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className={(props.path=='/services') ? 'activee nav-link' : 'nav-link'} to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
              <Link className={(props.path=='/about') ? 'activee nav-link' : 'nav-link'} to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
              <Link className={(props.path=='/our-portfolio') ? 'activee nav-link' : 'nav-link'} to="/our-portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
              <Link className={(props.path=='/blogs') ? 'activee nav-link' : 'nav-link'} to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
            <Link className="contactButNav" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
