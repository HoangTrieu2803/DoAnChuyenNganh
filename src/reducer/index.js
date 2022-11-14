import {combineReducers} from "redux";
import listMovieReducer from "../containers/HomeTemplate/Dashboard/Movie/modules/reducer";
import movieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer"
const rootReducer = combineReducers ({
    listMovieReducer,
    movieReducer
})

export default rootReducer;
