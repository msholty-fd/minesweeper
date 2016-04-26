import { combineReducers } from 'redux';
import gameSizes from '../components/grid_size_selector/grid_size_selector_constants';

function cells(state = [], action) {
	return state;
}

const cellDefault = { isMine: false, isFlagged: true, isRevealed: true };

function cell(state = cellDefault, action) {
	return state;
}

function currentGameSize(state = gameSizes[0], action) {
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
	currentGameSize,
	runningTime,
	gameState
});
