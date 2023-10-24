import React from 'react';

import { PageHeader, QueryForm } from '../components';
import './contacts.less';

const ContactsInfo = () => (
  <div className="contacts-container">
    <h2>Телефон</h2>
    <p>0890932001</p>
    <h2>Имейл</h2>
    <p style={{ fontFamily: 'Verdana' }}>
      <a href="mailto:magiaotdarvo@gmail.com">magiaotdarvo@gmail.com</a>
    </p>
    <h2>Адрес</h2>
    <p>5177, с. Сушица, община Стражица, обл. Велико Търново</p>
  </div>
);

const Contacts = () => (
  <>
    <PageHeader title="Контакти" />
    <ContactsInfo />
    <QueryForm />
  </>
);

export default Contacts;
