import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../redux/store";

import {
  fetchCardById,
  cardSelector,
  CardSliceState,
} from "../redux/slices/cardSlice";
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
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const isCard = React.useRef(false);
  const isEpisodes = React.useRef(false);
  const isCharacters = React.useRef(false);

  const { episode } = useSelector(cardSelector);
  const { curEpisode, episodesList } = useSelector(episodesSelector);
  const { status } = useSelector(charactersSelector);

  const getCardById = () => {
    dispatch(fetchCardById({ id: Number(id) } as CardSliceState));
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
  }, [dispatch, fetchCharactersByUrl, episodesList, curEpisode]);

  return (
    <section className="bottom__wrapper">
      <div className="bottom__inner">
        {status === "fulfilled" ? <CardBig /> : ""}
      </div>
    </section>
  );
};
