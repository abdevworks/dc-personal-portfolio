import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { send } from "emailjs-com";
import styled from "styled-components";
import FormContainer from "./FormContainer";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import FormButton from "./FormButton";

const ContactForm = React.forwardRef(({ bg }, ref) => {


  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactMessage: "",
    },
    validationSchema: Yup.object({
      contactName: Yup.string()
        .max(35, "Maksymalna długość 35 znaków")
        .required("Proszę uzupełnić"),
      contactEmail: Yup.string()
        .email("Niepoprawny adres email")
        .required("Proszę uzupełnić"),
      contactMessage: Yup.string().required("Proszę uzupełnić"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          values,
          process.env.REACT_APP_User_ID
        )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitting(false);
            resetForm();
          })
          .catch((err) => {
            console.log("FAILED...", err);
          });

      }, 400);
    },
  });

  return (
    <>
      <FormContainer>
        <StyledForm onSubmit={formik.handleSubmit} ref={ref}>
          <FormLabel id="contactName">Imię</FormLabel>
          <FormInput
            id="contactName"
            type="text"
            {...formik.getFieldProps("contactName")}
            placeholder="imię nadawcy"
          />
          {formik.touched.contactName && formik.errors.contactName ? (
            <StyledErrorMessage>{formik.errors.contactName}</StyledErrorMessage>
          ) : null}

          <FormLabel id="contactEmail">Adres Email</FormLabel>
          <FormInput
            id="contactEmail"
            type="email"
            {...formik.getFieldProps("contactEmail")}
            placeholder="od: adres email"
          />
          {formik.touched.contactEmail && formik.errors.contactEmail ? (
            <StyledErrorMessage>
              {formik.errors.contactEmail}
            </StyledErrorMessage>
          ) : null}

          <FormLabel id="contactName">Wiadomość</FormLabel>
          <FormMessage
            id="contactMessage"
            type="text"
            {...formik.getFieldProps("contactMessage")}
          />
          {formik.touched.contactMessage && formik.errors.contactMessage ? (
            <StyledErrorMessage>
              {formik.errors.contactMessage}
            </StyledErrorMessage>
          ) : null}

          <FormButton type="submit" name="send" id="contact-form-send-button">
            Wyślij
          </FormButton>
        </StyledForm>
      </FormContainer>
    </>
  );
});

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
`;

const StyledErrorMessage = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-top: -13px;
  margin-bottom: 13px;

  color: var(--color-error);
`;

export default ContactForm;
