import React from "react";
import styles from "./Profile.module.css";

function RenderMemberProfile({ avatarUrl, name, cases, isSelected, onSelect }) {
  const selectedClass = isSelected ? styles.active : "";
  return (
    <div className={`${styles.wrapper} ${selectedClass}`} onClick={onSelect}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt="img" />
      </div>

      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{cases} Cases</p>
      </div>
    </div>
  );
}

export default RenderMemberProfile;
