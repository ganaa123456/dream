import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";

const Modal = (props) => {
  return (
    <div>
      <Shadow showModal={props.showModal} />
      <div
        
        style={{
          transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.showModal ? "1" : "0",
        }}
        className={css.Modal}
      >
        <div style={{textAlign: "center"}}>
        {props.children}
        </div>
        
        <br/>
        <br/>
        <div className={css.ModalButton}>
        <button onClick={props.closeModal} style={{color: "green"}}>Зөвшөөрч байна</button>
         <button onClick={props.closeModal} style={{color: "red"}}>Татгалзах</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Modal;
