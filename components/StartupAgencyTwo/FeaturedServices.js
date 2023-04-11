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
        <section className="featured-services-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page_header">
                  Building Trust <br /> With Simplicity
                </div>
              </div>
            </div>
            {this.state.display ? (
              <OwlCarousel
                className="featured-services-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="featured-services-box">
                  <div className="icon">
                    <i className="pe-7s-filter"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Information Architect</a>
                    </Link>
                  </h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <Link href="/service-details">
                    <a className="read-more-btn">Read More</a>
                  </Link>

                  <div className="back-text">Ia</div>
                </div>

                <div className="featured-services-box">
                  <div className="icon">
                    <i className="pe-7s-display1"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Business Analyst</a>
                    </Link>
                  </h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <Link href="/service-details">
                    <a className="read-more-btn">Read More</a>
                  </Link>

                  <div className="back-text">Ba</div>
                </div>

                <div className="featured-services-box">
                  <div className="icon">
                    <i className="pe-7s-plugin"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Interaction Designer</a>
                    </Link>
                  </h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <Link href="/service-details">
                    <a className="read-more-btn">Read More</a>
                  </Link>

                  <div className="back-text">Id</div>
                </div>

                <div className="featured-services-box">
                  <div className="icon">
                    <i className="pe-7s-arc"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Information Architect</a>
                    </Link>
                  </h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <Link href="/service-details">
                    <a className="read-more-btn">Read More</a>
                  </Link>

                  <div className="back-text">Ia</div>
                </div>

                <div className="featured-services-box">
                  <div className="icon">
                    <i className="pe-7s-diamond"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Visual Designer</a>
                    </Link>
                  </h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <Link href="/service-details">
                    <a className="read-more-btn">Read More</a>
                  </Link>

                  <div className="back-text">Vd</div>
                </div>

                <div className="featured-services-box">
                  <div className="icon">
                    <i className="pe-7s-helm"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Content Strategist</a>
                    </Link>
                  </h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <Link href="/service-details">
                    <a className="read-more-btn">Read More</a>
                  </Link>

                  <div className="back-text">Cr</div>
                </div>

                <div className="featured-services-box">
                  <div className="icon">
                    <i className="pe-7s-magnet"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>UX Strategist</a>
                    </Link>
                  </h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <Link href="/service-details">
                    <a className="read-more-btn">Read More</a>
                  </Link>

                  <div className="back-text">Ux</div>
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
