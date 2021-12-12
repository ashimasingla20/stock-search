import { stockDetails } from "../constants";
import getData from "../../utils/fetchAPI";

export const fetchStockDetail = symbol => (dispatch, getStore) => {
	const store = getStore();
	dispatch({
		type: stockDetails.STOCK_DATA_FETCHING,
		payload: symbol
	});

	getData("query", {
		function: "OVERVIEW",
		symbol
	}).then(data => {
		dispatch({
			type: stockDetails.STOCK_DATA_FETCHED,
			payload: { data, symbol }
		});
	});
};

export const fetchStockChart = (symbol, interval) => (dispatch, getStore) => {
	const store = getStore();
	dispatch({
		type: stockDetails.STOCK_CHART_FETCHING,
		payload: symbol
	});

	getData("query", {
		function: "TIME_SERIES_INTRADAY",
		symbol,
		interval: interval
	}).then(data => {
		dispatch({
			type: stockDetails.STOCK_CHART_FETCHED,
			payload: { data, symbol }
		});
	});
};
