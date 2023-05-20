import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/icofont.min.css";
import "../styles/pe-icon-7-stroke.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../styles/style.css";
import "../styles/responsive.css";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="FinFloh's accounts receivables automation solution helps you streamline invoice to cash workflows, accelerate collections, reduce disputes & predict cashflows "
          />
          <meta
            name="keywords"
            content="Receivables, AR, A/R, AR Automation,Account Receivables"
          />
          <title>
            FinFloh - Collaborative Receivables Automation Platform for B2B
            Finance Teams
          </title>

          <script
            defer={true}
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-GZSQ523CV1');`,
            }}
          />
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop />
      </>
    );
  }
}
