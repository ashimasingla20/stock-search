import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchStockDetail,
	fetchStockChart
} from "../store/actions/stockDetail";
import { getStockData, getIsStockDataFetched } from "../store/stockDetail";
import styled from "styled-components";
import NoResultCard from "./NoResultCard";
// function useQuery() {
// 	const { search } = useLocation();

// 	return useMemo(() => new URLSearchParams(search), [search]);
// }
const StockDetails = styled.div`
	margin: 0 auto;
	max-width: 750px;
`;
const Stock = ({ match: { params } }) => {
	console.log(params);
	const { symbol } = params;
	const dispatch = useDispatch();
	// const [stockData, setStockData] = useState([]);
	useEffect(() => {
		dispatch(fetchStockDetail(symbol));
		dispatch(fetchStockChart(symbol, "20min"));
		// move to reducer
		// getData("query", {
		// 	function: "OVERVIEW",
		// 	symbol
		// }).then(data => {
		// 	setStockData(data);
		// });
	}, []);
	const stockData = useSelector(getStockData);
	const isStockDataFetched = useSelector(getIsStockDataFetched);
	console.log(isStockDataFetched);
	if (!isStockDataFetched) return "fetching....";
	console.log(stockData);
	return (
		<>
			{Object.keys(stockData).length ? (
				<StockDetails>
					<h2>
						{stockData.Name}({symbol.toUpperCase()})
					</h2>
					<div className="stock-detail-basic">
						{stockData.Sector} | {stockData.Industry} |{" "}
						{stockData.Country}
					</div>
					<p>{stockData && stockData.Description}</p>
					<table className="stock-detail-table">
						<tbody>
							<tr>
								<td className="colSpan-2" colSpan={2}>
									Key stats
								</td>
							</tr>
							<tr>
								<td>Industry: </td>
								<td>{stockData.Industry}</td>
							</tr>
							<tr>
								<td>PERatio: </td>
								<td>{stockData.PERatio}</td>
							</tr>
							<tr>
								<td>EBITDA: </td>
								<td>{stockData.EBITDA}</td>
							</tr>
							<tr>
								<td>Market Cap: </td>
								<td>{stockData.MarketCapitalization}</td>
							</tr>
							<tr>
								<td>EPS: </td>
								<td>{stockData.EPS}</td>
							</tr>
							<tr>
								<td>dividend: </td>
								<td>{stockData.DividendPerShare}</td>
							</tr>
							<tr>
								<td>Shs Outstand: </td>
								<td>{stockData.SharesOutstanding}</td>
							</tr>
							<tr>
								<td>Shs Float: </td>
								<td>{stockData.SharesFloat}</td>
							</tr>
							<tr>
								<td>52 Wk High: </td>
								<td>{stockData["52WeekHigh"]}</td>
							</tr>
							<tr>
								<td>52 Wk Low: </td>
								<td>{stockData["52WeekLow"]}</td>
							</tr>
						</tbody>
					</table>
				</StockDetails>
			) : (
				<NoResultCard />
			)}
		</>
	);
};
export default Stock;
