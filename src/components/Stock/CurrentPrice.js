import { useSelector } from "react-redux";
import { getIsChartDataFetched, getCurrentData } from "../../store/stockDetail";
import Loading from "../common/Loader";
import styled from "styled-components";

const CurrentPriceContainer = styled.div`
	margin-bottom: 70px;
`;

const CurrentPrice = ({}) => {
	const isFetched = useSelector(getIsChartDataFetched);
	const currentData = useSelector(getCurrentData);
	console.log(currentData);
	if (!isFetched) return <Loading />;
	const xValues = Object.keys(currentData);
	const yValues = Object.values(currentData);
	return (
		<>
			<CurrentPriceContainer>
				<h2>CurrentPrice</h2>
				<table>
					<thead>
						<tr>{getTableRows(xValues)}</tr>
					</thead>
					<tbody>
						<tr>{getTableColumns(yValues)}</tr>
					</tbody>
				</table>
			</CurrentPriceContainer>
		</>
	);
};
const getTableRows = xValues => {
	return xValues.map(element => {
		return <th>{element}</th>;
	});
};

const getTableColumns = yValues => {
	return yValues.map(element => {
		return <td>{element}</td>;
	});
};
export default CurrentPrice;
