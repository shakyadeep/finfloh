import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  margin: 24,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

class FeaturedServices extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <section className="featured-services-area grey_bg ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page_header">
                  Revamp Your Outdated <br />
                  Account Receivables workflows
                </div>
              </div>
            </div>
            {this.state.display ? (
              <OwlCarousel
                className="featured-services-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="featured-services-box white_bg">
                  <h3 className="sub_text">Automate Receivables Workflows</h3>
                  <p className="small_text">
                    Set aside manual processes <br />& minimize errors
                  </p>
                </div>

                <div className="featured-services-box green_bg">
                  <h3 className="sub_text">
                    Predict Customer
                    <br /> Payments
                  </h3>
                  <p className="small_text">
                    Have better control over your cashflows
                  </p>
                </div>
                <div className="featured-services-box dark_bg">
                  <h3 className="sub_text">
                    Collaborate With
                    <br /> Customers & Teams
                  </h3>
                  <p className="small_text">
                    Cut down time and efforts wasted in disputes and issues
                  </p>
                </div>
                <div className="featured-services-box white_bg2">
                  <h3 className="sub_text">
                    Collect Timely
                    <br /> &  Strategically
                  </h3>
                  <p className="small_text">
                    Avoid last-minute surprises and delayed payments
                  </p>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </section>
      </>
    );
  }
}

export default FeaturedServices;
