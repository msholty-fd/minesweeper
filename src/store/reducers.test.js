import { expect } from 'chai';
import { SET_GAME_SIZE } from '../actions';
import { cells } from './reducers';
import { each, filter } from 'lodash';

describe('cells reducer', () => {
	it('should return the initial state', () => {
		expect(cells(undefined, {})).to.eql([]);
	});

	it('should handle SET_GAME_SIZE', () => {
		const result = cells([], {
			type: SET_GAME_SIZE,
			payload: { height: 2, width: 2, mines: 2 }
		});

		each(result, (cell) => {
			expect(cell).to.have.all.keys(['isFlagged', 'isMine', 'isRevealed']);
			expect(cell).to.contain.keys({isFlagged: false, isRevealed: false});
		});

		expect(filter(result, (cell) => cell.isMine).length).to.eql(2);
	});
});

