import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccentBarSlim = styled.div`
  width: 100%;
  background-color: var(--secondary-accent);
  opacity: 0.5;
  height: 1px;
`;

const AccentBarNormal = styled.div`
  width: 100%;
  background-color: var(--secondary-accent);
  opacity: 0.5;
  height: 3px;
`;

const AccentBar = ({ slim }) => {
  return slim ? <AccentBarSlim></AccentBarSlim> : <AccentBarNormal></AccentBarNormal>;
};

AccentBar.propTypes = {
  slim: PropTypes.bool
};

export default AccentBar;
