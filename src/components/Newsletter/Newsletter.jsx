import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div>
      <div className={styles.Wrapper}>
        <div className={styles.Newsletter}>
          <div className={styles.title}>
            <h1>Subscribe to our Newsletter</h1>
          </div>
          <div className={styles.flexbox}>
            <input className={styles.newsletterInputFirst} placeholder="Name" />
            <input
              className={styles.newsletterInputSecond}
              placeholder="Enter your Email"
            />
            <button className={styles.button}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
