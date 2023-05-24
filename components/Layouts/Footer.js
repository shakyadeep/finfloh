import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img src="/images/finfloh-logo.svg" alt="image" />
                      </a>
                    </Link>
                  </div>

                  <p>
                    FinFloh is a a future proof collaborative receivables
                    automation platform revolutionizing the way modern CFOs and
                    B2B finance teams manage receivables. With our comprehensive
                    solution, businesses can streamline receivables workflows,
                    accelerate collections, reduce disputes, and predict future
                    cashflows by leveraging market data, cross-functional
                    collaboration, buyer intelligence, and AI.
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                {/* <div className="single-footer-widget ml-4 pl-5">
                  <h3>Feature</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>Collaboration</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Customer Intelligence</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Smart Collection</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Cashflow</a>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>

              <div className="col-lg-2 col-sm-6">
                {/* <div className="single-footer-widget ml-4">
                  <h3>Resource</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Webinar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Videos</a>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="col-lg-1 col-sm-6">
                {/* <div className="single-footer-widget ml-4">
                  <h3>Company</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Careers</a>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget text-right">
                  <h3>Contact</h3>
                  <p>San Francisco | Bangalore</p>
                  <p>hello@finfloh.com</p>
                  <p>+91-680953111</p>

                  <ul className="social-links">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/finfloh"
                        target="_blank"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/FinFloh" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              {/* <p>Copyright &copy; {currentYear} FinFloh.</p> */}
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
