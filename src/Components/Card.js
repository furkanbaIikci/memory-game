import React, { useState } from "react";
import "../App.css";
function Card({ data }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isMatched, setIsMatched] = useState(false);

	return (
		<div className='card'>
			{data.isFlipped || data.isMatched ? (
				<div className='back'>
					<img src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${data.name}.png`} />
				</div>
			) : (
				<div className='front'>?</div>
			)}
		</div>
	);
}
export default Card;
