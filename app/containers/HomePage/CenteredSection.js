import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 10%;
  }
`;

export default CenteredSection;
