import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { AccentBar, Copyright, SocialLink } from '.';
import { FacebookIcon, InstagramIcon } from '../../public/images';

const FooterContainer = styled.div`
  margin-top: auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const FooterStyled = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.second};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    color: ${(props) => props.theme.colors.main};
    margin-bottom: 10px;
    text-decoration: underline;
  }

  p,
  a {
    color: ${(props) => props.theme.colors.main};

    span {
      font-family: Verdana;
      font-size: 0.8em;
    }
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Footer = () => (
  <FooterContainer>
    <AccentBar />
    <FooterStyled>
      <FooterSection>
        <h3>Контакти</h3>
        <p>
          Телефон: <span>0890932001</span>
        </p>
        <p>
          Адрес: <span>5177, с. Сушица</span>
        </p>
        <p>
          Имейл:
          <span>
            <a href="mailto:magiaotdarvo@gmail.com">{' magiaotdarvo@gmail.com'}</a>
          </span>
        </p>
      </FooterSection>
      <FooterSection>
        <h3>Социални мрежи</h3>
        <SocialLink
          Img={FacebookIcon}
          link="https://www.facebook.com/profile.php?id=100048409279352">
          Facebook
        </SocialLink>
        <SocialLink Img={InstagramIcon} link="https://www.instagram.com/magiaotdarvo/">
          Instagram
        </SocialLink>
      </FooterSection>
      <FooterSection>
        <h3>ЧЗВ</h3>
        <HashLink to="/query#faq1">Как да поръчам?</HashLink>
        <HashLink to="/query#faq2">Колко време отнема изработката?</HashLink>
        <HashLink to="/query#faq3">Искате да поръчате вече изработен продукт?</HashLink>
      </FooterSection>
    </FooterStyled>
    <Copyright />
  </FooterContainer>
);

export default Footer;
