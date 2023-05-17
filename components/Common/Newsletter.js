import React from "react";
const Newsletter = (props) => {
  return (
    <section className="newsletter-area">
      <div className="container">
        <div className="newsletter-inner-area">
          <div className="newsletter-content">
            <h2>Get Paid Faster with FinFloh</h2>
            <span className="sub-title">
              Talk to our finance experts and begin your AR <br />{" "}
              transformation journey today.
            </span>
          </div>
          <form
            className="newsletter-form"
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
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
