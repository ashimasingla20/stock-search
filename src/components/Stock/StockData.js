const StockData = ({ stockData, symbol }) => {
	return (
		<>
			<h2>
				{stockData.Name}({symbol.toUpperCase()})
			</h2>
			<div className="stock-detail-basic">
				{stockData.Sector} | {stockData.Industry} | {stockData.Country}
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
		</>
	);
};

export default StockData;
