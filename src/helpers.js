function getRandomNumber(max) {
	return (Math.random() * (max - 1)).toFixed();
}

function getRandomCardsArray(initialArray, max) {
	const arr = [];
	let obj = {};
	for (let i = 0; arr.length < max; i++) {
		const index = getRandomNumber(max);
		if (obj[index]) {
			continue;
		}
		if (index >= max / 2) {
			obj[index] = 1;
			arr.push(initialArray[index - max / 2]);
		} else {
			obj[index] = 1;
			arr.push(initialArray[index]);
		}
	}
	obj = null;
	return arr;
}

export { getRandomCardsArray };
