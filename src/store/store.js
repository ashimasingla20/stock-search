import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./search.js";
import { stockDetailReducer } from "./stockDetail.js";

export const store = createStore(
	combineReducers({
		search: searchReducer,
		stockDetail: stockDetailReducer
	}),
	applyMiddleware(thunk)
);
