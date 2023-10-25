import React from 'react';
import styled from 'styled-components';

import { PageHeader, QueryForm } from '../components';

const ContactsContainer = styled.div`
  p {
    text-align: center;
  }

  h2 {
    text-align: center;
    margin-top: 20px;
  }

  a {
    color: var(--secondary-background-color);
  }
`;

const ContactsInfo = () => (
  <ContactsContainer>
    <h2>Телефон</h2>
    <p>0890932001</p>
    <h2>Имейл</h2>
    <p style={{ fontFamily: 'Verdana' }}>
      <a href="mailto:magiaotdarvo@gmail.com">magiaotdarvo@gmail.com</a>
    </p>
    <h2>Адрес</h2>
    <p>5177, с. Сушица, община Стражица, обл. Велико Търново</p>
  </ContactsContainer>
);

const Contacts = () => (
  <>
    <PageHeader title="Контакти" />
    <ContactsInfo />
    <QueryForm />
  </>
);

export default Contacts;
