import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HeaderMenu } from './';
import { Logo } from '../../public/images';

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--secondary-background-color);
  margin-bottom: 10px;

  svg {
    height: 100px;
  }

  svg,
  ul {
    margin: 20px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-between;

    svg {
      height: 50px;
    }

    svg,
    ul {
      margin: 10px;
    }
  }
`;

const Header = ({ links }) => {
  return (
    <MenuHeader>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderMenu links={links} />
    </MenuHeader>
  );
};

Header.propTypes = {
  links: PropTypes.array.isRequired
};

export default Header;
