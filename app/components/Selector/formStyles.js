import { css } from 'styled-components';

const formStyles = css`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 250px;
  background: white;
  box-shadow: 0 0 5px grey;
  font-size: 10px;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  margin-right: -1%;
  z-index: 2;

  @media (max-width: 768px) {
    margin: 5% 0 0 5%;
  }
`;

export default formStyles;
