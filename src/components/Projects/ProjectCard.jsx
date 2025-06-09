import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.accent} />
      <div className={styles.header}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div>
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="demo">🔗</span> Demo
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="source">💻</span> Code
        </a>
      </div>
    </div>
  );
};
