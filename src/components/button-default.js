import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0px;
  border-radius: 3px;
  font-size: 1em;
  font-weight: bold;
  font-family: azbuki;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.second};
  padding: 15px 40px;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    cursor: auto;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    white-space: nowrap;
  }
`;

const DefaultButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

DefaultButton.propTypes = {
  children: PropTypes.node
};

export default DefaultButton;
