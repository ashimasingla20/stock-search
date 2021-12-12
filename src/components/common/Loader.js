import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

const SecWrapper = styled.section`
	position: relative;
	margin: 0 auto;
	margin-top: 135px;
	padding-bottom: 32px;
	width: 1376px;
`;

const CardContianer = styled.div`
	width: 100%;
	height: 228px;
	margin-right: 24px;
	cursor: pointer;
	margin-bottom: 30px;
`;

const CardWrapper = styled.div`
	/* width: 440px; */
	height: inherit;
	padding: 24px;
	border-radius: 8px;
	margin-left: 40px;
	position: relative;
	padding-left: 124px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const CardThumbnail = styled(Skeleton)`
	width: 140px;
	height: 180px;
	border-radius: 8px;
	position: absolute;
	left: -40px;
	background-size: cover;
	object-fit: cover;
`;

const TopContent = styled.div`
	display: flex;
	flex-direction: column;
`;

const Card = () => {
	return (
		<CardContianer>
			<CardWrapper>
				<TopContent>
					<Skeleton variant="text" />
					<Skeleton variant="text" />
					<Skeleton variant="text" />
				</TopContent>
				<Skeleton variant="text" width="60%" />
			</CardWrapper>
		</CardContianer>
	);
};

const Loading = () => {
	return (
		<SecWrapper>
			{[1, 2].map(user => (
				<Card key={user} />
			))}
		</SecWrapper>
	);
};

export default Loading;
