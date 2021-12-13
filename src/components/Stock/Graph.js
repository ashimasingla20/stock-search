import { useState } from "react";
import { getIsChartDataFetched, getChartData } from "../../store/stockDetail";
import { useSelector } from "react-redux";
import Chart from "react-google-charts";
import Loading from "../common/Loader";
import styled from "styled-components";

const GraphContainer = styled.div`
	width: 100%;
	margin: 30px 0;
`;

const Graph = () => {
	const isChartDetailsFetched = useSelector(getIsChartDataFetched);
	const chartData = useSelector(getChartData);
	if (!isChartDetailsFetched) return <Loading />;
	const xData = chartData["x"];
	const yData = chartData["y"];
	let arr = [["time", "val"]];
	for (let i = 0; i < xData.length; i++) {
		arr.push([xData[i], Number(yData[i])]);
	}

	return (
		<GraphContainer>
			<h3>GRAPH FOR TIME VS 1. OPEN</h3>
			<Chart
				width={"750px"}
				height={"400px"}
				chartType="LineChart"
				loader={<div>Loading Chart</div>}
				data={arr}
				options={{
					hAxis: {
						title: "Time"
					},
					vAxis: {
						title: "1.Open"
					}
				}}
				rootProps={{ "data-testid": "1" }}
			/>
		</GraphContainer>
	);
};
export default Graph;
