import React from "react";

import SocialHeader from "./SocialHeader";
import {
  StyledContact,
  StyledFormContainer,
  StyledForm,
  StyledFormButton,
} from "./styles/Contact.styled";

function Contact() {
  return (
    <StyledContact>
      <SocialHeader />
      <StyledFormContainer>
        <StyledForm>
          <label htmlFor="contact-form-name">Name</label>
          <input type="text" name="name" id="contact-form-name" />

          <label htmlFor="contact-form-email">Email</label>
          <input type="email" name="email" id="contact-form-email" />

          <label htmlFor="contact-form-message">Message</label>
          <textarea
            name="message"
            id="contact-form-message"
            cols="30"
            rows="10"
          ></textarea>

          <StyledFormButton
            type="submit"
            name="send"
            id="contact-form-send-button"
          >Send it!</StyledFormButton>
        </StyledForm>
      </StyledFormContainer>
    </StyledContact>
  );
}

export default Contact;
