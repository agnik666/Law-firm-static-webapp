import React from "react";
import styles from "./Card.module.css";
import RenderBuyIcon from "../BuyIcon/RenderBuyIcon";

function Card({ isSelected, rate, onSelect, avatarUrl, name, type }) {
  const selectedClass = isSelected ? styles.active : "";

  switch (type) {
    case "plans":
      return (
        <div
          className={`${styles.cardWrapper} ${selectedClass}`}
          onClick={onSelect}
        >
          <RenderBuyIcon />
          <div className={styles.title}>
            <h2>{rate}% Success Rate</h2>
          </div>
          <div className={styles.subtitle}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div className={styles.button}>
            <button>Read More</button>
          </div>
        </div>
      );

    case "person":
      return (
        <div
          className={`${styles.cardWrapper} ${selectedClass}`}
          onClick={onSelect}
        >
          <img src={avatarUrl} alt="avatar" className={styles.avatar} />
          <div className={styles.title}>
            <h2>{name}</h2>
          </div>
          <div className={styles.title}>
            <h4 style={{ fontWeight: 200 }}>CEO of Hunt</h4>
          </div>
          <div className={styles.subtitle}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
        </div>
      );
    default:
      return <></>;
  }
}

export default Card;
