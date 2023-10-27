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
          avatarUrl="https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1699228800&Signature=LmJCO4-REJLg3XO1LkR~9bA9YN0maqjXbYb~JfEIxcoJ~-YwtgEmPGXcyNhRX4CEIpuUKX4~-FmroV9qnKEdtIqTVwq4jewLfx0VeTw2ZMSYW9iMOy6BxGLLCiqNUJlXJ0tM8g2SPtTcwC56lmvp7098SxKre545vjE6oX04ih13cIOWM~RiIahBPonWZch~PSSOucdJWBZQasm1pCKMDteZkQOXqqmoZO-2-BWa9Lt1qHbyTLuuq3l5TQENx-z3hPWDqgHGmUiBaCqcpadvcvSpPm6~rFDvHDS9rhwHRBo0ofsTkCXfOsjxzbGhCp8Bqt8XZODJlRKrweRzNhr4xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          name="Jane Cooper"
          isSelected={isSelected === 0}
          onSelect={() => handleCardClick(0)}
          type="person"
        />

        <Card
          avatarUrl="https://s3-alpha-sig.figma.com/img/8fe7/ad6b/85c053224d98bfd7e680608c07f3c239?Expires=1699228800&Signature=aFMoRVi2bFU08R-vuYM4l10hVnYa8XcthaflLuqnc7Xh0Y9eMqJkU5sa1HxAixifnSIOXdH-0Os01XW2V3t0U9ACZTFWwtl4zRyXfPTjl2uwvXdvPHUjLttYKplC3EptunE1HSXPiUnY-EDKoavgNLSgbhrdaFVqdB3YHhmueYatp0Met9RY~TC2IwQ9psJZCx2jUbljPMSv1xNVSlzJLtRed40IetQA5l-XHEXYFliPRooxSt1rGvpm7Wz8ZvndNOeqvlHhz4IvKvyprXfKPxP2vqmfW2iWKfOG0Gy4iJRnN5Kl6CClzD6576Rw8h0YGlbC81b56od0s47a9ONL8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          name="Devon Lane"
          isSelected={isSelected === 1}
          onSelect={() => handleCardClick(1)}
          type="person"
        />

        <Card
          avatarUrl="https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1699228800&Signature=npmHqX2E0cTqEQIIp5tckdxeYt0eSMkwax1mnZNKOo53iMa2tgCTNhxmQrPcXfcU7BVGBsEv1nb6buO~pXX0LzsOcs7l~eQzUw-Ipl~JB7u93lzJDzm5Cu6tDciMa9KDC~w1yL1bvu6N2qFkVC5nPGBr-uiCrONxH09xrGwqEqYcQpSiuzxJ9qzlmDSXtdn0WOrYYRPD6M5InkM2p9OYyIG7zfCr44JHKH~VcJYFiXIHnxgNjFnFdNdJDli9zM2lta82HxVtPPeib5z0Vt9UQnp2jXmYMUUozqPIRgqz6Jge3TRwWlsA7r9MMkANPDkXIFjQH2WtMgP2ZGMa9WzzHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
