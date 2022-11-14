import * as ActionType from "../modules/constant.js";
import api from "../../../../util/api";

export const actFetchDetail = (id) => {
  return (dispatch) => {
    dispatch(actMovieRequest());
    api
      .get(`https://movie-api-beryl.vercel.app/v1/movie/${id}`)
      .then((result) => { dispatch(actMovieSuccess(result.data)); })
      .catch((error) => { dispatch(actMovieFailed(error)); });
  };
};

export const actMovieRequest = () => {
  return {
    type: ActionType.MOVIE_REQUEST,
  };
};

export const actMovieSuccess = (data) => {
  return {
    type: ActionType.MOVIE_SUCCESS,
    payload: data,
  };
};
export const actMovieFailed = (error) => {
  return {
    type: ActionType.MOVIE_FAILED,
    payload: error,
  };
};
