import { stockDetails } from "./constants";
const initialState = {
	fetchingData: false,
	fetchingChart: false,
	chartData: {},
	data: [],
	symbol: "",
	error: "",
	currentData: [],
	fetchingCurrentData: false
};
export function stockDetailReducer(state = initialState, action) {
	switch (action.type) {
		case stockDetails.STOCK_DATA_FETCHING: {
			return {
				...state,
				symbol: action.payload.symbol
			};
		}
		case stockDetails.STOCK_DATA_FETCHED: {
			return {
				...state,
				fetchingData: true,
				data: action.payload.data,
				symbol: action.payload.symbol
			};
		}
		case stockDetails.KEWORD_DATA_RESET:
			return state;

		case stockDetails.STOCK_CHART_FETCHED: {
			return {
				...state,
				fetchingChart: true,
				chartData: action.payload.dataObj
			};
		}
		case stockDetails.STOCK_CHART_ERROR: {
			return {
				...state,
				error: action.error
			};
		}
		case stockDetails.STOCK_DATA_RESET:
			return state;
		case stockDetails.CURRENT_DATA:
			console.log(action.payload.data);
			return {
				...state,
				currentData: action.payload.data,
				fetchingCurrentData: true
			};
		default:
			return state;
	}
}

// selectors
export const getStockData = state => state.stockDetail.data;
export const getIsStockDataFetched = state => state.stockDetail.fetchingData;
export const getIsChartDataFetched = state => state.stockDetail.fetchingChart;
export const getChartData = state => state.stockDetail.chartData;
export const getIsCurrentDataFetched = state =>
	state.stockDetail.fetchingCurrentData;
export const getCurrentData = state => state.stockDetail.currentData;
