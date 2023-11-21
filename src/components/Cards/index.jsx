import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../Card";

import styles from "./Cards.module.scss";

export const Cards = () => {
  const { cardsList } = useSelector((state) => state.cards);

  return (
    <div className={styles.root}>
      {cardsList.map((card, id) => {
        return <Card key={id} {...card} />;
      })}
    </div>
  );
};
