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
                    FinFloh is a global AR automation software to help B2B
                    Finance teams to get paid quickly without last-minute panic
                    and a lot more predictability.Our goal is to make
                    receivables a collective responsibility for the firm.
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget ml-4 pl-5">
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
                </div>
              </div>

              <div className="col-lg-2 col-sm-6">
                <div className="single-footer-widget ml-4">
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
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="single-footer-widget ml-4">
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
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Contact</h3>
                  <p>
                    B-Block, BHIVE Workspace - No.112, AKR Tech Park, "A" and,
                    7th Mile Hosur Rd, Krishna Reddy Industrial Area, Bengaluru,
                    Karnataka 560068
                  </p>
                  <p>hello@finfloh.com</p>
                  <p>+91-7867564534</p>

                  {/* <ul className="get-in-touch">
                    <li>
                      <i className="icofont-envelope"></i>
                      <a href="mailto:hello@finfloh.com">hello@finfloh.com</a>
                    </li>
                    <li>
                      <i className="icofont-live-support"></i>
                      <a href="tel:+91-7867564534">+91-7867564534</a>
                    </li>
                  </ul> */}

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <p>Copyright &copy; {currentYear} FinFloh.</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
