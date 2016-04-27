function setGameSize(size) {
	return {
		type: 'SET_GAME_SIZE',
		payload: size
	};
}

function revealCell(grid, index) {
	return {
		type: 'REVEAL_CELL',
		payload: {
			grid,
			index
		}
	};
}

export {
	setGameSize,
	revealCell
};
