import * as actions from '../../actions';

export default class GameController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(
			this.mapStateToThis, actions
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
