import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  --color-header: #6700ee;
  --color-logo: #72e6ff;
  --color-hero: #6e00ff;
  --color-skills: #ff64cb;
  --color-portfolio: #f7f7f7;

  --medium: "800px";
  --large: "1050px";
  --xl: "1250px";
  --xxl: "1550px";
}

body {
  height: 100vh;
  margin: 0;
  font-family: "Poppins", arial;
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
}

`;

export default GlobalStyles;
