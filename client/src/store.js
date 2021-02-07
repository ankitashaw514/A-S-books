import * as Cookie from 'js-cookie';
import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import {bookAddReducer, bookDetailsReducer, bookListReducer} from './reducers/bookReducers'
import { favoriteReducer, getFavoriteReducer } from './reducers/favoriteReducers';
import { feedBackReducer } from './reducers/feedBackReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
const userInfo= Cookie.getJSON("userInfo") || null;

const initialState={userLogin: {userInfo}};
const reducer=combineReducers({
    bookList:bookListReducer,
    bookDetails:bookDetailsReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    bookAdd:bookAddReducer,
    userFeedback:feedBackReducer,
    userfavorite:favoriteReducer,
    favoriteDetails:getFavoriteReducer
})
const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;