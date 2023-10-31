import React from 'react';
import styled from 'styled-components';

const CopyrightStyled = styled.div`
  display: block;
  font-size: 0.6em;
  line-height: 1.4em;
  text-align: center;

  span {
    font-family: Verdana;
  }
`;

const Copyright = () => {
  const now = new Date();
  return (
    <CopyrightStyled>
      <span>©</span> {now.getFullYear()} Магия от дърво. Всички права запазени.
    </CopyrightStyled>
  );
};

export default Copyright;
