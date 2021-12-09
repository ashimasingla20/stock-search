import { rates } from "./constants";
const initialState = {
	amount: "12.00",
	currencyCode: "USD",
	currencyData: {
		USD: 1.0
	},
	supportedSymbols: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"]
};
export function ratesReducer(state = initialState, action) {
	switch (action.type) {
		case rates.AMOUNT_CHANGED:
			return { ...state, amount: action.payload };
		case rates.CURRENCY_CODE_CHANGED:
			return { ...state, currencyCode: action.payload };
		case rates.RATES_RECEIVED:
			return { ...state, currencyData: action.payload };
		default:
			return state;
	}
}

// selectors
export const getAmount = state => state.rates.amount;
export const getCurrencyCode = state => state.rates.currencyCode;
export const getCurrencyData = state => state.rates.currencyData;
export const getSupportedCurrency = state => state.rates.supportedSymbols;
