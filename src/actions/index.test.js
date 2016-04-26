import { expect } from 'chai';
import * as actions from '../actions';

describe('actions', () => {
	it('should create an action to set game size', () => {
		const payload = { test: 'a payload' };

		const expectedAction = {
			type: actions.SET_GAME_SIZE,
			payload
		};

		expect(actions.setGameSize(payload)).to.eql(expectedAction);
	});
});
