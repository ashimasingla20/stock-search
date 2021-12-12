import styled from "styled-components";
import { colors } from "@material-ui/core";

const ErrorContainer = styled.div`
	color: ${colors.red};
	font-size: 14px;
	padding-top: 20px;
	text-align: center;
`;

export const ErrorCard = ({ error }) => {
	return <ErrorContainer>{error}</ErrorContainer>;
};
