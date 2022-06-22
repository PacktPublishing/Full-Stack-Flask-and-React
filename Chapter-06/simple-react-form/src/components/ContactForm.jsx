import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="container-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-control" rows="10" />{" "}
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
