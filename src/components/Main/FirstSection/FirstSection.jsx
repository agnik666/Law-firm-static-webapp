import React from "react";
import styles from "./FirstSection.module.css";

function FirstSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftTextWrapper}>
        <h1>Let’s Introduce Ourself</h1>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.line}></div>
        <div className={styles.rightTextWrapper}>
          <h2>Criminal Lawyer</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
