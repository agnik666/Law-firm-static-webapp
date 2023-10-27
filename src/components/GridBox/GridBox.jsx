import React from "react";
import styles from "./GridBox.module.css";

function GridBox({ alter, imgSource1, imgSource2, title1, title2 }) {
  return (
    <div
      className={
        alter ? `${styles.boxWrapper} ${styles.alter}` : `${styles.boxWrapper}`
      }
    >
      <div className={styles.larger}>
        <img src={imgSource1} alt="img" />
        <h3 className={styles.title}>{title1.toUpperCase()}</h3>
      </div>
      <div className={styles.smaller}>
        <img src={imgSource2} alt="img" />
        <h3 className={styles.title}>{title2.toUpperCase()}</h3>
      </div>
    </div>
  );
}

export default GridBox;
