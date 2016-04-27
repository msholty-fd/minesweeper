import template from './cell.html';
import CellController from './cell_controller';

export default {
	controller: CellController,
	template,
	controllerAs: 'cell',
	bindings: {
		data: '<',
		clickHandler: '<',
		cellRow: '<',
		cellColumn: '<'
	}
};
