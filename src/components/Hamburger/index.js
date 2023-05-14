import React from 'react';
import css from './style.module.css';

const HamburgerMenu = (props) => {
  return (
    <div onClick={props.openSidebar} className={css['hamburger-menu']}>
      <span className={css.line}></span>
      <span className={css.line}></span>
      <span className={css.line}></span>
    </div>
  );
};

export default HamburgerMenu;
