import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import {
	getAmount,
	getCurrencyCode,
	getCurrencyData,
	getSupportedCurrency
} from "../store/rates";
import { changeCurrencyCode } from "../store/actions/rates";

export function ExchangeRate() {
	const amount = useSelector(getAmount);
	const currencyCode = useSelector(getCurrencyCode);
	const currencyData = useSelector(getCurrencyData);
	const supportedCurrencies = useSelector(getSupportedCurrency);
	const dispatch = useDispatch();

	// fetch the exchange rates first time..
	useEffect(() => {
		dispatch(changeCurrencyCode(currencyCode));
	}, []);

	return (
		<>
			<section>
				<h1 className="ExchangeRate-header">
					Exchange Rates
					<CurrencyCodePicker
						supportedCurrencies={supportedCurrencies}
						currencyCode={currencyCode}
					/>
				</h1>
			</section>
			<section>
				<AmountField amount={amount} />
			</section>
			<section>
				<RateTable currencyData={currencyData} />
			</section>
		</>
	);
}
