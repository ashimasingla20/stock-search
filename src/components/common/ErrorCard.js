import styled from "styled-components";
import { colors } from "../../styleConstants/index";

const ErrorContainer = styled.div`
	color: ${colors.RED};
	font-size: 14px;
	padding-top: 20px;
	text-align: center;
`;

export const ErrorCard = ({ error }) => {
	return <ErrorContainer>{error}</ErrorContainer>;
};
