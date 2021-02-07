import {FAVORITE_ADD_FAIL, FAVORITE_ADD_REQUEST, FAVORITE_ADD_SUCCESS, FAVORITE_DETAILS_FAIL, FAVORITE_DETAILS_REQUEST, FAVORITE_DETAILS_SUCCESS } from "../constants/bookConstants";

function favoriteReducer(state = { favorite:{}}, action) {
    switch (action.type) {
        case FAVORITE_ADD_REQUEST:
            return { loading: true};
        case FAVORITE_ADD_SUCCESS:
            return { loading: false, favorite: action.payload };
        case FAVORITE_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function getFavoriteReducer(state = { favorites: [] }, action) {
    switch (action.type) {
        case FAVORITE_DETAILS_REQUEST:
            return { loading: true};
        case FAVORITE_DETAILS_SUCCESS:
            return { loading: false, favorites: action.payload };
        case FAVORITE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
export{favoriteReducer,getFavoriteReducer};