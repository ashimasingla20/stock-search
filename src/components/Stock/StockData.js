const params = [
	{
		key: "Industry",
		tag: "Industry"
	},
	{
		key: "PERatio",
		tag: "PERatio"
	},
	{
		key: "EBITDA",
		tag: "EBITDA"
	},
	{
		key: "MarketCapitalization",
		tag: "Market Cap"
	},
	{
		key: "EPS",
		tag: "EPS"
	},
	{
		key: "DividendPerShare",
		tag: "dividend"
	},
	{
		key: "SharesOutstanding",
		tag: "Shs Outstand"
	},
	{
		key: "52WeekHigh",
		tag: "52 Wk High"
	},
	{
		key: "52WeekLow",
		tag: "52 Wk Low"
	}
];
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
					{params.map(ele => {
						return (
							<tr key={`${ele.tag}-${stockData[ele.key]}`}>
								<td>{ele.tag}</td>
								<td>{stockData[ele.key]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default StockData;
