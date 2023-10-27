import React, { useState } from "react";
import styles from "./FourthSection.module.css";
import RenderNavIcon from "../../NavigateIcon/RenderNavIcon";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

import Card from "../../Card/Card";

function FourthSection() {
  const [isSelected, setIsSelected] = useState(null); // will store the index value of selected card

  const handleCardClick = (cardIndex) => {
    setIsSelected(cardIndex);
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionWrapper}>
        <div className={styles.title}>
          <h1>What our happy Clients says</h1>
        </div>
        <div className={styles.buttons}>
          <RenderNavIcon IconComponent={LeftArrow} />
          <RenderNavIcon
            IconComponent={RightArrow}
            style={{ backgroundColor: "#E3B748" }}
          />
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        <Card
          index={0}
          name="Jane Cooper"
          isSelected={isSelected === 0}
          onSelect={() => handleCardClick(0)}
          type="person"
        />

        <Card
          index={1}
          name="Devon Lane"
          isSelected={isSelected === 1}
          onSelect={() => handleCardClick(1)}
          type="person"
        />

        <Card
          index={2}
          name="Robert Fox"
          isSelected={isSelected === 2}
          onSelect={() => handleCardClick(2)}
          type="person"
        />
      </div>
    </div>
  );
}

export default FourthSection;
