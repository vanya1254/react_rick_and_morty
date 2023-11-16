import React from "react";

import { StatusCircle } from "../StatusCircle";

import styles from "./Card.module.scss";

export const Card = () => {
  return (
    <article className={styles.card}>
      <div className={styles.card__img}>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/810.jpeg"
          alt="person"
        />
      </div>
      <div className={styles.card__content}>
        <div className={styles.section}>
          <a href="/" className={styles.card__title_link}>
            <h2>Stan Lee Rick</h2>
          </a>
          <span className={styles.status}>
            <span className={styles.status__icon}>
              {"Unknown" === "Unknown" ? <StatusCircle /> : ""}
              {"Unknown"}
              {" - "} {"Human"}
            </span>
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.textGray}>Last known location:</span>
          <a href="/" className={styles.card_link}>
            Citadel of Ricks
          </a>
        </div>
        <div className={styles.section}>
          <span className={styles.textGray}>First seen in:</span>
          <a href="/" className={styles.card_link}>
            Rickmurai Jack
          </a>
        </div>
      </div>
    </article>
  );
};
