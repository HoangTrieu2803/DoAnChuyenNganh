import * as ActionType from'./constant';
import api from '../../../../../util/api';
export const actFetchListMovie = ()=>{
    return (dispatch)=>{
        //gui request
        dispatch(actListMovieRequest());
        api
        .get("https://movie-api-beryl.vercel.app/v1/movie")
        .then((result)=>{
            dispatch(actListMovieSuccess(result.data));
        })
        .catch((error)=>{
            dispatch(actListMovieFailed(error));
        })
    }
}
export const actListMovieRequest = ()=>{
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    };
};

export const actListMovieSuccess = (data) =>{
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

export const actListMovieFailed = (error) =>{
    return {
        type: ActionType.LIST_MOVIE_FAILED,
        payload:error
    };
};