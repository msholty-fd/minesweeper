function setGameSize(size) {
	return {
		type: 'SET_GAME_SIZE',
		payload: size
	};
}

function revealCell(index) {
	return {
		type: 'REVEAL_CELL',
		payload: index
	};
}

export {
	setGameSize,
	revealCell
};
