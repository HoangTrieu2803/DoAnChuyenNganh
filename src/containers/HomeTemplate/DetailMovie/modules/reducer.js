import * as ActionType from "../modules/constant";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.MOVIE_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null
            return {...state};
        }
        case ActionType.MOVIE_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null
            return {...state};
        }
        case ActionType.MOVIE_FAILED:{
            state.loading = false;
            state.data = null;
            state.error = action.payload   
            return {...state};
        }
        default: return {...state};
    }
};

export default movieReducer;
