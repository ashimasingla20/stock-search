export const debounce = (fn, d) => {
	let timer;
	return function(...args) {
		let context = this;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, d);
	};
};
