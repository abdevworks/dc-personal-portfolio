import React from "react";
import "./Contact.scss";
import SocialHeader from "./SocialHeader";

function Contact() {
  return (
    <div className="contact">
      <SocialHeader />
      <div className="contact-form-container">
        <form className="contact-form">
          <label for="contact-form-name">Name</label>
          <input type="text" name="name" id="contact-form-name" />

          <label for="contact-form-email">Email</label>
          <input type="email" name="email" id="contact-form-email" />

          <label for="contact-form-message">Message</label>
          <textarea
            name="message"
            id="contact-form-message"
            cols="30"
            rows="10"
          ></textarea>

          <input
            className="form-button"
            type="submit"
            value="Send it!"
            name="send"
            id="contact-form-send-button"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
