import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Menu } from '../../public/images';

const MenuSmall = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    .menu-icon {
      height: 40px;
      margin-right: 20px !important;
    }

    .header-menu-background-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
    }

    .header-menu-overlay {
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px 0;
      width: calc(100% - 2px);

      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${(props) => props.theme.colors.second};
      border: 1px solid ${(props) => props.theme.colors.main};
      gap: 20px;
      z-index: 9;

      li {
        border-bottom: 1px solid ${(props) => props.theme.colors.main};
      }
    }
  }
`;

const MenuDefault = styled.ul`
  margin: 50px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  li {
    font-size: 0.9em;
    list-style-type: none;
    white-space: nowrap;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderMenu = ({ links }) => {
  const [show, setShow] = useState(false);

  const overlayRef = useRef();
  useEffect(() => {
    if (!show) {
      return;
    }

    overlayRef.current.style.height = document.body.scrollHeight + 'px';
  }, [show]);

  return (
    <>
      <MenuSmall>
        <Menu className="menu-icon" onClick={() => setShow(!show)} />
        {show && (
          <>
            <div className="header-menu-overlay">
              {links.map(({ to, text }) => (
                <li key={text}>
                  <Link to={to} onClick={() => setShow(false)}>
                    {text.toUpperCase()}
                  </Link>
                </li>
              ))}
            </div>
            <div
              ref={overlayRef}
              className="header-menu-background-overlay"
              onClick={() => setShow(false)}></div>
          </>
        )}
      </MenuSmall>
      <MenuDefault>
        {links.map(({ to, text }) => (
          <li key={text}>
            <Link to={to}>{text.toUpperCase()}</Link>
          </li>
        ))}
      </MenuDefault>
    </>
  );
};

HeaderMenu.propTypes = {
  links: PropTypes.array.isRequired
};

export default HeaderMenu;
