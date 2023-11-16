import React from "react";

import styles from "./StatusCircle.module.scss";

export const StatusCircle = () => {
  const [status, setStatus] = React.useState("Unknown");
  const statuses = {
    Unknown: "grey",
    Alive: "green",
    Dead: "red",
  };

  return <div className={styles.circle}></div>;
};
