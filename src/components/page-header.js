import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AccentBar } from '.';

const HeaderTitles = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.second};

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 1.2em;
  }

  h1,
  h2 {
    color: ${(props) => props.theme.colors.main};
    text-shadow: 0px 0px 10px ${(props) => props.theme.colors.accent};
    text-decoration: none;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1em;
    }
  }
`;

const PageHeader = ({ title, description, linkTo }) => (
  <>
    <AccentBar />
    <HeaderTitles>
      {linkTo ? (
        <Link to={linkTo}>
          <h1>{title.toUpperCase()}</h1>
        </Link>
      ) : (
        <h1>{title.toUpperCase()}</h1>
      )}
      {description && <h2>{description}</h2>}
    </HeaderTitles>
    <AccentBar />
  </>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  linkTo: PropTypes.string
};

export default PageHeader;
