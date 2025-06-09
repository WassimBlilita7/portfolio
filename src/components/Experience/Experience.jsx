import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const degreeIcon = (role) => {
  if (role.toLowerCase().includes("master")) return "🎓";
  if (role.toLowerCase().includes("bachelor")) return "🧑‍💻";
  return "🏅";
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skillCard}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.historyTimeline}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyCard}>
              <div className={styles.timelineAccent} />
              <div className={styles.historyImageWrapper}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.historyImage}
                />
                <span className={styles.degreeIcon}>{degreeIcon(historyItem.role)}</span>
              </div>
              <div className={styles.historyDetails}>
                <h3>{historyItem.role}</h3>
                <span className={styles.org}>{historyItem.organisation}</span>
                <span className={styles.date}>{historyItem.startDate} - {historyItem.endDate}</span>
                <ul className={styles.experiences}>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
