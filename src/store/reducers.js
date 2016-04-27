import _ from 'lodash';
import { combineReducers } from 'redux';
import { SET_GAME_SIZE, REVEAL_CELL } from '../actions';
import gameSizes from '../components/grid_size_selector/grid_size_selector_constants';

export function cells(state = [], action) {
	switch (action.type) {
		case SET_GAME_SIZE:
			return generateGridFromSize(action.payload);

		case REVEAL_CELL:
			return state.map((c) =>  {
				if (action.payload === c) {
					return cell(c, action);
				}
				return c;
			});
	}
	return state;
}

const cellDefault = { isMine: false, isFlagged: false, isRevealed: false };

function cell(state = cellDefault, action) {
	console.log('state', state);
	switch (action.type) {
		case REVEAL_CELL:
			return { ...state, isRevealed: true };
			break;
	}
	return _.assign({}, state);
}

function currentGameSize(state = gameSizes[0], action) {
	switch (action.type) {
		case SET_GAME_SIZE:
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
	const rowSize = gameSize.width;
	const gridArray = _.map(_.range(0, (gameSize.width * gameSize.height)), (index) => cell({...cellDefault, index}, {action: {type: null}}));

	_.each(_.sampleSize(gridArray, gameSize.mines), function(cell) {
		cell.isMine = true;
	});

	_.each(gridArray, (cell) => {
		if (!cell.isMine) {
			const isLeft = cell.index % rowSize === 0;
			const isTop = cell.index < rowSize;
			const isBottom = cell.index >= (gameSize.width * (gameSize.height - 1));
			const isRight = cell.index === gridArray.length || cell.index % rowSize === (rowSize - 1);

			const results = [];

			results.push((isLeft) ? false : gridArray[cell.index - 1].isMine);
			results.push((isRight) ? false : gridArray[cell.index + 1].isMine);
			results.push((isLeft || isTop) ? false :  gridArray[cell.index - rowSize - 1].isMine);
			results.push((isTop) ? false : gridArray[cell.index - rowSize].isMine);
			results.push((isRight || isTop) ? false : gridArray[cell.index - rowSize + 1].isMine);
			results.push((isLeft || isBottom) ? false : gridArray[cell.index + rowSize - 1].isMine);
			results.push((isBottom) ? false : gridArray[cell.index + rowSize].isMine);
			results.push((isRight || isBottom) ? false : gridArray[cell.index + rowSize + 1].isMine);

			cell.mineCount = _.filter(results, (result) => result).length;
		}
	});

	return gridArray;
}
