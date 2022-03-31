import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SocialHeader from "./SocialHeader";
import ContactForm from "./ContactForm";
import GridContainer from "./GridContainer";
import { GlobalPaddingLeft } from "./GlobalPadding";

function Contact() {

  const contactFormRef = useRef();

  useEffect(() => {
    gsap.from(contactFormRef.current, {
      scrollTrigger: {
        trigger: contactFormRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
    });
  });

  return (
    <GridContainer minScreenWidth="large" position="right">
      <GlobalPaddingLeft>
        <SocialHeader position="left" />
      </GlobalPaddingLeft>

      <ContactForm ref={contactFormRef} />
    </GridContainer>
  );
}

export default Contact;
