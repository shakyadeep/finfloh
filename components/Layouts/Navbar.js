import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse justify-content-end"
      : "collapse navbar-collapse justify-content-end show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

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
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
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
                  <Link href="/">
                    <a className="btn btn-outline">SIGN IN</a>
                  </Link>
                  <Link href="/">
                    <a className="btn btn-primary">BOOK A DEMO</a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
