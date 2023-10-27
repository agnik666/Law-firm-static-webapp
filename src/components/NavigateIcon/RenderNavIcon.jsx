import React from "react";
import styles from "./RenderNavIcon.module.css";

function RenderNavIcon({ IconComponent, style, handleClick }) {
  return (
    <div className={styles.circularWrapper} style={style} onClick={handleClick}>
      <IconComponent />
    </div>
  );
}

export default RenderNavIcon;
