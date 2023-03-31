require('./models/connection')

const Play = require('./models/plays')

/////////////////////////////////////////////


//function playUno(cards, lastPlay) {
//    let lastCard = lastPlay;
//    let cardsToPlay = [];

 	
//    if (cards.length > 0){
//    for (let i = 0; i < cards.length; i++) {
//        if (cards[i].color === lastCard.color || cards[i].number === lastCard.number) {
//            cardsToPlay.push(cards[i]);
//			cards.slice(i, 1)
//        }
//    }

//    lastCard = cardsToPlay[0];
//	const playedCard = new Play({
//		color: lastCard.color,
//		number: lastCard.number,
//	})
//	playedCard.save()


//    return lastCard;
//} else {
//	console.log('Game Over')
//}
//}

function playUno(cards, lastPlay) {
    let lastCard = lastPlay;

    while (cards.length > 0) {
        let cardsToPlay = [];

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].color === lastCard.color || cards[i].number === lastCard.number) {
                cardsToPlay.push(cards[i]);
                cards.splice(i, 1);
                break;
            }
        }

        if (cardsToPlay.length > 0) {
            lastCard = cardsToPlay[0];
            const playedCard = new Play({
                color: lastCard.color,
                number: lastCard.number,
            });
            playedCard.save();
        } else {
            console.log('No valid cards to play');
            break;
        }
    }

    console.log('Game Over');
}



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
