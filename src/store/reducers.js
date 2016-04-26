import { combineReducers } from 'redux';

function cells(state = [], action) {
	return state;
}

const cellDefault = { isMine: false, isFlagged: true, isRevealed: true };

function cell(state = cellDefault, action) {
	return state;
}

const gameSizes = [{
	width: 8,
	height: 8,
	mines: 10
}, {
	width: 16,
	height: 16,
	mines: 40
}, {
	width: 30,
	height: 16,
	mines: 99
}];

function gameSize(state = gameSizes[0], action) {
	return state;
}

function runningTime(state = 0, action) {
	return state;
}

const GAME_STATE = { Won: 'Won', Lost: 'Lost', Active: 'Active', Initial: 'Initial' };

function gameState(state = GAME_STATE.Initial, action) {
	return state;
}

export default combineReducers({
	cells,
	gameSize,
	runningTime,
	gameState
});
