import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/StartupAgencyTwo/MainBanner";
import FeaturedServices from "../components/StartupAgencyTwo/FeaturedServices";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";
// import Customers from "../components/Common/Customers";
import FaqContent from "../components/Faq/FaqContent";

class FinFlohHome extends Component {
  render() {
    return (
      <>
        <Navbar />

        <MainBanner />

        {/* <Customers /> */}
        <FeaturedServices />
        <section className="customer_section ptb-100">
          <div className="container">
            <div className="section-title ">
              <h2>
                Maximize Your Cash Flow <br /> with FinFloh
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                <div className="single-team content_box">
                  <div className="tag">Break the Silos</div>
                  <h3 className="sub_text">
                    Close Disputes & Payments Faster <br /> with Collaborative
                    Communication
                  </h3>
                  <p className="small_text">
                    Get rid of issues and disputes stuck in infinite loops
                    through automated workflows by enabling cross-functional
                    collaboration between your customers and internal teams
                  </p>
                  <p>
                    <a href="#" className="link_txt">
                      Get Started <img src="/images/uparrow.svg" />{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="col-img">
                  <img
                    src="/images/Collaboration.png"
                    alt="image"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customer_section ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center text-center">
                <div className="single-team content_box p-0">
                  <div className="tag">Better Know Your Customer (KYC)</div>
                  <h3 className="sub_text">
                    Leverage Buyer Intelligence
                    <br /> to Maximize Cashflows
                  </h3>
                  <p className="small_text">
                    Tap into market intelligence & historical receivables Data
                    to build an in-depth buyer analytics model to understand
                    your customer payment lifecycle and identify blindspots in
                    real-time.
                  </p>
                  <p>
                    <a href="#" className="link_txt">
                      Get Started <img src="/images/uparrow.svg" />{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="col-img">
                  <img
                    src="/images/BuyerIntelligence.png"
                    alt="image"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customer_section ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                <div className="single-team content_box">
                  <div className="tag">Enable Smart Collections</div>
                  <h3 className="sub_text">
                    Improve DSO & Aging with <br /> Contextual Collections
                  </h3>
                  <p className="small_text">
                    Create prioritized collector’s worklist, automate  risk
                    categorization and dunning, and schedule multi  channel
                    reminders (Email/SMS/WhatsApp) to  collect faster with more
                    efficiency.
                  </p>
                  <p>
                    <a href="#" className="link_txt">
                      Get Started <img src="/images/uparrow.svg" />{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="col-img">
                  <img
                    src="/images/3rdsec.png"
                    alt="image"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customer_section pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                <div className="link_box">
                  <div>
                    <h3 className="sub_text">
                      Trim Bad Debt with <br /> Activated Credit Decisions
                    </h3>
                    <p className="small_text">
                      Manage your customers with real-time risk <br />
                       alerts and audit trails
                    </p>
                  </div>
                  <a href="#">
                    <img src="/images/greenarrow.svg" />{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                <div className="link_box dark_bg">
                  <div>
                    <h3 className="sub_text">
                      Predict Working Capital with <br /> AI-driven Reports
                    </h3>
                    <p className="small_text">
                      Analyze past/current trends and use <br />
                      predictive AI to predict customer payments
                    </p>
                  </div>
                  <a href="#">
                    <img src="/images/greenarrow.svg" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ptb-100 grey_bg seamless_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                <div className="single-team content_box p-0">
                  <div className="tag">Integrate Seamlessly</div>
                  <h3 className="sub_text">
                    Get, set and go <br /> on Day 1
                  </h3>
                  <p className="small_text">
                    Integrate with your ERP/Accounting softwares with just a few
                    simple clicks without any coding efforts and start managing
                    your receivables with ease.
                  </p>
                  <p>
                    <a href="#" className="link_btn">
                      Integrate Now <img src="/images/whiteuparrow.svg" />{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqContent />

        <div className="ptb-100">
          <Newsletter />
        </div>
        <Footer />
      </>
    );
  }
}

export default FinFlohHome;
