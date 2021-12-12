import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchStockDetail,
	fetchStockChart,
	resetDetailsData
} from "../store/actions/stockDetail";
import { getStockData, getIsStockDataFetched } from "../store/stockDetail";
import styled from "styled-components";
import NoResultCard from "../components/common/NoResultCard";
import { ErrorCard } from "../components/common/ErrorCard";
import Loading from "../components/common/Loader";
import Graph from "../components/Stock/Graph";
import StockData from "../components/Stock/StockData";

const StockDetails = styled.div`
	margin: 0 auto;
	max-width: 750px;
`;

const Stock = ({ match: { params } }) => {
	const { symbol } = params;
	const dispatch = useDispatch();
	const MINUTE_MS = 360000;
	const fetchData = () => {
		console.log("called");
		dispatch(fetchStockDetail(symbol));
		dispatch(fetchStockChart(symbol, "60min"));
	};
	useEffect(() => {
		fetchData();
		const timerId = setInterval(() => fetchData, MINUTE_MS);
		return () => {
			dispatch(resetDetailsData());
			clearInterval(timerId);
		};
	}, []);
	setInterval(fetchData, MINUTE_MS);
	const stockData = useSelector(getStockData);
	const isStockDataFetched = useSelector(getIsStockDataFetched);

	if (!isStockDataFetched) return <Loading />;
	if (stockData.Note) {
		return <ErrorCard error={stockData.Note} />;
	}
	return (
		<>
			{Object.keys(stockData).length ? (
				<>
					<StockDetails>
						<StockData stockData={stockData} symbol={symbol} />
						<Graph />
					</StockDetails>
				</>
			) : (
				<NoResultCard />
			)}
		</>
	);
};
export default Stock;
