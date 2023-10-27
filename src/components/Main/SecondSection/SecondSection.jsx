import React, { useState } from "react";
import Card from "../../Card/Card";
import styles from "./SecondSection.module.css";

function SecondSection() {
  const [isSelected, setIsSelected] = useState(null); // will store the index value of selected card

  const handleCardClick = (cardIndex) => {
    setIsSelected(cardIndex);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.title}>
        <h1>Why Choose us?</h1>
      </div>
      <div className={styles.wrapper}>
        <Card
          rate="98"
          isSelected={isSelected === 0}
          onSelect={() => handleCardClick(0)}
          type="plans"
        />
        <Card
          rate="100"
          isSelected={isSelected === 1}
          onSelect={() => handleCardClick(1)}
          type="plans"
        />
        <Card
          rate="100"
          isSelected={isSelected === 2}
          onSelect={() => handleCardClick(2)}
          type="plans"
        />
      </div>
    </div>
  );
}

export default SecondSection;
