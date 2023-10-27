import React from "react";
import styles from "./ExpandIcon.module.css";
import { ReactComponent as ExpandMoreIcon } from "../../assets/ExpandMoreIcon.svg";
function RenderExpandIcon() {
  return (
    <div className={styles.circularWrapper}>
      <ExpandMoreIcon />
    </div>
  );
}

export default RenderExpandIcon;
