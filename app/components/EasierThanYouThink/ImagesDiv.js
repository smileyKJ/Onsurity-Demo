import styled from 'styled-components';

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default ImagesDiv;
