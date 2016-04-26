import gameSizes from './grid_size_selector_constants';

export default class GridSizeSelectorController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(
			this.mapStateToThis, null
		)(this);

		$scope.$on('$destroy', unsubscribe);

		this.gameSizes = gameSizes;
	}

	mapStateToThis(state) {
		return {
			currentGameSize: state.currentGameSize
		}
	}
}