import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: pink;
    margin: 0;
  }
  :where(html) {
    line-height: 1.15;
  }
  :where(h1) {
    font-size: 2em;
    margin-block-end: 0.67em;
    margin-block-start: 0.67em;
  }
  :where(dl, ol, ul) :where(dl, ol, ul) {
    margin-block-end: 0;
    margin-block-start: 0;
  }
  :where(hr) {
    box-sizing: content-box; /* 1 */
    color: inherit; /* 2 */
    height: 0; /* 1 */
  }
  :where(pre) {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  :where(abbr[title]) {
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  :where(b, strong) {
    font-weight: bolder;
  }
  :where(code, kbd, samp) {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  :where(small) {
    font-size: 80%;
  }
  :where(table) {
    border-color: currentColor; /* 1 */
    text-indent: 0; /* 2 */
  }
  :where(button, input, select) {
    margin: 0;
  }
  :where(button) {
    text-transform: none;
  }
  :where(button, input:is([type="button" i], [type="reset" i], [type="submit" i])) {
    -webkit-appearance: button;
  }
  :where(progress) {
    vertical-align: baseline;
  }
  :where(select) {
    text-transform: none;
  }
  :where(textarea) {
    margin: 0;
  }
  :where(input[type="search" i]) {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  :where(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  :where(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  :where(:-moz-ui-invalid) {
    box-shadow: none;
  }
  :where(dialog) {
    background-color: white;
    border: solid;
    color: black;
    height: -moz-fit-content;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -moz-fit-content;
    width: fit-content;
  }
  :where(dialog:not([open])) {
    display: none;
  }
  :where(summary) {
    display: list-item;
  }
`;
