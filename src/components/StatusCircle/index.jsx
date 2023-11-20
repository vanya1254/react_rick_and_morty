import React from "react";

import styles from "./StatusCircle.module.scss";

export const StatusCircle = ({ value }) => {
  const classNames = require("classnames");

  const statuses = {
    Dead: "red",
    Alive: "green",
    unknown: "grey",
  };

  return (
    <div className={classNames(styles.root, styles[statuses[value]])}></div>
  );
};
