import _ from 'lodash';
import { combineReducers } from 'redux';
import gameSizes from '../components/grid_size_selector/grid_size_selector_constants';

function cells(state = [], action) {
	switch (action.type) {
		case 'SET_GAME_SIZE':
			return generateGridFromSize(action.payload);
		case 'REVEAL_CELL':
			return revealCell(state, action.payload);
	}
	return state;
}

const cellDefault = { isMine: false, isFlagged: false, isRevealed: false };

function cell(state = cellDefault, action) {
	return _.assign({}, state);
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
	const gridArray = _.map(_.range(0, (gameSize.width * gameSize.height)), () => cell());

	_.each(_.sampleSize(gridArray, gameSize.mines), function(cell) {
		cell.isMine = true;
	});

	return gridArray;
}

function revealCell(cells, index) {
	cells[index].isRevealed = true;
	return cells;
}
