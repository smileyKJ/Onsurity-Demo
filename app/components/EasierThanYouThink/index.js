import React from 'react';
import Device from './DeviceGIF.png';
import InsuredGif from './InsuredGIF.png';
import Select from './select.png';
import H2 from 'components/H2';
import styled from 'styled-components';
import StyledDiv from './StyledDiv';
import FlexImg from './FlexImg';
import ImagesDiv from './ImagesDiv';

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
