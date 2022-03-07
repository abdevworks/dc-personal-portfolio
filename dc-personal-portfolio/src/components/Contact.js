import React from "react";
import SocialHeader from "./SocialHeader";
import ContactForm from './ContactForm'
import GridContainer from "./GridContainer";

function Contact({ socialMediaContent }) {
  return (
    <GridContainer minScreenWidth="large" position="right">
      <SocialHeader socialMediaContent= {socialMediaContent} />
      <ContactForm />
    </GridContainer>
  );
}


export default Contact;
