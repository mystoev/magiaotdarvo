import React from 'react';
import PropTypes from 'prop-types';

import './accent-bar.less';

const AccentBar = ({ slim }) => (
  <div className={slim ? 'accent-bar slim' : 'accent-bar normal'}></div>
);

AccentBar.propTypes = {
  slim: PropTypes.bool
};

export default AccentBar;
