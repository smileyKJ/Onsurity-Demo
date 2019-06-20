import React from 'react';
import Wrapper from './Wrapper';
import Img from './Img';
import Logo from './logo_black.png';
import LogoUl from './LogoUl';
import NavigationWrapper from './NavigationWrapper';
import NavigationUl from './NavigationUl';
import ContactWrapper from './ContactWrapper';
import ContactUl from './ContactUl';

function Footer() {
  return (
    <Wrapper>
      <div>
        <LogoUl>
          <li>
            <a href="#">
              <Img src={Logo} />
            </a>
          </li>
          <a href="#">
            <li>&copy; Onsurity All Rights Reserved 2019</li>
          </a>
        </LogoUl>
      </div>
      <NavigationWrapper>
        <NavigationUl>
          <h3>Navigation</h3>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Products</li>
          </a>
          <a href="#">
            <li>Claims</li>
          </a>
          <a href="#">
            <li>Plans</li>
          </a>
          <a href="#">
            <li>Terms of Use</li>
          </a>
          <a href="#">
            <li>Sitemap</li>
          </a>
        </NavigationUl>
        <NavigationUl style={{ paddingTop: '50px' }}>
          <a href="#">
            <li>Brand Terms of Use</li>
          </a>
          <a href="#">
            <li>Cookie Use</li>
          </a>
          <a href="#">
            <li>Privacy Policy</li>
          </a>
          <a href="#">
            <li>Support</li>
          </a>
          <a href="#">
            <li>Login</li>
          </a>
        </NavigationUl>
      </NavigationWrapper>
      <ContactWrapper>
        <ContactUl>
          <h3>Contact</h3>
          <a href="#">
            <li>info@onsurity.com</li>
          </a>
          <a href="#">+1 234 234 2346</a>
        </ContactUl>
      </ContactWrapper>
    </Wrapper>
  );
}

export default Footer;
