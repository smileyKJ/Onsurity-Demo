import styled from 'styled-components';

const LogoUl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  height: 100%;
  width: 100%;
  margin: 0 0 0 5%;
  font-size: small;
  a {
    text-decoration: none;
    color: #d3d3d3;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
    a li {
      margin-left: 7%;
    }
  }
`;

export default LogoUl;
