import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

import { AccentBar } from '.';
import { FacebookIcon, InstagramIcon } from '../../public/images';
import './footer.less';

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
  <div className="footer-container">
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
  </div>
);

export default Footer;
