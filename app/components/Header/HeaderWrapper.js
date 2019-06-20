import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  margin: 2%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default HeaderWrapper;
