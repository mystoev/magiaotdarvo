import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { AccentBar } from '.';
import { FacebookIcon, InstagramIcon } from '../../public/images';

const FooterContainer = styled.div`
  margin-top: auto;

  .footer {
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-evenly;
    background-color: var(--secondary-background-color);
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h3 {
      color: var(--main-background-color);
      margin-bottom: 10px;
      text-decoration: underline;
    }

    p,
    a {
      color: var(--main-background-color);

      span {
        font-family: Verdana;
        font-size: 0.8em;
      }
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .social-link span {
      font-size: 0.8em;
    }

    .social-icon {
      width: 24px;
      height: 24px;
    }
  }

  .copyright {
    display: block;
    font-size: 0.6em;
    line-height: 1.4em;
    text-align: center;

    span {
      font-family: Verdana;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;

    .footer-section {
      align-items: center;
      text-align: center;
    }
  }
`;

const SocialLink = ({ Img, link, children }) => (
  <a className="social-link" href={link} target="_blank" rel="noreferrer">
    {Img && <img className="social-icon" src={Img} />}
    <span>{children}</span>
  </a>
);

SocialLink.propTypes = {
  Img: PropTypes.node.isRequired,
  link: PropTypes.string,
  children: PropTypes.node
};

const Footer = () => (
  <FooterContainer>
    <AccentBar />
    <div className="footer">
      <div className="footer-section">
        <h3>Контакти</h3>

        <p>
          Телефон: <span>0890932001</span>
        </p>
        <p>
          Адрес: <span>5177, с. Сушица</span>
        </p>
        <p>
          Имейл:{' '}
          <span>
            <a href="mailto:magiaotdarvo@gmail.com">magiaotdarvo@gmail.com</a>
          </span>
        </p>
      </div>
      <div className="footer-section">
        <h3>Социални мрежи</h3>
        <SocialLink
          Img={FacebookIcon}
          link="https://www.facebook.com/profile.php?id=100048409279352">
          Facebook
        </SocialLink>
        <SocialLink Img={InstagramIcon} link="https://www.instagram.com/magiaotdarvo/">
          Instagram
        </SocialLink>
      </div>
      <div className="footer-section">
        <h3>ЧЗВ</h3>
        <HashLink to="/query#faq1">Как да поръчам?</HashLink>
        <HashLink to="/query#faq2">Колко време отнема изработката?</HashLink>
        <HashLink to="/query#faq3">Искате да поръчате вече изработен продукт?</HashLink>
      </div>
    </div>
    <div className="copyright">
      <span>©</span> 2022 Магия от дърво. Всички права запазени.
    </div>
  </FooterContainer>
);

export default Footer;
