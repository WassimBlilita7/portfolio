import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Wassim</h1>
        <p className={styles.description}>
          I'm a full-stack & flutter developer with 3 years of experience using React,
          NodeJS and Flutter. Reach out if you'd like to learn more!
        </p>
        <a href="https://www.mediafire.com/file/o71gddfz1vz6sx4/BLILITA_MED-WASSIM.pdf/file"  className={styles.contactBtn}>
          View CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/wassim.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
