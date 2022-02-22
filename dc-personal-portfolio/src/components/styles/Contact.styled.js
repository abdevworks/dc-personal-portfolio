import styled from "styled-components";

export const StyledContact = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: flex;
  }
`;

export const StyledFormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.hero};
  color: white;
  font-weight: bold;
  padding: 8% 12% 8% 12%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 15px;
  }

  input {
    height: 2.5em;
  }
  textarea {
    height: 15em;
    resize: none;
    margin-bottom: 20px;
  }
`;

export const StyledFormButton = styled.button`
  align-self: flex-end;
  color: white;
  background-color: ${({ theme }) => theme.colors.skills};
  font-weight: bold;
  font-size: 0.85em;
  border: none;
  height: 3em;
  width: 10em;
  margin-top: 0.5em;
  margin-bottom: 0px;
`;
