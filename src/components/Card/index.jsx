import React from "react";
import { Link } from "react-router-dom";

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
    <article className={styles.root}>
      <div className={styles.root__img}>
        <img src={image} alt="character" />
      </div>
      <div className={styles.root__content}>
        <div className={styles.section}>
          <Link
            to="/character"
            state={{ id }}
            className={styles.root__title_link}
          >
            <h2>{name}</h2>
          </Link>
          <span className={styles.status}>
            <span className={styles.status__icon}>
              <StatusCircle value={status} />
              {status}
              {" - "} {species}
            </span>
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.textGray}>Last known location:</span>
          <a href={location.url} className={styles.root_link}>
            {location.name}
          </a>
        </div>
        <div className={styles.section}>
          <span className={styles.textGray}>First seen in:</span>
          <a href={episode[0]} className={styles.root_link}>
            {/* {episode[0].replace("https://rickandmortyapi.com/api/episode/", "")} */}
            ff
          </a>
        </div>
      </div>
    </article>
  );
};
