import React from "react";
import styles from "./RenderNavIcon.module.css";

function RenderNavIcon({ IconComponent, style }) {
  return (
    <div className={styles.circularWrapper} style={style}>
      <IconComponent />
    </div>
  );
}

export default RenderNavIcon;
