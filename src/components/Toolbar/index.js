import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HamburgerMenu from "../Hamburger";

const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div className={css.Hamburger}>
        <HamburgerMenu openSidebar={props.openSidebar} />
      </div>

      <Logo />

      <div className={css.Menu}>
        <Menu />
      </div>
    </header>
  );
};

export default Toolbar;
