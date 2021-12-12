import { stockDetails } from "./constants";
const initialState = {
	fetchingData: false,
	fetchingChart: false,
	chartData: [],
	data: [],
	symbol: ""
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
				chartData: action.payload.data
			};
		}
		case stockDetails.STOCK_DATA_RESET:
			return state;
		default:
			return state;
	}
}

// selectors
export const getStockData = state => state.stockDetail.data;
export const getIsStockDataFetched = state => state.stockDetail.fetchingData;
export const getIsChartDataFetched = state => state.stockDetail.fetchingChart;
export const getChartData = state => state.stockDetail.chartData;
