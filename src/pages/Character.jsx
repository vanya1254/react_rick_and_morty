import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchCardById, cardSelector } from "../redux/slices/cardSlice";
import {
  episodesSelector,
  fetchEpisodesByUrl,
} from "../redux/slices/episodesSlice";
import { fetchEpisodeByUrl } from "../redux/slices/episodeSlice";

import { CardBig } from "../components/CardBig";

export const Character = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { episode } = useSelector(cardSelector);
  const { status } = useSelector(episodesSelector);

  const getCardById = () => {
    dispatch(fetchCardById({ id }));
  };

  const getEpisodesByUrl = () => {
    dispatch(fetchEpisodesByUrl({ episode }));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getCardById();
    }

    isSearch.current = false;
    isMounted.current = true;
  }, [dispatch, fetchCardById, id]);

  React.useEffect(() => {
    if (!isMounted.current) {
      getEpisodesByUrl();
    }

    isMounted.current = false;
  }, [dispatch, fetchEpisodesByUrl, episode]);

  return (
    <section className="bottom__wrapper">
      <div className="bottom__inner">
        {status === "fulfilled" ? <CardBig /> : ""}
      </div>
    </section>
  );
};
