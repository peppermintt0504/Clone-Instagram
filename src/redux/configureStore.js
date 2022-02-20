//import Library
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


//import Modules
import User from "./modules/user"
import Image from "./modules/image";
import Comment from "./modules/comment";
import Post from "./modules/post";

const middlewares = [thunk];
const rootReducer = combineReducers({
    image : Image,
    post : Post,
    user : User,
    comment: Comment,
});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer,enhancer);

export default store;

