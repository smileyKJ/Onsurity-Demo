import styled from 'styled-components';

const NavigationUl = styled.ul`
  display: flex;
  font-size: 12px;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #d3d3d3;

    &:hover {
      color: white;
    }
  }

  li {
    list-style: none;
  }
`;

export default NavigationUl;
