import React from 'react'
import css from "./style.module.css";
import LogoImage from "../../assets/logo.jpg"

const Logo = () => {
  return (
    <div className={css.Logo}>
         <img src={LogoImage} alt="logo" />
    </div>
  )
}

export default Logo