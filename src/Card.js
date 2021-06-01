import React from "react";
import ManaSymbol from "./ManaSymbol";

const Card = ({
	name, 
	type, 
	manaCost,
	power,
	toughness,
	text,
	artist, 
	imageUrl,
}) => {
	const getManaCostUI = function() {
		if (!manaCost) return null;
		const symbols = manaCost.match(/[^{\}]/g)
		return symbols.map(symbol => <ManaSymbol symbol={symbol.toLowerCase()} />)
	}

	const getPowerToughness = function () {
		if (power && toughness) {
			return `${power} / ${toughness}`
		} 
		return power || toughness;
	}

  	return (
		<div className="card-frame">
			<div className="card-preview">
				<img src={imageUrl} alt="Magic Card" />
			</div>
			<div className="card-info">
				<div className="card-info-field">
					<h3>{name}</h3>
					<span>{getManaCostUI()}</span>
				</div>
				<div className="card-info-field">
					<span>{type}</span>
				</div>
				<div className="card-info-field card-info-widen">
					<span>{text}</span><br />
					<br />
					<span>{getPowerToughness()}</span>
				</div>
				<div className="card-info-field">
					<span>Illustrated by: {artist}</span>
				</div>
			</div>
		</div>
  	);
};

export default React.memo(Card);
