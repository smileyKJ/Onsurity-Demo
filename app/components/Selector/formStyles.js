import { css } from 'styled-components';

const formStyles = css`
  display: flex;
  flex-direction: column;
  height: 225px;
  width: 350px;
  background: white;
  box-shadow: 0 0 10px grey;
  font-size: 10px;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  margin-right: -1%;
  z-index: 2;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin: 5% 0 0 5%;
  }
`;

export default formStyles;
