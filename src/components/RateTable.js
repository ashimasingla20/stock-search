import { useSelector } from "react-redux";
// import { getAmount } from "../reducers/RateReducer";
import { getName } from "../store/user";
import { getAmount } from "../store/rates";
export function RateTable({ currencyData }) {
	const amount = useSelector(getAmount);
	const name = useSelector(getName);
	return (
		<table className="ExchangeRate-table">
			<tbody>
				{Object.entries(currencyData).map(([code, rate]) => {
					// NOTE: normally avoid floating point math in JS
					const exchangeAmount = amount * rate || 0.0;
					return (
						<tr key={code}>
							<td>{code}</td>
							<td>
								{exchangeAmount.toLocaleString("en", {
									style: "currency",
									currency: code
								})}
							</td>
						</tr>
					);
				})}
				<tr>
					<td colSpan={2}>Prepared for {name}</td>
				</tr>
			</tbody>
		</table>
	);
}
