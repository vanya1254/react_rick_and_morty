import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { require } from "classnames";

import { Card } from "../Card";

import styles from "./CardBig.module.scss";

import { cardSelector } from "../../redux/slices/cardSlice";
import {
  episodesSelector,
  setCurEpisode,
} from "../../redux/slices/episodesSlice";
import { charactersSelector } from "../../redux/slices/charactersSlice";

export const CardBig = () => {
  const dispatch = useDispatch();

  const card = useSelector(cardSelector);

  const classNames = require("classnames");
  const { episodesList, curEpisode } = useSelector(episodesSelector);
  const { charactersList } = useSelector(charactersSelector);

  // const charactersList = [{ name: 1 }, { name: 2 }, { name: 3 }];

  return (
    <div className={styles.root}>
      <div className={styles.root__card}>
        <Card {...card} />
        <div className={styles.root__card__description}>
          <div className={styles.section}>
            <span className={styles.textGray}>Type:</span>
            <span className={styles.root_link}>
              {card.type ? card.type : "unknown"}
            </span>
          </div>
          <div className={styles.section}>
            <span className={styles.textGray}>Gender:</span>
            <span className={styles.root_link}>{card.gender}</span>
          </div>
          <div className={styles.section}>
            <span className={styles.textGray}>Created at:</span>
            <span className={styles.root_link}>{card.created}</span>
          </div>
        </div>
      </div>
      <div className={styles.root__content}>
        <section className={styles.root__episodes}>
          <h2 className={styles.root__title}>Episodes</h2>
          <ul>
            {episodesList.map((episode, i) => (
              <li
                className={curEpisode === i ? `${styles.root__active}` : ""}
                key={episode.id}
                onClick={() => dispatch(setCurEpisode(i))}
              >
                {episode.name}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.root__episode}>
          <h2 className={styles.root__title}>
            {episodesList[curEpisode].name}
          </h2>
          <h4 className={classNames(styles.root__subtitle, styles.textGray)}>
            {episodesList[curEpisode].episode}
          </h4>
          <article className={styles.root__episode__character}>
            <h3 className={styles.root__title}>Characters</h3>
            <ul>
              {charactersList.map((character, id) => (
                <li key={id}>{character.name}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
};
