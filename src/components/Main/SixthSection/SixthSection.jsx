import React, { useState } from "react";
import styles from "./SixthSection.module.css";
import RenderExpandIcon from "../../ExpandIcon/RenderExpandIcon";

const accordionsData = [
  {
    title: "Do I need a personal injury report?",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "How much is my case worth?",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "What should I do right after car accident?",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "How much is my case worth?",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
];

function SixthSection() {
  const [expandedItems, setExpandedItems] = useState(
    new Array(accordionsData.length).fill(false)
  );

  const handleClick = (index) => {
    const updatedExpandedItems = [...expandedItems];
    updatedExpandedItems[index] = !expandedItems[index];
    setExpandedItems(updatedExpandedItems);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftTextWrapper}>
        <h1>FAQ</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.rightAccordion}>
        {accordionsData.map((accordion, index) => {
          return (
            <>
              <div className={styles.accordion} key={index}>
                <button
                  className={styles.accordionTitle}
                  onClick={() => handleClick(index)}
                >
                  <h2>{accordion.title}</h2>
                  <div className={expandedItems[index] && styles.icon}>
                    <RenderExpandIcon />
                  </div>
                </button>
                {expandedItems[index] && (
                  <div class={styles.panel}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
              </div>
              {index < accordionsData.length - 1 && (
                <div className={styles.horizontalLine}></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SixthSection;
