import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.3em 1.5em;
  text-decoration: none;
  border-radius: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 10px;
  border: 1px solid #ed2939;
  color: white;
  background: #ed2939;
  transition: 0.3s;
  box-shadow: 0 0 10px #ed2939;
  margin-bottom: 1em;

  &:hover {
    background: white;
    color: #ed2939;
    box-shadow: 0 0 10px #ed2939;
  }
`;

export default buttonStyles;
