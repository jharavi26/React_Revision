import { createStore, combineReducers } from "redux";

import movieListReducer from "./reducers/movie-list";
import cartReducer from "./reducers/cart";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

const enhancers = composeWithDevTools({ trace: true, limit: 10 });

export const store = createStore(
  combineReducers({
    movies: movieListReducer,
    cart: cartReducer,
  }),
  enhancers(applyMiddleware(thunk))
);

function loggerMiddleware(wholeStore) {
  const prevDispatch = wholeStore.dispatch;

  return function (action) {
    console.log(action);
    console.log("before", wholeStore.getState());
    const value = prevDispatch(action);
    console.log("after", wholeStore.getState());
    return value;
  };
}

function thunkMiddleWare(wholeStore) {
  const prevDispatch = wholeStore.dispatch;

  // dispatch(action)
  return function (action) {
    if (typeof action === "function") {
      return action(store.dispatch);
    } else {
      return prevDispatch(action);
    }
  };
}

function promiseMiddleWare(wholeStore) {
  const prevDispatch = wholeStore.dispatch;

  return function (action) {
    if (typeof action.then === "function") {
      return action.then((data) => {
        console.log({ data });
        const action = data.action;

        return prevDispatch({
          type: action.type,
          value: [
            {
              title: "The Grudge",
              year: 2020,
              cast: [
                "Andrea Riseborough",
                "Demián Bichir",
                "John Cho",
                "Betty Gilpin",
                "Lin Shaye",
                "Jacki Weaver",
              ],
              genres: ["Horror", "Supernatural"],
              href: "The_Grudge_(2020_film)",
              extract:
                "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
              thumbnail_width: 220,
              thumbnail_height: 326,
            },
          ],
        });
      });
    } else {
      return prevDispatch(action);
    }
  };
}

// store.dispatch = loggerMiddleware(store);
// // store.dispatch = promiseMiddleWare(store);

// store.dispatch = thunkMiddleWare(store);

/*

1. reducer function

2. object, to preload application with some data
use react-redux=persist

3. enhancers
*/
