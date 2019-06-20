/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import H2 from 'components/H2';
import Img from 'components/Img';
import CenteredSection from './CenteredSection';
import Header from 'components/Header';
import Selector from 'components/Selector';
import Footer from 'components/Footer';
import MainImg from './LadyWithPhone.png';
import styled from 'styled-components';

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexImg = styled.img`
  max-height: 300px;
  max-width: 300px;
`;

const StyledWrapper = styled.div`
  background: white;
`;

export default function HomePage() {
  const brands = {
    Apple: ['AModel1', 'AModel2', 'AModel3', 'AModel4', 'AModel5'],
    Mi: ['MiModel1', 'MiModel2', 'MiModel3', 'MiModel4', 'MiModel5'],
    Lenovo: ['LModel1', 'LModel2', 'LModel3', 'LModel4', 'LModel5'],
    HTC: ['HModel1', 'HModel2', 'HModel3', 'HModel4', 'HModel5'],
    Vivo: ['VModel1', 'VModel2', 'VModel3', 'VModel4', 'VModel5'],
  };

  const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

  return (
    <StyledWrapper>
      <Header />
      <CenteredSection>
        <H2>Insurance that Works for You</H2>
        <p>Simple.Smart.Affordable</p>
      </CenteredSection>
      <SelectorWrapper>
        <Selector brands={brands} years={years} />
        <FlexImg src={MainImg} />
      </SelectorWrapper>
      <Footer />
    </StyledWrapper>
  );
}
