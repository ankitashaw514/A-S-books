import { BOOK_ADD_FAIL, BOOK_ADD_REQUEST, BOOK_ADD_SUCCESS, BOOK_DETAILS_FAIL, 
        BOOK_DETAILS_REQUEST, 
        BOOK_DETAILS_SUCCESS, 
        BOOK_LIST_FAIL,
         BOOK_LIST_REQUEST,
        BOOK_LIST_SUCCESS } from "../constants/bookConstants";

function bookListReducer(state = { books: [] }, action) {
    switch (action.type) {
        case BOOK_LIST_REQUEST:
            return { loading: true, books: [] };
        case BOOK_LIST_SUCCESS:
            return { loading: false, books: action.payload };
        case BOOK_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


function bookDetailsReducer(state = { bookDetail:{} }, action) {
    switch (action.type) {
        case BOOK_DETAILS_REQUEST:
            return { loading: true };
        case BOOK_DETAILS_SUCCESS:
            return { loading: false, bookDetail: action.payload };
        case BOOK_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function bookAddReducer(state = { book: {} }, action) {
    switch (action.type) {
        case BOOK_ADD_REQUEST:
            return { loading: true};
        case BOOK_ADD_SUCCESS:
            return { loading: false,success:true, book: action.payload };
        case BOOK_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
export {bookListReducer,bookDetailsReducer,bookAddReducer};