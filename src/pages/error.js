import React from 'react';
import { useRouteError } from 'react-router-dom';

import { PageHeader } from '../components';
import './error.less';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <PageHeader
        title="Упс!"
        description="Възникна неочаквана грешка. Съжаляваме за неудобството!"
      />
      <h3>Моля, опитайте да:</h3>
      <ul>
        <li>заредите друга страница;</li>
        <li>отворите страницата, по-късно;</li>
      </ul>
      <h4>Системна грешка:</h4>
      <code>{error.statusText || error.message}</code>
    </div>
  );
}
