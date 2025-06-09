import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>Feel free to reach out!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:wassim.blilita19@gmail.com" className={styles.linkBtn}>
              <img src={getImageUrl("contact/emailIcon.png")}
                   alt="Email icon" className={styles.icon} />
              Email
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/mohamed-wassim-blilita-27a01a216/" target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              <img src={getImageUrl("contact/linkedinIcon.png")}
                   alt="LinkedIn icon" className={styles.icon} />
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.github.com/wassimblilita7" target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              <img src={getImageUrl("contact/githubIcon.png")}
                   alt="Github icon" className={styles.icon} />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
