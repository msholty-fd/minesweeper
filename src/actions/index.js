export const SET_GAME_SIZE = 'SET_GAME_SIZE';
export const REVEAL_CELL = 'REVEAL_CELL';

export function setGameSize(size) {
	return {
		type: SET_GAME_SIZE,
		payload: size
	};
}

export function onCellClicked(data) {
	console.log('onCellClicked', data);
	return {
		type: REVEAL_CELL,
		payload: data
	};
}
