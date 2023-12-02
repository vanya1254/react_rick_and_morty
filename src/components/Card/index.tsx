import React from "react";
import { Link } from "react-router-dom";

import { StatusCircle } from "../StatusCircle";

import { CardSliceState } from "../../redux/slices/cardSlice";

import styles from "./Card.module.scss";

export const Card: React.FC<CardSliceState> = ({
  id,
  name,
  status,
  species,
  origin,
  location,
  image,
  className,
}) => {
  const classNames = require("classnames");

  return (
    <article
      className={className ? classNames(className, styles.root) : styles.root}
    >
      <div className={styles.root__img}>
        <img src={image} alt="character" />
      </div>
      <div className={styles.root__content}>
        <div className={styles.section}>
          <Link to={`/character/${id}`} className={styles.root__title_link}>
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
          <a href={origin.url} className={styles.root_link}>
            {origin.name}
          </a>
        </div>
      </div>
    </article>
  );
};
