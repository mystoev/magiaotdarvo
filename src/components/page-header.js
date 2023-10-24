import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AccentBar } from '.';
import './page-header.less';

const PageHeader = ({ title, description, linkTo }) => (
  <>
    <AccentBar />
    <div className="header-titles">
      {linkTo ? (
        <Link to={linkTo}>
          <h1>{title.toUpperCase()}</h1>
        </Link>
      ) : (
        <h1>{title.toUpperCase()}</h1>
      )}
      {description && <h2>{description}</h2>}
    </div>
    <AccentBar />
  </>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  linkTo: PropTypes.string
};

export default PageHeader;
