import React, { useState } from "react";
import "../App.css";
function Card({ data }) {
	return (
		<div className='card'>
			<div className='content'>
				{data.isFlipped || data.isMatched ? (
					<div className='back'>
						<img src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${data.name}.png`} />
						
					</div>
				) : (
					<div className='front'>?</div>
				)}
			</div>
		</div>
	);
}
export default Card;
