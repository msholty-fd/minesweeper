import _ from 'lodash';
import { combineReducers } from 'redux';
import gameSizes from '../components/grid_size_selector/grid_size_selector_constants';

function cells(state = [], action) {
	switch (action.type) {
		case 'SET_GAME_SIZE':
			return generateGridFromSize(action.payload);
	}
	return state;
}

const cellDefault = { isMine: false, isFlagged: false, isRevealed: false };

function cell(state = cellDefault, action) {
	return state;
}

function currentGameSize(state = gameSizes[0], action) {
	switch (action.type) {
		case 'SET_GAME_SIZE':
			return action.payload;
	}

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

function generateGridFromSize(gameSize) {
	let gridArray = _.fill(_.range(0, (gameSize.width * gameSize.height)), cell());

	return gridArray;
}
