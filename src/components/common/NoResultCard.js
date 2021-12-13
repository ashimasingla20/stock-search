import styled from "styled-components";

const NoResultCardContent = styled.div`
	margin: 0 auto;
	text-align: center;
	padding: 20px;
`;
const NoResultCard = ({ message }) => {
	return (
		<NoResultCardContent>
			{" "}
			{message ? message : "OOPS! No Result Found"}
		</NoResultCardContent>
	);
};

export default NoResultCard;
