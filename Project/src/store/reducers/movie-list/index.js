import { act } from "react";

const initialState = {
  movies: [],
};

function transformMovies() {}

function movieListReducer(state = initialState, action) {
  const { value } = action;
  // console.log("Movie Reducer", action.type);
  switch (action?.type) {
    case "UPDATE_LOADER": {
      console.log(action);
      const oldState = { ...state };
      oldState.isLoading = action.value;
      return oldState;
    }

    case "UPDATE_ERROR": {
      const oldState = { ...state };
      oldState.error = action.value;
      return oldState;
    }

    case "UPDATE_DATA": {
      console.log(action);
      const oldState = { ...state };
      oldState.movies = action.value;
      return oldState;
    }

    case "REMOVE_CART": {
      //console.log(action);
      const oldState = { ...state };
      // console.log(action.value, oldState);
      oldState.movies = oldState.movies.map((d) => {
        if (d.href === action.value) {
          d.discount = "100%";
        }

        return d;
      });
      return oldState;
    }

    default:
      return state;
  }
}

export default movieListReducer;
