import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../redux/store";

import { fetchCardById } from "../redux/slices/card/slice";
import { CardSliceState } from "../redux/slices/card/types";
import { cardSelector } from "../redux/slices/card/selectors";

import { fetchCharacter } from "../redux/slices/character/slice";
import { characterSelector } from "../redux/slices/character/selectors";

import { CardBig } from "../components/CardBig";
import CardBigSkeleton from "../components/Skeletons/CardBigSkeleton";

export const Character = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const isCard = React.useRef(false);
  const isEpisodes = React.useRef(false);

  const { episode } = useSelector(cardSelector);
  const { status } = useSelector(characterSelector);

  const getCardById = async () => {
    await dispatch(fetchCardById({ id: Number(id) } as CardSliceState));
  };

  const getCharacter = async () => {
    await dispatch(fetchCharacter({ episode }));
  };

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
