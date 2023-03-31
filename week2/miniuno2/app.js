function playUno(cards, lastPlay) {}

const cardsExample = [
	{ color: 'green', number: 6 },
	{ color: 'red', number: 6 },
	{ color: 'red', number: 9 },
	{ color: 'green', number: 9 },
	{ color: 'yellow', number: 9 },
];
const lastPlayExample = { color: 'blue', number: 6 };

playUno(cardsExample, lastPlayExample);

module.exports = playUno; // Do not edit/remove this line
