import { getCurrentRows } from '../../selectors';

export default class GridController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(
			this.mapStateToThis, { }
		)(this);

		$scope.$on('$destroy', unsubscribe);
	}

	mapStateToThis(state) {
		return {
			currentGameSize: state.currentGameSize,
			cells: state.cells,
			rows: getCurrentRows(state)
		};
	}
}
