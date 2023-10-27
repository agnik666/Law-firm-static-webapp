import React from "react";
import styles from "./RenderBuyIcon.module.css";
import { ReactComponent as GiftIcon } from "../../assets/GiftIcon.svg";
function RenderBuyIcon() {
  return (
    <div className={styles.circularWrapper}>
      <GiftIcon />
    </div>
  );
}

export default RenderBuyIcon;
