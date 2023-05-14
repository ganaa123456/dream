import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => {


      


  return (
    <div className={css.Menu}>
      <ul>
        <MenuItem closeSidebar={props.closeSidebar}  to="/">Нүүр</MenuItem>
        <MenuItem closeSidebar={props.closeSidebar}   to="/register">Бүртгүүлэх</MenuItem>
        <MenuItem closeSidebar={props.closeSidebar}   to="/contact">Холбоо барих</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
