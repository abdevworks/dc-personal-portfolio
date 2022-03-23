import React from "react";
import SocialHeader from "./SocialHeader";
import ContactForm from "./ContactForm";
import GridContainer from "./GridContainer";
import { GlobalPaddingLeft } from "./GlobalPadding";

function Contact() {
  return (
    <GridContainer minScreenWidth="large" position="right">
      <GlobalPaddingLeft>
        <SocialHeader position="left" />
      </GlobalPaddingLeft>

      <ContactForm />
    </GridContainer>
  );
}

export default Contact;
