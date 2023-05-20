import React, { useState } from "react";
import Link from "../../utils/ActiveLink";

const Navbar = (props) => {
  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-3">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/finfloh-logo.svg" alt="logo" />
              </a>
            </Link>

            {/* Toggle navigation */}

            <div id="navbarSupportedContent">
              {/* <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Features <i className="icofont-thin-down"></i>
                  </a>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <a className="nav-link">Feature 1</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services-2" activeClassName="active">
                      <a className="nav-link">Feature 2</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services-3" activeClassName="active">
                      <a className="nav-link">Feature 3</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services-4" activeClassName="active">
                      <a className="nav-link">Feature 4</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Resource <i className="icofont-thin-down"></i>
                  </a>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <a className="nav-link">Resource 1</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services-2" activeClassName="active">
                      <a className="nav-link">Resource 2</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services-3" activeClassName="active">
                      <a className="nav-link">Resource 3</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services-4" activeClassName="active">
                      <a className="nav-link">Resource 4</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/about" activeClassName="active">
                  <a className="nav-link">Company</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pricing
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    ROI Calculator
                  </a>
                </Link>
              </li>
            </ul> */}

              <div className="others-options">
                <Link href="http://app.finfloh.com/signin">
                  <a className="btn btn-outline">SIGN IN</a>
                </Link>
                <button className="btn btn-primary" onClick={props.openModal}>
                  TRY FOR FREE
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
