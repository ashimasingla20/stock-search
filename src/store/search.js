import { searchStocks } from "./constants";
const initialState = {
	data: []
};
export function searchReducer(state = initialState, action) {
	switch (action.type) {
		case searchStocks.KEYWORD_DATA_FETCHED: {
			return { ...state, data: action.payload.bestMatches };
		}

		// case rates.CURRENCY_CODE_CHANGED:
		// 	return { ...state, currencyCode: action.payload };
		// case rates.RATES_RECEIVED:
		// 	return { ...state, currencyData: action.payload };
		default:
			return state;
	}
}

// selectors
export const getSearchData = state => state.search.data;
