import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from './reducer';
import thunk from "redux-thunk";

let reducers = combineReducers({
    reducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;