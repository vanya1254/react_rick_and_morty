import React from "react";
import qs from "qs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../redux/store";

import { filterSelector, setFilters } from "../redux/slices/filterSlice";
import { fetchCards, cardsSelector } from "../redux/slices/cardsSlice";

import { Cards } from "../components/Cards";
import { Pagination } from "../components/Pagination";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  //cur === current
  const { curPage, searchValue } = useSelector(filterSelector);
  const { pagesCount } = useSelector(cardsSelector);

  const getCards = () => {
    const filters = [
      searchValue ? `name=${searchValue.toLowerCase().replace(" ", "&")}` : "",
      curPage > 0 ? `page=${curPage}` : "",
    ];

    const activeFilters = filters
      .filter((filter) => filter)
      .map((filter, id) => (id === 0 ? `?${filter}` : `&${filter}`));

    dispatch(fetchCards({ activeFilters: activeFilters.join("") }));
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const querryString = qs.stringify({
        page: curPage,
        name: searchValue.toLowerCase(),
      });

      navigate(`?${querryString}`);
    }

    isMounted.current = true;
  }, [curPage, searchValue]);

  React.useEffect(() => {
    if (window.location.search) {
      const { page, name } = qs.parse(window.location.search.substring(1));

      if (page && name) {
        dispatch(
          setFilters({ curPage: Number(page), searchValue: String(name) })
        );
      }

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getCards();
    }

    isSearch.current = false;
  }, [dispatch, curPage, fetchCards, searchValue]);

  return (
    <>
      <section className="top__wrapper">
        <h1 className="top__title">
          Thanks a lot for the free{" "}
          <a className="top__title" href="https://rickandmortyapi.com/">
            API
          </a>
        </h1>
        <div className="top-img"></div>
      </section>
      <section className="bottom__wrapper">
        <div className="bottom__inner">
          <Cards />
          <Pagination pages={pagesCount} />
        </div>
      </section>
    </>
  );
};
