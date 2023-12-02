import React from "react";

import { StatusCard } from "../../redux/slices/cardSlice";

import styles from "./StatusCircle.module.scss";

type StatusCircleProps = {
  value: StatusCard;
};

const statuses = {
  Dead: "red",
  Alive: "green",
  unknown: "grey",
};

export const StatusCircle: React.FC<StatusCircleProps> = ({ value }) => {
  const classNames = require("classnames");

  const status = statuses[value];

  return <div className={classNames(styles.root, styles[status])}></div>;
};
