import React from 'react';
import { CheckmarkIcon } from '../../public/images';

import { FAQ, PageHeader } from '../components';
import './email-sent.less';

const EmailSent = () => (
  <>
    <PageHeader title="Успех" description="Вашето запитване беше изпратено успешно!" />
    <div className="email-sent">
      <p>Благодарим Ви, за Вашия интерес!</p>
      <p>Очаквайте отговор относно Вашето запитване, в най-кратък срок.</p>
      <p>Обикновено в рамките на 1-2 работни дни.</p>
      <img src={CheckmarkIcon} />
    </div>
    <FAQ />
  </>
);

export default EmailSent;
