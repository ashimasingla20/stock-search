import { useState } from "react";
import { getIsChartDataFetched, getChartData } from "../../store/stockDetail";
import { useSelector } from "react-redux";

const Graph = () => {
	// since variables might change later in API hence keeping in const variable instead of directly using it.
	const DAILY_DATA = "Time Series (60min)";
	const OPEN = "1. open";
	const [stockChartXaxis, setStockChartXaxis] = useState([]);
	const [stockChartYaxis, setStockChartYaxis] = useState([]);
	const [obj, setObj] = useState({});

	const isChartDetailsFetched = useSelector(getIsChartDataFetched);
	const chartData = useSelector(getChartData);
	console.log(chartData);
	let stockChartXValues = [];
	let stockChartYValues = [];
	let count = 0;
	for (let key in chartData[DAILY_DATA] && count < 5) {
		stockChartXValues.push(key);
		console.log(stockChartXValues);
		// setStockChartXaxis(...stockChartXaxis, key);
		// console.log(chartData[DAILY_DATA]);
		stockChartYValues.push(chartData[DAILY_DATA][key][OPEN]);
		count++;
	}
	// console.log(stockChartXaxis);
	console.log(stockChartXValues);
	// const updatedVal = [...stockChartXaxis, ...stockChartXValues];
	// setStockChartXaxis(updatedVal);
	// let stockChartXValuesCopy = stockChartXValues.slice(20);
	// setObj({
	// 	stockChartXaxis: stockChartXValuesCopy
	// });
	// console.log(stockChartYValues);
	return <div>Graph</div>;
};
export default Graph;
