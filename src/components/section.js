import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionStyled = styled.div`
  margin: auto;
  margin-bottom: 50px;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    align-self: center;
    margin: 40px;
  }

  p {
    padding: 10px;
  }
`;

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
