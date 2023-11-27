import React from "react";
import { useSelector } from "react-redux";

import { cardsSelector } from "../../redux/slices/cardsSlice";

import { Card } from "../Card";
import CardSkeleton from "../Skeletons/CardSkeleton";

import styles from "./Cards.module.scss";

export const Cards = () => {
  const { cardsList, status } = useSelector(cardsSelector);

  return (
    <div className={styles.root}>
      {status === "fulfilled"
        ? cardsList.map((card, id) => {
            return <Card key={id} {...card} />;
          })
        : [...new Array(8)].map((_, i) => <CardSkeleton key={i} />)}
    </div>
  );
};
