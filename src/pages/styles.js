import { createGlobalStyle } from 'styled-components';

import Azbuki from '../../public/fonts/Azbuki-Regular.woff';

export const Styles = createGlobalStyle`
:root {
  --main-background-color: #f3e5cf;
  --secondary-background-color: #1c1311;
  --tertiary-background-color: #c2b9b0;

  --main-font-color: #1c1311;

  --main-accent: #e7717d;
  --secondary-accent: #eec61f;

  --original-logo-color: #583023;
}

@font-face {
  font-family: 'azbuki';
  src: url(${Azbuki}) format('woff');
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: azbuki, Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
  background-color: var(--main-background-color);
  color: var(--main-font-color);
  height: 100%;
}

#app {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: var(--main-background-color);
  text-decoration: none;
}

a:hover {
  text-shadow: 0px 0px 10px var(--secondary-accent);
}

.button-default {
  border: 0px;
  border-radius: 3px;
  font-size: 1em;
  font-weight: bold;
  font-family: azbuki;
  background-color: var(--secondary-accent);
  color: var(--secondary-background-color);
  padding: 15px 40px;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    cursor: auto;
  }
}

.button-danger {
  border: 0px;
  border-radius: 3px;
  font-size: 1em;
  font-weight: bold;
  font-family: azbuki;
  background-color: red;
  color: var(--secondary-background-color);
  padding: 15px 40px;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    cursor: auto;
  }
}

svg {
  filter: drop-shadow(0px 0px 5px var(--secondary-accent));
}

fieldset {
  border: 0px;
  width: 480px;
}

label {
  display: block;
  margin-bottom: 3px;
}

input,
textarea {
  outline: 0px;
  width: 100%;
  border: 0px;
  padding: 0px 5px;
  border-radius: 5px;
  font-size: 20px;
  font-family: azbuki;
  color: var(--main-font-color);
  box-shadow: 0px 0px 2px var(--secondary-background-color);

  &:focus-visible {
    outline: 2px solid var(--secondary-accent) !important;
  }
}

input {
  height: 40px;
}

textarea {
  height: 300px;
}

input:focus-visible,
textarea:focus-visible {
  outline: 1px solid var(--secondary-background-color);
}

@media only screen and (max-width: 768px) {
  fieldset {
    width: 90%;
  }
}
`;