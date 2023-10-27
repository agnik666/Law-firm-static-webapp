import React from "react";
import { ReactComponent as IntroTitle } from "../../assets/Intro-title.svg";
import { ReactComponent as MessageIcon } from "../../assets/MessageIcon.svg";
import { ReactComponent as Shape } from "../../assets/Shape.svg";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <IntroTitle />
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </div>
        <form className={styles.email}>
          <div className={styles.message}>
            <MessageIcon />
          </div>
          <input placeholder="Enter your email address" type="text" />
          <button className={styles.button}>Let's talk</button>
        </form>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.shape}>
          <Shape />
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/5297/d3a8/2fa6ad1244fd2171cc3723b4853a0c45?Expires=1699228800&Signature=qXBoBv8xHML4EYIqG73KSCfhy-WS9pMXwpaisSW4rfcDdR~XNdyutTrhn~5MVPsII9ubHAUQtIEw5wBI5Rh7BLTHBrr4eFNco221RZ9tLbfNlxliNueQtfq64Ile~o3PdG3hOqlhO7iTkrCKxbdElOJL5CMSUxMGECc2gyjA0-OE-fqGIoTLewZNNSdaD7q6gDfv1GDbI8VTO2cDTSvDv0br0uL72jgefQhgIcxwjOQn4m1WNBur7qeDPnbWACFwEt2mWw9JCl6kNGTfAUj7hSK3X-FErWiTFChWzH0OhTuwb87smLAj7N4yLEqLG5R5coaREZ3FZwmQCvISrRQisg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="placeholder"
          className={styles.person}
        />
      </div>
    </div>
  );
}

export default Intro;
