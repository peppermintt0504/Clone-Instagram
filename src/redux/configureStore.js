//import Library
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


//import Modules
import Diary from "./modules/diary";
import User from "./modules/user"
import Image from "./modules/image";
import Comment from "./modules/comment";


const middlewares = [thunk];
const rootReducer = combineReducers({
    image : Image,
    diary : Diary,
    user : User,
    comment: Comment,
});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer,enhancer);

export default store;

