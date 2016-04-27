import template from './game_status.html';
import GameStatusController from './game_status_controller';

export default {
	controller: GameStatusController,
	template,
	controllerAs: 'gameStatus',
	bindings: {
		status: '<'
	}
};
