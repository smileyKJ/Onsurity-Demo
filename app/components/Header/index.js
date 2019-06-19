import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Logo from './logo_black.png';

const HeaderWrapper = styled.div`
  display: flex;
  margin: 2%;
`;

const LogoContainer = styled.div`
  flex: 3;
`;

function Header() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <A href="#">
          <Img src={Logo} alt="onSurity-Logo" />
        </A>
      </LogoContainer>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.homepage} />
        </HeaderLink>
        <HeaderLink to="/claims">
          <FormattedMessage {...messages.claims} />
        </HeaderLink>
        <HeaderLink to="/about-us">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
        <HeaderLink to="/contact-us">
          <FormattedMessage {...messages.contact} />
        </HeaderLink>
      </NavBar>
    </HeaderWrapper>
  );
}

export default Header;
