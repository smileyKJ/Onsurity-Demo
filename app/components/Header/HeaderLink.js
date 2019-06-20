import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-block;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  border: none;
  color: black;
  flex: 1;
  align-items: center;
  justify-content: space-around;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: black;
    transition: width 0.3s;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`;
