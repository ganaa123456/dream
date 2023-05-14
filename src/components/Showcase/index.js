import React from 'react'
import css from "./style.module.css";

const Showcase = (props) => {
  return (
    <div className={css.Showcase}>
         <h3 className={css.ShowcaseText}>Надад мөрөөдөл бий</h3>
         <button onClick={props.openModal} className={css.ShowcaseButton}>Мөрөөдлөө биелүүлэх товч</button>
    </div>
  )
}

export default Showcase;