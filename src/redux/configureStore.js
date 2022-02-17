//import Library
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


//import Modules
import Diary from "./modules/diary";


const middlewares = [thunk];
const rootReducer = combineReducers({
    diary : Diary,
});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer,enhancer);

export default store;

