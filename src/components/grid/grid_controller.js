import _ from 'lodash';

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
			rows: _.chunk(state.cells, state.currentGameSize.width)
		};
	}
}
