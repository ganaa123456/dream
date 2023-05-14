import React from "react";
import css from "./style.module.css";

const Shadow = (props) => {
  return (
      
        props.showModal ? <div className={css.Shadow}></div> : null

      
      
  );
};

export default Shadow;
