import { FEEDBACK_SAVE_FAIL, FEEDBACK_SAVE_REQUEST, FEEDBACK_SAVE_SUCCESS } from "../constants/feedBackConstants";

function feedBackReducer(state = { feed: [] }, action) {
    switch (action.type) {
        case FEEDBACK_SAVE_REQUEST:
            return { loading: true};
        case FEEDBACK_SAVE_SUCCESS:
            return { loading: false, feed: action.payload };
        case FEEDBACK_SAVE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
export {feedBackReducer};