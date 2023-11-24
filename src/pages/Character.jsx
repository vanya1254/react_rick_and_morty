import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchCardById, cardSelector } from "../redux/slices/cardSlice";
import {
  episodesSelector,
  fetchEpisodesByUrl,
} from "../redux/slices/episodesSlice";
import {
  fetchCharactersByUrl,
  charactersSelector,
} from "../redux/slices/charactersSlice";

import { CardBig } from "../components/CardBig";

export const Character = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;

  const isCard = React.useRef(false);
  const isEpisodes = React.useRef(false);
  const isCharacters = React.useRef(false);

  const { episode } = useSelector(cardSelector);
  const { curEpisode, episodesList } = useSelector(episodesSelector);
  const { status } = useSelector(charactersSelector);

  const getCardById = () => {
    dispatch(fetchCardById({ id }));
  };

  const getEpisodesByUrl = () => {
    dispatch(fetchEpisodesByUrl({ episode }));
  };

  const getCharactersByUrl = () => {
    const characters = episodesList[curEpisode].characters;
    dispatch(fetchCharactersByUrl({ characters }));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isCard.current) {
      getCardById();
    }

    isCard.current = false;
    isEpisodes.current = true;
  }, [dispatch, fetchCardById, id]);

  React.useEffect(() => {
    if (!isEpisodes.current) {
      getEpisodesByUrl();
    }

    isEpisodes.current = false;
    isCharacters.current = true;
  }, [dispatch, fetchEpisodesByUrl, episode]);

  React.useEffect(() => {
    if (!isCharacters.current) {
      getCharactersByUrl();
    }

    isCharacters.current = false;
  }, [dispatch, fetchCharactersByUrl, episodesList]);

  return (
    <section className="bottom__wrapper">
      <div className="bottom__inner">
        {status === "fulfilled" ? <CardBig /> : ""}
      </div>
    </section>
  );
};
