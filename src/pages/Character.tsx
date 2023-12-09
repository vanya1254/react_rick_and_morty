import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../redux/store";

import {
  fetchCardById,
  cardSelector,
  CardSliceState,
} from "../redux/slices/cardSlice";
// import {
//   episodesSelector,
//   fetchEpisodesByUrl,
// } from "../redux/slices/episodesSlice";
// import {
//   fetchCharactersByUrl,
//   charactersSelector,
// } from "../redux/slices/charactersSlice";

import {
  // fetchEpisodesByUrl,
  // fetchCharactersByUrl,
  fetchCharacter,
} from "../redux/slices/character/slice";
import { characterSelector } from "../redux/slices/character/selectors";

import { CardBig } from "../components/CardBig";
import CardBigSkeleton from "../components/Skeletons/CardBigSkeleton";

export const Character = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const isCard = React.useRef(false);
  const isEpisodes = React.useRef(false);
  // const isCharacters = React.useRef(false);

  const { episode } = useSelector(cardSelector);
  // const { curEpisode, episodesList } = useSelector(episodesSelector);
  const { status } = useSelector(characterSelector);

  const getCardById = async () => {
    await dispatch(fetchCardById({ id: Number(id) } as CardSliceState));
  };

  const getCharacter = async () => {
    // await dispatch(fetchEpisodesByUrl({ episode }));
    // const characters = episodesList[curEpisode].characters;
    // await dispatch(fetchCharactersByUrl({ characters }));

    await dispatch(fetchCharacter({ episode }));
  };

  // const getEpisodesByUrl = () => {
  //   dispatch(fetchEpisodesByUrl({ episode }));
  // };

  // const getCharactersByUrl = () => {
  //   const characters = episodesList[curEpisode].characters;
  //   dispatch(fetchCharactersByUrl({ characters }));
  // };

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isCard.current) {
      getCardById();
    }

    isCard.current = true;
    isEpisodes.current = true;
  }, [dispatch, fetchCardById, id]);

  React.useEffect(() => {
    if (!isEpisodes.current) {
      getCharacter();
    }
    isEpisodes.current = false;
  }, [dispatch, fetchCharacter, episode]);

  // React.useEffect(() => {
  //   if (!isEpisodes.current) {
  //     getEpisodesByUrl();
  //   }

  //   isEpisodes.current = false;
  //   isCharacters.current = true;
  // }, [dispatch, fetchEpisodesByUrl, episode]);

  // React.useEffect(() => {
  //   if (!isCharacters.current) {
  //     getCharactersByUrl();
  //   }

  //   isCharacters.current = false;
  // }, [dispatch, fetchCharactersByUrl, episodesList, curEpisode]);

  return (
    <section className="bottom__wrapper">
      <div className="bottom__inner">
        {status === "fulfilled" ? (
          <CardBig />
        ) : status === "pending" ? (
          <CardBigSkeleton />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
