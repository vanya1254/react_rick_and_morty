import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../Card";

import { cardSelector } from "../../redux/slices/cardSlice";
// import {
//   episodesSelector,
//   setCurEpisode,
// } from "../../redux/slices/episodesSlice";
import { characterSelector } from "../../redux/slices/character/selectors";
import { setCurEpisode } from "../../redux/slices/character/slice";

import styles from "./CardBig.module.scss";
import { fetchCharactersByUrl } from "../../redux/slices/charactersSlice";
import { useAppDispatch } from "../../redux/store";

// type CardBigProps = {
//   onChangeEpisode: async (idx: number) => void;
// };

export const CardBig: React.FC = () => {
  const dispatch = useAppDispatch();
  const classNames = require("classnames");

  const card = useSelector(cardSelector);

  // const { episodesList, curEpisode } = useSelector(episodesSelector);
  const { episodesList, curEpisode, charactersList } =
    useSelector(characterSelector);

  // const charactersList = [{ name: 1 }, { name: 2 }, { name: 3 }];

  const onClickEpisode = async (idx: number) => {
    dispatch(setCurEpisode(idx));
    await dispatch(
      fetchCharactersByUrl({ characters: episodesList[curEpisode].characters })
    );
  };

  React.useEffect(() => {
    dispatch(setCurEpisode(0));
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.root__card}>
        <Card className={styles.root__card__component} {...card} />
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
                onClick={() => onClickEpisode(i)}
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
          <h4 className={classNames(styles.root__subtitle, styles.ep)}>
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
