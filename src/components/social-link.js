import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SocialLinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  > span {
    font-size: 0.8em;
  }

  > img {
    width: 24px;
    height: 24px;
  }
`;

const SocialLink = ({ Img, link, children }) => (
  <SocialLinkStyled href={link} target="_blank" rel="noreferrer">
    {Img && <img src={Img} />}
    <span>{children}</span>
  </SocialLinkStyled>
);

SocialLink.propTypes = {
  Img: PropTypes.node.isRequired,
  link: PropTypes.string,
  children: PropTypes.node
};

export default SocialLink;
