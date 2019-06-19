/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Selector from 'components/Selector';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  const brands = {
    Apple: ['AModel1', 'AModel2', 'AModel3', 'AModel4', 'AModel5'],
    Mi: ['MiModel1', 'MiModel2', 'MiModel3', 'MiModel4', 'MiModel5'],
    Lenovo: ['LModel1', 'LModel2', 'LModel3', 'LModel4', 'LModel5'],
    HTC: ['HModel1', 'HModel2', 'HModel3', 'HModel4', 'HModel5'],
    Vivo: ['VModel1', 'VModel2', 'VModel3', 'VModel4', 'VModel5'],
  };

  const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Selector brands={brands} years={years} />
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
