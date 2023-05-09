import React, { Component } from "react";

class Newsletter extends Component {
  render() {
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
        </div>
      </section>
    );
  }
}

export default Newsletter;
