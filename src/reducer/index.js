import {combineReducers} from "redux";
import listMovieReducer from "../containers/HomeTemplate/Dashboard/Movie/modules/reducer";
const rootReducer = combineReducers ({
    listMovieReducer
})
export default rootReducer;