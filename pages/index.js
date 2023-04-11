import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/StartupAgencyTwo/MainBanner";
import FeaturedServices from "../components/StartupAgencyTwo/FeaturedServices";
// import CaseStudies from "../components/StartupAgencyTwo/CaseStudies";
// import FeedbackTwo from "../components/Common/FeedbackTwo";
// import BestServices from "../components/StartupAgencyTwo/BestServices";
// import Partner from "../components/Common/Partner";
// import Feedback from "../components/Common/Feedback";
// import Portfolio from "../components/StartupAgencyTwo/Portfolio";
// import TeamStyleFour from "../components/Common/TeamStyleFour";
// import FunFactsTwo from "../components/Common/FunFactsTwo";
// import WorkProcess from "../components/StartupAgencyTwo/WorkProcess";
// import PricingStyleThree from "../components/Pricing/PricingStyleThree";
// import Newsletter from "../components/Common/Newsletter";
// import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

class FinFlohHome extends Component {
  render() {
    return (
      <>
        <Navbar />

        <MainBanner />

        <FeaturedServices />

        {/* <CaseStudies />

        <Feedback />

        <Portfolio />

        <TeamStyleFour />

        <FunFactsTwo />

        <WorkProcess />

        <div className="ptb-100">
          <Newsletter />
        </div>

        <CtaAreaTwo /> */}

        <Footer />
      </>
    );
  }
}

export default FinFlohHome;
