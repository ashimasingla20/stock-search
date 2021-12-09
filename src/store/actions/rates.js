import { rates } from "../constants";
import { getExchangeRates } from "../../api";
import { getCurrencyCode, getSupportedCurrency } from "../rates";

export const changeAmount = amount => ({
	type: rates.AMOUNT_CHANGED,
	payload: amount
});

export const changeCurrencyCode = currencyCode => (dispatch, getStore) => {
	const store = getStore();
	const supportedCurrencies = getSupportedCurrency(store);
	dispatch({
		type: rates.CURRENCY_CODE_CHANGED,
		payload: currencyCode
	});
	getExchangeRates(currencyCode, supportedCurrencies).then(rates => {
		dispatch({
			type: "ratesReceived",
			payload: rates
		});
	});
};

export const getInitialData = (dispatch, getStore) => {
	const store = getStore();
	const currencyCode = getCurrencyCode(store);
	dispatch(changeCurrencyCode(currencyCode));
};
