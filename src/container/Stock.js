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
import CurrentPrice from "../components/Stock/CurrentPrice";
// import { RefreshInput } from "../components/Stock/RefreshInput";

const StockDetails = styled.div`
	margin: 0 auto;
	max-width: 750px;
`;

const Stock = ({ match: { params } }) => {
	const { symbol } = params;
	const dispatch = useDispatch();
	// used high value so that API is not out of limit
	const MINUTE_MS = 36000000;
	// let localStorageVal = localStorage.getItem("minsVal")
	// 	? localStorage.getItem("minsVal")
	// 	: MINUTE_MS;
	// const [refreshMin, setRefreshMins] = useState(localStorageVal);
	// const onChangeMins = val => {
	// 	const minsVal = val * 1000;
	// 	setRefreshMins(minsVal);
	// 	localStorage.setItem("minsVal", minsVal);
	// };

	const fetchData = () => {
		dispatch(fetchStockDetail(symbol));
		dispatch(fetchStockChart(symbol));
	};

	useEffect(() => {
		fetchData();
		const timerId = setInterval(() => fetchData, MINUTE_MS);
		return () => {
			dispatch(resetDetailsData());
			clearInterval(timerId);
		};
	}, [MINUTE_MS]);
	// setInterval(fetchData, MINUTE_MS);
	const stockData = useSelector(getStockData);
	const isStockDataFetched = useSelector(getIsStockDataFetched);

	if (!isStockDataFetched) return <Loading />;
	if (stockData.Note) {
		return <ErrorCard error={stockData.Note} />;
	}
	return (
		<>
			<StockDetails>
				{Object.keys(stockData).length ? (
					<>
						<StockData stockData={stockData} symbol={symbol} />
						{/* <RefreshInput onChangeMins={onChangeMins} /> */}
					</>
				) : (
					<NoResultCard message="No stock details found" />
				)}
				<Graph />
				<CurrentPrice />
			</StockDetails>
		</>
	);
};
export default Stock;
