import React from 'react';
import styled from 'styled-components';

import { FAQ, PageHeader } from '../../components';
import { CheckmarkIcon } from '../../../public/images';

const EmailSentContainer = styled.div`
  text-align: center;
  margin: 70px auto;

  img {
    margin-top: 20px;
    width: 160px;
  }
`;

const EmailSent = () => (
  <>
    <PageHeader title="Успех" description="Вашето запитване беше изпратено успешно!" />
    <EmailSentContainer>
      <p>Благодарим Ви, за Вашия интерес!</p>
      <p>Очаквайте отговор относно Вашето запитване, в най-кратък срок.</p>
      <p>Обикновено в рамките на 1-2 работни дни.</p>
      <img src={CheckmarkIcon} />
    </EmailSentContainer>
    <FAQ />
  </>
);

export default EmailSent;
