import React from "react";
import { useSelector } from "react-redux";

import { StatusCircle } from "../StatusCircle";

import styles from "./Card.module.scss";

export const Card = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__img}>
        <img src={image} alt="character" />
      </div>
      <div className={styles.card__content}>
        <div className={styles.section}>
          <a href="/" className={styles.card__title_link}>
            <h2>{name}</h2>
          </a>
          <span className={styles.status}>
            <span className={styles.status__icon}>
              <StatusCircle value={status} />
              {origin.name}
              {" - "} {species}
            </span>
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.textGray}>Last known location:</span>
          <a href={location.url} className={styles.card_link}>
            {location.name}
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
