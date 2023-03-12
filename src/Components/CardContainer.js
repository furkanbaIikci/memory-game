import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { mixCards, rotate, control, resetPoints } from "../Store/cards.js";
import { useEffect, useState } from "react";

function CardContainer() {
	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards.mixedCards);
	const points = useSelector(state => state.cards.points);
	const [selectedCards, setSelectedCards] = useState([]);
	const [cardIndex, setCardIndex] = useState(-1);

	const selectCard = data => {
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

	const restartGame = () => {
		dispatch(mixCards());
		dispatch(resetPoints());
	};

	useEffect(() => {
		dispatch(mixCards());
	}, []);

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
			<div style={{ fontSize: "30px", textAlign: "center", marginTop: "30px" }}>Total Points : {points}</div>
			{cards && (
				<div
					style={{
						width: "50%",
						margin: "20px auto",
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
								onClick={data.isMatched == false ? () => selectCard(index) : null}
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

					{cards.filter(data => data.isMatched === true).length === cards.length && (
						<div
							style={{
								width: "100%",
								height: "100%",
								backgroundColor: "rgba(0,0,0,0.5)",
								position: "absolute",
								top: "0",
								left: "0",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
							}}>
							<div style={{ fontSize: "30px", color: "white" }}>Game Over, Total Points : {points}</div>

							<button onClick={restartGame} style={{ fontSize: "20px", padding: "10px 20px", marginTop: "20px" }}>
								Restart Game
							</button>
						</div>
					)}
				</div>
			)}
			{selectedCards.length}
		</div>
	);
}
export default CardContainer;
