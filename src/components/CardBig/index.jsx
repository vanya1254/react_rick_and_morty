import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../Card";

export const CardBig = () => {
  const card = useSelector((state) => state.card);

  return (
    <>
      <Card {...card} />
    </>
  );
};
