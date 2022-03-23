import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  --color-header: #6700ee;
  --color-logo: #72e6ff;
  --color-hero: #6e00ff;
  --color-skills: #ff64cb;
  --color-portfolio: #f7f7f7;
  --color-bg-default: white;

  --page-padding-large: 4em;
  --page-padding-xl: 10em;
  --page-padding-xxl: 15em;

  --medium: "800px";
  --large: "1050px";
  --xl: "1250px";
  --xxl: "1550px";
}

body {
  height: 100vh;
  margin: 0;
  font-family: "Poppins", arial;
  background-color: whitesmoke;
  max-width: 1920px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
}

section {
  padding: 4em 2em;
  text-align: center;
  overflow: hidden;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    padding: 4em;
  }
  @media only screen and (min-width: ${({ theme }) => theme.xl}) {
    padding: 10em 10em 4em 10em;
  }
  @media only screen and (min-width: ${({ theme }) => theme.xxl}) {
    padding: 6em 15em 4em 15em;
  }
}

`;

export default GlobalStyles;
