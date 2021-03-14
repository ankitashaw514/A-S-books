import { MYBOOK_DELETE_FAIL, MYBOOK_DELETE_REQUEST, MYBOOK_DELETE_SUCCESS, MYBOOK_DETAILS_FAIL, MYBOOK_DETAILS_REQUEST, MYBOOK_DETAILS_SUCCESS, MYBOOK_UPDATE_FAIL, MYBOOK_UPDATE_REQUEST, MYBOOK_UPDATE_SUCCESS } from "../constants/bookConstants";

function getMyBookReducer(state = { mybooks: [] }, action) {
    switch (action.type) {
        case MYBOOK_DETAILS_REQUEST:
            return { loading: true};
        case MYBOOK_DETAILS_SUCCESS:
            return { loading: false, mybooks: action.payload };
        case MYBOOK_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
function deleteMyBookReducer(state = { mybook: {} }, action) {
    switch (action.type) {
        case MYBOOK_DELETE_REQUEST:
            return { loading1: true};
        case MYBOOK_DELETE_SUCCESS:
            return { loading1: false, mybook: action.payload };
        case MYBOOK_DELETE_FAIL:
            return { loading1: false, error1: action.payload };
        default:
            return state;
    }
}
function editMyBookReducer(state = { editbook: {} }, action) {
    switch (action.type) {
        case MYBOOK_UPDATE_REQUEST:
            return { loading: true};
        case MYBOOK_UPDATE_SUCCESS:
            return { loading: false, editbook: action.payload };
        case MYBOOK_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
export{getMyBookReducer,deleteMyBookReducer,editMyBookReducer};