import React from "react";
const Newsletter = (props) => {
  return (
    <section className="newsletter-area">
      <div className="container">
        <div className="newsletter-inner-area mb_newsletter">
          <div className="newsletter-content">
            <h2>Get Paid Faster with FinFloh</h2>
            <span className="sub-title">
              Talk to our finance experts and begin your AR <br />{" "}
              transformation journey today.
            </span>
          </div>
          <form
            className="newsletter-form d-none d-sm-block"
            ref={props.reference1}
            onSubmit={props.mailer1}
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
          <a className="link_btn d-sm-none" onClick={props.popupfn}>
            BOOK A DEMO
          </a>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
