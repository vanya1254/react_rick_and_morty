import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setCards } from "./redux/slices/cardsSlice";

import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
// import Image from "./assets/img/rick-and-morty.jpg";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    //   const filters = [
    //   activeCategory > 0 ? `category=${activeCategory}` : "",
    //   activeSortType.sortProperty !== "rating"
    //     ? `sortBy=${activeSortType.sortProperty}`
    //     : "",
    //   searchValue ? `title=*${searchValue.toLowerCase()}*` : "",
    //   activePage > 0 ? `page=${activePage}&limit=${limit}` : "",
    // ];

    // const activeFilters = filters
    //   .filter((filter) => filter)
    //   .map((filter, id) => (id === 0 ? `?${filter}` : `&${filter}`));

    axios
      .get("https://rickandmortyapi.com/api/character?page=5")
      .then((res) => {
        dispatch(setCards(res.data.results));
      });
  }, [dispatch, setCards]);

  return (
    <>
      <Header />

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

      <footer className="footer__wrapper"></footer>
    </>
  );
}

export default App;
