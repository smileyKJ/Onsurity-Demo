import React from 'react';
import Device from './DeviceGIF.png';
import InsuredGif from './InsuredGIF.png';
import Select from './select.png';
import H2 from 'components/H2';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;

const FlexImg = styled.img`
  max-height: 150px;
  max-width: 150px;
  margin-bottom: 10%;
`;

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const EasierThanYouThink = () => {
  return (
    <StyledDiv>
      <H2>It's Easier than You Think</H2>
      <ImagesDiv>
        <figure>
          <FlexImg src={Device} />
          <figcaption>Tell us about your device</figcaption>
        </figure>
        <figure>
          <FlexImg src={Select} />
          <figcaption>Select a personalised plan</figcaption>
        </figure>
        <figure>
          <FlexImg src={InsuredGif} />
          <figcaption>Pay and get insured instantly</figcaption>
        </figure>
      </ImagesDiv>
    </StyledDiv>
  );
};

export default EasierThanYouThink;
