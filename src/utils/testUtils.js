const wait = timeout =>
	new Promise(resolve => setTimeout(() => resolve(true), timeout));

export default wait;
