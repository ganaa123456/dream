import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../Shadow";

const Sidebar = (props) => {

       
  return (
    <div>
          <Shadow showModal={props.showSidebar}       />
    <div  style={{
          transform: props.showSidebar ? "translateX(0)" : "translateX(-100vh)",
          opacity: props.showSidebar ? "1" : "0",
        }} className={css.Sidebar}>
        
      <div className={css.Logo}>
        <Logo />
      </div>
      <div>
         <Menu closeSidebar={props.closeSidebar} />
      </div>
      
    </div>
    </div>
    
  );
};

export default Sidebar;
