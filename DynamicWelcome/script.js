const greet = () => {
	let date = new Date();
	let hr = date.getHours();
	let out = '';
	if (hr == 0) {
		hr = 24;
	}
	if (hr >= 22 && hr > 6) {
		out = 'Hello Good Night';
	} else if (hr >= 6 && hr < 12) {
		out = 'Hello Good Morning';
	} else if (hr >= 12 && hr < 17) {
		out = 'Hello Good Afternoon';
	} else if (hr >= 17 && hr < 22) {
		out = 'Hello Good Evening';
	}
	document.querySelector('.output').innerHTML = out;
};
