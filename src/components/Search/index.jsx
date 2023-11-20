import React from "react";
import debounce from "lodash.debounce";

import { SearchContext } from "../../context";

import styles from "./Search.module.scss";

export const Search = () => {
  const classNames = require("classnames");

  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState("");

  const onChangeSearchValue = (value) => {
    setValue(value);
    updateSearchValue(value);
  };

  const updateSearchValue = React.useCallback(
    debounce((value) => setSearchValue(value), 1000),
    []
  );

  return (
    <form className={styles.root}>
      <button className={classNames(styles.root__btn, styles.search)}>
        <svg
          width="1.6rem"
          height="1.6rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5776 14.5419C15.5805 13.53 16.2 12.1373 16.2 10.6C16.2 7.50721 13.6928 5 10.6 5C7.50721 5 5 7.50721 5 10.6C5 13.6928 7.50721 16.2 10.6 16.2C12.1555 16.2 13.5628 15.5658 14.5776 14.5419ZM14.5776 14.5419L19 19"
            stroke="#464455"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        value={value}
        onChange={(event) => onChangeSearchValue(event.target.value)}
        className={styles.root__search}
        type="search"
        placeholder="Search ..."
      />
    </form>
  );
};
