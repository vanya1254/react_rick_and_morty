import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import { setCurPage, filterSelector } from "../../redux/slices/filterSlice";

import styles from "./Pagination.module.scss";

export const Pagination = ({ pages }) => {
  const dispatch = useDispatch();
  const { curPage } = useSelector(filterSelector);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => dispatch(setCurPage(event.selected + 1))}
      pageCount={pages}
      forcePage={curPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
