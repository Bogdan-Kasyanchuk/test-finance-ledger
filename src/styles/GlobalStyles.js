import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { size, firstColor } from 'styles/variables';

const GlobalStyles = createGlobalStyle`
${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  padding: 0;
  border: 0;
}

#root{
  margin-left: auto;
  margin-right: auto;
  width: 320px;

  ${size.tabletMin} {
    width: 768px;
  }

  ${size.desktopMin} {
    width: 1360px;
  }
}

*,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

html,
body {
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  ${'' /* font-size: 16px; */}
  color: ${firstColor};
  ${'' /* line-height: 1; */}
}


button,
input,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

button,
label, 
a {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
