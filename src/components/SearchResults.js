import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSearchData, getKeyword } from "../store/search";
import NoResultCard from "./NoResultCard";
import { Link } from "react-router-dom";
import { colors, fontWeight } from "../styleConstants";

const ListItemContainer = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	border-radius: 8px;
`;
const ListItem = styled.li`
	background: white;
	list-style: none;
	border-bottom: 1px solid ${colors.BLACK};
	box-shadow: 0 0 10px ${colors.LIGHT_BLACK};
	margin: 0;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	text-transform: capitalize;
`;
const Symbols = styled.div`
	font-weight: ${fontWeight.REGULAR};
	color: ${colors.BLACK_PRIMARY};
`;
const Name = styled.div`
	font-weight: ${fontWeight.LARGE};
	color: ${colors.DARK_BLACK};
`;
const StyledLink = styled(Link)`
	text-decoration: none;
`;
const ListCard = ({ ele }) => {
	return (
		<StyledLink to={`/stock/${ele["1. symbol"]}`}>
			<ListItem>
				<Name>{ele["2. name"]}</Name>
				<Symbols>{ele["1. symbol"]}</Symbols>
			</ListItem>
		</StyledLink>
	);
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
