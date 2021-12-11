import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSearchData, getKeyword } from "../store/search";
import NoResultCard from "./NoResultCard";

const ListItemContainer = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	border-radius: 8px;
`;
const ListItem = styled.li`
	background: white;
	list-style: none;
	border-bottom: 1px solid #d8d8d8;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
	margin: 0;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	text-transform: capitalize;
`;

const ListCard = ({ ele }) => {
	return <ListItem>{ele["2. name"]}</ListItem>;
};
const SearchResults = () => {
	const data = useSelector(getSearchData);
	const keyword = useSelector(getKeyword);
	if (!keyword) return "";
	return (
		<>
			{data && data.length ? (
				<ListItemContainer>
					{data.map(ele => (
						<ListCard ele={ele} key={`card-${ele["1. symbol"]}`} />
					))}
				</ListItemContainer>
			) : (
				<NoResultCard />
			)}
		</>
	);
};

export default SearchResults;
