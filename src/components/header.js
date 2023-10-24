import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HeaderMenu } from './';
import { Logo } from '../../public/images';
import './header.less';

const Header = ({ links }) => {
  return (
    <div className="menu-header">
      <Link to="/">
        <Logo />
      </Link>
      <HeaderMenu links={links} />
    </div>
  );
};

Header.propTypes = {
  links: PropTypes.array.isRequired
};

export default Header;
