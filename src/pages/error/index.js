import React from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

import { PageHeader } from '../../components';

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h3,
  h4 {
    margin-top: 30px;
  }

  code {
    margin-top: 10px;
    border: 1px solid rgba(100, 100, 100, 0.1);
    border-radius: 3px;
    background-color: rgba(100, 100, 100, 0.2);
    padding: 10px 40px;
    font-size: 0.7em;
  }

  .header-titles {
    width: 100%;
  }
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorPageContainer>
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
    </ErrorPageContainer>
  );
}
