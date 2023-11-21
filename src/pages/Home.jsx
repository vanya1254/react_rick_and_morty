import React, { useContext } from "react";
import axios from "axios";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCurPage } from "../redux/slices/filterSlice";
import { setCards } from "../redux/slices/cardsSlice";

import { SearchContext } from "../context";

import { Cards } from "../components/Cards";
import { Pagination } from "../components/Pagination";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  //cur === current
  const { curPage } = useSelector((state) => state.filters);

  const { searchValue } = useContext(SearchContext);

  const [pagesCount, setPagesCount] = React.useState(1);

  const fetchCards = () => {
    const filters = [
      searchValue ? `name=${searchValue.toLowerCase().replace(" ", "&")}` : "",
      curPage > 0 ? `page=${curPage}` : "",
    ];

    const activeFilters = filters
      .filter((filter) => filter)
      .map((filter, id) => (id === 0 ? `?${filter}` : `&${filter}`));

    try {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/${activeFilters.join("")}`
        )
        .then((res) => {
          dispatch(setCards(res.data.results));
          setPagesCount(res.data.info.pages);
        })
        .catch(function (error) {
          //TODO whatif err
          if (error.response) {
            //not found
            dispatch(setCards([]));

            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const querryString = qs.stringify({
        page: curPage,
        // title: `*${searchValue.toLowerCase()}*`,
      });

      navigate(`?${querryString}`);
    }

    isMounted.current = true;
  }, [curPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(setCurPage({ ...params }));

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchCards();
    }

    isSearch.current = false;
  }, [dispatch, setPagesCount, curPage, setCards, searchValue]);

  // React.useEffect(() => {
  //   const filters = [
  //     searchValue ? `name=${searchValue.toLowerCase().replace(" ", "&")}` : "",
  //   ];

  //   // const activeFilters = filters
  //   //   .filter((filter) => filter)
  //   //   .map((filter, id) => (id === 0 ? `?${filter}` : `&${filter}`));
  //   try {
  //     axios
  //       .get(
  //         `https://rickandmortyapi.com/api/character?page=${curPage}&${filters}`
  //       )
  //       .then((res) => {
  //         dispatch(setCards(res.data.results));
  //         setPagesCount(res.data.info.pages);
  //       })
  //       .catch(function (error) {
  //         //TODO whatif err
  //         if (error.response) {
  //           //not found
  //           dispatch(setCards([]));

  //           console.log(error.response.data);
  //         } else if (error.request) {
  //           console.log(error.request);
  //         } else {
  //           console.log("Error", error.message);
  //         }
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch, setPagesCount, curPage, setCards, searchValue]);

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
