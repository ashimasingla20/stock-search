import { stockDetails } from "../constants";
import getData from "../../utils/fetchAPI";
import hardCodeData from "./hardCodedData";

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
	dispatch({
		type: stockDetails.STOCK_CHART_FETCHING,
		payload: symbol
	});
	getData("query", {
		function: "TIME_SERIES_DAILY_ADJUSTED",
		symbol,
		interval: interval
	}).then(data => {
		const DAILY_DATA = "Time Series (Daily)";
		const OPEN = "1. open";
		let stockChartXValues = [];
		let stockChartYValues = [];
		if (!data || !data[DAILY_DATA]) {
			dispatch({
				type: stockDetails.STOCK_CHART_ERROR,
				error: "Limit exceeded for API"
			});
			return;
		}
		let keys = Object.keys(data[DAILY_DATA]);

		dispatch({
			type: stockDetails.CURRENT_DATA,
			payload: { data: data[DAILY_DATA][keys[0]] }
		});
		for (let key in data[DAILY_DATA]) {
			stockChartXValues.push(key);
			stockChartYValues.push(data[DAILY_DATA][key][OPEN]);
		}
		let dataObj = {
			x: stockChartXValues,
			y: stockChartYValues
		};

		dispatch({
			type: stockDetails.STOCK_CHART_FETCHED,
			payload: { dataObj, symbol }
		});
	});
};
export const resetDetailsData = () => ({
	type: stockDetails.STOCK_DATA_RESET
});
