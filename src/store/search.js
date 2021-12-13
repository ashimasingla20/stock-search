import { searchStocks } from "./constants";
const initialState = {
	fetchingData: false,
	keywords: "",
	data: []
};
export function searchReducer(state = initialState, action) {
	switch (action.type) {
		case searchStocks.KEYWORD_DATA_FETCHING: {
			return {
				...state,
				fetchingData: true,
				keywords: action.payload.keywords
			};
		}
		case searchStocks.KEYWORD_DATA_FETCHED: {
			return {
				...state,
				data: action.payload.data.bestMatches,
				keywords: action.payload.keywords
			};
		}
		case searchStocks.KEWORD_DATA_RESET:
			return state;
		default:
			return state;
	}
}

// selectors
export const getSearchData = state => state.search.data;
export const getKeyword = state => state.search.keywords;
export const getIsSearchDataFetched = state => state.search.fetchingData;
