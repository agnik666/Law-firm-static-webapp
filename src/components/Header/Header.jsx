import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as ContactNow } from "../../assets/ContactNow.svg";
import styles from "./Header.module.css";

function Header({ props }) {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <div class={styles.navlinks}>
          <p>{props.header1}</p>
          <p>{props.header2}</p>
          <p>{props.header3}</p>
          <p>{props.header4}</p>
        </div>
      </nav>
      <div className={styles.contactNow}>
        <ContactNow />
      </div>
    </header>
  );
}

export default Header;
