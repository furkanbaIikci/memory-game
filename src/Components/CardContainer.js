import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { mixCards, rotate, control } from "../Store/cards.js";
import { useEffect, useState } from "react";

function CardContainer() {
	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards.mixedCards);
	const [selectedCards, setSelectedCards] = useState([]);
	const [cardIndex, setCardIndex] = useState(-1);

	const deneme = data => {
		console.log(data);
		/* cards[data].isFlipped = true; */
		dispatch(rotate(data));
		if (cardIndex === -1) {
			setCardIndex(data);
			setSelectedCards([...selectedCards, cards[data]]);
		} else {
			if (cardIndex === data) {
				return;
			} else {
				setSelectedCards([...selectedCards, cards[data]]);
				setCardIndex(-1);
			}
		}
	};

	const startGame = () => {
		console.log("start game");
	};

	useEffect(() => {
		dispatch(mixCards());
	}, []);

	const checkMatch = () => {
		if (selectedCards[0].name === selectedCards[1].name) {
			console.log("match");
		} else {
			console.log("not match");
		}
	};

	useEffect(() => {
		if (selectedCards.length === 2) {
			setTimeout(() => {
				dispatch(control(selectedCards));
				setSelectedCards([]);
			}, 1000);
		}
	}, [selectedCards]);

	return (
		<div>
			Card Container
			<button onClick={startGame} style={{ width: "100px", height: "30px" }}>
				Start game
			</button>
			{cards && (
				<div
					style={{
						width: "50%",
						margin: "0 auto",
						backgroundColor: "#252525",
						gap: "20px 20px",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						padding: "30px 0",
					}}>
					{cards.map((data, index) => {
						return (
							<div
								onClick={() => deneme(index)}
								key={index}
								style={{
									display: "flex",
									minWidth: "15%",
									height: "100px",
									backgroundColor: "whitesmoke",
									pointerEvents: selectedCards.length === 2 ? "none" : "",
								}}>
								<Card data={data} />
							</div>
						);
					})}
				</div>
			)}
			{selectedCards.length}
		</div>
	);
}
export default CardContainer;
