import { css } from 'styled-components';

const selectStyles = css`
  width: 80%;
  text-align: left;
  height: 3em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  padding: 0 0.5em;
  outline: none;
  font-size: 12px;

  &:first-child {
    margin-top: 1em;
  }

  option:hover,
  option:focus,
  option:active {
    background: linear-gradient(#000000, #000000);
    background-color: #000000 !important;
    color: #ffed00 !important;
  }

  option:checked {
    background: linear-gradient(#d6d6d6, #d6d6d6);
    background-color: #d6d6d6 !important;
    color: #000000 !important;
  }

  @media (max-width: 768px) {
    height: 2em;
  }
`;

export default selectStyles;
