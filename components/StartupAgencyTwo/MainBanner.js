import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import ThanksPopup from "../Common/ThanksPopup";

const MainBanner = (props) => {
  const [Open, setOpen] = useState(false);
  const [FormSuccess, setFormSuccess] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const handelclosefn = () => {
    setFormSuccess(false);
  };

  const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
  });

  const mainForm = useRef();

  const sendEmailMain = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g5foqnv",
        "template_srv7cqe",
        mainForm.current,
        "y8nWiQjxXZt1sUOUX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
                    <div className="hero_newsletter d-none d-sm-block">
                      <form
                        className="newsletter-form"
                        ref={mainForm}
                        onSubmit={sendEmailMain}
                      >
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="user_email"
                          required
                        />
                        <button type="submit">BOOK A DEMO</button>
                      </form>
                    </div>
                    <a className="link_btn d-sm-none" onClick={props.handleFn}>
                      BOOK A DEMO
                    </a>

                    {/* <Link href="#">
                      <a className="btn btn-primary">Get Started</a>
                    </Link> */}

                    {/* <Link href="/#play-video">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                      >
                        <i className="icofont-ui-play"></i> Watch a Demo
                      </a>
                    </Link> */}
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
        isOpen={Open}
        videoId="_ysd-zHamjk"
        onClose={() => setOpen(false)}
      />
      {FormSuccess && (
        <ThanksPopup open={FormSuccess} handleClose={handelclosefn} />
      )}
      <a className="link_btn d-sm-none fixed_btn" onClick={props.handleFn}>
        BOOK A DEMO
      </a>
    </>
  );
};

export default MainBanner;
