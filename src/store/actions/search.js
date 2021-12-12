import { searchStocks } from "../constants";
import getData from "../../utils/fetchAPI";

export const resetData = () => ({
	type: searchStocks.KEWORD_DATA_RESET
});

export const fetchKeyword = keywords => (dispatch, getStore) => {
	const store = getStore();
	dispatch({
		type: searchStocks.KEYWORD_DATA_FETCHING,
		payload: keywords
	});
	if (keywords.length == 0) {
		dispatch({
			type: searchStocks.KEWORD_DATA_RESET
		});
	}

	getData("query", {
		function: "SYMBOL_SEARCH",
		keywords
	}).then(data => {
		dispatch({
			type: searchStocks.KEYWORD_DATA_FETCHED,
			payload: { data, keywords }
		});
	});
};
