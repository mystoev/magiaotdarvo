import React from 'react';
import { Outlet } from 'react-router-dom';

import { useScrollTop } from '../hooks/use-scroll-top';
import CookieConsent from 'react-cookie-consent';
import { Header, Footer } from '../components';
import { Styles } from './styles';

const Master = () => {
  useScrollTop();

  return (
    <>
      <Styles />
      <Header
        links={[
          { to: '/', text: 'Начало' },
          { to: 'products', text: 'Изделия' },
          { to: 'query', text: 'Запитване' },
          { to: 'about', text: 'За мен' },
          { to: 'contacts', text: 'Контакти' }
        ]}
      />
      <Outlet />
      <Footer />
      <CookieConsent location="bottom" cookieName="magiaotdarvo.com" buttonText="Разбрах">
        Този сайт използва бисквитки, за да работи оптимално за Вас.
      </CookieConsent>
    </>
  );
};

export default Master;
