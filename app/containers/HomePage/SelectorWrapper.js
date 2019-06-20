import styled from 'styled-components';

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  box-sizing: border-box, content-box;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    height: 75vh;

    img {
      width: 250px;
      margin-top: 5%;
      margin-bottom: 5%;
    }
  }
`;

export default SelectorWrapper;
