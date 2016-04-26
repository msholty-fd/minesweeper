import { combineReducers } from 'redux';

function dummy(state = '', action) {
	return state;
}

export default combineReducers({
	dummy
});
