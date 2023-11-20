import React, { useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setCards } from "../redux/slices/cardsSlice";

import { SearchContext } from "../context";

import { Cards } from "../components/Cards";

export const Home = () => {
  const dispatch = useDispatch();

  //cur === current
  const { curPage } = useSelector((state) => state.filters);

  const { searchValue } = useContext(SearchContext);

  React.useEffect(() => {
    const filters = [
      searchValue ? `name=${searchValue.toLowerCase().replace(" ", "&")}` : "",
    ];

    // const activeFilters = filters
    //   .filter((filter) => filter)
    //   .map((filter, id) => (id === 0 ? `?${filter}` : `&${filter}`));
    try {
      axios
        .get(`https://rickandmortyapi.com/api/character?page=5&${filters}`)
        .then((res) => {
          dispatch(setCards(res.data.results));
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
  }, [dispatch, setCards, searchValue]);

  return (
    <main className="layout__main">
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
        </div>
      </section>
    </main>
  );
};
