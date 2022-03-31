import React, { useState } from "react";
import { send } from "emailjs-com";
import styled from "styled-components";
import FormContainer from "./FormContainer";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import FormButton from "./FormButton";

const ContactForm = React.forwardRef(({ bg }, ref) => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(process.env);
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_User_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          from_name: "",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleInputChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleFormSubmit} ref={ref}>
        <FormLabel id="contact-form-name">Imię</FormLabel>
        <FormInput
          type="text"
          name="from_name"
          id="contact-form-name"
          placeholder="imię nadawcy"
          value={toSend.from_name}
          onChange={handleInputChange}
        />

        <FormLabel id="contact-form-email">Adres Email</FormLabel>
        <FormInput
          type="email"
          name="reply_to"
          id="contact-form-email"
          placeholder=" od: adres email"
          value={toSend.reply_to}
          onChange={handleInputChange}
        />

        <FormLabel id="contact-form-message">Wiadomość</FormLabel>
        <FormMessage
          name="message"
          id="contact-form-message"
          value={toSend.message}
          onChange={handleInputChange}
        />

        <FormButton type="submit" name="send" id="contact-form-send-button">
          Wyślij
        </FormButton>
      </StyledForm>
    </FormContainer>
  );
});

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
`;

export default ContactForm;
