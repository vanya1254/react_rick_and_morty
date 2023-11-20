import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../Card";

export const Cards = () => {
  const { cardsList } = useSelector((state) => state.cards);

  return (
    <>
      {cardsList.map((card, id) => {
        return <Card key={id} {...card} />;
      })}
    </>
  );
};
