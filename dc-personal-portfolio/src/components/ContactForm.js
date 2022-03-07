import React from "react";
import styled from "styled-components";
import FormContainer from "./FormContainer";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import FormButton from "./FormButton";

function ContactForm({bg}) {
  return (
    <FormContainer>
      <StyledForm>
        <FormLabel id="contact-form-name">Name</FormLabel>
        <FormInput type="text" name="name" id="contact-form-name" />

        <FormLabel id="contact-form-email">Email</FormLabel>
        <FormInput type="email" name="email" id="contact-form-email" />

        <FormLabel id="contact-form-message">Message</FormLabel>
        <FormMessage name="message" id="contact-form-message" />

        <FormButton type="submit" name="send" id="contact-form-send-button">
          Send it!
        </FormButton>
      </StyledForm>
    </FormContainer>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
`;

export default ContactForm;
