import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { setCardProp } from "../redux/slices/cardSlice";

import { CardBig } from "../components/CardBig";

export const Character = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { id } = location.state;

  React.useEffect(() => {
    try {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          dispatch(setCardProp(res.data));
        })
        .catch(function (error) {
          //TODO whatif err
          if (error.response) {
            //not found
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
  }, [dispatch]);

  return (
    <section className="bottom__wrapper">
      <div className="bottom__inner">
        <CardBig />
      </div>
    </section>
  );
};
