import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import {
  updateData,
  updateError,
  updateLoader,
} from "../store/actions/movie-list";

import { List } from "./data";

function useNetwork() {
  const dispatch = useDispatch();

  function fetch() {
    dispatch(updateLoader(true));
    dispatch(updateError(""));
    dispatch(updateData([]));

    setTimeout(() => {
      axios
        .get("/data.json")
        .then((data) => {
          //console.log(List);
          dispatch(updateData(List));
          // setTimeout(() => {
          //   dispatch(updateData([]));
          // }, 100);
        })
        .catch((e) => {
          dispatch(updateError("Error occu  rred while  fetching data"));
          //  console.log("Error occurred whil e fetching data", e?.response);
        })
        .finally(() => {
          dispatch(updateLoader(false));
        });
    }, 1000);
  }

  return { fetch };
}

export default useNetwork;
