import { rates, searchStocks } from "../constants";
import { getExchangeRates } from "../../api";
import getData from "../../utils/fetchAPI";

// export const changeKeyword = amount => ({
// 	type: rates.AMOUNT_CHANGED,
// 	payload: amount
// });

export const fetchKeyword = keywords => (dispatch, getStore) => {
	const store = getStore();
	// const supportedCurrencies = getSupportedCurrency(store);
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
