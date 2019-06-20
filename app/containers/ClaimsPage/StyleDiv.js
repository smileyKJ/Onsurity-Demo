import styled from 'styled-components';

const StyleDiv = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  justify-content: space-between;
  background: white;
  h2 {
    text-align: center;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export default StyleDiv;
