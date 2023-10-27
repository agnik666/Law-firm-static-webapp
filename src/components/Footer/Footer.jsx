import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import styles from "./Footer.module.css";
import { ReactComponent as InstaIcon } from "../../assets/InstaIcon.svg";
import { ReactComponent as FbIcon } from "../../assets/FbIcon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/TwitterIcon.svg";
import { ReactComponent as PinterestIcon } from "../../assets/PinterestIcon.svg";

function Footer({ props }) {
  return (
    <footer>
      <div className={styles.footer}>
        <Logo />
        <nav>
          <div class={styles.navlinks}>
            <p>{props.header1}</p>
            <p>{props.header2}</p>
            <p>{props.header3}</p>
            <p>{props.header4}</p>
          </div>
        </nav>
        <div className={styles.socialLinks}>
          <InstaIcon />
          <FbIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </div>
      <div className={styles.footerDetails}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
}

export default Footer;
