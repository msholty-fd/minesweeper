export const SET_GAME_SIZE = 'SET_GAME_SIZE';

export function setGameSize(size) {
	return {
		type: SET_GAME_SIZE,
		payload: size
	};
}
