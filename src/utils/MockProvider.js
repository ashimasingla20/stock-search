import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { store } from "../store/store";

const MockReduxProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

MockReduxProvider.defaultProps = {};

MockReduxProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default MockReduxProvider;
