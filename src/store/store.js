import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./user.js";
import { ratesReducer } from "./rates.js";
import thunk from "redux-thunk";

export const store = createStore(
	combineReducers({
		users: userReducer,
		rates: ratesReducer
	}),
	applyMiddleware(thunk)
);
