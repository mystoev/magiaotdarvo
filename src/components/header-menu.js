import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Menu } from '../../public/images';
import './header-menu.less';

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
      <div className="header-menu-small">
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
      </div>
      <ul className="header-menu">
        {links.map(({ to, text }) => (
          <li key={text}>
            <Link to={to}>{text.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

HeaderMenu.propTypes = {
  links: PropTypes.array.isRequired
};

export default HeaderMenu;
