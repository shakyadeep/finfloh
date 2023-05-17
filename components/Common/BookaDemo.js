import React, { useRef } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const BookaDemo = (props) => {
  return (
    <>
      <Offcanvas show={props.open} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Book a demo with us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form
            className="newsletter-form"
            ref={props.reference}
            onSubmit={props.mailer}
          >
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="user_email"
              required
            />
            <button type="submit" className="modal_submit">
              SUBMIT
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BookaDemo;
