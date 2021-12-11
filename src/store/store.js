import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./user.js";
import { ratesReducer } from "./rates.js";
import { searchReducer } from "./search.js";
import thunk from "redux-thunk";

export const store = createStore(
	combineReducers({
		users: userReducer,
		rates: ratesReducer,
		search: searchReducer
	}),
	applyMiddleware(thunk)
);
