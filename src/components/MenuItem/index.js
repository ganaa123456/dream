import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <div className={css.MenuItem}>
      <li>
      <NavLink onClick={props.closeSidebar} style={({ isActive }) => isActive ? {background: "green"} : {}} to={props.to}
        >{props.children}
     </NavLink>
      </li>
    </div>
  );
};

export default MenuItem;
