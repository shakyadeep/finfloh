import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      direction: "bottom",
      out_mode: "out",
      speed: 2,
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
};

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <div className="main-banner startup-agency startup-agency2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="main-banner-content text-center">
                      <h1>
                        Collaborative 
                        <br />
                        Receivables Automation Platform
                      </h1>
                      <p>
                        Build Intelligent Workflows, Leverage Customer Insights,
                        <br />
                        Accelerate Collections.
                      </p>
                      <div className="hero_newsletter">
                        <form className="newsletter-form">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            required
                          />
                          <button type="submit">BOOK A DEMO</button>
                        </form>
                      </div>
                      {/* <Link href="#">
                        <a className="btn btn-primary">Get Started</a>
                      </Link> */}

                      <Link href="/#play-video">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                        >
                          <i className="icofont-ui-play"></i> Watch a Demo
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default MainBanner;
