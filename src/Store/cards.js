import { createSlice } from "@reduxjs/toolkit";
/* 
    Cards = [
        {
            name: '',
            id: '',
            isFlipped: false,
            isMatched: false,
            imgSrc: ''

        }
    ]
*/

const cardsSlice = createSlice({
	name: "cards",
	initialState: {
		cards: [
			{
				name: "angular2",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "vue",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "react",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "grunt",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "phantomjs",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "ember",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "babel",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "ionic",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "gulp",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "meteor",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "yeoman",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "yarn",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "nodejs",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "bower",
				isFlipped: false,
				isMatched: false,
			},
			{
				name: "browserify",
				isFlipped: false,
				isMatched: false,
			},
		],
		mixedCards: [],
	},
	reducers: {
		mixCards: state => {
			let arr = state.cards.concat(state.cards);
			let mixedArr = arr.sort(() => Math.random() - 0.5);
			state.mixedCards = mixedArr;
			console.log(state.mixedCards);
		},
		rotate: (state, action) => {
			console.log(state.mixedCards[action.payload].isFlipped);
			state.mixedCards[action.payload].isFlipped = true;
		},
		control: async (state, action) => {
			if (action.payload[0].name === action.payload[1].name) {
				console.log("match");
				state.mixedCards.forEach(card => {
					if (card.name === action.payload[0].name) {
						card.isMatched = true;
					}
				});
			} else {
				console.log("not match");
				state.mixedCards.forEach(card => {
					if (card.name === action.payload[0].name || card.name === action.payload[1].name) {
						card.isFlipped = false;
					}
				});
			}
		},
	},
});

export const { mixCards, rotate, control } = cardsSlice.actions;
export const selectCards = state => state.cards.cards;
export default cardsSlice.reducer;
