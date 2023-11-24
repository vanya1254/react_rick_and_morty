import React from "react";
import { useSelector } from "react-redux";

import { cardsSelector } from "../../redux/slices/cardsSlice";

import { Card } from "../Card";

import styles from "./Cards.module.scss";

export const Cards = () => {
  const { cardsList } = useSelector(cardsSelector);

  return (
    <div className={styles.root}>
      {cardsList.map((card, id) => {
        return <Card key={id} {...card} />;
      })}
    </div>
  );
};
