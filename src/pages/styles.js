import { createGlobalStyle } from 'styled-components';

import Azbuki from '../../public/fonts/Azbuki-Regular.woff';

export const Styles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: azbuki, Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.second};
  height: 100%;
}

#app {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
}

a:hover {
  text-shadow: 0px 0px 10px ${(props) => props.theme.colors.accent};
}

.button-default {
  border: 0px;
  border-radius: 3px;
  font-size: 1em;
  font-weight: bold;
  font-family: azbuki;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.second};
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
  color: ${(props) => props.theme.colors.second};
  padding: 15px 40px;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    cursor: auto;
  }
}

svg {
  filter: drop-shadow(0px 0px 5px ${(props) => props.theme.colors.accent});
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
  color: ${(props) => props.theme.colors.second};
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.second};

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent} !important;
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
  outline: 1px solid ${(props) => props.theme.colors.second};
}

@font-face {
  font-family: 'azbuki';
  src: url(${Azbuki}) format('woff');
}

@media only screen and (max-width: 768px) {
  fieldset {
    width: 90%;
  }
}
`;
